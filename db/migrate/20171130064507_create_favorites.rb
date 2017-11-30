class CreateFavorites < ActiveRecord::Migration[5.1]
  def change
    create_table :favorites do |t|
      t.integer :customer_id, null: false
      t.integer :restaurant_id, null: false

      t.timestamps
    end
  end
end
