$(function() {

    var createElements = function(singlePoll) {
        $card = $('.card-body');

        $title = $("<h4>").addClass("card-title").text(singlePoll.title);
        $description = $("<p>").addClass("card-text").text(singlePoll.description);

        singlePoll.options.forEach(function(eachOption) {
            $eachOption = $('<a>').addClass("list-group-item list-group-item-action");
            $('<span>').addClass("col-sm-6").text(eachOption.optionName).appendTo($eachOption);
            $('<input>').addClass("col-sm-4").data("optionId", eachOption.optionId).attr("placeholder", "1, 2, 3 etc.").appendTo($eachOption);
            $eachOption.appendTo($(".list-group"));
        });

        $description.prependTo($card);
        $title.prependTo($card);

    };

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

    $('#the-submit-button').on('submit', function(event) {

        event.preventDefault();

        first_name = $('#first-name').val();
        if (first_name.length === 0) {
            return swal({
                title: 'Try again!',
                text: '',
                type: 'success',
                icon: '/images/pollmaster-enternameerror.jpg'
            });
        }

        votes = [];
        var passDotEach = true;
        $('#options-list input').each(function() {
            var userRank = $(this).val(); //Note userRank is a string, auto-cast happens in below codes
            if (($.isNumeric(userRank) && (Math.floor(userRank) == userRank)) === false) {
                passDotEach = false;
                return false; // return false to break out of .each()
            }
            votes.push({
                optionId: $(this).data("optionId"),
                score: $('#options-list input').length + 1 - userRank
            });
        });
        if (passDotEach === false) {
            return swal({
                title: 'Try again!',
                text: '',
                type: 'success',
                icon: '/images/pollmaster-rankchoiceserror.jpg'
            });
        }

        var oneAnswer = {
            first_name: first_name,
            votes: votes
        };

        $.ajax({
            type: "POST",
            url: "/api/answers",
            data: JSON.stringify(oneAnswer),
            contentType: "application/json"
        }).done(function() { // .done for ajax HTTP request
            window.location.href = "/thankyou";
        });

    })

})