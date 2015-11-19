require 'spec_helper'

describe Comment do
  let(:comment) { create(:comment) }

  it 'has a valid factory' do
    expect(comment).to be_valid
  end

  it 'is invalid without a body' do
    expect(build(:comment, body: '')).to_not be_valid
  end


  describe '#action' do
    shared_examples 'polycomment_type' do |type|
      before { @comment = create(:comment, polycomment_type: type)}
      it 'returns correct polycomment type' do
        expect(@comment.action).to eq("#{type}_comment")
      end
    end

    %w(project blob tree commit).each do |type|
      it_behaves_like 'polycomment_type', type
    end
  end
end
