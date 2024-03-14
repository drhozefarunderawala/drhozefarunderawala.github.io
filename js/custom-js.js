// Code to add/remove a class to Navbar for transparency effect
// $(window).on("scroll", function () {
//     if ($(window).scrollTop() > document.getElementById("text_slogan")?.offsetTop - 11) {
//         document.getElementById("navbar_top").classList.add("header-fixed");
//     } else {
//         //remove the background property so it comes transparent again (defined in your css)
//         document.getElementById("navbar_top").classList.remove("header-fixed");
//     }
// });

// Code to Collapse Navbar after clicking on a link
const navLinks = document.querySelectorAll(".nav-item");
const menuToggle = document.getElementById("navbar-collapse-toggle");
const bsCollapse = bootstrap.Collapse.getOrCreateInstance(menuToggle, {
  toggle: false,
});
navLinks.forEach((l) => {
  l.addEventListener("click", () => {
    if ($(".navbar-toggler-icon").is(":visible")) {
      bsCollapse.toggle();
    } else;
  });
});

// Code for the Preloader: The Loading Circle
$(window).on("load", function () {
  $(".loader").fadeOut();
  $("#preloader").delay(153).fadeOut("slow");
});

// Code for dynamically highlighting the navbar link when reached its section
let sections = document.querySelectorAll("section");
let navItemLinks = document.querySelectorAll(".navbar-nav li a");
$(window).on("scroll", function () {
  sections.forEach((section) => {
    let top = $(window).scrollTop();
    let offset = section.offsetTop - 72;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");
    if (top > offset && top < offset + height) {
      navItemLinks.forEach((link) => {
        link.classList.remove("active");
        if (id == "cover_image") id = "";
        document
          .querySelector(`.navbar-nav li a[href$='#${id}']`)
          .classList.add("active");
      });
    }
  });
});

// Code for scrolling to the section from Navbar with a given offset
const sectionLinks = [
  "a.about-me-link",
  "a.services-offered-link",
  "a.availability-link",
  "a.contact-me-link",
];

sectionLinks.forEach((sectionLink) => {
  $(sectionLink).click(function () {
    section = $(sectionLink).attr("href");
    posNav = $(section).offset().top - 53;
    $("html, body").stop().animate({ scrollTop: posNav }, 553, "linear");
  });
});

// Code for Carousel Slider
var totalNumberOfCards = 4;
carouselLogic();
window.onresize = function (event) {
  carouselLogic();
};

function carouselLogic() {
  const myCarouselElement = document.querySelector("#carousel_indicators");
  if (window.matchMedia("(max-width: 1352px)").matches) {
    const carousel = new bootstrap.Carousel(myCarouselElement, {
      interval: false,
    });

    var carouselWidth = $(".carousel-inner")[0].scrollWidth;
    var cardWidth = $(".carousel-item").width();

    var scrollPosition = 0;
    var windowWidth = $(window).width();
    var cardCountPlusOne = totalNumberOfCards + 1;
    if (windowWidth > 1052 && windowWidth < 1353) {
      cardCountPlusOne = 3 + 1;
    } else if (windowWidth > 700 && windowWidth < 1053) {
      cardCountPlusOne = 2 + 1;
    } else if (windowWidth <= 700) {
      cardCountPlusOne = 1 + 1;
    }

    $(".carousel-control-next").on("click", function () {
      if (scrollPosition < carouselWidth - cardWidth * cardCountPlusOne) {
        scrollPosition = scrollPosition + cardWidth;
        $(".carousel-inner")
          .stop()
          .animate({ scrollLeft: scrollPosition }, 553, "linear");
      } else {
        scrollPosition = 0;
        $(".carousel-inner")
          .stop()
          .animate({ scrollLeft: scrollPosition }, 553, "linear");
      }
    });

    $(".carousel-control-prev").on("click", function () {
      if (scrollPosition > 0) {
        scrollPosition = scrollPosition - cardWidth;
        $(".carousel-inner")
          .stop()
          .animate({ scrollLeft: scrollPosition }, 553, "linear");
      } else {
        scrollPosition =
          cardWidth * (totalNumberOfCards + 1 - cardCountPlusOne);
        $(".carousel-inner")
          .stop()
          .animate({ scrollLeft: scrollPosition }, 553, "linear");
      }
    });
  }
}
