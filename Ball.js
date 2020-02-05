function Ball(mapWidth, mapHeight,speedX,speedY,cx,cy,gender,ages)
{
	this.mapWidth = mapWidth;
	this.mapHeight = mapHeight;
	this.ages = ages;
	this.old = 0;
	this.speedX = speedX;
	this.speedY = speedY;
	this.ready = 1;
	this.loop = 0;
	this.sick = 0;
	this.sickday = 0;
	this.cx = cx;
	this.cy = cy;
	this.gender = gender;
	if(this.ages>20){
		this.radius = 20;
	}else{
		this.radius = this.ages;
	}
	
}

Ball.prototype.draw = function(context)
{
	if(this.ages>20){
		this.radius = 20;
	}else{
		this.radius = this.ages;
	}
	if(this.gender==0 && this.old == 0){
		this.redColor = 255;
		this.greenColor = 0;
		this.blueColor = 0;
	}else if(this.gender == 0 && this.old == 1){
		this.redColor = 100;
		this.greenColor = 0;
		this.blueColor = 0;
	}
	if(this.gender==1 && this.old == 0){
		this.redColor = 0;
		this.greenColor = 255;
		this.blueColor = 0;
	}else if (this.gender == 1 && this.old == 1){
		this.redColor = 0;
		this.greenColor = 100;
		this.blueColor = 0;
	}
	if(this.gender==2 && this.old == 0){
		this.redColor = 255;
		this.greenColor = 123;
		this.blueColor = 0;
	}else if (this.gender == 2 && this.old == 1){
		this.redColor = 179;
		this.greenColor = 166;
		this.blueColor = 0;
	}
	if(this.gender==3&&this.old==0){
		this.redColor = 255;
		this.greenColor = 255;
		this.blueColor = 255;
	}else if (this.gender == 3 && this.old == 1){
		this.redColor = 166;
		this.greenColor = 166;
		this.blueColor = 166;
	}
	
	if(this.gender==4&&this.old==0){
		this.redColor = 255;
		this.greenColor = 255;
		this.blueColor = 0;
	}else if (this.gender == 4 && this.old == 1){
		this.redColor = 166;
		this.greenColor = 166;
		this.blueColor = 0;
	}
	
	if(this.gender==5&&this.old==0){
		this.redColor = 77;
		this.greenColor = 77;
		this.blueColor = 255;
	}else if (this.gender == 5 && this.old == 1){
		this.redColor = 0;
		this.greenColor = 0;
		this.blueColor = 179;
	}
	
	if(this.sick==1){
		this.redColor = 103;
		this.greenColor = 0;
		this.blueColor = 103;
	}
	context.beginPath();
	context.fillStyle = "rgba("+ this.redColor +", "+ this.greenColor +", "+ this.blueColor +", 1)";
	context.arc(this.cx, this.cy, this.radius, 0, Math.PI*2, true);
	context.closePath();
	context.fill();
	
	if(this.gender==2){
		context.font = "15px Arial"; 
		context.fillStyle = "white";
		context.fillText("I'm Hero", this.cx - 25, this.cy -30);
	}
	if(this.gender==4){
		context.font = "15px Arial"; 
		context.fillStyle = "white";
		context.fillText("I'm King", this.cx - 25, this.cy -30);
	}
	
	if(this.sick==1 && this.gender < 2){
		context.font = "15px Arial"; 
		context.fillStyle = "white";
		context.fillText("I feel bad", this.cx - 25, this.cy -30);
	}
	
	if(this.gender==3){
		context.font = "15px Arial"; 
		context.fillStyle = "white";
		context.fillText("Doctor " + this.ages, this.cx - 27, this.cy -30);
		
		context.font = "55px Arial"; 
		context.fillStyle = "red";
		context.fillText("+", this.cx - 17, this.cy + 18);
	}
	
	if(this.gender==5){
		context.font = "15px Arial"; 
		context.fillStyle = "white";
		context.fillText("Merchant " + this.ages, this.cx - 33, this.cy -30);
		
		context.font = "35px Arial"; 
		context.fillStyle = "yellow";
		context.fillText("$", this.cx - 10, this.cy + 12);
	}
	
	if(this.gender!=3 && this.gender!=5){
		context.font = "15px Arial"; 
		context.fillStyle = "black";
		context.fillText(this.ages, this.cx - 9, this.cy + 5);
	}
	
}

Ball.prototype.move = function()
{
	this.cx += this.speedX;
	this.cy += this.speedY;
	if(this.cx < this.radius)
		this.cx = this.radius;
	if(this.cx > this.mapWidth - this.radius)
		this.cx = this.mapWidth - this.radius;
	
	if(this.cy < this.radius)
		this.cy = this.radius;
	if(this.cy > this.mapHeight - this.radius)
		this.cy = this.mapHeight - this.radius;
	this.left = this.cx - this.radius;
	this.top = this.cy - this.radius;
	this.right = this.cx + this.radius;
	this.bottom = this.cy + this.radius;
}

Ball.prototype.checkCollision = function()
{
	if(this.cx < this.radius)
		this.cx = this.radius;
	if(this.cx > this.mapWidth - this.radius)
		this.cx = this.mapWidth - this.radius;
	
	if(this.cy < this.radius)
		this.cy = this.radius;
	if(this.cy > this.mapHeight - this.radius)
		this.cy = this.mapHeight - this.radius;
	
	if (this.left <= 0 || this.right >= this.mapWidth){
		this.speedX = - this.speedX;
		this.cx += this.speedX;

	}
		
	if (this.top <= 0 || this.bottom >= this.mapHeight){
		this.speedY = - this.speedY;
		this.cy += this.speedY;
		
	}
		
}

