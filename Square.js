function Square(mapWidth, mapHeight,speedX,speedY,cx,cy,edge,key)
{
	this.mapWidth = mapWidth;
	this.mapHeight = mapHeight;
	this.edge = edge;
	this.speedX = speedX;
	this.speedY = speedY;
	this.cx = cx;
	this.cy = cy;
	this.key = key;
}

Square.prototype.draw = function(context)
{
	this.left = this.cx - this.edge/2;
	this.top = this.cy - this.edge/2;
	context.beginPath();
	context.fillStyle = "rgba(0, 0, 0, 1)";
	context.rect(this.left,this.top,this.edge,this.edge);
	context.closePath();
	context.fill();
	
	context.font = "25px Arial"; 
	context.fillStyle = "white";
	context.fillText(String.fromCharCode(this.key), this.cx - 9, this.cy + 7);
	
	context.font = "25px Arial"; 
	context.fillStyle = "white";
	context.fillText("Grr,Caps Lock", this.cx - 70, this.cy - 35);
}

Square.prototype.move = function()
{
	this.cx += this.speedX;
	this.cy += this.speedY;
	
	if(this.cx < this.edge/2)
		this.cx = this.edge/2;
	if(this.cx > this.mapWidth - this.edge/2)
		this.cx = this.mapWidth - this.edge/2;
	
	if(this.cy < this.edge/2)
		this.cy = this.edge/2;
	if(this.cy > this.mapHeight - this.edge/2)
		this.cy = this.mapHeight - this.edge/2;
	
	this.left = this.cx - this.edge/2;
	this.top = this.cy - this.edge/2;
	this.right = this.cx + this.edge/2;
	this.bottom = this.cy + this.edge/2;
}

Square.prototype.checkCollision = function()
{
	if (this.left <= 0 || this.right >= this.mapWidth){
		this.speedX = - this.speedX;
		this.cx += this.speedX;

	}
		
	if (this.top <= 0 || this.bottom >= this.mapHeight){
		this.speedY = - this.speedY;
		this.cy += this.speedY;
		
	}
		
}

