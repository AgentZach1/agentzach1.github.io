/**
 * Goal is to create a cute environment 
 * that you can run around in. See my projects like an art
 * gallery.
 */
 function begin3D() {
    // Create scene
    const scene = new THREE.Scene();
    // Need a Perspective Camera object
    // FOV: 75
    // Aspect Ratio: width/height
    // Near: 0.1
    // Far: 1000
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    // "This is where the magic happens"
    // Good for fallback for users with older browsers
    const renderer = new THREE.WebGLRenderer();

    // Set size to render application
    // RN set at quarter size
    // Update Style on true
    renderer.setSize(window.innerWidth/2, window.innerHeight/2, true);
    document.body.appendChild(renderer.domElement);

    // Box Stuff
    // Need box geometry that contains vertices to fill the faces of the cube
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    // Material to cover 
    const material = new THREE.MeshBasicMaterial( {color:0x00ff00} );
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    // Loop that causes the render to draw the scene
    // Every 60 seconds
    function animate() {
        requestAnimationFrame(animate);
        // Adds rotation to animate
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();
}