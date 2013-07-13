class CommentsController < ApplicationController
  before_filter :load_polycomment

  def index
    @comments = @polycomment.comments
  end

  def new
    @comment = @polycomment.comments.new
  end

  def create
    @comment = @polycomment.comments.new(body: params[:comment][:body], 
                                         issue: false)
    @comment.user_id = current_user.id
    if @comment.save
      flash[:notice] = 'Your comment was posted!'
      redirect_to @polycomment
    else
      flash[:alert] = 'Something went wrong, try reposting your comment.'
    end
  end


  private

    def load_polycomment
      resource, id = request.path.split('/')[1, 2]
      @polycomment = resource.singularize.classify.constantize.find(id)
    end
end