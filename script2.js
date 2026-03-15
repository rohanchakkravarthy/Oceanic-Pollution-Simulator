<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        body {
            margin: 0;
            overflow: hidden;
            background: #e0f7fa;
        }

        .bottle {
            position: absolute;
            top: -100px;
            font-size: 2rem;
            user-select: none;
            pointer-events: none;
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
    setInterval(() => {
        const bottle = document.createElement('div');
        bottle.classList.add('bottle');
        bottle.innerText = '🍾';
        
        const duration = Math.random() * 3 + 3;
        
        bottle.style.left = Math.random() * 100 + 'vw';
        bottle.style.animationDuration = duration + 's';
        bottle.style.fontSize = Math.random() * 20 + 20 + 'px';
        
        document.body.appendChild(bottle);
        
        setTimeout(() => bottle.remove(), duration * 1000);
    }, 300);
</script>

</body>
</html>
