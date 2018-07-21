var key = "HC4MdAnqSfzwkac8R6UyzqQbTcHqzGuL";
var secret = "oUttZpkLGpTyWkuf";
//query url including raleigh location
var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?" + "dmaId=560" + "&apikey=" + key;
console.log("queryurl: " + queryURL);

$.ajax({
    url: queryURL,
    method: "GET",
    datatype: "json",
    }).then(function(json) {
        console.log(json);

    });