$(document).ready(function() {
    $(function() {
        var header = $(".image");
        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
            if (scroll >= 50) {
                header.addClass("scrolled");
            } else {
                header.removeClass("scrolled");
            }
        });
      
    });
  });

  $(document).ready(function() {
    $(function() {
        var header = $(".sticky-top");
        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
            if (scroll >= 50) {
                header.addClass("shadow");
            } else {
                header.removeClass("shadow");
            }
        });
      
    });
  });  