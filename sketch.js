var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;

var car1,car2,car3,car4,cars;
var allPlayers
function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
}
