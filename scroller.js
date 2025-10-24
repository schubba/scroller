document.addEventListener('DOMContentLoaded', () => {
    const scroller = document.querySelector('.scroller-wrapper');
    if (!scroller) return;

    const scrollText = 'hello my friend             '; 
    
    const scrollerTextElement = scroller.querySelector('h1');
    if (!scrollerTextElement) return;
    
    // Text in das H1-Element injizieren
    scrollerTextElement.textContent = scrollText;
    
    // Breite des EINEN Elements messen
    const contentWidth = scrollerTextElement.scrollWidth; 

    // --- Geschwindigkeit ---
    const horizontalSpeed = 9;
    
    let horizontalPosition = window.innerWidth; 

    // --- Vertikale Bounce-Konfiguration  ---
    const bounceAmplitude = 200; 
    const bounceFrequency = 0.08; 
    let time = 0; 

    function scrollStep() {
        
        // 1. Horizontale Position
        horizontalPosition -= horizontalSpeed;
        
        // 2. Reset-Logik (bleibt gleich)
        if (horizontalPosition < -contentWidth) { 
            horizontalPosition = window.innerWidth;
        }

        // 3. Vertikale Position (bleibt gleich)
        time += bounceFrequency; 
        const bounceFactor = Math.abs(Math.sin(time));
        const verticalBounce = bounceFactor * -bounceAmplitude; 

        // 4. Transform (bleibt gleich)
        scroller.style.transform = `
            translateX(${horizontalPosition}px) 
            translateY(calc(-50% + ${verticalBounce}px)) 
            translateZ(0)
        `;

        requestAnimationFrame(scrollStep);
    }

    // Animation starten
    requestAnimationFrame(scrollStep);
});
