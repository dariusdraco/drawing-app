var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseevent="" ;
var last_position_x, last_position_y ;
var current_position_x, current_position_y;
var color="darkblue";
var width=2.5;

canvas.addEventListener("mousedown",my_mousedown);
 function  my_mousedown (e) {
mouseevent="MouseDown"
 }

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup (e) {
    mouseevent="MouseUp";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave (e) {
    mouseevent="MouseLeave";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove (e) {
current_position_x=e.clientX- canvas.offsetLeft
current_position_y=e.clientY- canvas.offsetTop
    if(mouseevent=="MouseDown") {
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width
    
    console.log("current position of x & y = "); 
    console.log("x=  "+ current_position_x+ "y= "+current_position_y);
    console.log("last position of x & y = ");
    console.log("x=  "+ last_position_x+ "y= "+last_position_y);
    ctx.moveTo(last_position_x,last_position_y);
    ctx.lineTo(current_position_x,current_position_y);
    ctx.stroke()
}
last_position_x=current_position_x;
last_position_y=current_position_y;
}
































































































