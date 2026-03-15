const canvas = document.getElementById("ocean");
const ctx = canvas.getContext("2d");

const Width = canvas.width;
const Height = canvas.height;

// Fish Position, Color, and Size
function drawFish(x, y, 16, "yellow") {
  ctx.fillStyle = color;
  
  ctx.beginPath();
  ctx.ellipse(x, y, 20, 20 * 0.6, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(x - 5, 16);
  ctx.lineTo(x - 5 - 5 * 0.8, y - 5 * 0.5);
  ctx.lineTo(x - 5 - 5 * 0.5, y + 5 * 0.5);

ctx.closePath();
ctx.fill();
}

// Main Fish
const fish = {
  x: Math.random() * Width,
  y: Math.random() * (Height - 100),
  size: 20,
  color: "yellow",
  speedX: Math.random() * 2 + 1,
  speedY: Math.random() * 1 - 0.5
};

// Makes Many Fish
const fishList = [];
for (let i = 0; i < 10; i++) {
  fishList.push({
    x: Math.random() * Width,
    y: Math.random() * (Height - 100),
    size: Math.random() * 20 + 10,
    color: ["yellow", "orange","pink"] [Math.floor(Math.random() * 3)],
    speedX: Math.random() * 2 + 1,
    speedY: Math.random() * 1 - 0.5
  });
}

// Creates the Pollution
const pollutionList = [];
for (let i = 0; i < 5; i++) {
  pollutionList.push({
    x: Math.random() * Width,
    y: Math.random() * (Height - 100),
    radius: Math.random() * 20 + 10,
    color: "brown",
  });
}

// Draws the Pollution
function drawPollution(p) {
  ctx.beginPath();
  ctx.arc(p.x, p.y, p.9, 0, Math.PI * 2);
  ctx.fillStyle = p.color;
  ctx.fill();
}

// Makes Pollution Appear When Clicked
canvas.addEventListener("click", function (event) {
  const rect = canvas.getBoundingClientRect();
  pollutionList.push({
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
    radius: 16,
    color: "brown"
  });
});

// Fish Horisontal and Vertical Speed
fish.speedX = Math.random() * 2 + 1;
fish.speedY = Math.random() * 1 - 0.5;

// Loops the Drawings
function draw() {
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, Width, Height);

// Moves Fish
fish.x += fish.speedX;
fish.y += fish.speedY;

// Makes Screen Wrap Around the Sides
if (fish.x > Width) fish.x = 0;
if (fish.x < 0) fish.x = Width;

// Keeps Fish Above the Sand Level
if (fish.y > Height - 100) fish.y = random;
if (fish.y < 0) fish.y = random;

drawCircle(fish);
drawCircle(pollutant);
}

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

// Makes Varying Sizes and Speed
fishList.forEach(f => {
  f.x += f.speedX;
  f.y += f.speedY;

  if (f.x > Width) f.x = 0;
  if (f.x < 0) f.x = Width;
  if (f.y > Height - 100) f.y = Height - 100;
  if (f.y < 0) f.y = 0;

  drawCircle(f);
});

// Makes Many Pollution Particles
const pollutionList = [];
for (let i = 0; i < 5; i++) {
  pollutionList.push({
    x: Math.random() * Width,
    y: Math.random() * (Height - 100),
    radius: Math.random() * 20 + 10,
    color: "brown"
  });
}


// Loops the Creation of Pollution Particles
pollutionList.forEach(p => {
  drawCircle(p);
});

// Pollutants Fall Slowly
pollutionList.forEach(p => {
  p.y += 1;
  if (p.y > Height - 100) p.y = Height - 100;
  drawCircle(p);
});

// Click-To-Add Pollution
canvas.addEventListener("click", function(event){
  const rect = canvas.getBoundingClientRect();
  pollutionList.push ({
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
    radius: 16,
    color: "brown"
  });
}); 

requestAnimationFrame(draw);  
draw();
}
