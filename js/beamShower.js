// const circle = document.getElementById('swipeable-element');
// const numberOfBeams = 10; // Change this to add more or fewer spears

// for (let i = 0; i < numberOfBeams; i++) {
//   const beam = document.createElement('div');
//   beam.classList.add('beam');

//   // Spread beams evenly around bottom of circle
//   const angle = (i / numberOfBeams) * Math.PI; // Bottom semicircle
//   const radius = 100; // Half of container width/height

//   const x = radius + radius * Math.cos(angle) - 2; // -2 to center beam (width = 4px)
//   const y = radius + radius * Math.sin(angle);

//   beam.style.left = `${x}px`;
//   beam.style.animationDelay = `${Math.random() * 1}s`;

//   circle.appendChild(beam);
// }

function invokeBeamShower(){
    const circle = document.getElementById("swipeable-element");
    const numberOfSpears = 10;
    const radius = 100; // Half of container width/height

    for (let i = 0; i < numberOfSpears; i++) {
      const beam = document.createElement("div");
      beam.classList.add("beam");

      // Angle on the bottom half of the circle (0 to π radians)
      const angle = (i / (numberOfSpears - 1)) * Math.PI;

      // Compute X position along the circle's bottom edge
      const x = radius + radius * Math.cos(angle) - 2; // Adjust -2 for beam width
      const y = radius + radius * Math.sin(angle);

      beam.style.left = `${x}px`;
      beam.style.animationDelay = `${Math.random().toFixed(2)}s`;

      circle.appendChild(beam);
    }
}
invokeBeamShower()