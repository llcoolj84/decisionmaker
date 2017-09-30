$(() => {

    function createPollElement(pollHistory) {
        //create container for history
        let $container = $("<div>").addClass("list_results");
        // create title and append to container 
        let $title = $("<button>").addClass("list-group-item list-group-item-action active")
            .attr('id', 'title').text(pollHistory.title);

        $container.append($title);
        // create description and append to container 
        let $description = $("<button>").addClass("list-group-item list-group-item-action")
            .attr('id', 'description').attr('disabled', "").text(pollHistory.description);

        $container.append($description);

        pollHistory.poll_options.forEach(function(eachOption) {
            // create poll options and append to container 
            let $poll_options = $("<button>").addClass("list-group-item list-group-item-action")
                .attr('id', 'poll_options').attr('disabled', "").text(eachOption.option_name + ': ' + eachOption.score);

            $poll_options.appendTo($container);

        })

        // create results and append to container 
        let $results = $("<button>").addClass("list-group-item list-group-item-action")
            .attr('id', 'results').attr('disabled', "").text(pollHistory.winner + '     ' + '✔️');

        $container.append($results);

        // create vote link and append to container 
        let $voteLink = $("<button>").addClass("list-group-item list-group-item-action")
            .attr('id', 'vote_link').html(pollHistory.vote_link);
        $container.append($voteLink);

        //take container and prepend to class "list results on html"
        $container.prependTo(".list_results");
    }

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

    var poll_options = reduce_borda_count(singlePollAnswers);

    let theWinner = winner(poll_options);

    var singlePollHistory = {
        title: "TTT",
        description: "ddddddddddddddddddddddddd",
        poll_options: poll_options,
        winner: theWinner,
        vote_link: "http://www.google.ca"
    };

    createPollElement(singlePollHistory);

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

    function winner(dataArr) {

        var max = 0;
        var name = '';
        dataArr.forEach(function(eachElem) {
            if (eachElem.score > max) {
                name = eachElem.option_name;
                max = eachElem.score;
            }
        });

        return name;
    }

});