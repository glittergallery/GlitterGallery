module FileHelper

  def file_upload(project, file_name)
    file = [ActionDispatch::Http::UploadedFile.new(
      tempfile: upload(file_name),
      filename: file_name
    )]
    post :file_upload, user_id: project.user.username,
                       id: project.name,
                       file: file
  end
  # updates old_file with new_file
  def file_update(project, old_file, new_fie)
    file = ActionDispatch::Http::UploadedFile.new(
      tempfile: upload(new_fie),
      filename: new_fie,
      original_filename: old_file
    )
    post :file_update, user_id: project.user.username,
                       id: project.name,
                       branch: 'master',
                       destination: new_fie,
                       message: 'update image',
                       file: file
  end

  def add_image(project, image)
    file = [ActionDispatch::Http::UploadedFile.new(
      tempfile: upload(image),
      filename: image
    )]
    project.add_images(
      'master',
      nil,
      file,
      project.user.git_author_params
    )
  end

  private

  # helper to find the file to upload
  def upload(file_name)
    File.new("#{Rails.root}/spec/factories/files/#{file_name}")
  end
end
