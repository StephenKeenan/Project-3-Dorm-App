import axios from "axios";

const userController = {
  // Get the current user
  getUser: () => {
    return axios.get(`/api/users/me`);
  },

  // Gets all robot motions
  getDormChoices: () => {
    return axios.get(`/api/users/dormChoices`);
  },

  // Gets all favorites
  getFavorites: () => {
    return axios.get(`/api/users/favorites`);
  },

  // Post a favorite
  postFavorite: (data) => {
    return axios.post(`/api/users/favorites`, data);
  },

  deleteFavorites: (id) => {
    return axios.delete(`/api/users/favorites/` + id);
  },
};

export default userController;
