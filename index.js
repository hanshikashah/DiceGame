var randnum = Math.floor(Math.random() * 6) + 1;
var randdiceimg = "images/" + "dice" + randnum + ".png";
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randdiceimg);

var randnum2 = Math.floor(Math.random() * 6) + 1;
var randdiceimg2 = "images/" + "dice" + randnum2 + ".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randdiceimg2);

if (randnum > randnum2) {
  document.querySelector("h1").innerHTML = "player 1 win";
}
if (randnum2 > randnum) {
  document.querySelector("h1").innerHTML = "player 2 win";
}
if (randnum2 == randnum) {
  document.querySelector("h1").innerHTML = "Draw!";
}
