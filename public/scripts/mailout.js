$(() => {

    function giveMeLink () {
      var abc = window.location.href;
      var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;
      var pathArray = window.location.pathname.split('/');
      var secondLevelLocation = pathArray[1];
      var pollURL = "/poll/" + secondLevelLocation;
      return pollURL;
    }

    function createPollLinks(key) {

        var pollURL = giveMeLink ();
        var resultURL = "/history/";

        var link1 = $("<a><h2>Link to Poll</h2></a>").attr('href', pollURL).attr("target", "_blank");
        $('#links').append(link1).append('<br>');

        // var link2 = $("<a>Link to Results</a>").attr('href', resultURL);
        // $('#links').append(link2).append('<br>');

    }
    createPollLinks();

    // \\\\\\MAILGUN/////// \\

    // insert the body of the submit to db using ajax and knex
    var theVoteLink = {
      link: window.location.host + giveMeLink()
    };

    $.ajax({
        method: "POST",
        url: "/contact",
        data: JSON.stringify(theVoteLink),
        contentType: "application/json"
    }).done(function(result) { // .done for ajax HTTP request
        console.log(result);
    });

    $("#logoutButton").on('click', function (event) {
      $.post("/logout").done(function () {
        window.location.href = "/"
      });
    });
});
