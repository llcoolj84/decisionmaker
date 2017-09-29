$(function() {

    var createElements = function(singlePoll) {
        $card = $('.card-body');

        $title = $("<h4>").addClass("card-title").text(singlePoll.title);
        $description = $("<p>").addClass("card-text").text(singlePoll.description);

<<<<<<< HEAD
        singlePoll.options.forEach(function (eachOption) {
          $eachOption = $('<a>').addClass("list-group-item list-group-item-action");
          $('<span>').addClass("col-sm-6").text(eachOption.optionName).appendTo($eachOption);
          $('<input>').addClass("col-sm-4").data("optionId", eachOption.optionId).attr("placeholder", "1, 2, 3 etc." ).appendTo($eachOption);
          $eachOption.appendTo($(".list-group"));
=======
        singlePoll.options.forEach(function(eachOption) {
            $eachOption = $('<a>').addClass("list-group-item list-group-item-action");
            $('<span>').addClass("col-sm-6").text(eachOption).appendTo($eachOption);
            $('<input>').addClass("col-sm-4").attr("placeholder", "1, 2, 3 etc.").appendTo($eachOption);
            $eachOption.appendTo($(".list-group"));
>>>>>>> 68ad90cf7adfb781c1cffa0af807b8df1546bdef
        });

        $description.prependTo($card);
        $title.prependTo($card);

    }

    var loadPoll = function() {
        var currentPath = window.location.pathname;
        var randomKey = currentPath.substr(currentPath.lastIndexOf('/') + 1);
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
