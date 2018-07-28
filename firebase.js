$(document).ready(function(){

     // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDVu8KeIlGvx_dWRws4Y0AGAqbe1Ez1sls",
        authDomain: "project1-d72cb.firebaseapp.com",
        databaseURL: "https://project1-d72cb.firebaseio.com",
        projectId: "project1-d72cb",
        storageBucket: "project1-d72cb.appspot.com",
        messagingSenderId: "321207562901"
    };
    firebase.initializeApp(config);

    // Define variable for Firebase Database
    var database = firebase.database(); 
   
    // function run when submit button is clicked
    $(document).on("click", "#formSubmit", function() {
        event.preventDefault();
        name = $("#name").val().trim();
        email = $("#email").val().trim();
        phone = $("#phone").val().trim();

        var pref = "";
        var selected = $("input[type='radio'][name='pref']:checked");
        if (selected.length > 0) {
            pref = selected.val();
        }

        console.log("name = " + JSON.stringify(name));
        console.log("email = " + JSON.stringify(email));
        console.log("phone = " + JSON.stringify(phone));
        console.log("pref = " + JSON.stringify(pref));

        // Create newCust object
        const newCust = {
            name: name,
            email: email,
            phone: phone,
            pref: pref
        };
        // Uploads newCust object to the database
        database.ref().push(newCust);

        // Display thank-you
        $("#Thanks").html("<h5>Thank you!  Your coupon is on its way!</h5>");
    });
});