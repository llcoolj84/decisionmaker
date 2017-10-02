$(() => {



    function createPollLinks(key) {

        var abc = window.location.href;
        var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;
        var pathArray = window.location.pathname.split('/');
        var secondLevelLocation = pathArray[1];
        var pollURL = "/poll/" + secondLevelLocation;
        var resultURL = "/history/";


        var link1 = $("<a><h2>Link to Poll</h2></a>").attr('href', pollURL);
        $('#links').append(link1).append('<br>');

        // var link2 = $("<a>Link to Results</a>").attr('href', resultURL);
        // $('#links').append(link2).append('<br>');

    }
    createPollLinks();

    var clipboard = new Clipboard('.btn');

    clipboard.on('success', function(e) {
        console.info('Accion:', e.action);
        console.info('Texto:', e.text);
        console.info('Trigger:', e.trigger);

        e.clearSelection();
    });

    clipboard.on('error', function(e) {
        console.error('Accion:', e.action);
        console.error('Trigger:', e.trigger);
    });



});