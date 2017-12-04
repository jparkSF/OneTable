export const fetchAllReviews = () => (
  $.ajax({
    method: 'GET',
    url: '/api/reviews',
  })
);

export const createReview = review => (
  $.ajax({
    url: '/api/reviews',
    method: 'POST',
    data: { review }
  })
);