<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        body {
            margin: 0;
            overflow: hidden; /* Prevents scrollbars from the falling bottles */
            background: #e0f7fa; /* A light, watery blue */
        }

        .bottle {
            position: absolute;
            top: -100px; /* Start above the screen */
            font-size: 2rem;
            user-select: none;
            pointer-events: none; /* Keeps them from blocking clicks */
            filter: drop-shadow(0 5px 5px rgba(0,0,0,0.1));
            animation: fall linear forwards;
        }

        @keyframes fall {
            to {
                transform: translateY(110vh) rotate(360deg);
            }
        }
    </style>
</head>
<body>

<script>
    function createBottle() {
        const bottle = document.createElement('div');
        bottle.classList.add('bottle');
        
        // Use an emoji for simplicity, or an <img> tag if you have an asset
        bottle.innerText = '🍾'; 

        // Randomize horizontal position (0 to 100% of screen width)
        bottle.style.left = Math.random() * 100 + "vw";

        // Randomize fall duration (between 3 and 6 seconds) for visual variety
        const duration = Math.random() * 3 + 3;
        bottle.style.animationDuration = duration + "s";

        // Randomize size slightly
        bottle.style.fontSize = (Math.random() * 20 + 20) + "px";

        document.body.appendChild(bottle);

        // Remove the bottle after it finishes falling to keep the site fast
        setTimeout(() => {
            bottle.remove();
        }, duration * 1000);
    }

    // Create a new bottle every 300ms
    setInterval(createBottle, 300);
</script>

</body>
</html>
