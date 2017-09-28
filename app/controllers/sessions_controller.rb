class SessionsController < ApplicationController
  def show
    respond_to do |format|
      format.json { current_user ? head(:ok) : head(:unauthorized) }
    end
  end

  def create
    user = User.where(email: params[:email]).first

    respond_to do |format|
      if user.valid_password?(params[:password])
        format.json { render json: user.as_json(only: [:id, :email, :authentication_token, :admin]), status: :created }
      else
        format.json { head(:unauthorized) }
      end
    end
  end

  def destroy
    current_user.authentication_token = nil
    respond_to do |format|
      format.json { current_user.save ? head(:ok) : head(:unauthorized) }
    end
  end
end
