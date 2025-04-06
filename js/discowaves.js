function invokeDiscoWaves(){
  const NUM_BARS = 200; // 🔧 Change this number to set how many bars you want
    const discoContainer = document.getElementById('disco');
if(!discoContainer){
  return
}
    // Sample gradient color combos
    const colors = [
      '#04ecf0',
      '#03d4d8',
      '#03bcc0',
      '#02a5a8',
      '#028d90',
      '#027678',
      '#015e60',
      '#014648',
      '#002f30',
      '#001718',
      '#000000'
    ];


    for (let i = 0; i < NUM_BARS; i++) {
      const bar = document.createElement('div');
      bar.classList.add('bar');

      // Domino animation delay
      bar.style.animationDelay = `${i * 0.1}s`;

      // Use your color palette in order, loop if needed
      const color = colors[i % colors.length];
      bar.style.backgroundColor = color;

      discoContainer.appendChild(bar);
    }
}
invokeDiscoWaves()