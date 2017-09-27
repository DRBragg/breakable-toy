class VideosController < ApplicationController

  def index
    @display = []
    @games = Game.all
    @games.each do |game|
      @display << {id: game.id, user: game.user, video: game.vid, recordedDate: game.created_at.strftime("%m/%d/%Y"), cards: game.cards}
    end

    respond_to do |format|
      format.html { render :index }
    end
  end

  def show
    @game = Game.find(params[:id])
    @user = @game.user.email
    @deck = @game.cards
    @comments = @game.comments

    respond_to do |format|
      format.html { render :show }
    end
  end

  def new
    @game = Game.create(user: User.find(params[:user_id]))
    Deck.create(game: @game, card: Card.find(rand(1..4)))
    Deck.create(game: @game, card: Card.find(rand(5..8)))
    Deck.create(game: @game, card: Card.find(rand(9..12)))
    Deck.create(game: @game, card: Card.find(rand(13..16)))

    @deck = @game.cards

    respond_to do |format|
      format.html { render :new }
    end
  end

  def create
    vid = request.body
    @game = Game.where(user: User.find(params[:user_id])).last
    @game.vid = vid

    respond_to do |format|
      if @game.save!
        format.json { render json: @game }
      else
        format.json { render json: @game.errors.full_messages.join(' , ') }
      end
    end
  end
end
