<html>
    <head>
        <title>Raleigh Vibes</title>
        <meta charset="utf-8">
        <meta   
                http-equiv="X-UA-Compatible" 
                content="IE=edge">
        <meta 
                name="viewport" 
                content="width=device-width, initial-scale=1">

        

        <link 
                rel="stylesheet" 
                href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" 
                integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" 
                crossorigin="anonymous">

        <link 
                rel="stylesheet" 
                type="text/css" 
                media="screen" 
                href="./assets/css/bootstrap.css" />

        <link 
                rel="stylesheet"
                href="https://unpkg.com/basscss@8.0.2/css/basscss.min.css">
     
    </head>
<body>
    <header>
        <div class="container topHeader"></div>
        <div class="container bottomHeader">
        <div class="pageTitle">
            <img src="/assets/images/Logo-small.png"><h1>Raleigh Vibes</h1></div>
    </header>

    <div class="container-fluid mainSection">
            <div class="row">
                <div class="col-lg-9">
                    <form id="search-form">
                        <label>Date Range Start: <input type="date" id="date-start"></label>
                        <label>Date Range End: <input type="date" id="date-end"></label>
                        <button class="btn cardHdr" id="submit-button">Submit</button>
                    </form>
                    <br>

                    <table class="table table-dark" id="searchResultsTable">
                        <thead>
                            <tr class="table-heads">
                                <th scope="col">Band Name</th>
                                <th scope="col">Location</th>
                                <th scope="col">Ticket Price Range</th>
                                <th scope="col">Date</th>
                                <th scope="col">Start Time</th>
                                <th scope="col">Buy Ticket</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>

                <div class="col-sm-3">
                    <iframe id="iFrameVideo">youtube video placeholder</iframe><br>
                    <div class="card cardBorder">
                        <h5 class="card-header cardHdr text-center">Fill out the form to receive a ticket discount coupon!</h5>
                        <div class="card-body cardBody">
                            <form action="mail.php" method="POST" id="coupon-form">
                                <div class="form-group">
                                    <label for="name" class="bold container-fluid">Name</label>
                                    <input type="text" name="name" class="form-control cardBody cardBorder" id="name">
                                </div>
                                <div class="form-group">
                                    <label for="email" class="bold container-fluid">Email</label>
                                    <input type="email" name="email" class="form-control cardBody cardBorder" id="email">
                                </div>
                                <div class="form-group">
                                    <label for="phone" class="bold container-fluid">Phone (for text message)</label>
                                    <input type="tel" name="phone" class="form-control cardBody cardBorder" id="phone">
                                </div>
                                <div class="form-group">
                                    <label for="pref" class="bold container-fluid">Contact Preferance</label>
                                    <div>
                                        <input type="radio" name="pref" id="eMail" value="eMail" checked="checked">Send Coupon by Email<br>
                                        <input type="radio" name="pref" id="txt" value="txt">Send Coupon by Text Message<br>
                                    </div>
                                </div>
                                <button type="submit" class="btn cardHdr" id="formSubmit" value=" Send ">Submit</button>
                            </form>
                         <?php
                            echo "Hello World!";
                        ?>
                        </div>
                </div>
            </div>
        </div>
        </div>

    
    <div class="col p2 overflow-hidden rounded" id="footer">
        <div class="col col-4">
            <span>
            Alyssa Capps </br>
            Mike Mistarz </br>
            Mike Stewart </br>
            Sheila Ward </br>
            Victor Garrido</span>
        </div>

        <div class="col col-4" id="copyrightDiv">
        <div><span id="copyright">© Copyright 2018</span></div>
        </div>

        <div class="col col-4" id="asciiDiv">
        <span class="ascii">
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|~~~~~~~~~~~|</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|~~~~~~~~~~~|</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</p>
            <p>/~~\|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/~~\|</p>
            <p>\__/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\__/ </p>
        </span>
        </div>
    </div>

<script
    src="https://code.jquery.com/jquery-3.3.1.min.js"
    integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
    crossorigin="anonymous">
    </script>
<script 
    src="https://www.gstatic.com/firebasejs/4.12.0/firebase.js">
    </script>
<script src="https://cdn.jsdelivr.net/npm/moment@2.22.2/moment.min.js">
    </script>
<script src="ticketmaster.js">
    </script>
<script src="firebase.js">
    </script>
</body>
</html>
