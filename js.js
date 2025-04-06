function animateBars() {
    const bars = document.querySelectorAll('.skill-tab');

    bars.forEach(tab => {
      const bar = tab.querySelector('.barforskill span');
      const percent = tab.querySelector('h6').getAttribute('data-percent');

      // Reset to 0 then animate again
      bar.style.width = '0%';
      setTimeout(() => {
        bar.style.width = percent + '%';
      }, 100); // delay before animation
    });
  }

  // Animate initially
  animateBars();

  // Repeat the animation every 5 seconds
  setInterval(animateBars, 1000);