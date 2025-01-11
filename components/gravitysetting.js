const options = document.querySelectorAll('.gravity-option');
options.forEach(option => {
  option.addEventListener('click', function () {
    const gravity = this.getAttribute('data-gravity');
    
    // Log the gravity value to the console
    console.log(`Gravity set to: ${gravity}`);
    
    // Construct the gravity value in the format "y: gravity" with x fixed at 0
    const gravityValue = `${gravity}`;

    // Update the physics attributes in the scene
    const scene = document.querySelector('a-scene');

    // Remove existing physics component and set new gravity value
    scene.removeAttribute('physics');
    scene.setAttribute('physics', `gravity: ${gravityValue}; maxSubSteps: 2; fixedTimeStep: 1/60; iterations: 10;`);

    // Remove highlight from all options
    options.forEach(opt => opt.setAttribute('color', '#FFF'));

    // Highlight the active option
    this.setAttribute('color', '#FFD700');
  });
});
