$(() => {



    function createPollElement() {

        let $title = $("<title>").addClass("title")

        let $description = $("<description>").addClass("description")

        let $poll_options = $("<poll_options>").addClass("poll_options")

        let $result = $("<div>").addClass("result")

        let $combine = $title.append($description).append($poll_options).append($result);
        return $combine;

    }

    //get request to load user polls into memory ready to be rendered

    function loadPolls() {
        $.ajax({
            url: '/tweets',
            method: 'GET',
            success: function(data) {
                let arr = data[data.length - 1];
                let $newPoll = createPollElement(arr);
                $('#polls-container').prepend($newPoll);
            }
        });
    }

    // render polls and prepend them in container

    function renderPolls() {

        $.ajax({
            url: '/tweets',
            method: 'GET',
            success: function(polls) {
                polls.forEach(function(eachP) {
                    let $poll = reatePollElement(eachP);
                    $('#polls-container').prepend($poll);

                })
            }
        });
    }

    renderPolls();

});