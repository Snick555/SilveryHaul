$(document).ready(function(){
  $('.our-fleets .fleet').hover(
    function(){
      $(this).find('.truck-more').show();
    },
    function(){
      $(this).find('.truck-more').hide();
    }
  );
});
