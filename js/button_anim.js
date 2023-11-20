function setup() {
	button = document.getElementById("button2");
	var x = 0;
	var y = 0;
	var tx = 1;
	var ty = 1;
		
	function button_move(event) {
		x = x + tx;
		y = y + ty;
		if ((x-50 > 100) || (y-50 < -100)) {
			x = Math.random() * 50;
			tx = Math.random() * 2 -1;
		} 
		if ((y-50 > 100) || (y-50 < -100)) {
			y = Math.random() * 50;
			ty = Math.random() * 2 -1;
		}
		button.style.transform = "translate({x}px, {y}px)".replace("{x}", x-50).replace("{y}", y-50);
	}
	setInterval(button_move, 1000/60);
}
window.onload = setup;