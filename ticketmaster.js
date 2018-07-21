var key = "HC4MdAnqSfzwkac8R6UyzqQbTcHqzGuL";
var secret = "oUttZpkLGpTyWkuf";
//query url including raleigh location
var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=" + key + "&city=Raleigh"
console.log("queryurl: " + queryURL);

$.ajax({
    url: queryURL,
    method: "GET",
    datatype: "json",
}).then(function(json) {
    showEvents(json);
});

function showEvents(json) {
    for(var i=0; i<json.page.size; i++) {

        //ADD CORRECT LOCATION
        $("tbody").append("<p>"+json._embedded.events[i].name+"</p>");
    }
};