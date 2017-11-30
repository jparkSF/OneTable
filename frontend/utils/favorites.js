export const createFavorite = (favorite) => (
  $.ajax({
    method: 'POST',
    url: '/api/favorites',
    data: favorite
  })
);

export const deleteFavorite = (favorite) => {

  return(
  $.ajax({
    method: 'DELETE',
    url: `api/favorites/${favorite}`,
    data: favorite
  })
);
};
