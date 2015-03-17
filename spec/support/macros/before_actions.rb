module Macros
	module BeforeActions
	  def before_do(obj, new_user)
	    before do
	      @fact_obj = FactoryGirl.create(obj)
	      if new_user
	      	@new_user = FactoryGirl.create(:user, :username => "some other user",:email => "abcd@gmail.com")
	      	@new_user = sign_in(@new_user)
	      else
	      	obj == :user ? sign_in(@fact_obj) : sign_in(@fact_obj.user)
	      end
	    end
	  end
	end
end