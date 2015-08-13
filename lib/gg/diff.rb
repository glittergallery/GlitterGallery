module Gg
  class Diff

    attr_reader :rugged, :path

    def initialize(rugged, path)
      @rugged  = rugged
      @path  = path
    end
    # Return an array of log commits, given an SHA hash and a hash of
    # options.
    def build_log(sha)
      bloblist = []
      # Instantiate a Walker and add the SHA hash
      walker = Rugged::Walker.new(rugged)
      commit_head = rugged.lookup sha
      walker.push(commit_head)
      walker.sorting(Rugged::SORT_DATE)
      walker.each do |c|
        if commit_touches_path?(c, walker)
          tree = rugged.lookup c.tree_id
          blob = tree.path path
          blobdata = rugged.read(blob[:oid]).data
          image = {
                  name: blob[:name],
                  data: blobdata
                }
          bloblist << [image , c]
        end
      end

      walker.reset

      bloblist
    end

    private
    # Returns true if +commit+ introduced changes to +path+, using commit
    # trees to make that determination.  Uses the history simplification
    # rules that `git log` uses by default, where a commit is omitted if it
    # is TREESAME to any parent.
    def commit_touches_path?(commit, walker)
      entry = tree_entry(commit)

      num_treesame = 0
      if commit.parents.empty?
        # This is the root commit, return true if it has +path+ in its tree
        return !entry.nil?
      end

      commit.parents.each do |parent|
        parent_entry = tree_entry(parent)

        # Only follow the first TREESAME parent for merge commits
        if num_treesame > 0
          walker.hide(parent)
          next
        end

        if entry.nil? && parent_entry.nil?
          num_treesame += 1
        elsif entry && parent_entry && entry[:oid] == parent_entry[:oid]
          num_treesame += 1
        end
      end

      case num_treesame
      when 0
        true
      else false
      end
    end

    # Find the entry for +path+ in the tree for +commit+
    def tree_entry(commit)
      pathname = Pathname.new(path)
      tmp_entry = nil

      pathname.each_filename do |dir|
        if tmp_entry.nil?
          tmp_entry = commit.tree[dir]
        else
          tmp_entry = rugged.lookup(tmp_entry[:oid])
          return nil unless tmp_entry.type == :tree
          tmp_entry = tmp_entry[dir]
        end
      end

      tmp_entry
    end
  end
end
