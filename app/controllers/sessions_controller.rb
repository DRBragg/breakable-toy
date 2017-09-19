class SessionsController < ApplicationController
  def create
    user = User.where(email: params[:email]).first

    respond_to do |format|
      if user && user.valid_password?(params[:password])
        format.json { render json: user.as_json(only: [:id, :email]), status: :created }
      else
        format.json { head(:unauthorized) }
      end
    end
  end

  def destroy

  end
end
