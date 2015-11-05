require 'spec_helper'

describe AnnotationsController, type: :controller do
  let(:user) { create(:user) }
  let(:other_user) { create(:user) }
  let(:project) { create(:project) }
  let(:annotation) { create(:annotation, user: user) }
  let(:annotation_param) do
    "{\"src\":\"http://localhost:3000/some/path\"," +
    "\"text\":\"flying monkeys\",\"shapes\":[{\"type\":\"rect\",\"geometry" +
    "\":{\"x\":0.595,\"y\":0.278,\"width\":0.147,\"height\":0.193},\"style" +
    "\":{}}],\"context\":\"http://localhost:3000/some/path\"}"
  end

  context 'user is guest' do

    it 'sees annotation' do
      get :find_by_blobid, format: :json,
                           id: annotation.blob_id
      expect(response.body).to include(annotation.text)
    end

    it 'does not create new annotation' do
      post :create, format: :json,
                    blob_id: 'fb82abfe99bb2be3b885b9cf72b7e05220dce165',
                    annotation: annotation_param
      expect(user.annotations).to be_empty
    end
  end

  context 'user is signed in' do
    before { sign_in(user) }

    it 'creates new annotation' do
      post :create, format: :json,
                    blob_id: 'fb82abfe99bb2be3b885b9cf72b7e05220dce165',
                    annotation: annotation_param
      expect(user.annotations.last. text).to eq('flying monkeys')
    end
  end

  context 'user is owner of annotation' do
    before { sign_in(user) }

    it 'updates annotation' do
      annotation_param.gsub!('flying monkeys', 'astro giraffe')
      put :update, format: :json,
                   id: annotation.id,
                   annotation: annotation_param
      annotation.reload
      expect(annotation.text).to eq('astro giraffe')
    end

    it 'destroys annotation' do
      delete :destroy, format: :json,
                        id: annotation.id
      expect(user.annotations).to be_empty
    end
  end

  context 'user is not owner of annotation' do
    before { sign_in(other_user) }

    it 'can not update annotation' do
      annotation_param.gsub!('flying monkeys', 'astro giraffe')
      put :update, format: :json,
                   id: annotation.id,
                   annotation: annotation_param
      annotation.reload
      expect(annotation.text).not_to eq('astro giraffe')
    end

    it 'can not destroy annotation' do
      delete :destroy, format: :json,
                        id: annotation.id
      expect(user.annotations).not_to be_empty
    end
  end
end
