import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveUser: function(userData) {
    return axios.post("api/Login/create", userData);
  },
  //logs user in
  logUser: function(userLog)   {
    return axios.post("api/Login", userLog);
  }
};
