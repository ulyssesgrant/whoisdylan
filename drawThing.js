function drawThing() {
	ctx.beginPath();
	ctx.moveTo(100,100);
	ctx.lineTo(0,100);
	ctx.lineTo(0,0);
	ctx.lineTo(50,50);
	ctx.lineTo(100,0);
	ctx.closePath();
	ctx.stroke();
}

drawThing();
ctx.save();

ctx.translate(200,50);
ctx.strokeStyle="red";
drawThing();
ctx.translate(50,75);
ctx.strokeStyle="green";
drawThing();
ctx.restore();
ctx.translate(50,75);
ctx.strokeStyle="blue"
drawThing();
