class VideosController < ApplicationController

  def index
    @videos = Video.all
    respond_to do |format|
      format.html { render :index }
    end
  end

  def new
    @user = current_user
  end

  def create
    vid = request.body
    @video = Video.new
    @video.vid = vid

    respond_to do |format|
      if @video.save!
        format.json { render json: @video }
      else
        format.json { render json: @video.errors.full_messages.join(' , ') }
      end
    end
  end
end
