var key = "HC4MdAnqSfzwkac8R6UyzqQbTcHqzGuL";
var secret = "oUttZpkLGpTyWkuf";
//query url including raleigh location
var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=" + key + "&city=Raleigh" + "&sort=date,asc"
console.log("queryurl: " + queryURL);

$.ajax({
    url: queryURL,
    method: "GET",
    datatype: "json",
}).then(function(json) {
    console.log(json);
    console.log(json._embedded.events[0]._embedded.attractions[0].name);
    showEvents(json);
});

function showEvents(json) {
    
    for(var i=0; i<json.page.size; i++) {
        
        // var tr = $('<tr>')
        // var td = $('<td>')
        // var eventname = tr + td + json._embedded.events[i].name;
        // var startdate = td.text(json._embedded.events[i].dates.start.localDate);
        // var min = td + "$" +json._embedded.events[i].priceRanges[0].min;
        // var max = "$" + json._embedded.events[i].priceRanges[0].max;
        // var picture = json._embedded.events[i].images[0].url;
        // var img = $("<img>")
        // $(img).attr("src", picture)
        // //ADD CORRECT LOCATION
        // $("tbody").append(eventname);
        // $("tbody").append(startdate);
        // $("tbody").append(min + "-" + max);
        // $("tbody").append(picture);
        // $("tbody").append(img);

        var row = $('<tr>');
        var eventName = json._embedded.events[i]._embedded.attractions[0].name;
        var td1 = $('<td>').text(eventName);
        var startDate = json._embedded.events[i].dates.start.localDate;
        var td2 = $('<td>').text(startDate);
        let min = json._embedded.events[i].priceRanges[0].min;
        let max = json._embedded.events[i].priceRanges[0].max;
        if(!json._embedded.events[i].priceRanges === undefined){
            return min = ''
            return max = ''
        } else {
        }
        console.log(min)
        var td3 = $('<td>').text(`$${min} - $${max}`);
        var startTime = json._embedded.events[i].dates.start.localTime;
        var td4 = $('<td>').text(startTime);
        
        
        row.append(td1).append(td2).append(td3).append(td4);
        $('tbody').append(row);
    };
};