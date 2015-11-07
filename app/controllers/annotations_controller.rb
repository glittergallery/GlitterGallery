class AnnotationsController < ApplicationController
  before_filter :authenticate_user!, except: :find_by_blobid
  load_resource except: [:find_by_blobid, :create]
  authorize_resource except: :find_by_blobid

  # GET  /annotations/for_blob/:id
  def find_by_blobid
    @annotations = Annotation.where(blob_id: params[:id])
    @annotations.each do |annotation|
      make_presentable(annotation)
    end
    respond_to do |format|
      format.json { render json: @annotations.to_json }
    end
  end

  # POST  /annotations
  def create
    find_project
    annotation_json = params[:annotation]
    annotation_hash = JSON.parse(annotation_json)
    @annotation = Annotation.new(
      json: annotation_json,
      text: annotation_hash['text'],
      blob_id: params[:blob_id],
      user_id: current_user.id
    )
    respond_to do |format|
      if @annotation.save
        make_presentable(@annotation)
        victims = @project.followers + [@project.user] - [@annotation.user]
        notify_users 'annotation', 1, @annotation.id, victims, notification_url
        format.json { render json: @annotation.as_json }
      else
        full_error = @annotation.errors.full_messages
        format.json { render json: { error: full_error }, status: 422 }
      end
    end
  end

  # PATCH  /annotations/:id
  def update
    annotation_json = params[:annotation]
    annotation_hash = JSON.parse(annotation_json)
    @annotation = Annotation.find(params[:id])
    @annotation.json = annotation_json
    @annotation.text = annotation_hash['text']

    respond_to do |format|
      if @annotation.save
        format.json { render json: @annotation.as_json }
      else
        full_error = @annotation.errors.full_messages
        format.json { render json: { error: full_error }, status: 422 }
      end
    end
  end


  # DELETE /annotations/:id
  def destroy
    @annotation = Annotation.find(params[:id])
    respond_to do |format|
      if @annotation.destroy
        format.json { render json: :nothing }
      else
        full_error = @annotation.errors.full_messages
        format.json { render json: { error: full_error }, status: 400 }
      end
    end
  end

  private
  # Sets username and time for annotation
  # These values are used while drawing each annotation
  def make_presentable(annotation)
    # parse the annotation json into a ruby object
    annotation_hash = JSON.parse(annotation.json)
    annotation_hash[:username] = annotation.user.username.to_s
    annotation_hash[:updated_at] = annotation.updated_at.strftime('%B %d, %Y')
    annotation_hash[:editable] = false unless current_user == annotation.user
    annotation_hash[:id] = annotation.id
    # convert back to json
    annotation.json = annotation_hash.to_json
  end

  def find_project
    names = params[:url].split('/')[1,2]
    user = User.find_by username: names.first
    @project = Project.find_by user_id: user.id, name: names.second
  end
end
