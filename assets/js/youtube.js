$(document).ready(function(){
   
    function go_get(e) {
      var base_url = 'http://www.youtube.com/embed?listType=search&list=';
      var search_field = $('#userInput').val();
      var target_url = `${base_url}${search_field}`;
      var ifr = $('#iFrameVideo');
      ifr.attr('src', target_url)
      return false;
     }
  
    })