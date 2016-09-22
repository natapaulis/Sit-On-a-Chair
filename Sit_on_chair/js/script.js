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

  //Calculator

  var arrow = document.querySelectorAll(".list_arrow");
  var list = document.querySelectorAll(".list_panel li");
  var label = document.querySelectorAll(".list_label");
  var chairChosen = document.querySelector(".title");
  var colorChosen = document.querySelectorAll(".color");
  var patternChosen = document.querySelectorAll(".pattern");
  var transportChosen = document.querySelectorAll(".transport");
  var value = document.querySelectorAll(".value");
  var sum = document.querySelector(".sum");
  var transport = document.querySelector('#transport');
  var transportVal = Number(transport.dataset.transportPrice);
  var panelLeft = document.querySelector(".panel_left");
  var panelRight = document.querySelector(".panel_right");
  var summaryPanel = document.querySelector(".summary_panel");
  var clair = document.querySelector("#clair");
  var margarita = document.querySelector("#margarita");
  var selena = document.querySelector("#selena");

  for(var i = 0, len = arrow.length; i < len; i++){
    arrow[i].addEventListener("click", function(){
      var listToShow = this.nextSibling.nextSibling;
      if(listToShow.style.display == "block"){
        listToShow.style.display = "none";
      } else {
        listToShow.style.display = "block";
      }
    });
  }

  for(var i = 0, len = list.length; i < len; i++){
    list[i].addEventListener("click", function(){
      var name = this.innerText;
      var label = this.parentNode.parentNode.children[0];
      var price = Number(this.dataset.price);

      label.innerText = name;

      if(label.classList.contains("title_name")){
        chairChosen.innerText = name;
        value[0].innerText = price;
      } else if(label.classList.contains("color_name")){
          colorChosen[0].innerText = name;
          value[1].innerText = price;
          panelLeft.style.height = "150px";
          panelRight.style.height = "150px";
        } else {
            patternChosen[0].innerText = name;
            value[2].innerText = price;
            panelLeft.style.height = "175px";
            panelRight.style.height = "175px";
         }

      sum.innerText = Number(value[0].innerText) + Number(value[1].innerText) + Number(value[2].innerText) + Number(value[3].innerText);


      if(name === "Red"){
        clair.style.display = "block";
        clair.style.marginLeft = "38px";
        margarita.style.display = "none";
        selena.style.display = "none";

      } else if (name == "Black") {
          selena.style.display = "block";
          selena.style.marginLeft = "0";
          clair.style.display = "none";
          margarita.style.display = "none";
        }  else if (name == "Orange") {
             margarita.style.display = "block";
             margarita.style.marginLeft = "0";
             clair.style.display = "none";
             selena.style.display = "none";
          }
    });

  }

  transport.addEventListener("click", function(){

    if(transport.checked){
      transportChosen[0].innerText = "Transport";
      value[3].innerText = transportVal;
      panelLeft.style.height = "200px";
      panelRight.style.height = "200px";
      summaryPanel.style.height = "230px"
    } else {
      transportChosen[0].innerText = "";
      value[3].innerText = "";
    }

    sum.innerText = Number(value[0].innerText) + Number(value[1].innerText) + Number(value[2].innerText) + Number(value[3].innerText);

  });

});
