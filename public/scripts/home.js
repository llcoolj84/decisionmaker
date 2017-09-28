$(() => {
  $('form button')[0].on( "click", function( event ) {
    event.preventDefault();
    let current_list = $("#myUL > li" ).serialize() ;
    console.log( current_list);
    alert(current_list);
  });
});


