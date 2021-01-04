$(document).ready(function () {
  // AOS Initialization
  AOS.init();

  // Hamburger Menu
  $("button.mobile-menu-btn").on("click", function () {
    if ($(this).hasClass("dropdown")) {
      $(this).removeClass("dropdown");
      $(this).children("i").removeClass("fa-times");
      $(this).children("i").addClass("fa-bars");
      $(".main-nav").slideToggle(300);
    } else {
      $(this).addClass("dropdown");
      $(this).children("i").removeClass("fa-bars");
      $(this).children("i").addClass("fa-times");

      $(".main-nav").slideToggle(300);
    }
  });

  // Spotlight Widget

  // Max number of spotlight items
  var spotlightItemsNumber = $(".spotlight-widget").children(".spotlight-item")
    .length;

  $(".spotlight-widget-controls button").on("click", function () {
    var activeSpotlightItem = $(".spotlight-item.active");
    var nextSpotlightItem = $(activeSpotlightItem).next(".spotlight-item");
    var prevSpotlightItem = $(activeSpotlightItem).prev(".spotlight-item");

    if ($(this).hasClass("next")) {
      if ($(nextSpotlightItem).length > 0) {
        $(activeSpotlightItem).removeClass("active");
        $(nextSpotlightItem).addClass("active");
      }
    } else if ($(this).hasClass("prev")) {
      if ($(prevSpotlightItem).length > 0) {
        $(activeSpotlightItem).removeClass("active");
        $(prevSpotlightItem).addClass("active");
      }
    }

    var activeSpotlightItem = $(".spotlight-item.active");

    if ($(activeSpotlightItem).index() == 1) {
      $(".spotlight-widget-controls button.prev").css("visibility", "hidden");
    } else {
      $(".spotlight-widget-controls button.prev").css("visibility", "visible");
    }
    if ($(activeSpotlightItem).index() == spotlightItemsNumber) {
      $(".spotlight-widget-controls button.next").css("visibility", "hidden");
    } else {
      $(".spotlight-widget-controls button.next").css("visibility", "visible");
    }
  });

  $(".spotlight-widget .toggle").on("click", function () {
    console.log("ciao");
    if ($(this).hasClass("open")) {
      $(".spotlight-widget").css("bottom", "-240px");
      $(this)
        .children("i")
        .removeClass("fa-arrow-down")
        .addClass("fa-arrow-up");
      $(this).removeClass("open");
    } else {
      $(".spotlight-widget").css("bottom", "0");
      $(this)
        .children("i")
        .removeClass("fa-arrow-up")
        .addClass("fa-arrow-down");
      $(this).addClass("open");
    }
  });

  // Press Widget

  // Max number of press items
  var pressItemsNumber = $(".press-widget").children(".press-item").length;

  // Prev/Next Buttons Click event
  $(".press-widget-controls button").on("click", function () {
    var clickedPressItem = $(this).parents(".press-item");
    console.log(clickedPressItem);
    var currentIndex = $(this).parents(".press-item").index();

    // Next button click event
    if ($(this).hasClass("next")) {
      if (currentIndex + 1 < pressItemsNumber) {
        $(clickedPressItem).removeClass("active");
        $(".press-widget")
          .children(".press-item")
          .eq(currentIndex + 1)
          .addClass("active");
      }

      // Prev button click event
    } else if ($(this).hasClass("prev")) {
      if (currentIndex - 1 >= 0) {
        $(clickedPressItem).removeClass("active");
        $(".press-widget")
          .children(".press-item")
          .eq(currentIndex - 1)
          .addClass("active");
      }
    }
  });
});
