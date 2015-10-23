class AnnotationsController < ApplicationController

  # GET  /annotations/for_blob/:id
  def find_by_blobid
    @annotations = Annotation.find_by_blob(params[:id])
    respond_to do |format|
      format.json { render json: @annotations.to_json }
    end
  end

  # POST  /annotations
  def create
    annotation_json = params[:annotation]
    annotation_hash = JSON.parse(annotation_json)
    @annotation = Annotation.create(
      json: annotation_json,
      text: annotation_hash['text'],
      blob_id: params[:blob_id],
      user_id: current_user.id
    )
    @annotation.make_presentable
    respond_to do |format|
      format.json { render json: @annotation.as_json }
    end
  end

  # PATCH  /annotations/:id
  def update
    annotation_json = params[:annotation]
    annotation_hash = JSON.parse(annotation_json)
    @annotation = Annotation.find(params[:id])
    @annotation.json = annotation_json
    @annotation.text = annotation_hash['text']
    @annotation.save

    respond_to do |format|
      format.json { render json: @annotation.to_json }
    end
  end


  # DELETE /annotations/:id
  def destroy
    @annotation = Annotation.find(params[:id])
    @annotation.destroy
    respond_to do |format|
      format.json { render json: @annotation.as_json }
    end
  end
end
