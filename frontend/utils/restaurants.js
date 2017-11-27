export const fetchAllRestaurants = () => (
  $.ajax({
    method: 'GET',
    url: '/api/restaurants',
  })
);

export const fetchRestaurant = restaurant => (
  $.ajax({
    method: 'GET',
    url: `api/restaurant/${restaurant.id}`
  })
);

export const createRestaurant = restaurant => (
  $.ajax({
    url: '/api/restaurants',
    method: 'POST',
    data: { restaurant }
  })
);