# Routes 

  ## Frontend

  ### HTML
  * `GET /` `StaticPagesController#root`
  
  ### UserProfile
  * `/#/users/:userId` - shows user's profile
  * `/#/users/:userId/:reservations[:id]` - shows user's reservations
  * `/#/users/:userId/:favorites[:id]` - shows user's favorite restaurants
      
        
  ### Restaurants
  * `/#/restaurants/new` - renders new restaurant page
  * `/#/restaurants/:restaurantId` - shows a restaurant's show page
    
  ### Reservations  
  * `/#/reservations/new` - renders new reservation page
  * `/#/reservations/:reservations[:id]` - shows exsiting reservations of a restaurant

  ### RestaurantSearch 
  * `/#/` - restaurant search page is root page
    
  ### Session
  * `/#/signup` - new user sign up page
  * `/#/login` - exisiting user login page
  
  ### Reviews
  * `/#/reviews/new` - renders new review page
  * `/#/reviews/:reviewId` - shows a review
  * `/#/reviews/:reviewId/edit` - edit review page
    
## API Endpoints (Backend)

### `users` 
   * `GET /api/users` - returns the user information for the User Search feature
   * `POST /api/users` - sign up

### `session`
   * `POST /api/session` - log in 
   * `DELETE /api/session` - log out 

### `restaurants`
   * `POST /api/restaurants` - create a restaurant
   * `GET /api/restaurants` - returns list of restaurants in DB
   * `GET /api/restaurants/:id` - returns a restaurant
   * `PATCH /api/restaurants/:id` - updates the restaurant information

### `reservations`
   * `POST /api/restaurants/:id/reservations` - create a reservation for a restaurant 
   * `GET /api/restaurants/:id/reservations` - returns all existing reservations for a restaurant
   * `GET /api/users/:id/reservations/:id` - returns user's reservations 
   * `PATCH /api/reservations/:id` - updates a reservation
   * `DELETE /api/reservations/:id` - deletes a reservation 

### `reviews` 
   * `POST /api/restaurants/:id/reviews` - creates a new review for a restaurant
   * `GET /api/restaurants/Lid/reviews` - returns all reviews for a restaurant
   * `GET /api/reviews` - returns all reviews 
   * `GET /api/reviews/:id` - returns a review 
   * `PATCH /api/review/:id` - updates a review 
   * `DELETE /api/reviews/:id` - deletes a review 

### `favorites` 
   * `POST /api/restaurants/:id/favorites` - likes a restaurant 
   * `GET /api/restaurants/:id/favorites` - get all favorites of a restaurant 
   * `DELETE /api/restaurants/:id` - un-likes a restaurant
