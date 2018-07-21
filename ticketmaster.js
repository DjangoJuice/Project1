var key = "HC4MdAnqSfzwkac8R6UyzqQbTcHqzGuL";
var secret = "oUttZpkLGpTyWkuf";
var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=" + key;
console.log("queryurl: " + queryURL);

$.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response) {
        console.log(response);

    });