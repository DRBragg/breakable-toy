class VideosController < ApplicationController
  def index
    @videos = Video.all
    respond_to do |format|
      format.html { render :index }
    end
  end

  def new
    @deck = Card.first
    # @deck[:openers] = Card.where(catagory: "Opener")
    # @deck[:closers] = Card.where(catagory: "Closer")
    # @deck[:questions] = Card.where(catagory: "Question")
    # @deck[:personals] = Card.where(catagory: "Personal")
    # @deck.to_json()
    respond_to do |format|
      format.html { render :new }
    end
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
