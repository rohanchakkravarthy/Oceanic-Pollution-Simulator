function createBottle() {
    const bottle = document.createElement('img');
    
    // Path to your image. 
    // If your image is named 'bottle.png' in the same folder, use that!
    bottle.src = 'https://png.pngtree.com/png-vector/20220902/ourmid/pngtree-plastic-water-bottle-png-image_6134261.png'; 
    
    bottle.classList.add('bottle');

    // Randomize horizontal position (0 to 100% of screen width)
    bottle.style.left = Math.random() * 100 + "vw";

    // Randomize size (between 30px and 60px wide)
    const size = Math.random() * 30 + 30;
    bottle.style.width = size + "px";

    // Randomize fall duration (3 to 6 seconds)
    const duration = Math.random() * 3 + 3;
    bottle.style.animationDuration = duration + "s";

    // Randomize starting rotation so they don't all look the same
    const startRotation = Math.random() * 360;
    bottle.style.transform = `rotate(${startRotation}deg)`;

    document.body.appendChild(bottle);

    // Clean up after the animation ends
    setTimeout(() => {
        bottle.remove();
    }, duration * 1000);
}

// Spawns a bottle every 400ms (adjust this for more/less rain)
setInterval(createBottle, 400);
A Few CSS Tweaks
Since we are using images now, we should make sure they don't look "stiff." Add this to your <style> block to make the rotation feel more natural:

CSS
.bottle {
    position: absolute;
    top: -150px; /* High enough to hide the spawn */
    pointer-events: none;
    filter: drop-shadow(2px 4px 6px rgba(0,0,0,0.1)); /* Soft shadow for depth */
    animation: fall linear forwards;
}

@keyframes fall {
    0% {
        transform: translateY(0) rotate(0deg);
    }
    100% {
        /* This makes them tumble as they fall */
        transform: translateY(115vh) rotate(720deg); 
    }
}
