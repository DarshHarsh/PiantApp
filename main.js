var mouseevent = "empty";
var last_position_of_x, last_position_of_y;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var colour = "black";
var Width_of_line = 1;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    colour = document.getElementById("Colour").value;
    Width_of_line = document.getElementById("Width_of_Line").value;
    mouseevent = "mousedown";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseevent = "mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouseevent = "mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    currentpositionofX = e.clientX - canvas.offsetLeft;
    currentpositionofY = e.clientY - canvas.offsetTop;
    if (mouseevent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = Width_of_line;
        console.log("lastpositionofX=" + last_position_of_x);
        console.log("lastpositionofY=" + last_position_of_y);
        console.log("currenttpositionofX=" + currentpositionofX);
        console.log("currentpositionofY=" + currentpositionofY);
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(currentpositionofX, currentpositionofY);
        ctx.stroke();
    }
    last_position_of_X = currentpositionofX;
    last_position_of_Y = currentpositionofY;
}