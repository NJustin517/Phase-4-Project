class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response


    def show
        user = User.find(session[:user_id])
        render json: user, serializer: #TBD most likely userWithCart
    end

    private

    def render_not_found_response
        render json: { error: "User not found" }, status: :not_found
    end

end
