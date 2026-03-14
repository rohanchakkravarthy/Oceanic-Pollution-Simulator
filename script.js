const canvas = document.getElementById("ocean");
const ctx = canvas.getContext("2d");

const Width = canvas.width;
const Height = canvas.height;

// Fish Position, Color, and Size
const fish = {
  x: Math.random() * Width;
  y: Math.random() * Height;
  color: "yellow",
  radius: 20
};

// Pollutant Position, Color, and Size
const pollutant ={
  x: Math.random() * Width;
  y: Math.random() * Height;
  color: "brown",
  radius: 16
};

// Draws Circles
function drawCircle(obj) {
  ctx.beginPath();
  ctx.arc(obj.x, obj.y, obj.radius, 0, Math.PI * 2);
  ctx.fillStyle - obj.color;
  ctx.fill();
}

// Loops the Drawings
function draw() {
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, Width, Height);

  drawCircle(fish);
  drawCircle(pollutant);

  requestAnimationFrame(draw);
}

// Fish Horisontal and Vertical Speed
fish.speedX = Math.random() * 2 + 1;
fish.speedY = Math.random() * 1 - 0.5;

// Moves Fish
fish.x += fish.speedX;
fish.y += fish.speedY;

// Makes Screen Wrap Around the Sides
if (fish.x > Width) fish.x = 0;
if (fish.x < 0) fish.x = Width;

// Keeps Fish Above the Sand Level
if (fish.y > Height - 100) fish.y = Height - 100;
if (fish.y < 0) fish.y = 0;

// Makes a Variety of Unique Fish
const fishList = [];
for (let i = 0; i < 10; i++) {
  fishList.push({
    x: Math.random() * Width,
    y: Math.random() * Height - 100,
    radius: Math.random() * 20 + 10,
    color: ["orange", "yellow","pink"][Math.floor(Math.random()*3)],
    speedX: Math.random() * 2 + 1,
    speedY: Math.random() * 1 - 0.5,
  });
}


  
draw();
