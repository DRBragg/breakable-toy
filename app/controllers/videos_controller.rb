class VideosController < ApplicationController

  def index
    @games = Game.all
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
    @game = Game.new
    @game.vid = vid
    @game.user = current_user

    respond_to do |format|
      if @game.save!
        format.json { render json: @game }
      else
        format.json { render json: @game.errors.full_messages.join(' , ') }
      end
    end
  end
end
