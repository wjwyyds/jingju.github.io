var down = document.querySelector(".down");
var banner = document.querySelector(".banner");
var wrap = document.querySelector(".wrap");
var lis = document.getElementsByTagName("li")[0];
var lis1 = document.getElementsByTagName("li")[1];
var lis2 = document.getElementsByTagName("li")[2];
var lis3 = document.getElementsByTagName("li")[3];
var logo = document.querySelector(".logo_img");
var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");
var four = document.querySelector("#four");
var close = document.querySelector(".close");

close.onclick = function () {
  //   var self = this;
  clearInterval("timer");
  close.style.display = "none";
  down.style.display = "block";
  var timer = setInterval(function () {
    one.style.opacity = 0;
    two.style.opacity = 0;
    three.style.opacity = 0;
    four.style.opacity = 0;
    var oldheight = banner.clientHeight;
    var oldheight2 = wrap.clientHeight;
    var oldheight3 = lis.clientHeight;
    // console.log(oldheight4);
    var numheight = parseInt(oldheight);
    var numheight2 = parseInt(oldheight2);
    var numheight3 = parseInt(oldheight3);
    if (
      numheight <= 0 &&
      numheight2 <= 0 &&
      numheight3 <= 0 
    ) {
      clearInterval(timer);
    }
    //"200px"-->200 parseInt()
    banner.style.height = parseInt(oldheight) - 10 + "px";
    wrap.style.height = parseInt(oldheight2) - 10 + "px";
    lis.style.height = parseInt(oldheight3) - 10 + "px";
    lis1.style.height = parseInt(oldheight3) - 10 + "px";
    lis2.style.height = parseInt(oldheight3) - 10 + "px";
    lis3.style.height = parseInt(oldheight3) - 10 + "px";
  }, 50);
  var timer2=setInterval(function(){
    var oldheight4 = logo.clientHeight;
    var numheight4 = parseInt(oldheight4);
    if (
        numheight4 <= 0
      ) {
        clearInterval(timer2);
      }
    logo.style.height = parseInt(oldheight4) - 4 + "px";

      
  },20)
};

//下滑
down.onclick = function () {
  //   var self = this;
  close.style.display = "inline-block";
  down.style.display = "none";
  var time = setInterval(function () {
    two.style.opacity = 1;
    three.style.opacity = 1;
    four.style.opacity = 1;
    one.style.opacity = 1;

    var oldheight = banner.clientHeight;
    var oldheight2 = wrap.clientHeight;
    var oldheight3 = lis.clientHeight;
    var numheight = parseInt(oldheight);
    var numheight2 = parseInt(oldheight2);
    var numheight3 = parseInt(oldheight3);
    // var numheight4 = parseInt(oldheight4);
    if (numheight >= 40 && numheight2 >= 40 && numheight3 >= 40) {
      clearInterval(time);
    }

    //"200px"-->200 parseInt()

    banner.style.height = parseInt(oldheight) + 10 + "px";
    wrap.style.height = parseInt(oldheight2) + 10 + "px";
    lis.style.height = parseInt(oldheight3) + 10 + "px";
    lis1.style.height = parseInt(oldheight3) + 10 + "px";
    lis2.style.height = parseInt(oldheight3) + 10 + "px";
    lis3.style.height = parseInt(oldheight3) + 10 + "px";
    // if(numheight4>=40){
    //     logo.style.height = parseInt(oldheight4) + 4 + "px";
    // }
  }, 50);
  var time2=setInterval(function(){
    var oldheight4 = logo.clientHeight;
    var numheight4 = parseInt(oldheight4);
 if(numheight4>=45){
     clearInterval(time2)   
 }
 logo.style.height = parseInt(oldheight4) + 4 + "px";
  },20)
};
