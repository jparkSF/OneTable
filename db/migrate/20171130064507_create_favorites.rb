class CreateFavorites < ActiveRecord::Migration[5.1]
  def change
    create_table :favorites do |t|
      t.integer :customer_id, null: false
      t.integer :restaurant_id, null: false

      t.timestamps
    end
     add_index :favorites, :customer_id, :restaurant_id, unique: true
  end
end
