<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Plastic Rain</title>
    <style>
        body {
            margin: 0;
            overflow: hidden;
            background: #f0f4f8; /* Soft light grey/blue */
            font-family: 'Arial', sans-serif;
        }

        /* The Big Counter in the middle */
        #counter-container {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 100; /* Keeps it above the bottles */
            text-align: center;
            pointer-events: none; /* Allows bottles to "pass through" visually */
        }

        #counter {
            font-size: 120px;
            font-weight: 900;
            color: rgba(0, 80, 150, 0.2); /* Semi-transparent so it looks "aesthetic" */
            margin: 0;
        }

        .label {
            font-size: 20px;
            letter-spacing: 5px;
            color: rgba(0, 80, 150, 0.4);
            text-transform: uppercase;
        }

        /* Bottle Styling */
        .bottle {
            position: absolute;
            top: -100px;
            pointer-events: none;
            animation: fall linear forwards;
        }

        @keyframes fall {
            0% { transform: translateY(0) rotate(0deg); }
            100% { transform: translateY(110vh) rotate(720deg); }
        }
    </style>
</head>
<body>

    <div id="counter-container">
        <div class="label">Bottles Collected</div>
        <h1 id="counter">0</h1>
    </div>

<script>
    const counterElement = document.getElementById('counter');
    let count = 0;

    // 1. THE COUNTER LOGIC
    // To get exactly ~53 per second, we update every 18.8 milliseconds
    setInterval(() => {
        count++;
        counterElement.innerText = count.toLocaleString(); // Adds commas for readability
    }, 18.8);

    // 2. THE BOTTLE RAIN LOGIC
    function createBottle() {
        const bottle = document.createElement('img');
        
        // Using a placeholder image - replace with 'bottle.png' in your GitHub repo!
        bottle.src = 'https://png.pngtree.com/png-vector/20220902/ourmid/pngtree-plastic-water-bottle-png-image_6134261.png'; 
        bottle.classList.add('bottle');

        // Random horizontal start
        bottle.style.left = Math.random() * 100 + "vw";

        // Random size for "depth" effect
        const size = Math.random() * 25 + 25;
        bottle.style.width = size + "px";

        // Varied fall speeds (between 2 and 4 seconds)
        const duration = Math.random() * 2 + 2;
        bottle.style.animationDuration = duration + "s";

        // Opacity variety for visual pleasing look
        bottle.style.opacity = Math.random() * 0.5 + 0.5;

        document.body.appendChild(bottle);

        // Remove from memory once off-screen
        setTimeout(() => {
            bottle.remove();
        }, duration * 1000);
    }

    // 3. SPAWN FREQUENCY
    // Spawns a bottle every 20ms to keep up with the fast counter
    setInterval(createBottle, 20);

</script>
</body>
</html>
