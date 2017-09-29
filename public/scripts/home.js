$(() => {

    //Generate Random String
    function generateRandomString() {
        const abcset = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; // 62 characters
        let randomsix = '';

        for (let i = 0; i < 6; i++) {
            randomsix = randomsix + abcset[Math.floor(Math.random() * 62)];
        }
        return randomsix;
    }


    $('#create_poll').on("submit", function(event) {

        event.preventDefault(); //Prevent default action (prevent post to /home)

        // collect the body of the submit - to be done

        var title = $("#poll_title").val();
        var description = $("#description").val();
        var optionArray = [];
        var pollKey = generateRandomString();

        for (var i = 0; i < $(".option").length; i++) {
            optionArray.push($(".option")[i].innerHTML);
        }

        var newPoll = {
            optionArray: optionArray,
            title: title,
            description: description,
            pollKey: pollKey
        };

        console.log(optionArray);
        console.log(title);
        console.log(description);
        console.log(pollKey);
        console.log(newPoll);

        // insert the body of the submit to db using ajax and knex
        $.ajax({
            method: "POST",
            url: "/api/options",
            data: JSON.stringify(newPoll),
            contentType: "application/json"
        }).then({
            // give me those two links (one result link and one link to send to other people)
        })

        // let current_list = $("#myUL > li" );
        // alert(current_list);
        // console.log(current_list);

    });

});