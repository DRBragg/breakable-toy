class UsersController < ApplicationController
  def show
    @games = Game.where(user: params[:id])
    @display = []

    @games.each do |game|
      @display << {id: game.id, video: game.vid, recordedDate: game.created_at.strftime("%m/%d/%Y"), cards: game.cards}
    end
  end

  def create
    user = User.new(user_params)

    respond_to do |format|
      if user.save
        format.json { render json: user.as_json(only: [:id, :email, :authentication_token, :admin]), status: :created }
      else
        format.json { head(:unauthorized) }
      end
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation, :avatar, :admin, :username)
  end
end
