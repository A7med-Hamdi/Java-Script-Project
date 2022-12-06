// (function ($) {
//   "use strict";

//   // NAVBAR
//   $(".navbar-nav .nav-link").click(function () {
//     $(".navbar-collapse").collapse("hide");
//   });

//   // CUSTOM LINK
//   $(".custom-link").click(function () {
//     var el = $(this).attr("href");
//     var elWrapped = $(el);
//     var header_height = $(".navbar").height() + 10;

//     scrollToDiv(elWrapped, header_height);
//     return false;

//     function scrollToDiv(element, navheight) {
//       var offset = element.offset();
//       var offsetTop = offset.top;
//       var totalScroll = offsetTop - navheight;

//       $("body,html").animate(
//         {
//           scrollTop: totalScroll,
//         },
//         300
//       );
//     }
//   });
// })(window.jQuery);

// slideer
var i = 1;
var slidePlayInterval;
window.onload = playImg();
function playImg() {
  document.getElementById("green").disabled = true;
  document.getElementById("red").disabled = false;
  function slides() {
    if (i < 7) {
      document.images[0].src = "./images/0" + [i + 1] + ".jpg";
      i++;
    } else {
      i = 0;
      document.images[0].src = "./images/0" + [i + 1] + ".jpg";
      i++;
    }
  }
  slidePlayInterval = setInterval(slides, 1000);
}

function stopImg() {
  document.getElementById("green").disabled = false;
  document.getElementById("red").disabled = true;
  clearInterval(slidePlayInterval);
}

function nextImg() {
  debugger;
  if (i < 7) {
    document.images[0].src = "./images/0" + [i + 1] + ".jpg";
    i++;
  } else {
    i = 0;
    document.images[0].src = "./images/0" + [i + 1] + ".jpg";
    i++;
  }
}
function previousImg() {
  if (i > 1) {
    document.images[0].src = "./images/0" + [i - 1] + ".jpg";
    i--;
  } else {
    i = 6;
    document.images[0].src = "./images/0" + [i + 1] + ".jpg";
    i--;
  }
}

var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");
var img5 = document.getElementById("img5");
var img6 = document.getElementById("img6");
var img7 = document.getElementById("img7");
var img8 = document.getElementById("img8");

function phones() {
  img1.src = "./images/phones/0.jpg";
  img2.src = "./images/phones/1.jpg";
  img3.src = "./images/phones/2.jpg";
  img4.src = "./images/phones/3.jpg";
  img5.src = "./images/phones/4.jpg";
  img6.src = "./images/phones/5.jpg";
  img7.src = "./images/phones/6.jpg";
  img8.src = "./images/phones/7.jpg";
}
function cars() {
  img1.src = "./images/cars/0.jpg";
  img2.src = "./images/cars/1.jpg";
  img3.src = "./images/cars/2.jpg";
  img4.src = "./images/cars/3.jpg";
  img5.src = "./images/cars/4.jpg";
  img6.src = "./images/cars/5.jpg";
  img7.src = "./images/cars/6.jpg";
  img8.src = "./images/cars/7.jpg";
}
function devices() {
  img1.src = "./images/device/0.jpg";
  img2.src = "./images/device/1.jpg";
  img3.src = "./images/device/2.jpg";
  img4.src = "./images/device/3.jpg";
  img5.src = "./images/device/4.jpg";
  img6.src = "./images/device/5.jpg";
  img7.src = "./images/device/6.jpg";
  img8.src = "./images/device/7.jpg";
}
function labs() {
  img1.src = "./images/labtob/0.jpg";
  img2.src = "./images/labtob/1.jpg";
  img3.src = "./images/labtob/2.jpg";
  img4.src = "./images/labtob/3.jpg";
  img5.src = "./images/labtob/4.jpg";
  img6.src = "./images/labtob/5.jpg";
  img7.src = "./images/labtob/6.jpg";
  img8.src = "./images/labtob/7.jpg";
}
function tvs() {
  img1.src = "./images/tv/0.jpg";
  img2.src = "./images/tv/1.jpg";
  img3.src = "./images/tv/2.jpg";
  img4.src = "./images/tv/3.jpg";
  img5.src = "./images/tv/4.jpg";
  img6.src = "./images/tv/5.jpg";
  img7.src = "./images/tv/6.jpg";
  img8.src = "./images/tv/7.jpg";
}

var product1,
  product2 = 0;
function addproduct(event) {
  product1 = document.getElementById("numberofcart");

  product2++;

  product1.innerHTML = product2;
}
