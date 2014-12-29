// Variables para lograr encontrar canvas en el DOM
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
// Variable para reemplazar en arc
var radius = 10;
var dragging = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.lineWidth = radius*2;

var putPoint = function(e){
	if (dragging) {
		context.lineTo(e.clientX, e.clientY); //Linea
		context.stroke(); //Linea

		context.beginPath();
		context.arc(e.clientX, e.clientY, radius, 0, Math.PI+2);
		context.fill();

		context.beginPath(); //Linea
		context.moveTo(e.clientX, e.clientY); //Linea
	}
}

var engage = function(e){
	dragging = true;
	putPoint(e);
}

var disengage = function(){
	dragging = false;
	context.beginPath();
}

canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mousemove', putPoint);
canvas.addEventListener('mouseup', disengage);