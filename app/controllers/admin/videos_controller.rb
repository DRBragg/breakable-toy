class Admin::VideosController < ApplicationController
  def index
    @games = Game.all

    respond_to do |format|
      format.html { render :index }
    end
  end
end
