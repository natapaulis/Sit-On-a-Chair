document.addEventListener("DOMContentLoaded", function(){

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
  var count = 0;

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

      if(label.classList.contains("title_name") ){
        chairChosen.innerText = name;
        value[0].innerText = price;
        count += price;
        sum.innerText = count;
      } else if(label.classList.contains("color_name")){
          colorChosen[0].innerText = name;
          value[1].innerText = price;
          count += price;
          sum.innerText = count;
          panelLeft.style.height = "150px";
          panelRight.style.height = "150px";
        } else {
            patternChosen[0].innerText = name;
            value[2].innerText = price;
            count += price;
            sum.innerText = count;
            panelLeft.style.height = "175px";
            panelRight.style.height = "175px";
         }

    });
  }

  transport.addEventListener("click", function(){
    
    if(transport.checked){
      transportChosen[0].innerText = "Transport";
      value[3].innerText = transportVal;
      count += transportVal;
      sum.innerText = count;
      panelLeft.style.height = "200px";
      panelRight.style.height = "200px";
      summaryPanel.style.height = "230px"
    }

    if(!transport.checked){
      transportChosen[0].innerText = "";
      value[3].innerText = "";
      count -= transportVal;
      sum.innerText = count;
    }
  });

});
