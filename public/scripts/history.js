$(() => {

    function createPollElement(pollHistory) {

        let $container = $("<div>").addClass("list_results");

        let $title = $("<button>").addClass("list-group-item list-group-item-action active")
            .attr('id', 'title').text(pollHistory.title);

        $container.append($title);

        let $description = $("<button>").addClass("list-group-item list-group-item-action")
            .attr('id', 'description').attr('disabled', "").text(pollHistory.description);

        $container.append($description);

        pollHistory.poll_options.forEach(function(eachOption) {
            //
            let $poll_options = $("<button>").addClass("list-group-item list-group-item-action")
                .attr('id', 'poll_options').attr('disabled', "").text(eachOption.option + ': ' + eachOption.pollcount);

            $poll_options.appendTo($container);

        })

        let $results = $("<button>").addClass("list-group-item list-group-item-action")
            .attr('id', 'results').attr('disabled', "").text(pollHistory.winner + '     ' + '✔️');

        $container.append($results);

        let $voteLink = $("<button>").addClass("list-group-item list-group-item-action")
            .attr('id', 'vote_link').html(pollHistory.vote_link);
        $container.append($voteLink);


        $container.prependTo(".list_results");
    }

    var singlePollHistory = {
        title: "TTT",
        description: "ddddddddddddddddddddddddd",
        poll_options: [
            { option: "Apple", pollcount: "20" },
            { option: "Banana", pollcount: "10" }
        ],
        winner: "abc",
        vote_link: "http://www.google.ca"
    };

    createPollElement(singlePollHistory);

    // createPollElement();

    // //get request to load user polls into memory ready to be rendered

    // function loadPolls() {
    //     $.ajax({
    //         url: '/polls',
    //         method: 'GET',
    //         success: function(data) {
    //             // let arr = data[data.length - 1];
    //             // let $newPoll = createPollElement(arr);
    //             // $('.list_results').prepend($newPoll);
    //             createPollElement();
    //         }
    //     });
    // }

    // // render polls and prepend them in container

    // function renderPolls() {

    //     $.ajax({
    //         url: '/polls',
    //         method: 'GET',
    //         success: function(polls) {
    //             polls.forEach(function(eachP) {
    //                 let $poll = reatePollElement(eachP);
    //                 $('.list_results').prepend($poll);

    //             })
    //         }
    //     });
    // }

    // renderPolls();

});