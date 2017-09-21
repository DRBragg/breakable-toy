class CreateCards < ActiveRecord::Migration[5.1]
  def change
    create_table :cards do |t|
      t.string :catagory
      t.string :body

      t.timestamps
    end
  end
end
