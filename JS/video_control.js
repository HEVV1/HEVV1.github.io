// Looping the videos one by one
var video_list = ["99.mp4", "Alderamin on the sky.mp4", "Apocrypha-Holy To Me.mp4", "Artichoke Hearts.mp4", "Bakemonogatari.mp4", "Fate.mp4", "Fate-Give Me Back My Life.mp4", "Fate-Glory.mp4", "Fate-Phoenix.mp4", "Fate-Rise.mp4", "Fate-Runnin.mp4", "Garou vs Bang.mp4", "Glitter & Gold.mp4", "Light Up My Railgun.mp4", "Play with fire.mp4", "Railgun-Gasoline.mp4", "Railgun-Monster.mp4", "Shichika's Diamond Eyes.mp4", "Steins Gate.mp4", "Stray Dogs.mp4", "Super Hero One Pucnh Man.mp4", "Suzuya and Accelerator.mp4", "Swing Box.mp4", "The Art of War.mp4", "Youjo Senki-Feed The Machine.mp4"];
var start = 0;
var storedRanValue = [];
const video_count = video_list.length;
var getRandom;
var amv_settings = document.querySelector('.AMV-video');
var video_player = document.getElementById('VidProp');
let VideoManager = {
    setVideoFunctions: function() {
      this.setVideoLoading();
      this.setMuteAttribute();
    },
    //Loading background video without sound
    setVideoLoading: function() {
      //We are generating the random number on the start and end of the function
      var random = Math.floor((Math.random() * (video_count - start)) + start);
      //This random number is stored in "getRandom" to use it in other
      getRandom = random;
      //The first generated number is storing in array
      storedRanValue.push(getRandom);
      //Also we are loading the current video according to generated number
      setBackgroundVideo(getRandom);
      setSettingsVideo(getRandom);
      setTitle(getRandom);
      console.log('Stored video length', storedRanValue.length);
    },
    //Just force video playing with sound
    setMuteAttribute: function () {
      //Unmute video after page is loaded
      $(window).click(function() {
        let vid = document.getElementById("VidProp");
        vid.muted = false;
      });
    }
}
// Switch background video in settings
$(function() {
    $('.video-buttons').eq(1).on('click', function() {
      //if array last AMV index is not equal to video total count
      if (storedRanValue[storedRanValue.length - 1] < video_count - 1 ) {
        //getRandom++;
        //We should add decrement -1 cos index array with stored numbers doesn't actually starts with 1 but with 0 but array length starts with 1
        s = storedRanValue[storedRanValue.length - 1] + 1;
        setBackgroundVideo(s);
        setSettingsVideo(s);
        setTitle(s);
        storedRanValue.push(s);
        console.log('length', storedRanValue.length);
      }
      //if getRandom variable is 24 it becomes 0 but not won't affect on the buttons
      else if (storedRanValue[storedRanValue.length - 1] >= video_count - 1) {
        storedRanValue.splice(0, storedRanValue.length - 10);
        storedRanValue.push(0);
        setBackgroundVideo(storedRanValue[storedRanValue.length - 1]);
        setSettingsVideo(storedRanValue[storedRanValue.length - 1]);
        setTitle(storedRanValue[storedRanValue.length - 1]);
      }
    });

    $('.video-buttons').eq(0).on('click', function() {
      if (storedRanValue.length > 1) {
        storedRanValue.splice(storedRanValue.length - 1, 1);
        console.log('length', storedRanValue.length);
        setBackgroundVideo(storedRanValue[storedRanValue.length - 1]);
        setSettingsVideo(storedRanValue[storedRanValue.length - 1]);
        setTitle(storedRanValue[storedRanValue.length - 1]);
      }
    });
});

function setBackgroundVideo(randomNumber) {
  video_player.setAttribute("src", "AMV/"+video_list[randomNumber]);
  video_player.load();
  video_player.setAttribute('autoplay', 'autoplay');
}

function setSettingsVideo(randomNumber) {
  amv_settings.setAttribute("src", "AMV/"+video_list[randomNumber]);
  amv_settings.load();
  amv_settings.setAttribute('autoplay', 'autoplay');
}
//Cut the last 4 letters, why last? cos -4
function setTitle(randomNumber) {
  var wtf = (video_list[randomNumber]).slice(0, -4);
  $('.AMV-title').html(wtf);
}
