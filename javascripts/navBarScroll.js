$(document).ready(function() {
  $(window).scroll(function(e){
    if ($(this).scrollTop() > 0) {
      $(".navbar").addClass("bg-black-transparent")
    }
    else {
      $(".navbar").removeClass("bg-black-transparent")
    }
  });
});
