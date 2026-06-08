document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Intersection Observer (Cleaner than scroll listener)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Pastel Celebration
    const celebrateBtn = document.getElementById('surprise-btn');
    
    celebrateBtn.addEventListener('click', () => {
        const colors = ['#A0D8EF', '#FFEFBA', '#FFD3B6', '#FF8B94', '#B5EAD7'];
        
        // Initial Burst
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: colors
        });

        // Continuous Flow
        const end = Date.now() + 2 * 1000;

        (function frame() {
            confetti({
                particleCount: 3,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: colors
            });
            confetti({
                particleCount: 3,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: colors
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());

        // Sweetening the button
        const originalText = celebrateBtn.innerText;
        celebrateBtn.innerText = "YAY! FRIENDS FOREVER! 🌸";
        setTimeout(() => {
            celebrateBtn.innerText = originalText;
        }, 2000);
    });

    // Friendship Meter Logic
    const meterFill = document.querySelector('.meter-fill');
    const meterText = document.getElementById('meter-text');
    
    const fillMeter = () => {
        let count = 0;
        const target = 1000; // 1000% Bestie level
        meterFill.style.width = '100%';
        
        const interval = setInterval(() => {
            if (count >= target) {
                clearInterval(interval);
                meterText.innerText = `FRIENDSHIP LEVEL: ${target}% (MAXED OUT! 🏆)`;
            } else {
                count += 10;
                meterText.innerText = `FRIENDSHIP LEVEL: ${count}%...`;
            }
        }, 20);
    };

    // Trigger meter when visible
    const meterObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            fillMeter();
            meterObserver.unobserve(entries[0].target);
        }
    }, { threshold: 0.5 });
    
    if (meterFill) meterObserver.observe(document.querySelector('.meter-container'));

    // Envelope Logic
    const envelope = document.getElementById('envelope');
    envelope.addEventListener('click', () => {
        envelope.classList.toggle('open');
        if (envelope.classList.contains('open')) {
            // Multiple bursts for extra "wow"
            const colors = ['#FF8B94', '#FFD3B6', '#A0D8EF', '#B5EAD7'];
            confetti({
                particleCount: 80,
                spread: 70,
                origin: { y: 0.6 },
                colors: colors
            });
            setTimeout(() => {
                confetti({
                    particleCount: 40,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: colors
                });
                confetti({
                    particleCount: 40,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: colors
                });
            }, 3000);
        }
    });

    // Dynamic Flower Background
    const createFlowers = () => {
        const bg = document.querySelector('.bg-circles');
        const flowers = ['🌸', '🌺', '🌼', '🌷', '✨'];
        
        for (let i = 0; i < 15; i++) {
            const flower = document.createElement('div');
            flower.className = 'flower-bg';
            flower.innerText = flowers[Math.floor(Math.random() * flowers.length)];
            flower.style.left = Math.random() * 100 + 'vw';
            flower.style.animationDelay = Math.random() * 10 + 's';
            flower.style.animationDuration = (Math.random() * 5 + 8) + 's';
            bg.appendChild(flower);
        }
    };
    
    createFlowers();
});
