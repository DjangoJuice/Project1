var key = "HC4MdAnqSfzwkac8R6UyzqQbTcHqzGuL"
var startURL = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=" + key + "&city=Raleigh" + "&sort=date,asc"

$.ajax({
    url: startURL,
    method: "GET",
    datatype: "json",
}).then(function(json) {
    console.log(json);
    showEvents(json);
});  

$('#submit-button').on('click', function(e){
    e.preventDefault()
    $('tbody').empty()
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
        var bandNameCol = $('<td>').text(eventName).addClass('event');

        // function for calling the youtube video
        bandNameCol.on('click', function() {
            // set the call for the url
            var base_url = 'http://www.youtube.com/embed?listType=search&list=';
            var band_name = $(this).text();
            var target_url = `${base_url}${band_name}`;

            // set the attribute of the embedded iframe to the target url
            var ifr = $('#iFrameVideo');
            ifr.attr('src', target_url)
            return false;
        })

        var venueCol = $('<td>').text(json._embedded.events[i]._embedded.venues[0].name);

        //start date added to a column
        var startDate = json._embedded.events[i].dates.start.localDate;
        var dateCol = $('<td>').text(startDate);

        // bypass code for items that are sold out or do not have prices listed
        if(!json._embedded.events[i].priceRanges){
            var min = ''
            var max = ''
        } else {
            var min = json._embedded.events[i].priceRanges[0].min
            var max = json._embedded.events[i].priceRanges[0].max
        }

        //price range added to column
        console.log(min)
        var priceRangeCol = $('<td>').text(`$${min} - $${max}`);

        //Start time added to a column
        var startTime = json._embedded.events[i].dates.start.localTime;
        var start = moment(startTime, 'HH:mm').format('hh:mm a')
        var startTimeCol = $('<td>').text(start);
        

        //Adding urls to Buy now button and adding button to column
        var url = json._embedded.events[i].url;
        console.log(url);
        var buyCol = $("<button>").text("Buy Now!");
      
        //appending all columns to the row and appending row to the table
        row.append(bandNameCol).append(venueCol).append(priceRangeCol).append(dateCol).append(startTimeCol).append(buyCol);
        $('tbody').append(row);

        //click event for buying tickets
        var url = "window.location=" + "'" + json._embedded.events[i].url + "'";
        buyCol.attr('onclick', url);
        buyCol.addClass('btn')
        buyCol.addClass('btn-primary')
        buyCol.css('vertical-align', 'middle')
        buyCol.attr('target', "_blank");
    };

};
