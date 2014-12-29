// Agregar swatches nuevos
var colors = ['black', 'grey', 'white', 'green', 'red', 'blue', 'orange', 'yellow', 'violet'];


// Seleccionar color por clase
//var swatches = document.getElementsByClassName('swatch');
//for (var i = 0, n = swatches.length; i<n; i++) {
//	swatches[i].addEventListener('click', setSwatch);
//};

for (var i = 0, n = colors.length; i<n; i++) {
	var swatch = document.createElement('div');
	swatch.className = 'swatch';
	swatch.style.backgroundColor = colors[i];
	swatch.addEventListener('click', setSwatch);
	document.getElementById('colors').appendChild(swatch);
}

//tomar color de acuerdo al background-color del css
function setColor(color){
	context.fillStyle = color;
	context.strokeStyle = color;
	//cambiar la clase
	var active = document.getElementsByClassName('active')[0];
	if(active){
		active.className = 'swatch';
	}
} 

function setSwatch(e){
	//indentificar clase
	var swatch = e.target;
	//usar color
	setColor(swatch.style.backgroundColor);
	//activar la clase
	swatch.className += ' active'; 
}

// Asigna la clase active al primer elemento del array colors
setSwatch({target: document.getElementsByClassName('swatch')[0]});