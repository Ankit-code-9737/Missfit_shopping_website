
/* Top bar mini slider*/

jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });
  
    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;
    
    $('#slider').css({ width: slideWidth, height: slideHeight });
    
    $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
    
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});

/* Top bar mini slider*/

/* Mega menu*/

$(document).ready(function () {
$('.navbar-light .dmenu').hover(function () {
        $(this).find('.sm-menu').first().stop(true, true).slideDown(500);
    }, function () {
        $(this).find('.sm-menu').first().stop(true, true).slideUp(0)
    });
});
 
$(document).ready(function() {
    $(".megamenu").on("click", function(e) {
    e.stopPropagation();
    });
});

$(".navbar-toggler").click(function(){
  $("#mobile_nav").toggleClass("main");
});

$(".post-slide").hover(function(){
  $(this).toggleClass("active");
});

$(".nav-menu").hover(function(){
  $(this).toggleClass("active");
});

$(".hearticonfill").click(function(){
  $(this).toggleClass("active");
});

$(".toggle-event-stock").click(function(){
  $(this).toggleClass("active");
});

$(".file-event").click(function(){
  $(this).toggleClass("active");
});



$('.cart ul li a').click( function(){
    if ( $(this).hasClass('current') ) {
        $('li a.current img').removeClass('current');
    } else {
        $('li a.current img').removeClass('current');
        $(this).addClass('current');    
    }
});


/* owl-carousel*/

$(document).ready(function() {
    $("#news-slider").owlCarousel({
        items : 4,

        itemsDesktop:[1199,3],
        itemsDesktopSmall:[980,2],
        itemsMobile : [600,1.5],
        navigation:true,
        navigationText:["",""],
        pagination:true,
        autoPlay:false
    });
});
/* owl-carousel*/

/* owl-carousel*/

$(document).ready(function() {
    $("#news-slider2").owlCarousel({
        items : 4,
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[980,2],
        itemsMobile : [600,1.5],
        navigation:true,
        navigationText:["",""],
        pagination:true,
        autoPlay:false
    });
});
/* owl-carousel*/

/* owl-carousel*/

$(document).ready(function() {
    $("#news-slider3").owlCarousel({
        items : 4,
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[980,2],
        itemsMobile : [600,1.5],
        navigation:true,
        navigationText:["",""],
        pagination:true,
        autoPlay:false
    });
});
/* owl-carousel*/

/* owl-carousel*/

$(document).ready(function() {
    $("#news-slider4").owlCarousel({
        items : 1,
        itemsDesktop:[1199,1],
        itemsDesktopSmall:[980,1],
        itemsMobile : [600,1],
        navigation:true,
        navigationText:["",""],
        pagination:true,
        autoPlay:false,
        slideSpeed : 1500

    });
});
/* owl-carousel*/

/* owl-carousel*/

$(document).ready(function() {
    $("#news-slider5").owlCarousel({
        items : 1,
        itemsDesktop:[1199,1],
        itemsDesktopSmall:[980,1],
        itemsMobile : [600,1],
        navigation:true,
        navigationText:["",""],
        pagination:true,
        autoPlay:false,
        slideSpeed : 1500
    });
});
/* owl-carousel*/

/* owl-carousel*/

$(document).ready(function() {
    $("#news-slider6").owlCarousel({
        items : 4,
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[980,2],
        itemsMobile : [600,1.5],
        navigation:true,
        navigationText:["",""],
        pagination:true,
        autoPlay:false,
        
    });
});
/* owl-carousel*/



$(document).ready(function(){    
    $('.hearticonfill').on('click', function(e) {           
        $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().addClass('active');            
    });    
});


$(function() {
setTimeout(function() { $(".favourite-label-show").fadeOut(1000); }, 5000)

})



$('.user-profile-close').click(function() {
    location.reload();
});


// $(".active-mobile").click(function(){
//   $(this).toggleClass("active");
// });

$('.active-mobile').click( function(){
    if ( $(this).hasClass('active') ) {
        $(this).removeClass('active');
    } else {
        $('.active-mobile.active').removeClass('active');
        $(this).addClass('active');    
    }
});

const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);

// for menu tabination

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

 $('.panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.panel-heading').addClass('active');
  });

  $('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.panel-heading').removeClass('active');
  });


$('.carousel').carousel({
  interval: false,
});