$(() => {

    //create poll item option
    function newOption() {
        //create container for options
        let $container = $("<div>").addClass("options-container");
        // append to container
        let $option = $("<li>").text($("#myInput").val()).addClass("list-option list-group-item");

        var currentInput = $("#myInput").val();

        if (currentInput.length === 0) {

            swal({
                title: 'Try again!',
                text: '',
                type: 'success',
                icon: '/images/pollmaster-optionerror.png'
            });

        } else {

            $option.prependTo(".options-container");;
            $('#myInput').val('');
            $('#myInput').focus()
        }

    }

    //create a new link for the poll and results

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

        for (var i = 0; i < $("li.list-option").length; i++) {
            optionArray.push($("li.list-option")[i].innerHTML);
        }

        if (title.length === 0 || optionArray.length < 2) {

            swal({
                title: 'Try again!',
                text: '',
                type: 'success',
                icon: '/images/pollmaster-formalert.png'
            });
        } else {

            swal({
                title: 'Your links are being prepared!',
                text: '',
                type: 'success',
                icon: '/images/pollmaster-success.jpg'
            });

            // insert the body of the submit to db using ajax and knex
            $.ajax({
                method: "POST",
                url: "/api/polls",
                data: JSON.stringify(newPoll),
                contentType: "application/json"
            }).done(function() { // .done for ajax HTTP request
                // window.location.href = "/" + pollKey + "/mailout";
                window.location.href = "/" + pollKey + "/mailout";
            });

            createPollLinks(pollKey);

            $('.options-container').reset(); // this is not working.  it's not clearing options results
            this.reset();
            $('#myInput').val('');
        }

    });

    $("#logoutButton").on('click', function(event) {
        event.preventDefault();
        $.post("/logout").done;
    });

});