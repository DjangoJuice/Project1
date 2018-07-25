$(document).ready(function(){
   
    function go_get(e) {
      var base_url = 'http://www.youtube.com/embed?listType=search&list=';
      var band_name = $('#bandName').val();
      var target_url = `${base_url}${band_name}`;
      var ifr = $('#iFrameVideo');
      ifr.attr('src', target_url)
      return false;
     }
  
    })