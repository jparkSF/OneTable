class CreateRestaurants < ActiveRecord::Migration[5.1]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.integer :owner_id
      t.string :address
      t.string :city, null:false
      t.string :state
      t.integer :postal_code, null:false
      t.string :area
      t.string :phone
      t.string :country
      t.string :opening, default: "11:30:00"
      t.string :closing, default: "17:30:00"
      t.integer :price
      t.float :lat
      t.float :lng
      t.string :website

      t.timestamps
    end
    
    add_index :restaurants, :name, unique: true
  end
end
