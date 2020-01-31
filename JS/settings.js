//Setting Container
const setting = document.querySelector(".settings-container");
const doc = document.querySelector(".footer-container-section2-nav");
//Color
const rgba = document.getElementsByClassName('RGBA-slider');
var dark = 'rgb(0,0,0)';
var green = 'rgb(0,255,0)';
var light = 'rgb(255,255,255)';
//Removing the menu with faster speed and then open the settings
var settingsBool = false;
$(function() {
  $('#Settings').on('click', function() {
    //
    $('.menu-nav').addClass('acceleration');
    $('.menu-branding').addClass('acceleration');
    removeMenu();
    backgroundColorChanging();
    clearInt1();
    reverseInt();
    //Set menu state
    isMenuShown = false;
    //
    //Transform setting container
     $(".settings").addClass('settings-appearance');

  });
});
// Setting footer link appereance
$(function() {
  $("#Settings-footer").on("click", function() {
      $(".settings").addClass('settings-appearance');
  });
});

//Close the settings by clicking near settings div box container
$(document).on('click', function(event) {
  if (
      !$(event.target).closest(setting).length &&
      !$(event.target).closest(menuNav).length &&
      !$(event.target).closest(soundBut).length &&
      !$(event.target).closest(slidercontainer).length &&
      !$(event.target).closest(doc).length
     )
  {
    $(".settings").removeClass('settings-appearance');
  }
});


//RGBA with sliders controlling
$(function() {
  $(rgba).on('input', function() {
    for (var i = 0; i < rgba.length; i++) {
      backgroundColorChanging();
      $('.RGBA-field').eq(i).val(rgba[i].value);
      //Text Color
      colorText(rgba[0].value, rgba[1].value, rgba[2].value);
    }
  });
});

//Spinner fields
var spinner = document.getElementsByClassName('RGBA-field');
$(function() {
  for (var i = 0; i < $('.RGBA-field').length; i++) {
    $('.RGBA-field').eq(i).val(rgba[i].value);
  }
  $('.RGBA-field').on('click', function() {
    for (var i = 0; i < $('.RGBA-field').length; i++) {
      rgba[i].value = $('.RGBA-field').eq(i).val();
      colorText(rgba[0].value, rgba[1].value, rgba[2].value);
      backgroundColorChanging();
    }
  });
});

//Encapsulation of changing background
function backgroundColorChanging() {
  //OverlayChanging
  $(overLay).css('background', 'rgb('+rgba[0].value+', '+rgba[1].value+', '+rgba[2].value+'');
  $(overLay).css('opacity', rgba[3].value * 0.01);
  //Menu
  $(menuNav).css('background', 'rgba('+rgba[0].value+', '+rgba[1].value+', '+rgba[2].value+', 0.9');
  $(menuBranding).css('background', 'rgba('+rgba[0].value + 20 +', '+rgba[1].value + 20 +', '+rgba[2].value + 20+', 0.9');
  //Settings
  $(setting).css('background', ' linear-gradient(rgba('+rgba[0].value+', '+rgba[1].value+', '+rgba[2].value+', 0.1), rgba('+rgba[0].value+', '+rgba[1].value+', '+rgba[2].value+', 0.3), rgba('+rgba[0].value+', '+rgba[1].value+', '+rgba[2].value+', 0.95), rgba('+rgba[0].value+', '+rgba[1].value+', '+rgba[2].value+', 1))');
  // Contacts
  $(".contact-icons").css('background', 'rgba('+rgba[0].value + 60 +', '+rgba[1].value + 60 +', '+rgba[2].value + 60 +', 0.9');
  $(".contact-phone").css('background', 'rgba('+rgba[0].value + 30 +', '+rgba[1].value + 30 +', '+rgba[2].value + 30 +', 0.9');
  $(".contact-email").css('background', 'rgba('+rgba[0].value + 10 +', '+rgba[1].value + 10 +', '+rgba[2].value + 10 +', 0.9');

}

$(function colorAtTheStart() {
  $(overLay).css('background', 'rgb('+rgba[0].value+', '+rgba[1].value+', '+rgba[2].value+'');
  $(overLay).css('opacity', rgba[3].value * 0.01);
  //Menu
  $(menuNav).css('background', 'rgba('+rgba[0].value+', '+rgba[1].value+', '+rgba[2].value+', 0.9');
  $(menuBranding).css('background', 'rgba('+rgba[0].value + 20 +', '+rgba[1].value + 20 +', '+rgba[2].value + 20+', 0.9');
  //Settings
  $(setting).css('background', ' linear-gradient(rgba('+rgba[0].value+', '+rgba[1].value+', '+rgba[2].value+', 0.1), rgba('+rgba[0].value+', '+rgba[1].value+', '+rgba[2].value+', 0.3), rgba('+rgba[0].value+', '+rgba[1].value+', '+rgba[2].value+', 0.95), rgba('+rgba[0].value+', '+rgba[1].value+', '+rgba[2].value+', 1))');
  // Contacts
  $(".contact-icons").css('background', 'rgba('+rgba[0].value + 60 +', '+rgba[1].value + 60 +', '+rgba[2].value + 60 +', 0.9');
  $(".contact-phone").css('background', 'rgba('+rgba[0].value + 30 +', '+rgba[1].value + 30 +', '+rgba[2].value + 30 +', 0.9');
  $(".contact-email").css('background', 'rgba('+rgba[0].value + 10 +', '+rgba[1].value + 10 +', '+rgba[2].value + 10 +', 0.9');
});

//Text color adjustment according to background color
function colorText(r, g, b) {
  if(r >= 150 && g >= 150 && b >= 150){
    for (var i = 0; i < $(".contact-icon-li-a").length; i++) {
      $(".contact-icon-li-a").eq(i).hover(function() {
        var iconID = $(this).attr("data");
           $("#"+iconID).css("color", "rgba(0, 255, 255, 1)");
      }, function() {
        var iconID = $(this).attr("data");
          $("#"+iconID).css("color", "black");
      });
    }
    $("*").css('color', dark);
    $(".RGBA-slider").css('background', dark);
    $(".color-title").css("border-color", dark);
    $(".video-title").css("border-color", dark);
    $(".mark").css("border-color", dark);
    navLinkHover(dark);
  }

  else if((r >= 230 && g >= 230) || (g >= 230 && b >= 230)){
    for (var i = 0; i < $(".contact-icon-li-a").length; i++) {
      $(".contact-icon-li-a").eq(i).hover(function() {
        var iconID = $(this).attr("data");
           $("#"+iconID).css("color", "rgba(0, 255, 255, 1)");
      }, function() {
        var iconID = $(this).attr("data");
          $("#"+iconID).css("color", "black");
      });
    }
    $("*").css('color', dark);
    $(".color-title").css("border-color", dark);
    $(".video-title").css("border-color", dark);
    $(".mark").css("border-color", dark);
    navLinkHover(dark);
  }
  else{
    for (var i = 0; i < $(".contact-icon-li-a").length; i++) {
      $(".contact-icon-li-a").eq(i).hover(function() {
        var iconID = $(this).attr("data");
           $("#"+iconID).css("color", "rgba(0, 255, 255, 1)");
      }, function() {
        var iconID = $(this).attr("data");
          $("#"+iconID).css("color", "white");
      });
    }
    $("*").css('color', light);
    $(".RGBA-slider").css('background', light);
    $(".color-title").css("border-color", light);
    $(".video-title").css("border-color", light);
    $(".mark").css("border-color", light);
    navLinkHover(light);
  }
};

function navLinkHover(color) {
  $('a').mouseenter(function() {
    $(this).css('color', 'rgba(0, 255, 255, 1)');
  });
  $('a').mouseleave(function() {
    $(this).css('color', color);
  });
};

//Star Rating
var isItCount = 0;
$(function() {
  $(".mark-counter-number").html(".../10");
  $(".mark-counter-text").html(". . .");
  for (let i = 1; i <= 10; i++) {
    $("#star" + i).on("mouseenter", function() {
        let countID = $(this).attr('data');
        for (let k = 0; k <= countID; k++) {
          if (isItCount == 0) {
            textRate(i);
            $("#star" + k).css('color', 'rgba(0, 255, 255, 1)');
            $("#star" + k).css('transition', 'ease-in-out 150ms');
            $(".mark-counter-number").html(i + "/10");
          }
        }
    });
    $("#star" + i).on("mouseleave", function asd() {
      for (let k = 1; k <= 10; k++) {
        if (isItCount == 0) {
          $(".mark-counter-number").html(".../10");
          $(".mark-counter-text").html(". . .");
          $("#star" + k).css('color', 'rgba(255, 255, 255, 1)');
          $("#star" + k).css('transition', 'ease-in-out 150ms');
        }
      }
    });
    //When we reate we disabling mouseleave and mouseenter to not
    //rate it again
    $("#star" + i).on("click", function() {
      isItCount = 1;
        $("#star" + i).off('mouseleave');
        $("#star" + i).off('mouseenter');
    });
  }
});

//Text Rate
function textRate(counter) {
  if (counter >= 1 && counter < 5) {
    $(".mark-counter-text").html("Bad");
  }
  else if(counter >= 5 && counter < 8)
  {
    $(".mark-counter-text").html("Not bad");
  }
  else if(counter >= 8 && counter <= 10)
  {
    $(".mark-counter-text").html("Just Okay");
  }
}
