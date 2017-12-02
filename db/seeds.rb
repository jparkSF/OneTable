# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Current Database tables are:
# => User: first_name, last_name, email, password 
# => Restaurant: name, owner_id, address, phone, 
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

#####################################
# Restaurants in Financial District #
#####################################

Restaurant.create!(
  name: "KUSAKABE",
  owner_id: 1,
  address: "584 Washington Street",
  city: "San Francisco",
  state: "CA",
  area: "FiDi",
  postal_code: "94111",
  country: "US",
  phone: "4157570155",
  lat: 37.795597,
  lng: -122.402963,
  price: 4,
  website: "http://www.opentable.com/single.aspx?rid=149539",
  
)

Restaurant.create!(
  name: "Jai Yun",
  owner_id: 1,
  address: "680 Clay Street",
  city: "San Francisco",
  state: "CA",
  area: "FiDi",
  postal_code: "94111",
  country: "US",
  phone: "4159817438",
  lat: 37.794505,
  lng: -122.404505,
  price: 4,
  website: "http://mobile.opentable.com/opentable/?restId=37849"
)

Restaurant.create!(
  name: "Mangia Tutti",
  owner_id: 1,
  address: "635 Clay St.",
  city: "San Francisco",
  state: "CA",
  area: "FiDi",
  postal_code: "94111",
  country: "US",
  phone: "4157882088",
  lat: 37.794437,
  lng: -122.403751,
  price: 2,
  website: "http://www.opentable.com/single.aspx?rid=4057"
)
Restaurant.create!(
  name: "MICHAEL MINA",
  owner_id: 1,
  address: "252 California Street",
  city: "San Francisco",
  state: "CA",
  area: "FiDi",
  postal_code: "94111",
  country: "US",
  phone: "4153979222",
  lat: 37.793267,
  lng: -122.39965,
  price: 4,
  website: "http://www.opentable.com/single.aspx?rid=51049"
)
Restaurant.create!(
  name: "Osha Thai Embarcadero",
  owner_id: 1,
  address: "4 Embarcadero Center, Street Level",
  city: "San Francisco",
  state: "CA",
  area: "FiDi",
  postal_code: "94111",
  country: "US",
  phone: "4157886742",
  lat: 37.795936,
  lng: -122.400003,
  price: 2,
  website: "http://www.opentable.com/single.aspx?rid=148651"
)
Restaurant.create!(    
  name: "PABU",
  owner_id: 1,
  address: "101 California Street",
  city: "San Francisco",
  state: "CA",
  area: "FiDi",
  postal_code: "94111",
  country: "US",
  phone: "4156687228",
  lat: 37.792778,
  lng: -122.397778,
  price: 2,
  website: "http://www.opentable.com/single.aspx?rid=145846"
)

#####################################
#        Restaurants in SOMA        #
#####################################

Restaurant.create!(    
  name: "Benu",
  owner_id: 1,
  address: "22 Hawthorne Street",
  city: "San Francisco",
  state: "CA",
  area: "Mission",
  postal_code: "94105",
  country: "US",
  phone: "4156854860",
  lat: 37.785402,
  lng: -122.399068,
  price: 4,
  website: "http://www.opentable.com/single.aspx?rid=45916"
)
Restaurant.create!(            
  name: "Boulevard",
  owner_id: 1,
  address: "1 Mission St.",
  city: "San Francisco",
  state: "CA",
  area: "Mission",
  postal_code: "94105",
  country: "US",
  phone: "4155436084",
  lat: 37.79332,
  lng: -122.392761,
  price: 3,
  website: "http://www.opentable.com/single.aspx?rid=130"
)
Restaurant.create!(  
  name: "Waterbar",
  owner_id: 1,
  address: "399 The Embarcadero South",
  city: "San Francisco",
  state: "CA",
  area: "Mission",
  postal_code: "94105",
  country: "US",
  phone: "4152849922",
  lat: 37.790441,
  lng: -122.388983,
  price: 3,
  website: "http://www.opentable.com/single.aspx?rid=17035"
)
Restaurant.create!(  
  name: "Yank Sing - Rincon Center",
  owner_id: 1,
  address: "101 Spear Street",
  city: "San Francisco",
  state: "CA",
  area: "Mission",
  postal_code: "94105",
  country: "US",
  phone: "4157811111",
  lat: 37.79255,
  lng: -122.39337,
  price: 2,
  website: "http://www.opentable.com/single.aspx?rid=149530"
)
Restaurant.create!(  
  name: "Yank Sing - Stevenson Street",
  owner_id: 1,
  address: "49 Stevenson Street",
  city: "San Francisco",
  state: "AL",
  area: "Mission",
  postal_code: "94105",
  country: "US",
  phone: "4155414949",
  lat: 37.79828,
  lng: -122.401549,
  price: 2,
  website: "http://www.opentable.com/single.aspx?rid=149527"
)
Restaurant.create!(            
  name: "Thirsty Bear",
  owner_id: 1,
  address: "661 Howard St.",
  city: "San Francisco",
  state: "CA",
  area: "Mission",
  postal_code: "94105",
  country: "US",
  phone: "4159740905",
  lat: 37.78565,
  lng: -122.399734,
  price: 2,
  website: "http://www.opentable.com/single.aspx?rid=2"
)
Restaurant.create!(             
  name: "Ame",
  owner_id: 1,
  address: "689 Mission Street",
  city: "San Francisco",
  state: "CA",
  area: "Mission",
  postal_code: "94105",
  country: "US",
  phone: "4152844040",
  lat: 37.786449,
  lng: -122.401818,
  price: 4,
  website: "http://www.opentable.com/single.aspx?rid=5546"
)
Restaurant.create!(  
  name: "Garden Court",
  owner_id: 1,
  address: "2 New Montgomery St.",
  city: "San Francisco",
  state: "CA",
  area: "Mission",
  postal_code: "94105",
  country: "US",
  phone: "4155465089",
  lat: 37.787941,
  lng: -122.401934,
  price: 4,
  website: "http://www.opentable.com/single.aspx?rid=2657"
)
  
#####################################
#      Restaurants in MISSION       #
#####################################

Restaurant.create!(  
  name: "Blue Plate",
  owner_id: 1,
  address: "3218 Mission Street",
  city: "San Francisco",
  state: "CA",
  area: "Mission",
  postal_code: "94110",
  country: "US",
  phone: "4152826777",
  lat: 37.745275,
  lng: -122.420435,
  price: 3,
  website: "http://www.opentable.com/single.aspx?rid=23521"
)

Restaurant.create!(
  name: "Ichi Sushi & Ni Bar",
  owner_id: 1,
  address: "3282 Mission Street",
  city: "San Francisco",
  state: "CA",
  area: "Mission",
  postal_code: "94110",
  country: "US",
  phone: "4155254750",
  lat: 37.742681,
  lng: -122.421542,
  price: 3,
  website: "http://www.opentable.com/single.aspx?rid=117262"
)
Restaurant.create!(  
  name: "Garcon",
  owner_id: 1,
  address: "1101 Valencia Street",
  city: "San Francisco",
  state: "CA",
  area: "Mission",
  postal_code: "94110",
  country: "US",
  phone: "4154018959",
  lat: 37.755294,
  lng: -122.420972,
  price: 2,
  website: "http://www.opentable.com/single.aspx?rid=5188"
)        
Restaurant.create!(   
  name: "Aslam's Rasoi",
  owner_id: 1,
  address: "1037 Valencia St",
  city: "San Francisco",
  state: "CA",
  area: "Mission",
  postal_code: "94110",
  country: "US",
  phone: "4156950599",
  lat: 37.756342,
  lng: -122.420926,
  price: 2,
  website: "http://www.opentable.com/single.aspx?rid=66832"
)
Restaurant.create!(              
  name: "Urban Putt", 
  owner_id: 1,
  address: "1096 South Van Ness Avenue",
  city: "San Francisco",
  state: "CA",
  area: "Mission",
  postal_code: "94110",
  country: "US",
  phone: "4153411080",
  lat: 37.755706,
  lng: -122.416879,
  price: 2,
  website: "http://www.opentable.com/single.aspx?rid=117271"
)
Restaurant.create!(  
  name: "Foreign Cinema",
  owner_id: 1,
  address: "2534 Mission St.",
  city: "San Francisco",
  state: "CA",
  area: "Mission",
  postal_code: "94110",
  country: "US",
  phone: "4156487600",
  lat: 37.756301,
  lng: -122.418858,
  price: 2,
  website: "http://www.opentable.com/single.aspx?rid=1906"
)
Restaurant.create!(   
  name: "El Techo de Lolinda",
  owner_id: 1,
  address: "2518 Mission Street",
  city: "San Francisco",
  state: "CA",
  area: "Mission",
  postal_code: "94110",
  country: "US",
  phone: "4155506970",
  lat: 37.756664,
  lng: -122.419086,
  price: 2,
  website: "http://www.opentable.com/single.aspx?rid=135892"
)
Restaurant.create!(  
  name: "Manos Nouveau",
  owner_id: 1,
  address: "3115 22nd Street",
  city: "San Francisco",
  state: "CA",
  area: "Mission",
  postal_code: "94110",
  country: "US",
  phone: "4156386109",
  lat: 37.755402,
  lng: -122.417115,
  price: 2,
  website: "http://www.opentable.com/single.aspx?rid=144853"
)
Restaurant.create!(                      
  name: "Farina",
  owner_id: 1,
  address: "3560 18th St",
  city: "San Francisco",
  state: "CA",
  area: "Mission",
  postal_code: "94110",
  country: "US",
  phone: "4155650360",
  lat: 37.761835,
  lng: -122.422917,
  price: 3,
  website: "http://www.opentable.com/single.aspx?rid=7656"
)
Restaurant.create!(             
  name: "Saison",
  owner_id: 1,
  address: "178 Townsend St.",
  city: "San Francisco",
  state: "CA",
  area: "Mission",
  postal_code: "94110",
  country: "US",
  phone: "4158287990",
  lat: 37.779487,
  lng: -122.392203,
  price: 4,
  website: "http://www.opentable.com/single.aspx?rid=37594"
)


#####################################
#     Restaurants in JAPANTOWN      #
#####################################

Restaurant.create!(
  name: "1300 on Fillmore",
  owner_id: 1,
  address: "1300 Fillmore Street",
  city: "San Francisco",
  state: "CA",
  area: "Japantown",
  postal_code: "94115",
  country: "US",
  phone: "4157717100",
  lat: 37.781596,
  lng: -122.432067,
  price: 3,
  website: "http://www.opentable.com/single.aspx?rid=16609"
)
Restaurant.create!(           
  name: "Fresca - Fillmore",
  owner_id: 1,
  address: "2114 Fillmore St",
  city: "San Francisco",
  state: "CA",
  area: "Japantown",
  postal_code: "94115",
  country: "US",
  phone: "4154472668",
  lat: 37.789329,
  lng: -122.433903,
  price: 2,
  website: "http://www.opentable.com/single.aspx?rid=10870"
)
Restaurant.create!(            
  name: "Seoul Garden",
  owner_id: 1,
  address: "1655 Post Street",
  city: "San Francisco",
  state: "CA",
  area: "Japantown",
  postal_code: "94115",
  country: "US",
  phone: "4155637664",
  lat: 37.785664,
  lng: -122.429033,
  price: 2,
  website: "http://www.opentable.com/single.aspx?rid=151789"
)
Restaurant.create!(     
  name: "Jackson Fillmore Trattoria",
  owner_id: 1,
  address: "2506 Fillmore St",
  city: "San Francisco",
  state: "CA",
  area: "Japantown",
  postal_code: "94115",
  country: "US",
  phone: "4153465288",
  lat: 37.792706,
  lng: -122.43429,
  price: 2,
  website: "http://www.opentable.com/single.aspx?rid=15406"
)
Restaurant.create!(     
  name: "Izakaya Kou",
  owner_id: 1,
  address: "1560 Fillmore Street",
  city: "San Francisco",
  state: "CA",
  area: "Japantown",
  postal_code: "94115",
  country: "US",
  phone: "4154419294",
  lat: 37.784144,
  lng: -122.432581,
  price: 2,
  website: "http://www.opentable.com/single.aspx?rid=117721"
)
Restaurant.create!(             
  name: "Nico",
  owner_id: 1,
  address: "3228 Sacramento Street",
  city: "San Francisco",
  state: "CA",
  area: "Japantown",
  postal_code: "94115",
  country: "US",
  phone: "4153591000",
  lat: 37.788515,
  lng: -122.446159,
  price: 3,
  website: "http://www.opentable.com/single.aspx?rid=114151"
)
Restaurant.create!(  
  name: "Florio",
  owner_id: 1,
  address: "1915 Fillmore Street",
  city: "San Francisco",
  state: "CA",
  area: "Japantown",
  postal_code: "94115",
  country: "US",
  phone: "4157754300",
  lat: 37.787513,
  lng: -122.433822,
  price: 2,
  website: "http://www.opentable.com/single.aspx?rid=3377"
)
            
temp_variable = Restaurant.find(1)
temp_variable.image = "https://s3-media2.fl.yelpcdn.com/bphoto/LCsJpWReEtIDRjPI7eyXgA/o.jpg"
temp_variable.save!

temp_variable = Restaurant.find(2)
temp_variable.image = "https://s3-media2.fl.yelpcdn.com/bphoto/jktegRL7dFs04t9E4zk7TQ/o.jpg"
temp_variable.save!

temp_variable = Restaurant.find(3)
temp_variable.image = "https://s3-media2.fl.yelpcdn.com/bphoto/Q7s5KxDWJlkAA9J3pxiVAg/o.jpg"
temp_variable.save!

temp_variable = Restaurant.find(4)
temp_variable.image = "https://s3-media1.fl.yelpcdn.com/bphoto/sFqkeaicCljOYhnbdAhgFg/o.jpg"
temp_variable.save!

temp_variable = Restaurant.find(5)
temp_variable.image = "https://s3-media4.fl.yelpcdn.com/bphoto/ViwMJWPReRulv3OsAkE6CA/o.jpg"
temp_variable.save!

temp_variable = Restaurant.find(6)
temp_variable.image = "https://s3-media3.fl.yelpcdn.com/bphoto/Qhzn_d7VfptRVSGEA_TAig/o.jpg"
temp_variable.save!

temp_variable = Restaurant.find(7)
temp_variable.image = "https://s3-media3.fl.yelpcdn.com/bphoto/In-vjjK5yNQhz9JfodrJVA/o.jpg"
temp_variable.save!

temp_variable = Restaurant.find(8)
temp_variable.image = "https://s3-media4.fl.yelpcdn.com/bphoto/xsiUiuq-m0VUxktgxzpLxg/o.jpg"
temp_variable.save!

temp_variable = Restaurant.find(9)
temp_variable.image = "https://s3-media4.fl.yelpcdn.com/bphoto/g8kVSt0OuIGmQ_xrfzAc1Q/o.jpg"
temp_variable.save!

temp_variable = Restaurant.find(10)
temp_variable.image = "https://s3-media2.fl.yelpcdn.com/bphoto/EcawajvUsw_Tuvnd730zYQ/o.jpg"
temp_variable.save!

temp_variable = Restaurant.find(11)
temp_variable.image = "https://s3-media4.fl.yelpcdn.com/bphoto/sll8oMas-7F5Bgb-RKO2KQ/o.jpg"
temp_variable.save!

temp_variable = Restaurant.find(12)
temp_variable.image = "https://s3-media2.fl.yelpcdn.com/bphoto/YotHpkRqjlv-TStDMuadtQ/o.jpg"
temp_variable.save!

temp_variable = Restaurant.find(13)
temp_variable.image = "https://s3-media4.fl.yelpcdn.com/bphoto/pVqa-rqPYurf1vZdmf88eQ/o.jpg"
temp_variable.save!


