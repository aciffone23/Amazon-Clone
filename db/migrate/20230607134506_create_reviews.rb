class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :product_id, null: false
      t.text :title, null: false
      t.text :body, null: false
      t.float :rating, null: false
      t.integer :count

      t.index :user_id
      t.index :product_id
      t.timestamps
    end

    add_foreign_key :reviews, :users
    add_foreign_key :reviews, :products
  end
end
