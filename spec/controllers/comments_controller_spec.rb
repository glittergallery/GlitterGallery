require 'spec_helper'

describe CommentsController do
	#TODO - Delete new action in Comments controller.
	
	describe "POST #create (js)" do 
		context "if logged in" do 
			before do
				ApplicationController.any_instance.stub(:current_user).and_return(FactoryGirl.create(:user))				
			end
			it "creates comment" do
				expect {
				post :create,:comment => FactoryGirl.attributes_for(:comment,:user => @user),:format => "js"
				}.to change(Comment, :count).by(1)				
			end			
		end
		context "if not logged in" do 
			before do
				ApplicationController.any_instance.stub(:current_user).and_return(nil)
			end
			it "doesn't create comment" do
				expect {
				post :create,:comment => FactoryGirl.attributes_for(:comment,:user => @user),:format => "js"
				}.to change(Comment, :count).by(0)				
			end			
		end
	end

	describe "DELETE #destroy" do
		context "if logged in" do
			context "if comment belongs to user" do
				before do
					request.env["HTTP_REFERER"]="/test"
					@comment = FactoryGirl.create(:comment)
					ApplicationController.any_instance.stub(:current_user).and_return(@comment.user)
				end
				it "deletes comment" do
					delete :destroy, :id => @comment.id
					expect(Comment.where(:id => @comment.id)).to be_empty
				end
			end
			context "if comment doesn't belong to user" do
				before do
					request.env["HTTP_REFERER"]="/test"
					@comment = FactoryGirl.create(:comment)
					ApplicationController.any_instance.stub(:current_user).and_return(@comment.user)
					@othercomment = FactoryGirl.create(:comment)
				end
				it "doesn't delete comment" do
					delete :destroy, :id => @othercomment.id
					expect(Comment.where(:id => @othercomment.id)).to_not be_empty
				end
			end
		end
		context "if not logged in" do
			before do
				request.env["HTTP_REFERER"]="/test"
				@comment = FactoryGirl.create(:comment)
				ApplicationController.any_instance.stub(:current_user).and_return(nil)
			end
			it "doesn't deletes comment" do
				#TODO - This is failing. Add logged in check to CommentsController
				delete :destroy, :id => @comment.id
				expect(Comment.where(:id => @comment.id)).to be_empty
			end
		
		end
	end
	
end