# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Current Database tables are:
# => User: first_name, last_name, email, password 
# => Restaurant: name, owner_id, address, phone_number, 
# =>             website, description,opening, closing

User.destroy_all
Restaurant.destroy_all

# Demo user
User.create!(
    first_name: "I'm Jay",
    last_name: "Park",
    email: "jpark830@me.com",
    password: "password"
)

10.times do 
  User.create!(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email,
    password: 'password'
  )
end 

Restaurant.create!(
  name: 'The American Grilled Cheese Kitchen',
  owner_id: 1,
  address: "799 Battery St., San Francisco, CA 94111",
  phone_number: '4158729230',
  website: 'theamericansf.com',
  description: 'Counter spot for gourmet grilled cheese sandwiches & other comfort-food eats in a down-home space.',
  opening: "07:30:00",
  closing: "16:00:00"
)
Restaurant.create!(
  name: 'SUBWAY ®Restaurants',
  owner_id: 1,
  address: "160 Broadway, San Francisco, CA 94111",
  phone_number: '4159862884',
  website: 'order.subway.com',
  description: 'Casual counter-serve chain for build-your-own sandwiches & salads.',
  opening: "07:00:00",
  closing: "21:00:00"
)
Restaurant.create!(
  name: 'Kokkari Estiatorio',
  owner_id: 1,
  address: "200 Jackson St, San Francisco, CA 94111",
  phone_number: '4159810983',
  website: 'kokkari.com',
  description: 'Casual counter-serve chain for build-your-own sandwiches & salads.',
  opening: "11:30:00",
  closing: "23:00:00"
)