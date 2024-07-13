// Function to open the navigation sidebar
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

// Function to close the navigation sidebar
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// Function to toggle dropdown content visibility
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close dropdown if user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
          }
      }
  }
}

// 1. This code loads the YouTube Iframe API asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 2. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
      height: '720',
      width: '1280',
      videoId: 'M7lc1UVf-VE', // Default video ID, replace with your own
      playerVars: {
          'playsinline': 1
      },
      events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
      }
  });
}

// 3. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo(); // Auto-play the video when ready
}

// 4. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo, 6000); // Stop video after 6 seconds of playing
      done = true;
  }
}

function stopVideo() {
  player.stopVideo(); // Function to stop the video
}

// Additional functions and event listeners can follow here
// ...

// Example: Smooth scrolling functionality
$(document).ready(function() {
  var divs_class = "page-section";
  var id_offset_map = {};

  $('a').bind('click', function(e) {
      e.preventDefault();
      var target = $(this).attr("href");
      $('.wrap_scroll').animate({
          scrollTop: id_offset_map[target]
      }, 'slow');
      return false;
  });

  $(".wrap_scroll").scroll(function() {
      var scrollPos = $(".wrap_scroll").scrollTop();
      $("." + divs_class).each(function(i) {
          var sections = $("." + sections_class);

          divs.each(function(idx) {
              if (scrollPos >= id_offset_map["#" + this.id]) {
                  $('.menu>ul> a.active').removeClass('active');
                  $('.menu>ul> a').eq(idx).addClass('active');
              }
          });
      });
  }).scroll();
});

// Example: Modal functionality
var modal = document.getElementById("myModal");
var galleryImages = document.getElementsByClassName("gallery-img");
var span = document.getElementsByClassName("close")[0];
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

for (var i = 0; i < galleryImages.length; i++) {
  galleryImages[i].onclick = function() {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
  };
}

span.onclick = function() {
  modal.style.display = "none";
};
