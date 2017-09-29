$(function() {

    var createElements = function(singlePoll) {
        $card = $('.card-body');

        $title = $("<h4>").addClass("card-title").text(singlePoll.title);
        $description = $("<p>").addClass("card-text").text(singlePoll.description);

        singlePoll.options.forEach(function (eachOption) {
          $eachOption = $('<a>').addClass("list-group-item list-group-item-action");
          $('<span>').addClass("col-sm-6").text(eachOption.optionName).appendTo($eachOption);
          $('<input>').addClass("col-sm-4").data("optionId", eachOption.optionId).attr("placeholder", "1, 2, 3 etc." ).appendTo($eachOption);
          $eachOption.appendTo($(".list-group"));
        });

        $description.prependTo($card);
        $title.prependTo($card);

    }

    var loadPoll = function() {
        var currentPath = window.location.pathname;
        var randomKey = currentPath.substr(currentPath.lastIndexOf('/') + 1); // randomKey is last segment of currentPath
        $.ajax({
            type: "GET",
            url: "/api/polls/" + randomKey,
            dataType: 'json',
        }).done((onePoll) => {
            createElements(onePoll);
        });
    };

    loadPoll();

    $('#the-submit-button').on('submit', function (event) {

      event.preventDefault();

      votes = [
        {optionId: 10, score: 3},
        {optionId: 10, score: 2},
        {optionId: 10, score: 1}
      ];

      var oneAnswer = {
        first_name: "ABC",
        votes: votes
      };

      $.ajax({
        type: "POST",
        url: "/api/answers",
        data: JSON.stringify(oneAnswer),
        contentType: "application/json"
      }).done(
        //...
      );

      console.log(event);
    });

})
