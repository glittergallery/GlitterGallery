require 'spec_helper'

describe Glimage do
  it 'has a valid factory' do
    FactoryGirl.create(:glimage).should be_valid
  end

  it 'is invalid without a file' do
    FactoryGirl.build(:glimage, file: nil).should_not be_valid
  end

  it 'returns whether or not it belongs to a user' do
    proj = FactoryGirl.create(:project_with_glimages)
    proj.glimages.first.belongs_to?(proj.user).should be_true
  end

  describe 'return paths for various uses' do
    before :each do
      @glimage = FactoryGirl.create(:glimage_with_project)
    end

    context 'file paths' do
      it 'returns the path to its file as a file' do
        @glimage.filepath.should == File.join(@glimage.project.path, @glimage.file)
      end

      it 'returns its thumbnail path as a file' do
        @glimage.thumbnail('filepath').should == File.join(File.dirname(@glimage.filepath), "#{@glimage.file.delete('.')}_thumb.png")
      end
    end

    context 'image paths' do
      before :each do
        @imgpath = File::SEPARATOR + File.join('repos', @glimage.project.user.email, @glimage.project.name, @glimage.file) 
      end

      it 'returns the path to its file as an image' do
        @glimage.imagepath.should == @imgpath
      end

      it 'returns its thumbnail path as an image' do
        @glimage.thumbnail('imagepath').should == File.join(File.dirname(@imgpath), "#{@glimage.file.delete('.')}_thumb.png")
      end
    end
  end
  
  describe 'detect if image is svg' do
    context 'svg file' do
      it 'returns true if file has svg extension' do
        FactoryGirl.create(:glimage, file: 'example.svg').is_svg?.should be_true
      end
      it 'returns true if file has svg filetype' do
        FactoryGirl.create(:glimage, file: 'example', filetype: 'image/svg+xml').is_svg?.should be_true
      end
    end
    context 'non-svg file' do
      it 'returns false if file is not an svg file' do
        FactoryGirl.create(:glimage, file: 'example.png').is_svg?.should be_false
      end
    end
  end
  
end
