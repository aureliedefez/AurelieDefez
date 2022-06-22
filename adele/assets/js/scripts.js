/*
//BIOGRAPHY
function myFunction0() {
  var x = document.getElementById("picAdl");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
    
  var x = document.getElementById("picAdl2");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
*/

//LIGHTBOX    
    const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('img')
images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active')
    const img = document.createElement('img')
    img.src = image.src
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
  })
})

lightbox.addEventListener('click', e => {
  lightbox.classList.remove('active')
})


$('#outerAdl').click(function(){
 // $('#collapseInfo').addClass("show");
  $('#banner').addClass("ouvert");
});

$('#innerAdl').click(function(){
//  $('#collapseInfo').removeClass("show");
  $('#banner').removeClass("ouvert");
});

$('#desktopAdl').click(function(){
  $('#banner').toggleClass("ouvert");
});
/*
//Mobile accordion  
$(function() {
  $("#accordion-top").accordion({
      collapsible: true,
      active: false, 
      heightStyle: "content"
  });
});
  
$(function() {
  $("#accordion").accordion({
      collapsible: true,
      active: false, 
      heightStyle: "content"
  });
  
});
*/ 