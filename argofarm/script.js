// Simple Scroll Animation for Statistics Numbers
document.addEventListener("DOMContentLoaded", () => {
    const stats = document.querySelectorAll(".stat-item h2");
    
    const animateStats = () => {
        stats.forEach(stat => {
            const target = parseInt(stat.innerText);
            let count = 0;
            const updateCount = () => {
                const speed = target / 100;
                if (count < target) {
                    count += speed;
                    stat.innerText = Math.ceil(count) + (stat.innerText.includes('%') ? '%' : '');
                    setTimeout(updateCount, 20);
                } else {
                    stat.innerText = target + (stat.innerText.includes('%') ? '%' : '');
                }
            };
            updateCount();
        });
    };

    // Trigger animation when section is in view
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            animateStats();
            observer.disconnect();
        }
    });

    observer.observe(document.querySelector(".stats"));
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});