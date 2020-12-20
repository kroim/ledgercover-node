(function ($) {
    'use strict';

    var screenWidth = $(window).outerWidth();
    var navMenuItem = $("#navigation-tab-panel .screen-navigation-tab .nav-item");
    navMenuItem.not(this).attr('toggle-status', 'closed');
    navMenuItem.on("click", function () {
        if (screenWidth >= 768) {
            navMenuItem.removeClass("active");
            $(this).addClass("active");
        } else { // Triggers if the screen less than 768px
            var toggleStatus = $(this).attr('toggle-status');
            if (toggleStatus == 'closed') {
                navMenuItem.removeClass("active");
                $(this).addClass("active").attr("toggle-status", "opened");
                $(this).find(".nav-submenu").slideDown();
            } else {
                navMenuItem.removeClass("active");
                $(this).removeClass("active").attr("toggle-status", "closed");
                $(this).find(".nav-submenu").slideUp();
            }
        }
    });
    // $(window).on("resize", function () {
    //     alert("sdf");
    // });

    $(".navbar-toggler-right").on("click", function () {
        $("#navigation-tab-panel").toggleClass("sidemenu-opened");
    });
})(jQuery)