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

    // singlePollAnswers comes from DB using ajax GET method

    let singlePollAnswers = [
        { option_id: 11, option_name: "Apple", score: 2 },
        { option_id: 12, option_name: "Banana", score: 1 },
        { option_id: 11, option_name: "Apple", score: 1 },
        { option_id: 12, option_name: "Banana", score: 2 },
        { option_id: 11, option_name: "Apple", score: 1 },
        { option_id: 12, option_name: "Banana", score: 2 },
        { option_id: 11, option_name: "Apple", score: 1 },
        { option_id: 12, option_name: "Banana", score: 2 },
        { option_id: 11, option_name: "Apple", score: 1 },
        { option_id: 12, option_name: "Banana", score: 2 },
        { option_id: 11, option_name: "Apple", score: 1 },
        { option_id: 12, option_name: "Banana", score: 2 },
        { option_id: 11, option_name: "Apple", score: 1 },
        { option_id: 12, option_name: "Banana", score: 2 },
        { option_id: 11, option_name: "Apple", score: 2 },
        { option_id: 12, option_name: "Banana", score: 1 },
        { option_id: 11, option_name: "Apple", score: 1 },
        { option_id: 12, option_name: "Banana", score: 2 },
        { option_id: 11, option_name: "Apple", score: 1 },
        { option_id: 12, option_name: "Banana", score: 2 },
        { option_id: 11, option_name: "Apple", score: 1 },
        { option_id: 12, option_name: "Banana", score: 2 },
        { option_id: 11, option_name: "Apple", score: 1 },
        { option_id: 12, option_name: "Banana", score: 2 },
        { option_id: 11, option_name: "Apple", score: 1 },
        { option_id: 12, option_name: "Banana", score: 2 },
        { option_id: 11, option_name: "Apple", score: 1 },
        { option_id: 12, option_name: "Banana", score: 2 },
        { option_id: 11, option_name: "Apple", score: 1 },
        { option_id: 12, option_name: "Banana", score: 2 },
        { option_id: 11, option_name: "Apple", score: 1 },
        { option_id: 12, option_name: "Banana", score: 2 },
        { option_id: 11, option_name: "Apple", score: 1 },
        { option_id: 12, option_name: "Banana", score: 2 }
    ];

    function reduce_borda_count(inputArr) {

        var temp = [];
        for (var i = 0; i < inputArr.length; i++) {
            var obj = inputArr[i];

            if (!temp[obj.option_id]) {
                temp[obj.option_id] = obj;
            } else {
                temp[obj.option_id].score += obj.score;
            }
        }

        var result = [];
        for (var prop in temp)
            result.push(temp[prop]);

        console.log(result);
        return result;
    }


    reduce_borda_count(singlePollAnswers);


});