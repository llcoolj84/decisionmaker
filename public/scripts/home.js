$(() => {

  $('#create_poll').on( "submit", function( event ) {

    event.preventDefault(); //Prevent default action (prevent post to /home)

    // collect the body of the submit - to be done

    // insert the body of the submit to db using ajax and knex
    $.ajax({
      method: "POST",
      url: "/api/options"
    }).then ({
      // give me those two links (one result link and one link to send to other people)
    })


    let current_list = $("#myUL > li" );
    alert(current_list);
    console.log(current_list);

  });



});


