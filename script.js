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

function drawCircle(obj) {
  ctx.beginPath();
  ctx.arc(obj.x, obj.y, obj.radius, 0, Math.PI * 2);
  ctx.fillStyle - obj.color;
  ctx.fill();
}

function draw() {
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, Width, Height);

  drawCircle(fish);
  drawCircle(pollutant);

  requestAnimationFrame(draw);
}

draw();














