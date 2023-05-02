var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

// Set up game variables
var birdX = 50;
var birdY = 150;
var birdWidth = 40;
var birdHeight = 30;
var gravity = 0.5;
var jump = -10;
var velocity = 0;
var gap = 150;
var score = 0;
var gameover = false;
var pipes = [];

// Create the first pipe
pipes.push({
  x: canvas.width,
  y: 0,
  width: 50,
  height: Math.floor(Math.random() * (canvas.height - gap)),
});

// Handle keyboard events
document.addEventListener("keydown", function (event) {
  if (event.keyCode === 32) {
    if (gameover) {
      reset();
    } else {
      velocity = jump;
    }
  }
});

// Set up the game loop
function gameLoop() {
  // Clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Update the bird's position and velocity
  velocity += gravity;
  birdY += velocity;

  // Draw the pipes
  for (var i = 0; i < pipes.length; i++) {
    context.fillStyle = "green";
    context.fillRect(pipes[i].x, pipes[i].y, pipes[i].width, pipes[i].height);
    context.fillRect(pipes[i].x, pipes[i].y + pipes[i].height + gap, pipes[i].width, canvas.height - pipes[i].height - gap);
    pipes[i].x -= 5;

    // Check for collision with pipes
    if (birdX + birdWidth > pipes[i].x && birdX < pipes[i].x + pipes[i].width && (birdY < pipes[i].height || birdY + birdHeight > pipes[i].height + gap)) {
      gameover = true;
    }

    // Add a new pipe when the current one is almost off the screen
    if (pipes[i].x < -50) {
      pipes.splice(i, 1);
      score++;
      pipes.push({
        x: canvas.width,
        y: 0,
        width: 50,
        height: Math.floor(Math.random() * (canvas.height - gap)),
      });
    }
  }

  // Draw the bird
  context.fillStyle = "red";
  context.fillRect(birdX, birdY, birdWidth, birdHeight);

  // Draw the score
  context.fillStyle = "black";
  context.font = "20px Arial";
  context.fillText("Score: " + score, 10, 30);

  // Check for game over
  if (birdY + birdHeight > canvas.height || birdY < 0) {
    gameover = true;
  }

  if (gameover) {
    context.fillStyle = "rgba(0, 0, 0, 0.5)";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "white";
    context.font = "30px Arial";
    context.fillText("Game Over", canvas.width / 2 - 75, canvas.height / 2);
    context.fillText("Press Space to Restart", canvas.width / 2 - 150, canvas.height / 2 + 50);
  } else {
    // Run the game loop again in 20 milliseconds
    setTimeout(gameLoop, 20);
 
    }

    // Reset the game
    function reset() {
    birdX = 50;
    birdY = 150;
    velocity = 0;
    score = 0;
    gameover = false;
    pipes = [];
    pipes.push({
    x: canvas.width,
    y: 0,
    width: 50,
    height: Math.floor(Math.random() * (canvas.height - gap)),
    });
    gameLoop();
    }

    // Start the game loop
    gameLoop();
