$(function() {

    var createElements = function(singlePoll) {
        $card = $('.card-body');

        $title = $("<h4>").addClass("card-title").text(singlePoll.title);
        $description = $("<p>").addClass("card-text").text(singlePoll.description);

        singlePoll.options.forEach(function (eachOption) {
          $eachOption = $('<a>').addClass("list-group-item list-group-item-action");
          $('<span>').addClass("col-sm-6").text(eachOption).appendTo($eachOption);
          $('<input>').addClass("col-sm-4").attr("placeholder", "1, 2, 3 etc." ).appendTo($eachOption);
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

})
