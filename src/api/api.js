const API_URL = process.env.REACT_APP_API_URL;
const USERS_URL = `${API_URL}/users`;
const ALL_URL = `${API_URL}/all`;

export const getUsers = async() => {
  const response = await fetch(USERS_URL);

  if (!response.ok) {
    throw new Error(`${response.status} - ${response.statusText}`);
  }

  return response.json();
};

export const getAllUsers = async() => {
  const response = await fetch(ALL_URL);

  if (!response.ok) {
    throw new Error(`${response.status} - ${response.statusText}`);
  }

  return response.json();
};

export const addUser = async(user) => {
  const response = await fetch(USERS_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error(`${response.status} - ${response.statusText}`);
  }

  return response.json();
};
