require 'spec_helper'

describe Annotation do
  let(:annotation) { create(:annotation) }

  it 'has a valid factory' do
    expect(annotation).to be_valid
  end

  it 'is invalid without text' do
    expect(build(:annotation, text: '')).to_not be_valid
  end

  it 'is invalid without json' do
    expect(build(:annotation, json: '')).to_not be_valid
  end

  it 'is invalid without blob_id' do
    expect(build(:annotation, blob_id: '')).to_not be_valid
  end

  it 'is invalid without numeric user_id' do
    expect(build(:annotation, user_id: 'a')).to_not be_valid
  end
end
