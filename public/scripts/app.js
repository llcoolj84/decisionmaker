$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for(user of users) {
      $("<div>").text("User DB unique ID: " + user.id).appendTo($("body"));
      $("<div>").text("First Name: " + user.first_name).appendTo($("body"));
      $("<div>").text("Last Name: " + user.last_name).appendTo($("body"));
      $("<div>").text("Email: " + user.email).appendTo($("body"));
    }
  });;
});
