$('#submit-button').on('click', function(e){
    e.preventDefault()
    $('tbody').empty()
    var key = "HC4MdAnqSfzwkac8R6UyzqQbTcHqzGuL";
    var secret = "oUttZpkLGpTyWkuf";
    var dateStart = $('#date-start').val()
    var dateEnd = $('#date-end').val()
    var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=" + key + "&city=Raleigh" + "&sort=date,asc" + "&startDateTime=" + dateStart + "T01:00:00Z" + "&endDateTime=" + dateEnd + "T23:59:59Z"
    console.log("queryurl: " + queryURL);
    $.ajax({
        url: queryURL,
        method: "GET",
        datatype: "json",
    }).then(function(json) {
        console.log(json);
        showEvents(json);
    });  
})


//function to display data from the ajax call
function showEvents(json) {
    
    for(var i=0; i<json.page.size; i++) {

        var row = $('<tr>');
        var eventName = json._embedded.events[i]._embedded.attractions[0].name;

        // $( "#eventName" ).click(function() {
        var td1 = $('<td>').text(eventName).addClass('event');

        // function for calling the youtube video
        td1.on('click', function() {
            // set the call for the url
            var base_url = 'http://www.youtube.com/embed?listType=search&list=';
            var band_name = $(this).text();
            var target_url = `${base_url}${band_name}`;

            // set the attribute of the embedded iframe to the target url
            var ifr = $('#iFrameVideo');
            ifr.attr('src', target_url)
            return false;
        })

        var startDate = json._embedded.events[i].dates.start.localDate;
        var td2 = $('<td>').text(startDate);

        // bypass code for items that are sold out or do not have prices listed
        if(!json._embedded.events[i].priceRanges){
            var min = ''
            var max = ''
        } else {
            var min = json._embedded.events[i].priceRanges[0].min
            var max = json._embedded.events[i].priceRanges[0].max
        }

        console.log(min)
        var td3 = $('<td>').text(`$${min} - $${max}`);
        var startTime = json._embedded.events[i].dates.start.localTime;

        var start = moment(startTime, 'HH:mm').format('hh:mm a')
        var td4 = $('<td>').text(start);
      
        var td5 = $("<button>").text("Buy Now!");

        row.append(td1).append(td2).append(td3).append(td4).append(td5);
        $('tbody').append(row);
    };
};

