$(document).ready(function() {
  // Getting references to the name input and owner container, as well as the table body
  var nameInput = $("#owner-name");
  var username= sessionStorage.getItem("user");
  $("#welcome").append(username);


  var locationInput = $("#owner-location");
  var ownerList = $("tbody");
  var ownerContainer = $(".owner-container");
  // Adding event listeners to the form to create a new object, and the button to delete
  // an Author
  $(document).on("submit", "#owner-form", handleAuthorFormSubmit);
  $(document).on("click", ".delete-owner", handleDeleteButtonPress);

  // Getting the initial list of Authors
  getAuthors();

  // A function to handle what happens when the form is submitted to create a new Author
  function handleAuthorFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (!nameInput.val().trim().trim()) {
      return;
    }
    // Calling the upsertAuthor function and passing in the value of the name input
    upsertAuthor({
      UserName: username,
      Name: nameInput.val().trim(),
      Location: locationInput.val().trim()
    });
  }

  // A function for creating an owner. Calls getAuthors upon completion
  function upsertAuthor(ownerData) {
    $.post("/api/Owner", ownerData)
      .then(getAuthors);
  }

  // Function for creating a new list row for owners
  function createAuthorRow(ownerData) {
    var newTr = $("<tr>");
    newTr.data("owner", ownerData);
    newTr.append("<td>" + ownerData.Name + "</td>");
    if (ownerData.Dog) {
      newTr.append("<td> " + ownerData.Dog.length + "</td>");
    } else {
      newTr.append("<td>0</td>");
    }
    newTr.append("<td><a href='/blog?owner_id=" + ownerData.Name + "'>Go to Posts</a></td>");
    newTr.append("<td><a href='/cms?owner_id=" + ownerData.Name + "'>Create a Post</a></td>");
    newTr.append("<td><a style='cursor:pointer;color:red' class='delete-owner'>Delete Author</a></td>");
    return newTr;
  }

  // Function for retrieving owners and getting them ready to be rendered to the page
  function getAuthors() {
    $.get("/api/Owner", function(data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createAuthorRow(data[i]));
      }
      renderAuthorList(rowsToAdd);
      nameInput.val("");
    });
  }

  // A function for rendering the list of owners to the page
  function renderAuthorList(rows) {
    ownerList.children().not(":last").remove();
    ownerContainer.children(".alert").remove();
    if (rows.length) {
      console.log(rows);
      ownerList.prepend(rows);
    }
    else {
      renderEmpty();
    }
  }

  // Function for handling what to render when there are no owners
  function renderEmpty() {
    var alertDiv = $("<div>");
    alertDiv.addClass("alert alert-danger");
    alertDiv.text("You must create an Author before you can create a Post.");
    ownerContainer.append(alertDiv);
  }

  // Function for handling what happens when the delete button is pressed
  function handleDeleteButtonPress() {
    var listItemData = $(this).parent("td").parent("tr").data("owner");
    var id = listItemData.id;
    $.ajax({
      method: "DELETE",
      url: "/api/Owner/" + id
    })
      .then(getAuthors);
  }
});
