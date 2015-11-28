require 'spec_helper'
include FileHelper

describe Gg::SanitizeFilename do
  let(:project) { create(:project) }

  describe '.safe_filepath' do

    context 'without file upload' do
      before { allow(File).to receive(:exists?).and_return(true) }

      it 'removes illegal characters from filename' do
        file = Gg::SanitizeFilename.new project.data_path, 'so<me>?im:g*|e.png'
        expected_filepath = "#{project.data_path}/so_me__im_g__e.png"
        expect(file.safe_filepath).to eq(expected_filepath)
      end

      it 'raise error if file is outside the root' do
        file = Gg::SanitizeFilename.new project.data_path, '../../some.png'
        expect{file.safe_filepath}.to raise_error('Disallowed file requested')
      end
    end

    context 'file upload' do
      it 'raises error if file does not exist' do
        file = Gg::SanitizeFilename.new project.data_path, 'happypanda.png'
        expect{file.safe_filepath}.to raise_error('Disallowed file requested')
      end

      it 'returns filename if file exists' do
        add_image project, 'happypanda.png'
        file = Gg::SanitizeFilename.new project.satellitedir, 'happypanda.png'
        expected_filepath = "#{project.satellitedir}/happypanda.png"
        expect(file.safe_filepath).to eq(expected_filepath)
      end
    end
  end
end
