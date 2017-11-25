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
  phone_number: '(415) 872-9230',
  website: 'theamericansf.com',
  description: 'Counter spot for gourmet grilled cheese sandwiches & other comfort-food eats in a down-home space.',
  opening: "07:30:00",
  closing: "16:00:00"
)
Restaurant.create!(
  name: 'SUBWAY ®Restaurants',
  owner_id: 1,
  address: "160 Broadway, San Francisco, CA 94111",
  phone_number: '(415) 986-2884',
  website: 'order.subway.com',
  description: 'Casual counter-serve chain for build-your-own sandwiches & salads.',
  opening: "07:00:00",
  closing: "21:00:00"
)
Restaurant.create!(
  name: 'Kokkari Estiatorio',
  owner_id: 1,
  address: "200 Jackson St, San Francisco, CA 94111",
  phone_number: '(415) 981-0983',
  website: 'kokkari.com',
  description: 'Casual counter-serve chain for build-your-own sandwiches & salads.',
  opening: "11:30:00",
  closing: "23:00:00"
)
Restaurant.create!(
  name: 'Wayfare Tavern',
  owner_id: 1,
  address: "558 Sacramento St, San Francisco, CA 94111",
  phone_number: '(415) 772-9060',
  website: 'http://www.wayfaretavern.com/',
  description: "Chef Tyler Florence brings his passion for high quality and style to San Francisco with his new flagship restaurant, Wayfare Tavern. A classic San Francisco Tavern featuring authentic American dishes inspired by local cuisine at the turn of the 20th century, the menu ranges from classic comforts to rustic delicacies. The beverage menu features locally-sourced wines including a selection of Florence's own label, quality draft beers and organic root beer as well as classic Victorian-era cocktails.

                All three floors of the restaurant have been designed keeping historical accuracy in mind making Wayfare Tavern reminiscent of a Victorian parlor and an Edwardian men's club, where anything goes from black-tie to blue jeans. Pull up a stool to the Chef's Counter at the open kitchen and look on as Chef prepares your lunch or head to the Library and Billiard Room for a game of pool. Wayfare Tavern is a truly unparalleled dining experience translated from a century ago. Photo: John Lee.",
  opening: "11:00:00",
  closing: "17:00:00"
)
Restaurant.create!(
  name: "Leo's Oyster Bar",
  owner_id: 1,
  address: "568 Sacramento Street, San Francisco, CA 94111",
  phone_number: '(415) 872-9982',
  website: 'http://www.leossf.com/',
  description: 'At Leo’s Oyster Bar, seafood and bar classics share the stage with craft cocktails and a wine list with special attention paid to Champagne and Rose. Leo’s is the BIG NIGHT GROUP’S first establishment with a bar focus. Centrally located in the financial district, Leo’s is the perfect place for a light lunch, after work drinks, dinner and late night supper. The décor by Ken Fulk and Jon de la Cruz reflects our obsession with the Mad Men era Oyster',
  opening: "11:00:00",
  closing: "20:00:00"
)
Restaurant.create!(
  name: "Michael Mina - San Francisco",
  owner_id: 1,
  address: "252 California Street, San Francisco, CA 94111",
  phone_number: '(415) 397-9222',
  website: 'http://michaelmina.net/restaurants/locations/mmsf.php',
  description: "Michelin-starred MICHAEL MINA is the crowning jewel that captures the core of Michael's philosophy: bold yet balanced flavors achieved through a combination of acidity, sweetness, spice and richness. At the helm, Executive Chef Raj Dixit achieves these bold, balanced flavors in a cuisine, which draws upon global influences, showcasing the highest quality authentic and seasonal ingredients. 

The 5-course tasting menu invites guests to explore a dynamic expression of Chef Michael Mina’s vast culinary influences while also providing options within each course for the guest to define their ultimate dining experience. The tasting menu is offered for dinner only at $145 per person, with vegetarian options and supplements at an additional cost. A paired down 'a la carte' dinner menu is available at the bar. Lunch is served in the dining room featuring an à la carte menu and at the bar featuring an array of seasonal small plates, as well as salads.",
  opening: "11:30:00",
  closing: "17:30:00"
)

Restaurant.create!(
  name: "The Barrel Room - San Francisco",
  owner_id: 1,
  address: "415 Sansome Street, San Francisco, CA 94111",
  phone_number: '(415) 956-6900',
  website: 'http://www.barrelroomsf.com/',
  description: "The Barrel Room Restaurant & Tavern is a restaurant with a quarterly rotating regional menu. We pour 50+ wines by the glass, organized into educational flights. Our cocktail list features unique regionally inspired recipes. Our lunch and dinner menus offer cuisine from the featured region.",
  opening: "11:30:00",
  closing: "17:30:00"
)


Restaurant.create!(
  name: "Brasserie S&P at Loews San Francisco Hotel",
  owner_id: 1,
  address: "222 Sansome St, San Francisco, CA 94104",
  phone_number: '(415) 276-9620',
  website: 'http://www.loewshotels.com/regency-san-francisco/dining/restaurant',
  description: "Serving brasserie-style San Francisco cuisine and refined cocktails complemented with a diverse wine-program, Brasserie S&P, has unveiled to be a favorite in the local culinary scene. We offer all-day dining from a creative menu which incorporates the finest, seasonal ingredients found in California. The 90 seat restaurant blends seamlessly with our “gincentric” bar to offer a lively, sophisticated yet informal dining experience.",
  opening: "11:30:00",
  closing: "17:30:00"
)
