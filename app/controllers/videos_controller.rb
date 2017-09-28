class VideosController < ApplicationController

  def index
    @display = []
    @games = Game.all
    @games.each do |game|
      @display << {id: game.id, user: game.user.username, video: game.vid, recordedDate: game.created_at.strftime("%m/%d/%Y"), cards: game.cards}
    end

    respond_to do |format|
      format.html { render :index }
    end
  end

  def show
    @game = Game.find(params[:id])
    @user = @game.user.username
    @deck = @game.cards
    comments = @game.comments
    @game_comments = comments.map {|comment| { id: comment.id, body: comment.body, user: comment.user }}

    respond_to do |format|
      format.html { render :show }
    end
  end

  def new
    @game = Game.create(user: User.find(params[:user_id]))
    Deck.create(game: @game, card: (Card.where(catagory: "Opener")[rand(0..3)]))
    Deck.create(game: @game, card: (Card.where(catagory: "Question")[rand(0..3)]))
    Deck.create(game: @game, card: (Card.where(catagory: "Personal")[rand(0..3)]))
    Deck.create(game: @game, card: (Card.where(catagory: "Closer")[rand(0..3)]))

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

  def destroy
    @game = Game.find(params[:id])

    respond_to do |format|
      if @game.destroy
        format.json { head(:ok) }
      else
        format.json { head(:unauthorized) }
      end
    end
  end

  def all
    @games = Game.all
  end
end
