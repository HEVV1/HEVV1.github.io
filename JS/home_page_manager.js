//Function sound controller
const slider = document.querySelector("#myRange");
const output = document.querySelector(".SoundValue");
const vid = document.querySelector("#VidProp");
const soundBut = document.querySelector(".sound");
const slidercontainer = document.querySelector(".slidecontainer");
// Const variables for work Animation
const work_container = document.getElementsByClassName("work-container-holder");
var s;
var dropCounter;
// About
var windowScroll = (this).scrollY;
///////////////////////////////////////////////////////////////////////////////////////////

//Check scroll current state
$(function() {
  $(window).on("click", function() {
    if (work_container.length) {
      console.log("Work holder", $(work_container).eq(0).offset().top);
    }
      console.log("Window scrollTop", $(this).scrollTop());
  });
});

//Menu button hover
$(function() {
    $('.menu-btn').on('mouseover', function() {
      $(".btn-line").css('background', 'rgba(0, 255, 255, 1)');
    });

    $('.menu-btn').on('mouseleave', function() {
      $(".btn-line").css('background', 'rgba(255, 255, 255, 1)');
    });
});

//Show sound slider and hide
var sbTyped = false;
$(function() {
  $(soundBut).on('click', function() {

    if (!sbTyped)
    {
      $(slidercontainer).css('visibility', 'visible');
      $(slidercontainer).show();
      $(slidercontainer).css("transform", 'translateX(0px)');
      sbTyped = true;
    }
    else
    {
        $(slidercontainer).css("transform", 'translateX(200px)');
        $(slidercontainer).hide();
        sbTyped = false;
    }
  });
});

//Close slider by clicking outside the element itself
$(document).on('click', function(event) {
  if (!$(event.target).closest(soundBut).length && !$(event.target).closest(slidercontainer).length) {
    $(slidercontainer).css("transform", 'translateX(200px)');
    $(slidercontainer).hide();
    sbTyped = false;
  }
});

//Controling volume with slider
$(function() {
  output.innerHTML = slider.value + "%";
  vid.volume = slider.value * 0.01;
$(slider).on('input', function() {
  output.innerHTML = slider.value + "%";
  vid.volume = slider.value * 0.01;
  callme();
  });
});

//Changing the sound icon
function callme() {
  if(vid.volume <= 0){
    soundBut.innerHTML = "<i class='fas fa-volume-mute'></i>";
    soundBut.style.right = "27px";
    console.log(vid.volume);
  }
  else if (vid.volume >= 0 && vid.volume <= 0.35) {
    soundBut.innerHTML = "<i class='fas fa-volume-down'></i>";
    soundBut.style.right = "33px";
    console.log("low");
  }
  else if (vid.volume > 0.35 && vid.volume <= 1) {
    soundBut.innerHTML = "<i class='fas fa-volume-up'></i>";
    soundBut.style.right = "24px";
    console.log("medium");
  }
};
// Just adding abbr quote to buttons
$(function() {
  let abbr_previous = 'Load the previous AMV that played before'
  let abbr_next = 'Load the secod AMV according to list'
  $('.abbr').eq(0).attr('title', abbr_previous);
  $('.abbr').eq(1).attr('title', abbr_next);
});

//Scrolling animation set on the right sides the work holders
$(function() {
  for (let i = 0; i < work_container.length; i++) {
    let s = i % 2
    if (s == 0) {
      $(work_container).eq(i).css("transform", "translate(400%, 0)");
    }
    else {
      $(work_container).eq(i).css("transform", "translate(-400%, 0)");
    }
  }
});

// Function verifying web page resolution
$(function() {
  if ($(window).width() <= 1920 && $(window).height() <= 1080) {
    workAppereance(200, 900);
  }
  if (($(window).width() > 1920 && ($(window).width() <= 2440) && ($(window).height() > 1080) && $(window).height() <= 1440)) {
    workAppereance(200, 1500);
  }
  if (($(window).width() > 2440 && ($(window).width() <= 3840) && ($(window).height() > 1440) && $(window).height() <= 2160)) {
    workAppereance(200, 2000);
  }
});

// Function verifying on resize web page resolution
$(function() {
  $(window).resize(function() {
    if ($(window).width() <= 1920 && $(window).height() < 1080) {
      workAppereance(200, 900);
    }
    if (($(window).width() > 1920 && ($(window).width() <= 2440) && ($(window).height() >= 1080) && $(window).height() < 1440)) {
      workAppereance(200, 1500);
    }
    if (($(window).width() > 2440 && ($(window).width() <= 3840) && ($(window).height() >= 1440) && $(window).height() < 2160)) {
      workAppereance(200, 2000);
    }
  });
});
// Logic for work holder appearance on scroll
function workAppereance(negative, positive) {
  setTimeout(function() {
    //We are creating  cycle loop for the work-holder and looping thorugh them
    for (var i = 0; i < work_container.length; i++) {
      // If the current work-holder scrool-Y state is in the right current range like from [-300 + scrollTop] and [+900 + scrollTop]
      // then it will show those work-holders which are passed through the cycle
        if ($('.work-container-holder').eq(i).offset().top >= $(this).scrollTop() - negative && $('.work-container-holder').eq(i).offset().top <= $(this).scrollTop() + positive) {
              console.log("count",i);
              console.log("so we just show", $('.work-container-holder').eq(i).offset().top);
              scrollIngAnimation(i);
          }
    }
    $(window).scroll(function() {
        for (var i = 0; i < work_container.length; i++) {
            if ($('.work-container-holder').eq(i).offset().top >= $(this).scrollTop() - negative && $('.work-container-holder').eq(i).offset().top <= $(this).scrollTop() + positive) {
                  console.log("count",i);
                  console.log("so we just show", $('.work-container-holder').eq(i).offset().top);
                  scrollIngAnimation(i);
              }
        }
    });
  }, 1);

}

function scrollIngAnimation(counter) {
      $(work_container).eq(counter).css("transition", "ease-in-out 1000ms");
      $(work_container).eq(counter).css("visibility", "visible");
      $(work_container).eq(counter).css("transform", "translate(0, 0)");
      $(work_container).eq(counter).css("opacity", "1");
      $(work_container).eq(counter).css("transition-delay", 150 * counter + "ms");
};

// Show the about page images
var topPortrait = $('.info-portrait');
var topHobbies = $('.hobbies');
var topJob = $('.job');

if (topPortrait.length && topHobbies.length && topJob.length) {
topPortrait = topPortrait.offset().top;
topHobbies = topHobbies.offset().top;
topJob = topJob.offset().top;
}

$(function() {
  console.log("Portrait", topPortrait);
  console.log("Hobby", topHobbies);
  console.log("Hob", topJob);
  aboutScroll();
  $(window).scroll(function() {
    if (topPortrait >= $(this).scrollTop() - 500 && topPortrait <= $(this).scrollTop() + 700) {
      $('.info-portrait-image').addClass('return-images');
      $('.info-portrait-image').css('opacity', '1');
    }
    if (topHobbies >= $(this).scrollTop() - 700 && topHobbies <= $(this).scrollTop() + 700) {
      $('.hobbies-container-holder-image').addClass('return-images');
      $('.hobbies-container-holder-image').css('opacity', '1');
    }
    if (topJob >= $(this).scrollTop() - 400 && topJob <= $(this).scrollTop() + 700) {
      $('.job-image').addClass('return-images');
      $('.job-image').css('opacity', '1');
    }
  });
});
// Show the about page images at the start
function aboutScroll() {
  if (topPortrait >= $(this).scrollTop() - 500 && topPortrait <= $(this).scrollTop() + 700) {
    $('.info-portrait-image').addClass('return-images');
    $('.info-portrait-image').css('opacity', '1');
  }
  if (topHobbies >= $(this).scrollTop() - 700 && topHobbies <= $(this).scrollTop() + 700) {
    $('.hobbies-container-holder-image').addClass('return-images');
    $('.hobbies-container-holder-image').css('opacity', '1');
  }
  if (topJob >= $(this).scrollTop() - 400 && topJob <= $(this).scrollTop() + 700) {
    $('.job-image').addClass('return-images');
    $('.job-image').css('opacity', '1');
  }
};

//Contacts show menu
$(function() {
  $("#Contacts").on("click", function() {
      $('.menu-nav').addClass('acceleration');
      $('.menu-branding').addClass('acceleration');
      removeMenu();
      clearInt1();
      reverseInt();
      overlayColor();
      //Set menu state
      isMenuShown = false;
      //Set contact state
      isContactOpen = true;
      // Adding contact class
      add_Contact_Class();
      add_contact_button_animation();
      contact_icon_anim();
  });
});
// COntact footer
$(function() {
  $("#Contact-footer").on("click", function() {
    overlayColor();
    //Set contact state
    isContactOpen = true;
    // Adding contact class
    add_Contact_Class();
    add_contact_button_animation();
    contact_icon_anim();
  });
});

//Adding contact menu
function add_Contact_Class() {
  $(".contact").css("visibility", "visible");
  $(".contact-icons").css('transition-delay', "250ms");
  $(".contact-phone").css('transition-delay', "250ms");
  $(".contact-email").css('transition-delay', "250ms");
  $(".contact-icons").addClass("show");
  $(".contact-phone").addClass("show");
  $(".contact-email").addClass("show");
}
// Removing contact menu
function remove_Contact_Class() {
  $(".contact").css("visibility", "hidden");
  $(".contact-icons").css('transition-delay', "0ms");
  $(".contact-phone").css('transition-delay', "0ms");
  $(".contact-email").css('transition-delay', "0ms");
  $(".contact-icons").removeClass("show");
  $(".contact-phone").removeClass("show");
  $(".contact-email").removeClass("show");
}
// Button animation on open contactss
function add_contact_button_animation() {
  $(menuBtn).addClass('openContact');
}
function remove_contact_button_animation() {
  $(menuBtn).removeClass('openContact');
}
function contact_icon_anim() {
  for (var i = 0; i < $(".contact-icons-li").length; i++) {
    $(".contact-icons-li").eq(i).css("transition-delay", 200 * i + "ms");
    $(".contact-icons-li").eq(i).css("opacity", "1");
    console.log(i);
  }
}
