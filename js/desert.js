function invokeDesertAnimation(){
    const svgNS = "http://www.w3.org/2000/svg";
    const scene = document.getElementById("scene");

    // 🌪️ Tornado generator (a spiraling path)
    const tornadoGroup = document.createElementNS(svgNS, "g");
    tornadoGroup.setAttribute("class", "tornado");
    tornadoGroup.setAttribute("transform", "translate(600, 300)");

    for (let i = 0; i < 15; i++) {
      const circle = document.createElementNS(svgNS, "circle");
      circle.setAttribute("cx", 0);
      circle.setAttribute("cy", i * 10);
      circle.setAttribute("r", 30 - i);
      circle.setAttribute("stroke", "white");
      circle.setAttribute("fill", "none");
      circle.setAttribute("stroke-width", 0.5);
      tornadoGroup.appendChild(circle);
    }

    scene.appendChild(tornadoGroup);

    // 🌰 Tumbleweed
    const tumbleweed = document.createElementNS(svgNS, "circle");
    tumbleweed.setAttribute("cx", "0");
    tumbleweed.setAttribute("cy", "520");
    tumbleweed.setAttribute("r", "10");
    tumbleweed.setAttribute("stroke", "white");
    tumbleweed.setAttribute("fill", "none");
    tumbleweed.setAttribute("stroke-width", "1.5");
    tumbleweed.setAttribute("class", "tumbleweed");

    scene.appendChild(tumbleweed);
}
invokeDesertAnimation()
const sandParticles = document.querySelectorAll('.sand-blow');
  const startTime = Date.now();

  function animateSand() {
    const time = (Date.now() - startTime) / 1000; // in seconds

    sandParticles.forEach((circle, index) => {
      const baseX = parseFloat(circle.dataset.baseX || circle.getAttribute('cx'));
      const baseY = parseFloat(circle.dataset.baseY || circle.getAttribute('cy'));

      // Save original position (once)
      if (!circle.dataset.baseX) {
        circle.dataset.baseX = baseX;
        circle.dataset.baseY = baseY;
      }

      const waveX = baseX + Math.sin(time * 1.5 + index) * 50; // horizontal wave
      const waveY = baseY + Math.sin(time * 3 + index) * 4;    // vertical wobble

      circle.setAttribute('cx', waveX);
      circle.setAttribute('cy', waveY);
    });

    requestAnimationFrame(animateSand);
  }

  animateSand();