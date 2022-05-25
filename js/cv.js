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
document.documentElement.scrollTop = 350;
document.getElementById("mySidenav").style.width = "0";
}
function pr1(){
document.documentElement.scrollTop = 1600;
document.getElementById("mySidenav").style.width = "0";
}
function pr2(){
document.documentElement.scrollTop = 900;
document.getElementById("mySidenav").style.width = "0";
}
function pr3(){
document.documentElement.scrollTop = 3300;
document.getElementById("mySidenav").style.width = "0";
}
function pr4(){
document.documentElement.scrollTop = 4000;
document.getElementById("mySidenav").style.width = "0";
}
function pr5(){
document.documentElement.scrollTop = 5100;
document.getElementById("mySidenav").style.width = "0";
}    
function openNav() {
document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
document.getElementById("mySidenav").style.width = "0";
}
document.getElementById("sdim3").style.display="none";
document.getElementById("sdim4").style.display="none";
setInterval(ch, 3000)
function ch(){
document.getElementById("sdim3").style.display="block";
document.getElementById("sdim4").style.display="block";
document.getElementById("sdim1").style.display="none";
document.getElementById("sdim2").style.display="none";
}
setInterval(ch1, 6000)
function ch1(){
document.getElementById("sdim1").style.display="block";
document.getElementById("sdim2").style.display="block";
document.getElementById("sdim3").style.display="none";
document.getElementById("sdim4").style.display="none";
}
function opcv(){ 
window.open("cv.pdf");
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
window.location.assign("tel:01202676954");
}
function gcw(){ 
window.open("https://wa.me/qr/F3OCS3HGAKZRO1");
}
function cft1(){
var show=document.getElementById("dscft");
show.style.display="block";
show.innerHTML='<p style="font-size: 50px; position: fixed; top: 2%; left:50%; cursor: pointer;margin:0px" onclick="hcft1()">×</p><br><img src="img/2.jpg" style="width: 80%; height: 600px; position: fixed; top: 10%; left:10%;">';
}
function hcft1(){
show=document.getElementById("dscft").style.display="none";
show=document.getElementById("dscft").innerHTML="";
}
function cft2(){
var show=document.getElementById("dscft");
show.style.display="block";
show.innerHTML='<p style="font-size: 50px; position: fixed; top: 2%; left:50%; cursor: pointer;margin:0px" onclick="hcft1()">×</p><br><img src="img/5.jpg" style="width: 80%; height: 600px; position: fixed; top: 10%; left:10%">';
}
function cft3(){
var show=document.getElementById("dscft");
show.style.display="block";
show.innerHTML='<p style="font-size: 50px; position: fixed; top: 2%; left:50%; cursor: pointer;margin:0px" onclick="hcft1()">×</p><br><img src="img/6.jpg" style="width: 80%; height: 600px; position: fixed; top: 10%; left:10%">';
}
function cft4(){
var show=document.getElementById("dscft");
show.style.display="block";
show.innerHTML='<p style="font-size: 50px; position: fixed; top: 2%; left:50%; cursor: pointer;margin:0px" onclick="hcft1()">×</p><br><img src="img/7.jpg" style="width: 80%; height: 600px; position: fixed; top: 10%; left:10%">';
}
function cft5(){
var show=document.getElementById("dscft");
show.style.display="block";
show.innerHTML='<p style="font-size: 50px; position: fixed; top: 2%; left:50%; cursor: pointer;margin:0px" onclick="hcft1()">×</p><br><img src="img/8.jpg" style="width: 80%; height: 600px; position: fixed; top: 10%; left:10%">';
}