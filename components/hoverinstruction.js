AFRAME.registerComponent('hover-info-1', {
    init: function () {
      // Create a plane for the pop-up
      const infoPlane = document.createElement('a-plane');
      infoPlane.setAttribute('color', '#FFF');
      infoPlane.setAttribute('width', '2');
      infoPlane.setAttribute('height', '1');
      infoPlane.setAttribute('scale','1.950 1.340 0.730')
      infoPlane.setAttribute('position', '0.395 2.081 -0.159');
      infoPlane.setAttribute('visible', 'false');
      infoPlane.setAttribute('text', {
        value: 'Simulate a free-falling object under gravity until it collides with a surface and stops or bounces upon impact.',
        align: 'center',
        color: '#000'
      });

      // Append plane to the box
      this.el.appendChild(infoPlane);

      // Show the plane on mouseenter
      this.el.addEventListener('mouseenter', () => {
        infoPlane.setAttribute('visible', 'true');
      });

      // Hide the plane on mouseleave
      this.el.addEventListener('mouseleave', () => {
        infoPlane.setAttribute('visible', 'false');
      });
    }
  });
  AFRAME.registerComponent("follow-camera-instruction", {
    tick: function () {
      const camera = document.querySelector("#camera");
      const plane = this.el;
  
      // Get the camera's world position
      const cameraWorldPos = new THREE.Vector3();
      camera.object3D.getWorldPosition(cameraWorldPos);
  
      // Get the plane's world position
      const planeWorldPos = new THREE.Vector3();
      plane.object3D.getWorldPosition(planeWorldPos);
  
      // Calculate the direction vector from plane to camera
      const direction = cameraWorldPos.clone().sub(planeWorldPos).normalize();
  
      // Set the rotation to face the camera
      plane.object3D.lookAt(cameraWorldPos);
    },
  });