class CreateRestaurants < ActiveRecord::Migration[5.1]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.integer :owner_id
      t.string :address
      t.string :phone_number, null: false
      t.string :website
      t.text :description, null: false
      t.string :opening
      t.string :closing

      t.timestamps
    end
    
    add_index :restaurants, :name, unique: true
  end
end
