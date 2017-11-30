export const fetchAllRestaurants = () => (
  $.ajax({
    method: 'GET',
    url: '/api/restaurants',
  })
);

export const fetchRestaurant = restID => (
  $.ajax({
    method: 'GET',
    url: `api/restaurants/${restID}`,
  })
);

export const createRestaurant = restaurant => (
  $.ajax({
    url: '/api/restaurants',
    method: 'POST',
    data: { restaurant }
  })
);