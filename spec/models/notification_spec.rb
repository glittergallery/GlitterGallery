require 'spec_helper'

describe Notification do
  let(:notification) { create(:notification) }
  let(:project) { create(:project) }
  let(:issue) { create(:issue) }
  let(:user) { create(:user) }

  it 'has a valid factory' do
    expect(notification).to be_valid
  end

  it 'is invalid without an actor' do
    expect(build(:notification, actor: nil)).to_not be_valid
  end

  it 'is invalid without action' do
    expect(build(:notification, action: nil)).to_not be_valid
  end

  it 'is invalid without model_id' do
    expect(build(:notification, model_id: nil)).to_not be_valid
  end

  describe '#messageverb' do

    shared_examples 'comment' do |action|
      before { @notification = create(:notification, action: action)}
      it 'returns correct messageverb' do
        expect(@notification.messageverb).to eq(' commented on ')
      end
    end

    [0, 5, 7, 8, 9].each { |action| it_behaves_like 'comment', action }

    shared_examples 'follow' do |action|
      before { @notification = create(:notification, action: action)}
      it 'returns correct messageverb' do
        expect(@notification.messageverb).to eq(' followed ')
      end
    end

    [1, 3].each { |action| it_behaves_like 'follow', action }

    context 'fork' do
      before { @notification = create(:notification, action: 2)}
      it 'returns correct messageverb' do
        expect(@notification.messageverb).to eq(' forked ')
      end
    end

    shared_examples 'create' do |action|
      before { @notification = create(:notification, action: action)}
      it 'returns correct messageverb' do
        expect(@notification.messageverb).to eq(' created ')
      end
    end

    [4, 6].each { |action| it_behaves_like 'create', action }

    context 'annotation' do
      before { @notification = create(:notification, action: 10)}
      it 'returns correct messageverb' do
        expect(@notification.messageverb).to eq(' annotated ')
      end
    end
  end

  describe '#objectname' do

    context 'project comment' do
      before do
        comment = create(:comment, polycomment_id: project.id)
        @notification = create(:notification, model_id: comment.id)
      end

      it 'returns project name' do
        expect(@notification.objectname).to eq(project.name)
      end
    end

    context 'issue comment' do
      before do
        comment = create(:comment, polycomment_id: issue.id)
        @notification = create(:notification, action: 5, model_id: comment.id)
      end

      it 'return issue number' do
        expect(@notification.objectname).to eq(issue.friendly_text)
      end
    end

    context 'annotation' do
      before do
        @anno = create(:annotation)
        @notification = create(:notification, action: 10, model_id: @anno.id)
      end

      it 'return blob with oid of annotation' do
        expect(@notification.objectname).to eq("blob #{@anno.blob_id[0..6]}")
      end
    end

    context 'user follow' do
      before do
        @notification = create(:notification, action: 3, model_id: user.id)
      end

      it 'return username' do
        expect(@notification.objectname).to eq(user.username)
      end
    end

    context 'issue create' do
      before do
        @notification = create(:notification, action: 6, model_id: issue.id)
      end

      it 'return issue number' do
        expect(@notification.objectname).to eq(issue.friendly_text)
      end
    end

    shared_examples 'git objects' do |action, type|
      before do
        @comment = create(:comment,
                          polycomment_type: type,
                          polycomment_id: 'a01331')
        @notification = create(:notification,
                               action: action,
                               model_id: @comment.id)
      end

      it 'returns object name with oid' do
        result = "#{@comment.polycomment_type}:" +
                 " #{@comment.polycomment_id[0..6]}"
        expect(@notification.objectname).to eq(result)
      end
    end

    git_types = { 7 => 'blob', 8 => 'commit', 9 => 'tree' }
    git_types.each { |key, value| it_behaves_like 'git objects', key, value }

    shared_examples 'project actions' do |action|
      before do
        @notification = create(:notification,
                               action: action,
                               model_id: project.id)
      end

      it 'returns project name' do
        expect(@notification.objectname).to eq(project.name)
      end
    end

    [1, 2, 4].each { |action| it_behaves_like 'project actions', action }
  end

  describe '#redirect_url' do

    shared_examples 'DB url' do |action|
      before { @notification = create(:notification, action: action) }

      it 'return urls stored in datbase' do
        expect(@notification.redirect_url).to eq(@notification.url)
      end
    end

    [0, 7, 8, 9, 5, 10].each { |action| it_behaves_like 'DB url', action }

    shared_examples 'project actions' do |action|
      before do
        @notification = create(:notification,
                               action: action,
                               model_id: project.id)
      end

      it 'returns project name' do
        expect(@notification.redirect_url).to eq(project.urlbase)
      end
    end

    [1, 2, 4].each { |action| it_behaves_like 'project actions', action }

    context 'issue create' do
      before do
        @notification = create(:notification, action: 6, model_id: issue.id)
      end

      it 'return issue number' do
        expect(@notification.redirect_url).to eq(issue.show_url)
      end
    end

    context 'user follow' do
      before do
        @notification = create(:notification, action: 3, model_id: user.id)
      end

      it 'return user name url' do
        user_url = "/#{@notification.actor.username}"
        expect(@notification.redirect_url).to eq(user_url)
      end
    end
  end
end
