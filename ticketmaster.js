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
    console.log(json);
    console.log(json._embedded.events[0]);
    showEvents(json);
});

function showEvents(json) {
    for(var i=0; i<json.page.size; i++) {
        var tr = "<tr>"
        var td = "<td>"
        var eventname = tr + td + json._embedded.events[i].name;
        var startdate = td + json._embedded.events[i].dates.start.localDate;
        //ADD CORRECT LOCATION
        $("tbody").append(eventname);
        $("tbody").append(startdate);
    }
};