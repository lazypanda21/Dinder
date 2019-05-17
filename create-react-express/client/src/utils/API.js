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
  },

  //post a new owner to the owner table

  saveOwner: function(owner) {
    return axios.post("api/Owner", owner);
  },

  // get dogs by breed
  getDogs :function(dogbreeds){
    return axios.get("/api/Dog",dogbreeds);
  },
  // search for owner by usernmae

  searchOwner:function(Username) {
    return axios.get("api/Owner/" + Username);
  },
  // search for dogs
  searchDogByName: function(DogName){
    return axios.get("/api/Dog/"+ DogName);
  },

  // post a dog info to dog table
  saveDog : function(dog) {
    return axios.post("/api/Dog",dog);
  },

  // search for a dog by breed
  searchDogByBreed: function(Breed) {
    return axios.get("/api/Dog/", Breed);
  },

  // search for a dog by gender
  searchDogByGender: function(Gender) {
    return axios.get("/api/Dog/", Gender);
  },
   // search for a dog by weight
   searchDogByWeight: function(Weight) {
    return axios.get("/api/Dog/", Weight);
  },
  
   // search for a dog by age
   searchDogByAge: function(Age) {
    return axios.get("/api/Dog/", Age);
  },

 

};
