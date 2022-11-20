window.onscroll = function () {
myFunction()
};
function myFunction() {
if (document.documentElement.scrollTop > 0) {
document.getElementById("up1").style.display = "block";
} else {
document.getElementById("up1").style.display = "none";
}
}
function up1() {
document.documentElement.scrollTop = 0;
}
function ab1(){
window.location.assign("#ab1");
document.getElementById("mySidenav").style.width = "0";
}
function pr1(){
window.location.assign("#pr1");
document.getElementById("mySidenav").style.width = "0";
}
function pr2(){
window.location.assign("#pr2");
document.getElementById("mySidenav").style.width = "0";
}
function pr3(){
window.location.assign("#pr3");
document.getElementById("mySidenav").style.width = "0";
}
function pr4(){
window.location.assign("#pr4");
document.getElementById("mySidenav").style.width = "0";
}
function pr5(){
window.location.assign("#pr5");
document.getElementById("mySidenav").style.width = "0";
}    
function openNav() {
document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
document.getElementById("mySidenav").style.width = "0";
}
let slideIndex = 1;
showSlides(slideIndex);
function nb(n){
showSlides(slideIndex += n);
}
function showSlides(n) {
let i;
let slides = document.getElementsByClassName("ai");
if (n > slides.length) {slideIndex = 1}    
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";}
slides[slideIndex-1].style.display = "block";}
function opcv(){ 
window.open("CV For Mahmoud ELboushy.pdf");
}
function pro1(){ 
window.open("https://mahmoudb192000.github.io/business");
}
function pro2(){ 
window.open("https://mahmoudb192000.github.io/e-commerce");
}
function pro3(){ 
window.open("https://mahmoudb192000.github.io/making-future");
}
function pro4(){ 
window.open("https://mahmoudb192000.github.io/sign-up");
}
function pro5(){ 
window.open("https://mahmoudb192000.github.io/travel");
}
function gcf(){ 
window.open("https://www.facebook.com/profile.php?id=100012510252975");
}
function gcg(){ 
window.open("mailto:mahmoudelboushi0909@gmail.com");
}
function gcp(){ 
window.location.assign("tel:+20 01202676954");
}
function gcw(){ 
window.open("https://wa.me/qr/F3OCS3HGAKZRO1");
}
function cft1(){
var show=document.getElementById("dscft");
show.style.display="block";
show.innerHTML='<p style="font-size: 50px; position: absolute; top: 2%; left:48%; cursor: pointer;margin:0px" onclick="hcft1()">×</p><br><img src="img/2.jpg" style="width: 80%; height: 500px; position: fixed; top: 10%; left:10%;">';
}
function hcft1(){
show=document.getElementById("dscft").style.display="none";
show=document.getElementById("dscft").innerHTML="";
}
function cft2(){
var show=document.getElementById("dscft");
show.style.display="block";
show.innerHTML='<p style="font-size: 50px; position: absolute; top: 2%; left:48%; cursor: pointer;margin:0px" onclick="hcft1()">×</p><br><img src="img/5.jpg" style="width: 80%; height: 500px; position: fixed; top: 10%; left:10%">';
}
function cft3(){
var show=document.getElementById("dscft");
show.style.display="block";
show.innerHTML='<p style="font-size: 50px; position: absolute; top: 2%; left:48%; cursor: pointer;margin:0px" onclick="hcft1()">×</p><br><img src="img/6.jpg" style="width: 80%; height: 500px; position: absolute; top: 10%; left:10%">';
}
function cft4(){
var show=document.getElementById("dscft");
show.style.display="block";
show.innerHTML='<p style="font-size: 50px; position: absolute; top: 2%; left:48%; cursor: pointer;margin:0px" onclick="hcft1()">×</p><br><img src="img/7.jpg" style="width: 80%; height: 500px; position: absolute; top: 10%; left:10%">';
}
function cft5(){
var show=document.getElementById("dscft");
show.style.display="block";
show.innerHTML='<p style="font-size: 50px; position: absolute; top: 2%; left:48%; cursor: pointer;margin:0px" onclick="hcft1()">×</p><br><img src="img/8.jpg" style="width: 80%; height: 500px; position: absolute; top: 10%; left:10%">';
}
function cft6(){
var show=document.getElementById("dscft");
show.style.display="block";
show.innerHTML='<p style="font-size: 50px; position: absolute; top: 2%; left:48%; cursor: pointer;margin:0px" onclick="hcft1()">×</p><br><center><div style="width: 80%; height: 500px; position: absolute; top: 10%; left:10%;overflow: auto;"><img src="img/5c.jpg" style="width: 100%;height:auto;"></div></center>';
}
function cft7(){
var show=document.getElementById("dscft");
show.style.display="block";
show.innerHTML='<p style="font-size: 50px; position: absolute; top: 2%; left:48%; cursor: pointer;margin:0px" onclick="hcft1()">×</p><br><img src="img/9.png" style="width: 80%; height: 500px; position: absolute; top: 10%; left:10%">';
}
function cft8(){
var show=document.getElementById("dscft");
show.style.display="block";
show.innerHTML='<p style="font-size: 50px; position: absolute; top: 2%; left:48%; cursor: pointer;margin:0px" onclick="hcft1()">×</p><br><center><div style="width: 80%; height: 500px; position: absolute; top: 10%; left:10%;overflow: auto;"><img src="img/11.jpg" style="width: 100%;height:auto;"></div></center>';
}
function cft9(){
var show=document.getElementById("dscft");
show.style.display="block";
show.innerHTML='<p style="font-size: 50px; position: absolute; top: 2%; left:48%; cursor: pointer;margin:0px" onclick="hcft1()">×</p><br><img src="img/9.jpg" style="width: 80%; height: 500px; position: fixed; top: 10%; left:10%">';
}