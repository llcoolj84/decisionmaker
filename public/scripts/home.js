$(() => {
  $('form button').on( "click", function( event ) {
    event.preventDefault();
    let current_list = $("#myUL > li" );
    console.log( current_list);
    alert(current_list);
  });
});


