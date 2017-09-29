$(() => {

  $('#create_poll').on( "submit", function( event ) {

    event.preventDefault(); //Prevent default action (prevent post to /home)

    // collect the body of the submit - to be done
    var optionArray = [];
    for (var i = 0; i < $(".option").length; i++) {
      optionArray.push($(".option")[i].innerHTML);
    }

    // insert the body of the submit to db using ajax and knex
    $.ajax({
      method: "POST",
      url: "/api/options",
      data: JSON.stringify(optionArray),
      contentType: "application/json"
    }).then ({
      // give me those two links (one result link and one link to send to other people)
    })

    // let current_list = $("#myUL > li" );
    // alert(current_list);
    // console.log(current_list);

  });

});


