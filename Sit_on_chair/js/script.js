document.addEventListener("DOMContentLoaded", function(){

  //Efekt podlisty
  var dropdownList = document.querySelector(".dropdown");
  var subList = document.querySelector(".dropdown-content");

  dropdownList.addEventListener("mouseover", function(){
    subList.style.display = "block";
  });

  dropdownList.addEventListener("mouseout", function(){
    subList.style.display = "none";
  });


  //Efekt obrazkow

  var galleryItemOne = document.querySelector(".gallery-item__photoOne");
  var galleryItemTwo = document.querySelector(".gallery-item__photoTwo");
  var galleryTitle = document.querySelectorAll(".gallery-item__title");

  galleryItemOne.addEventListener("mouseover", function(){
    galleryTitle[0].style.display ="none";
  });
  galleryItemOne.addEventListener("mouseout", function(){
    galleryTitle[0].style.display ="block";
  });

  galleryItemTwo.addEventListener("mouseover", function(){
    galleryTitle[1].style.display ="none";
  });
  galleryItemTwo.addEventListener("mouseout", function(){
    galleryTitle[1].style.display ="block";
  });

  //slider

  var previous = document.querySelector(".slider-arrow-left");
  var next = document.querySelector(".slider-arrow-right");
  var sliderParts = document.querySelectorAll(".slider-parts li");
  var index = 0;

  sliderParts[index].classList.add("visible");
  next.addEventListener("click", function(){
    sliderParts[index].classList.remove("visible");
    index += 1;
    if(index >= 3){
      index = 0;
    }
    sliderParts[index].classList.add("visible");
  });

  previous.addEventListener("click", function(){
    sliderParts[index].classList.remove("visible");
    index -= 1;
    if(index < 0){
      index = 2;
    }
    sliderParts[index].classList.add("visible");
  });

});
