$(document).ready(function() {
  // Getting jQuery references to the post body, title, form, and owner select
  var dogname = $("#dogname");
  var dogbreed = $("#dogbreed");
  var doggender = $("#doggender");
  var dogweight = $("#dogweight");
  var dogage = $("#dogage");
  var cmsForm = $("#cms");
  var username= sessionStorage.getItem("user");
  // Adding an event listener for when the form is submitted
  $(cmsForm).on("submit", handleFormSubmit);
  // Gets the part of the url that comes after the "?" (which we have if we're updating a post)
  var url = window.location.search;
  var postId;
  var ownerId;
  // Sets a flag for whether or not we're updating a post to be false initially
  var updating = false;

  

  if (url.indexOf("?post_id=") !== -1) {
    postId = url.split("=")[1];
    getDogData(postId, "dog");
  }
  // Otherwise if we have an owner_id in our url, preset the author select box to be our Author
  else if (url.indexOf("?owner_id=") !== -1) {
    ownerId = url.split("=")[1];
  }

  // Getting the authors, and their posts
  getOwner();

 
  // A function for handling what happens when the form to create a new post is submitted
  function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the post if we are missing a body, title, or owner
    if (!dogbreed.val().trim() || !dogname.val().trim() || !dogage.val().trim()||!dogweight.val().trim()) {
      return;
    }
    // Constructing a newDog object to hand to the database
    var newDog = {
      DogName: dogname.val().trim(),
      Breed: dogbreed.val().trim(),
      Age: dogage.val(),
      Weight: dogweight.val(),
      Gender: doggender.val().trim(),
      UserName: ownerId
    };

    // If we're updating a post run updateDog to update a post
    // Otherwise run submitDog to create a whole new post
    if (updating) {
      newDog.DogName = postId;
      updateDog(newDog);
    }
    else {
      submitDog(newDog);
    }
  }

  // Submits a new post and brings user to blog page upon completion
  function submitDog(post) {
    $.post("/api/Dog", post, function() {
      window.location.href = "/blog";
    });
  }

  // Gets dog data for the current post if we're editing, or if we're adding to an owner's existing posts
  function getDogData(id, type) {
    var queryUrl;
    switch (type) {
    case "dog":
      queryUrl = "/api/Dog/" + id;
      break;
    case "owner":
      queryUrl = "/api/Owner/" + id;
      break;
    default:
      return;
    }
    $.get(queryUrl, function(data) {
      if (data) {
        console.log(data.AuthorId || data.id);
        // If this post exists, prefill our cms forms with its data
        dogbreed.val(data.Breed);
        dogname.val(data.DogName);
        doggender.val(data.Gender);
        dogweight.val(data.Weight);
        dogage.val(data.Age);
        // If we have a post with this id, set a flag for us to know to update the post
        // when we hit submit
        updating = true;
      }
    });
  }

  // A function to get Owners and then render our list of Owners
  function getOwner() {
    $.get("/api/Owner", renderOwnerList);
  }
  
  // // Creates the owner options in the dropdown
  function createOwnerRow(owner) {
    var listOption = $("<option>");
    listOption.attr("value", owner.id);
    listOption.text(owner.name);
    return listOption;
  }

  // Update a given post, bring user to the blog page when done
  function updateDog(newdog) {
    $.ajax({
      method: "PUT",
      url: "/api/Dog",
      data: newdog
    })
      .then(function() {
        window.location.href = "/blog";
      });
  }




  function renderOwnerList(data) {
    if (!data.length) {
      window.location.href = "/authors";
    }
    $(".hidden").removeClass("hidden");
    var rowsToAdd = [];
    for (var i = 0; i < data.length; i++) {
      rowsToAdd.push(createOwnerRow(data[i]));
    }
    
    console.log(rowsToAdd);

  }
  

  console.log("askjdhaksjdhsakjdhasd",ownerId);
  console.log("akldjaksldaskldjkalsd",postId);
});


