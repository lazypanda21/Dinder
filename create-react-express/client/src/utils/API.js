import axios from "axios";

export default {
  // Saves a user to the ownerlogin
  saveUser: function(userData) {
    return axios.post("api/Login/create", userData);
  },
  //logs user in
  logUser: function(userLog)   {
    return axios.post("api/Login", userLog);
  },

  //post a new owner to the owner table

  saveOwner: function(owner) {
    return axios.post("/api/Owner", owner);
  },

  updateOwner: function(username){
    return axios.put("/api/Owner", username);
  },
  // get dogs by breed
  getDogs :function(){
    return axios.get("/api/Dog");
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
    return axios.get("/api/Dog/", Breed );
  },

  // search for a dog by gender
  searchDogByGender: function(Search,Gender) {
    console.log("hereeeeee",Gender);
    console.log("hereeeeee", Search);
    return axios.get("/api/Dog/"+ Search + "/" + Gender);
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
