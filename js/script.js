/* =====================================
              Preloader
======================================*/          
$(window).on('load', function() {  // make sure that whole site is fully loaded
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
});

/* =====================================
                Team
======================================*/
$(function() {
  $("#team-members").owlCarousel({
    items: 2,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsive: {
      // breakpoint 0 and up
      0: {
        items: 1
      },
      // breakpoint 480 and up
      480: {
        items: 2
      }
    }
  });
});

/* =====================================
                Progress Bars
======================================*/
$(function() {
  $('#progress-elements').waypoint(function() {
    $('.progress-bar').each(function() {
      $(this).animate({width: $(this).attr("aria-valuenow") + "%"
      }, 2000);
    });
    this.destroy();
  }, {offset: 'bottom-in-view'});
});

/* =====================================
                Responsive Tabs
======================================*/
$(function() {
  $('#services-tabs').responsiveTabs({
    startCollapsed: 'accordion',
    animation: 'slide'
  });
});

/* =====================================
                Portfolio
======================================*/
$(window).on('load', function() {
  
  // Init Isotope
  $("#isotope-container").isotope({});

  // filter items on button click
  $("#isotope-filters").on('click', 'button', function() {
    
    // Get filter Value
    var filterValue = $(this).attr('data-filter')
    
    // filter portfolio
    $("#isotope-container").isotope({
      filter: filterValue
    });

    // Active button
    $('#isotope-filters').find('.active').removeClass('active');
    $(this).addClass('active');
  });
});

/* =====================================
                Magnifier
======================================*/
$(function() {
  $('#portfolio-wrapper').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    }
  });
});

/* =====================================
                Testimonials
======================================*/
$(function() {
  $("#testimonial-slider").owlCarousel({
    items: 1,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
  });
});

/* =====================================
                Stats
======================================*/
$(function() {
  $(".counter").counterUp({
    delay: 10,
    time: 2000
  });
});

/* =====================================
                Clients
======================================*/
$(function() {
  $("#clients-list").owlCarousel({
    items: 6,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsive: {
      // breakpoint 0 and up
      0: {
        items: 2
      },
      // breakpoint 480 and up
      480: {
        items: 3
      },
      // breakpoint 768 and up
      768: {
        items: 6
      }
    }
  });
});

/* =====================================
                Google Maps
======================================*/
$(window).on('load', function() {
  // Map Variables
  const addressString = '230 Broadway, New York, NY 10007';
  const myLatlng = {lat: 40.680050, lng: -73.417458};

  // 1. Render Map
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: myLatlng,
  });

  // 2. Add Marker
  const marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: "Click to see address"
  });

  // 3. Add Info Window
  const infowindow = new google.maps.InfoWindow({
    content: addressString,
  });

  // 4. Show info window when user clicks marker
  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false,
    });
  });
  // 4. Resize Function
  google.maps.event.addDomListener(window, 'resize', function() {
    var center = map.getCenter();
    google.maps.event.trigger(map, 'resize');
    map.setCenter(center);
  });
})

/* =====================================
                Navigation
======================================*/

// Show and Hide White Navigation
$(function() {
  
  // ON page load
  showWhiteNav();

  $(window).scroll(function() {
    showWhiteNav();
  });

  function showWhiteNav() {
    if ($(window).scrollTop() > 50) {
      $('nav').addClass('white-nav-top');
      $('.navbar-brand img').attr("src", "img/logo/logo-dark.png");

      // Show back to top button
      $("#back-to-top").fadeIn();
    } else {
      $('nav').removeClass('white-nav-top');
      $('.navbar-brand img').attr("src", "img/logo/logo.png");
      // Hide back to top button
      $("#back-to-top").fadeOut();
    }
  }
});

// Smooth Scrolling
$(function() {
  $('a.smooth-scroll').click(function(event) {
    event.preventDefault();

    var section_id = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(section_id).offset().top - 64
    }, 1250, "easeInOutExpo");
  });
});

/* =====================================
                Mobile Menu
======================================*/
$(document).ready(function() {
  // Show mobile navigation
  $('#mobile-nav-open-btn').click(function() {
    $("#mobile-nav").css('height', '100%');
  });
  // Close mobile navigation
  $('#mobile-nav-close-btn, #mobile-nav a').click(function() {
    $("#mobile-nav").css('height', '0%');
  });
})

/* =====================================
                Animation
======================================*/
$(function() {
  new WOW().init();
});

$(window).on('load', function() {
  $("#home-heading-1").addClass("animate__animated animate__fadeInDown animate__delay-1s animate__medium");
  $("#home-heading-2").addClass("animate__animated animate__fadeInLeft animate__delay-medium animate__medium");
  $("#home-text").addClass("animate__animated animate__zoomIn animate__delay-2s animate__medium");
  $("#home-btn").addClass("animate__animated animate__zoomIn animate__delay-medium1 animate__medium");
  $("#arrow-down i").addClass("animate__animated animate__fadeInDown animate__infinite animate__delay-3s animate__medium");
});