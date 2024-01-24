function openNav() {
document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
document.getElementById("mySidenav").style.width = "0";
}
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {
var dropdowns = document.getElementsByClassName("dropdown-content");
var i;
for (i = 0; i < dropdowns.length; i++) {
var openDropdown = dropdowns[i];
if (openDropdown.classList.contains('show')) {
openDropdown.classList.remove('show');
}
}
}

}

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src ="https://www.youtube.com/embed/y_UhiLHkuvg";
tag.src = "https://www.youtube.com/embed/tiIzGKQIXjc";
tag.src = "https://www.youtube.com/embed/_8HH3o_IBQQ";
tag.src = "https://www.youtube.com/embed/SzF0XVROZ4E";
tag.src = "https://www.youtube.com/embed/I36loD0bNf0";
tag.src = "https://www.youtube.com/embed/Dzw0ydhDUGc";
tag.src = "https://www.youtube.com/embed/5Jf_3CZ6rZ8";
tag.src = "www.youtube.com/watch?v=8FkmTAwkzvM";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
player = new YT.Player('player', {
height: '720',
width: '1280',
videoId: 'M7lc1UVf-VE',
playerVars: {
'playsinline': 1
},
events: {
'onReady': onPlayerReady,
'onStateChange': onPlayerStateChange
}
});
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
if (event.data == YT.PlayerState.PLAYING && !done) {
setTimeout(stopVideo, 6000);
done = true;
}
}
function stopVideo() {
player.stopVideo();
}

var div_parent_class_name;
var divs_class;
var id_offset_map = {};
$(document).ready(function() {
div_parent_class_name = "wrap_scroll";
divs_class = "page-section";

$('a').bind('click', function(e) {
e.preventDefault();
var target = $(this).attr("href")
$('.wrap_scroll').animate({
scrollTop: id_offset_map[target]
}, ('slow'), 600, function() {
/* location.hash = target-20; */ //attach the hash (#jumptarget) to the pageurl
});

return false;
});
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


function openSidebar() {
document.getElementById("mySidebar").style.display = "block";
}

function closeSidebar() {
document.getElementById("mySidebar").style.display = "none";
}


// Get the modal
var modal = document.getElementById("myModal");

// Get all elements with class "gallery-img"
var galleryImages = document.getElementsByClassName("gallery-img");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Loop through each gallery image
for (var i = 0; i < galleryImages.length; i++) {
  galleryImages[i].onclick = function() {
    // Set the modal to display
    modal.style.display = "block";
    
    // Set the modal image and caption based on the clicked image
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// Get the modal content (image) and caption elements
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
