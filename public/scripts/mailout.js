$(() => {

    $('#create_poll').on("submit", function(event) {

            event.preventDefault(); //Prevent default action (prevent post to /home)

            // collect the body of the submit - to be done

            var title = $("#poll_title").val();
            var description = $("#description").val();
            var optionArray = [];
            var pollKey = generateRandomString();
            var newPoll = {
                optionArray: optionArray,
                title: title,
                description: description,
                pollKey: pollKey
            };

            for (var i = 0; i < $("li.list-option").length; i++) {
                optionArray.push($("li.list-option")[i].innerHTML);
            }
        }
    });

console.log(title); console.log(description); console.log(optionArray); console.log(pollKey); console.log(newPoll);


function createPollLinks(key) {

    var pollURL = "/poll/";
    var resultURL = "/result/";
    var result1 = pollURL + key;
    var result2 = resultURL + key;

    var link1 = $("<a>Link to Poll</a>").attr('href', result1);
    $('#links').append(link1).append('<br>');

    // var link2 = $("<a>Link to Results</a>").attr('href', result2);
    // $('#links').append(link2).append('<br>');

}

createPollLinks(pollKey);

});