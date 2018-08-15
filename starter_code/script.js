window.onload = function() {

var myCanvas = document.getElementById('theCanvas');
var ctx = myCanvas.getContext('2d');
var currentGame;
var theCar;
var img;



var Car = function(){ //make constructor functions for All of the things in the game
this.x = 240;
this.y = 600;
this.width = 50;
this.height= 85;
this.img = './images/car.png';
}

Car.prototype.drawCar = function(){
  var that = this;
  img = new Image ();
  img.src = that.img;
    img.onload = function(){
    ctx.drawImage(img, that.x,that.y,that.width,that.height); //looks at the car image and draws it 
  }
}

Car.prototype.move = function (whichKey) {

  ctx.clearRect(this.x , this.y , this.width , this.height) // everytime you move you need to erase the car


  // whichKey function ONLY runs when you hit an arrow key
  //Once you hit a key, it finds this.x and this.y and it just erases what is at the exact location
  //takes car object and adds or subtracts from the x or y value
  //At the end, it redraws the image with the new values of x and y
  switch(whichKey){
    case 'ArrowLeft':
    if(this.canMove(this.x -5, this.y)) {
      this.x -= 5;
    }
    break;

    case 'ArrowRight':
    if(this.canMove(this.x + 5, this.y)){
      this.x += 5;
    }
    break;

    case 'ArrowUp':
    if(this.canMove(this.x, this.y - 5)){
      this.y -= 5;
    }
    break;

    case 'ArrowDown':
    if(this.canMove(this.x, this.y + 5)){
      this.y += 5;
    }
  }
  ctx.drawImage(img, this.x, this.y, this.width, this.height);
}

Car.prot
= function(futurex, futurey){  //stops when hits an obstacle
  //need another if/else if for so car wont move off screen 
  if (
    futurex + this.width >= currentGame.obstacle.x &&
    futurex <= currentGame.obstacle.x && currentGame.obstacle.width &&
    futurey + this.height >= currentGame.obstacle.y &&
    futurey >= currentGame.obstacle.y + currentGame.obstacle.height
  ){
    return false
  }
}



document.onkeydown = function(event){
  if (event.key ==='ArrowLeft' || event.key ==='ArrowRight' || event.key ==='ArrowUp' || event.key ==='ArrowDown') { //stops the page from scrolling 
    event.preventDefault();
    theCar.move(event.key); 
  }
}


  document.getElementById("start-button").onclick = function() {
    startGame();
    var theCar = new Car();
    theCar.drawCar();
  };

  function startGame() {

  }
};
