require 'spec_helper'
include FileHelper

describe Gg::Search do
  let(:project) { create(:project) }

  describe '.find_files' do
    before do
      add_image project, 'happypanda.png'
      add_image project, 'naruto.png'
    end

    it 'returns file matching query' do
      hashes = Gg::Search.find_files('happypanda', project)
      expect(hashes[0].any? { |h| h[:name] == 'happypanda.png' }).to be(true)
      expect(hashes[0].any? { |h| h[:name] == 'naruto.png' }).to be(false)
    end
  end
end
