require 'spec_helper'
include FileHelper

describe Gg::ImageProcessing do
  let(:project) { create(:project) }

  describe 'file writes' do
    before do
      add_image project, 'logo.svg'
      @commit = project.branch_commit nil
      @write_path = project.image_for('logo.svg', 'mobile_inspire')
      @path = File.join project.image_for('', 'mobile_inspire'), '/*'
    end

    describe '#generate' do
      it 'writes passed image file after changing svg to png' do
        img = Gg::ImageProcessing.new("#{project.satellitedir}/logo.svg")
        img.generate(@write_path, 'mobile')
        expect(Dir[@path].last).to include('logo.png')
      end
    end

    describe '#blob_generate' do
      it 'writes passed blob after changing svg to png' do
        blob = project.blob @commit.oid, 'logo.svg'
        img = Gg::ImageProcessing.new(blob.text)
        img.blob_generate @write_path, 'mobile'
        expect(Dir[@path].last).to include('logo.png')
      end
    end
  end
end
