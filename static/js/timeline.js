(function() {
  $(document).ready(function() {
    var timelineAnimate;
    timelineAnimate = function(elem) {
      return $(".timeline.animated .timeline-row").each(function(i) {
        var bottom_of_object, bottom_of_window;
        bottom_of_object = $(this).position().top + $(this).outerHeight();
        bottom_of_window = $(window).scrollTop() + $(window).height();
        if (bottom_of_window > bottom_of_object) {
          return $(this).addClass("active");
        }
      });
    };
    timelineAnimate();
    return $(window).scroll(function() {
      return timelineAnimate();
    });
  });

}).call(this);

//email replace
email=document.getElementById('email');email.innerHTML=email.text.replace('AT','&#64;').replace('DOT','&#46;');function detail(obj){if(obj.nextElementSibling.style.display!="block")
{obj.nextElementSibling.style.display="block";}else{obj.nextElementSibling.style.display="none";}}