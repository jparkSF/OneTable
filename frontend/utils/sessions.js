export const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  })
);

export const login = user => (
  $.ajax({
    method: 'POST',
    url: 'api/session',
    data: { user },
  })
);

export const logout = () => (
  $.ajax({
    url: '/api/session',
    method: 'DELETE'
  })
);


export const getUserInfo = (userId) => (
  $.ajax({
    url: `/api/users/${userId}`,
    method: 'GET'
  })
);