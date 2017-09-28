class CommentsController < ApplicationController
  def create
    comment = Comment.new(comment_params)
    show_comment = { id: comment.id, body: comment.body, user: comment.user }

    respond_to do |format|
      if comment.save
        format.json { render json: show_comment, status: :created }
      else
        format.json { head(:unauthorized) }
      end
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:user_id, :game_id, :body)
  end
end
