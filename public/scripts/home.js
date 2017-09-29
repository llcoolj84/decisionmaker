$(() => {

    //create a new link for the poll and results
    function createPollLink() {

        var link1 = $("<a href='http://lighthouselabs.com'>Link to Poll</a>");
        $('#links').append(link1).append('<br>');
        var link2 = $("<a href='http://google.com'>Link to Results</a>");
        $('#links').append(link2);

    }

    // function successAlert() {

    //           var alerSuccess = $("<div class='alert alert-success' role='alert'">
    //           <strong>Well done!</strong> You successfully read this important alert message.
    //         </div>");
    //           $('#links').append(link1).append('<br>');

    //       }
    ``
    //Generate Random String
    function generateRandomString() {
        const abcset = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; // 62 characters
        let randomsix = '';

        for (let i = 0; i < 6; i++) {
            randomsix = randomsix + abcset[Math.floor(Math.random() * 62)];
        }
        return randomsix;
    }

    //create an new Poll object on "submit"

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



        for (var i = 0; i < $(".option").length; i++) {
            optionArray.push($(".option")[i].innerHTML);
        }

        console.log(optionArray);
        console.log(title);
        console.log(description);
        console.log(pollKey);
        console.log(newPoll);


        if (title.length === 0 || optionArray.length === 0) {

            alert("Please include a poll 'title' and 'options' to submit");

        } else {

            // insert the body of the submit to db using ajax and knex
            $.ajax({
                method: "POST",
                url: "/api/polls",
                data: JSON.stringify(newPoll),
                contentType: "application/json"
            }).then
            createPollLink()

            this.reset();
        }

    });

});