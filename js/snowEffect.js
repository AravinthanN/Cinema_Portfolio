function invokeSnoweffect() {
  const snowContainer = document.createElement('div');
  snowContainer.classList.add('snow-container');
  document.body.appendChild(snowContainer);

  const colorsForSnow = [
    '#04ecf0', '#03d4d8', '#03bcc0', '#02a5a8',
    '#028d90', '#027678', '#015e60', '#014648',
    '#002f30', '#001718', '#000000'
  ];

  const numFlakes = 100;

  for (let i = 0; i < numFlakes; i++) {
    const flake = document.createElement('div');
    flake.classList.add('snowflake');

    const size = Math.random() * 6 + 4;
    const left = Math.random() * window.innerWidth;
    const duration = Math.random() * 5 + 5;
    const delay = Math.random() * 5;
    const drift = (Math.random() - 0.5) * 200 + 'px';

    flake.style.width = `${size}px`;
    flake.style.height = `${size}px`;
    flake.style.left = `${left}px`;
    flake.style.animationDuration = `${duration}s`;
    flake.style.animationDelay = `${delay}s`;
    flake.style.setProperty('--drift', drift);
    flake.style.backgroundColor = colorsForSnow[i % colorsForSnow.length];

    snowContainer.appendChild(flake);
  }

  // 👇 Handle scroll to pause/resume snow
  window.isMo
}
if(!isMobileDevice())
invokeSnoweffect();
