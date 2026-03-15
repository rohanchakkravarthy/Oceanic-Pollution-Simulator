const canvas = document.getElementById("ocean");
const ctx = canvas.getContext("2d");

const Width = canvas.width;
const Height = canvas.height;

// Fish Position, Color, and Size
function drawFish(x, y, size, color) {
  ctx.fillStyle = color;
  
  ctx.beginPath();
  ctx.ellipse(x, y, size, size * 0.6, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(x - size, y);
  ctx.lineTo(x - size - size * 0.8, y - size * 0.6);
  ctx.lineTo(x - size - size * 0.8, y + size * 0.6);
  ctx.closePath();
  ctx.fill();
}

// Main Fish
const mainFish = {
  x: Math.random() * Width,
  y: Math.random() * (Height - 100),
  size: 20,
  color: "yellow",
  speedX: Math.random() * 2 + 1,
  speedY: Math.random() * 1 - 0.5
};

// Makes Many Fish
const fishList = [];
for (let i = 0; i < 11; i++) {
  fishList.push({
    x: Math.random() * Width,
    y: Math.random() * (Height - 100),
    size: Math.random() * 20 + 10,
    color: i === 0 ? "yellow" : ["yellow", "orange","pink"] [Math.floor(Math.random() * 3)],
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
  ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
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

// Loops the Fish Animation
function draw() {
// Makes Background  
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, Width, Height);
// Makes Sand
  ctx.fillStyle = "tan";
  ctx.fillRect(0, Height - 100, Width, 100);

// Animates Fish  
  mainFish.x += mainFish.speedX;
  mainFish.y += mainFish.speedY;
  if (mainFish.x > Width) mainFish.x = 0;
  if (mainFish.x < 0) mainFish.x = Width;
  if (f.y > Height - 100 || f.y < 0) {
    f.speedY *= -1;
  }
  drawFish(mainFish.x, mainFish.y, mainFish.size, mainFish.color);
  
// Animates All Fish
  fishList.forEach (f => {
  f.x += f.speedX;
  f.y += f.speedY;

  if (f.x > Width) f.x = 0;
  if (f.x < 0) f.x = Width;
  if (f.y > Height - 100 || f.y < 0) {
    f.speedY *= -1;
  }
  drawFish(f.x, f.y, f.size, f.color);
});
    
// Makes the Pollution Fall
  pollutionList.forEach(p => {
    p.y += 1;
    if (p.y > Height - 100) p.y = Height - 100;
    drawPollution(p);
  });

// Next Frame
  requestAnimationFrame(draw);
}
draw();
