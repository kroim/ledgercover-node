(function($) {
  'use strict';
  $(function() {
    $(".profile-settings-open").on("click", function() {
      $("#profile-sidebar").toggleClass("open");
    });
    $(".profile-settings-close").on("click", function() {
      $("#profile-sidebar").removeClass("open");
    });
  });
})(jQuery);
