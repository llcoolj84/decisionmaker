$(() => {
  $( "form" ).on( "submit", function( event ) {

    let current_list = $("#myUL > li" ).serialize() ;
    console.log( current_list);
    alert(current_list);
  });
});


