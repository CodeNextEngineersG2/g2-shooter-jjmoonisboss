var canvasWidth= 500;
var canvasHeight=400;
// UI Variables
var canvas;
var gameScreen;
var scoreDisplay;

// Game Variables
var gameRunning;
var shipShooting;
var alienShooting;
var score;

// Ship Variables
var shipDiameter;
var shipX;
var shipY;
var shipSpeed;
var shipColor;

// Bullet Variables
var bulletDiameter;
var bulletX;
var bulletY;

// Alien Variables
var alienDiameter;
var alienX;
var alienY;
var alienVelocity;

// Alien Bullet Variables
var alienBulletDiameter;
var alienBulletX;
var alienBulletY;


/*
 * setup()
 * This function is called once. Sets up the canvas, accesses HTML elements with
 * select(), and adds event listeners to those elements. Sets initial values of
 * variables by calling resetGame().
 */
 function setup(){
 canvas =createCanvas(canvasWidth,canvasHeight);
  background(234, 112, 157);
  gameScreen=select("#game-screen")
 canvas.parent("game-screen");
	shipColor = "#ffc0cb";
	shipDiameter=70;
	shipSpeed= 9;
	shipX=canvasWidth/2;
	shipY=canvasHeight - shipDiameter/2  ;
	bulletDiameter=40;
	shipShooting=false;
	alienDiameter=55;
	alienVelocity=10;
	alienX=0 + alienDiameter/2;
	alienY=0 + alienDiameter/2;
	}
 //gameScreen= select('#game-screen');

/*
 * gameOver()
 * This function stops the game from running and shows an alert telling the
 * player what their final score is. Finally it resets the game by calling
 * resetGame()
 */


/*
 * resetGame()
 * This function "resets the game" by initializing ship, alien, and game
 * variables.
 */


/*
 * draw()
 * This function animates the ship, alien, and both kinds of bullets, but only
 * if the game is running.
 */


/*
 * drawShip()
 * This function draws the player's ship. It also controls the ship's
 * x value by checking if the player is holding down the left or right keys.
 */
 function draw(){
	background(234, 112, 157);
	drawShip()
	drawAlien()
	if (shipShooting== true){
		drawBullet();
	}
		if(alienShooting==true){
			drawAlienBullet();
		}
	
}
//DRAW SHIP IS UNDER THIS

	 function drawShip(){
	 	fill(250,128,114)
	 	ellipse(shipX,shipY,shipDiameter,shipDiameter);
		shipColor="#b2b2ff";
		if (keyIsDown(LEFT_ARROW)&& shipX> 0 + shipDiameter/2){ 
				shipX-=shipSpeed;
		}
		
		if (keyIsDown(RIGHT_ARROW)&& shipX< 500 - shipDiameter/2){
			shipX+=shipSpeed;
		}
		}



 	

/*
 * keyPressed()
 * This function runs automatically when the player presses the spacebar
 * (keyCode === 32). If they do, and a bullet is not currently being fired
 * ("shipShooting" variable is false), it positions the bullet relative to the
 * ship. Then it sets the "shipShooting" variable to "true", indicating a ship
 * bullet is currently being fired.
 */
 function keyPressed(){
	if(keyCode==32 && shipShooting==false) {
	
		bulletX=shipX;
		bulletY=shipY;
		shipShooting=true;

	}
}



/*
 * drawBullet()
 * This function draws a bullet. It also checks to see if the bullet has hit
 * the alien. If it has, the alien is reset to the top-left o f the screen
 * and the player earns a point. The alien aslo becomes faster (i.e., harder
 * to hit) each time it is hit by a bullet.
 */
 function drawBullet(){
 	if (bulletY>0){
 		//snip
 		bulletY-=10
		fill(114,177,249);
		ellipse(bulletX,bulletY,bulletDiameter,bulletDiameter);
		if (shipShooting=true){
			keyCode==32;
		}
	}
	else{
		shipShooting=false;
	}
 }



/*
 * drawAlien()
 * This function draws an alien. It also checks to see if the alien has touched
 * the player's ship. If it has, the function calls gameOver().
 */
 function drawAlien(){ 
 	fill(152,251,152);
	 ellipse(alienX,alienY,alienDiameter,alienDiameter);
	 	
	  	alienX += alienVelocity;
	 	if (alienX >= canvasWidth- alienDiameter/2){
	 		alienVelocity *= -1 
	 	}
	 	 if (alienX <= 0 + alienDiameter/2){
	 		alienVelocity *= -1 
	 	}
	 	else if(alienX<=alienDiameter/2){
	 		alienVelocity=10;
	 	}
	 	if (random(4)< 1 && !alienShooting){
	 		alienBulletY=alienY;
	 		alienBulletX=alienX;
	 		alienShooting=true;
	 	}
}


/*
 * drawAlienBullet()
 * This function behaves much like drawBullet(), only it fires from the alien
 * and not the player's ship. If the bullet hits the player, it's game over.
 */
function drawAlienBullet(){

}

/*
 * resetAlien()
 * This function sets the alien to its original position at the top-left of
 * the screen. It also sets its velocity to its absolute value (so, if the
 * velocity was negative when it died, it becomes positive upon reset, making
 * it always start by moving to the right).
 */


/*
 * checkCollision(aX, aY, aD, bX, bY, bD)
 * This function first calculates the distance between two circles based on
 * their X and Y values. Based on the distance value, the function returns
 * "true" if the circles are touching, and false otherwise.
 * Circles are considered touching if
 * (distance <= (circle1Diameter + circle2Diameter) / 2)
*/
function checkCollision(aX, aY, aD, bX, bY, bD){
	var distance = dist(aX, aY, bX, bY);
	if (aD/2 +bD/2 >=distance){
		return true;
		//(distance <= (circle1Diameter + circle2Diameter) / 2)
	}
	else{
		return false;
	}
}
