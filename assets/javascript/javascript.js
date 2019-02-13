$(function() {
    $('a[href*="#"]').click(function() {
      var target = $(this.hash);
      if (target.length) {
        $("html, body").animate( {
            scrollTop: target.offset().top
          },
          1000
        );
      }
    });
  });

  $('#sideNav a').click(function(e) {
    e.preventDefault();
    $('#sideNav a').removeClass('active');
    $(this).addClass('active');
});
