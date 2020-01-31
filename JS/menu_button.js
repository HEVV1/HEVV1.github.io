//Select DOM[Document Object Module] Items
//Our menu button
 const menuBtn = document.querySelector('.menu-btn');
//Menu which holding navigation panel
 const menu = document.querySelector('.menu');
//List of items in menu bar
 const menuNav = document.querySelector('.menu-nav');
//Div which holds our portrait
 const menuBranding = document.querySelector('.menu-branding');
//List of items
 const navItems = document.querySelectorAll('.nav-item');
 //Portrait image
 const portrait = document.querySelectorAll('.portrait');
 //OverLay box
 const overLay = document.querySelectorAll('.OverLayer');

//Additional variables
var count = 0;
var interval1;
var interval2;
var isMenuShown = false;
var isContactOpen = false;

//Intital state of menu
$(function() {
  $(menuBtn).on('click', function() {
      if (!isMenuShown && !isContactOpen) {
        showMenu();
        // Changing overlay color
        overlayColor();
        // Interval for links
        startInt();
        clearInt2();
        //Set menu state
        isMenuShown = true;
      }
      else {
        if (isContactOpen) {
          remove_Contact_Class();
          remove_contact_button_animation();
          backgroundColorChanging();
          isContactOpen = false;
        }
        else {
          removeMenu();
          clearInt1();
          reverseInt();
          backgroundColorChanging();
          //Set menu state
          isMenuShown = false;
        }
      }
  });
});

//Start interval to show animation of our text in menu
function startInt(){
interval1 = setInterval(function() {
    if (count <= 3)
    {
      $(navItems[count]).addClass('show')
      count++;
    }
      console.log(count);
  }, 100);
}
//Also make animation to our text but as they go out
function reverseInt() {
interval2 = setInterval(function() {
    if (count >= 0)
    {
      $(navItems[count]).removeClass('show')
      count--;
    }
      console.log(count);
  }, 100);
}
// Clear both intervals
function clearInt1() {
  clearInterval(interval1);
}
function clearInt2() {
  clearInterval(interval2);
}

// Encapuslation functinos
function showMenu() {
  // Remove acceleration
  $('.menu-nav').removeClass('acceleration');
  $('.menu-branding').removeClass('acceleration');
  $(menuBtn).addClass('close');
  // Add show class for menu to enable visibility
  $(menu).addClass('show');
  // Translate menu branding
  $(menuBranding).addClass('translate-portrait-holder');
  // Translate menu links holder
  $(menuNav).addClass('translate-links');
  // Additional animation for image
  $(portrait).addClass('translate-portrait');

}

function removeMenu() {
  $(menuBtn).removeClass('close');
  $(menu).removeClass('show');
  $(menuNav).removeClass('translate-links');
  $(menuBranding).removeClass('translate-portrait-holder');
  $(portrait).removeClass('translate-portrait');
}

function overlayColor() {
  // Overlay color changing
  $(overLay).css('background', 'rgb(0,0,0)');
  $(overLay).css('opacity', '1');
}
