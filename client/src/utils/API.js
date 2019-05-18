import axios from "axios";

export default {

  // Saves a book to the database
  saveUser: function(userData) {
    return axios.post("api/Login/create", userData);
  },
  loginUser: function(userData){
    return axios.post("api/Login", userData);
  }
};
