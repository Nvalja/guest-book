const API_URL = process.env.REACT_APP_API_URL;
const USERS_URL = `${API_URL}/users`;

export const getUsers = async () => {
  const response = await fetch(USERS_URL);

  return response.json();
}

export const addUser = async (user) => {
  const response = await fetch(USERS_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(user),
  });

  return response.json();
}