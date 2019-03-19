//Global variables
var scene, camera, renderer;
var geometry,geometry2, material, material2,mesh,mesh2;

function init(){
  // Create an empty scene --------------------------
  scene = new THREE.Scene();

  // Create a basic perspective camera --------------
  camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 300, 10000 );

  // Create a renderer with Antialiasing ------------
  renderer = new THREE.WebGLRenderer({antialias:true});

  // Configure renderer clear color
  renderer.setClearColor("#ffffe0");

  // Configure renderer size
  renderer.setSize( window.innerWidth, window.innerHeight );

  // Append Renderer to DOM
  document.body.appendChild( renderer.domElement );
}

function geometry(){
  // Configure lights -------------------------------
  var light1 = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(light1);

  var light2 = new THREE.PointLight(0xffffff, 0.5);
  scene.add(light2);

  // Create a Cube Mesh with basic material ---------
  var geometry = new THREE.BoxGeometry(200, 200, 200);
  var geometry2 = new THREE.SphereBufferGeometry(50, 50, 50);

  // MATERIAL 1:
  var material = new THREE.MeshBasicMaterial( {  wireframe:true, color: "#498155" } );


//material2
  var texture = new THREE.TextureLoader().load('texture/a.jpg');
  var material2 = new THREE.MeshBasicMaterial({  map: texture });


//  var mesh1 = new THREE.Mesh( geometry, material );
  //mesh1.position.z = -1000;
//  mesh1.position.y = 100;

  var mesh2 = new THREE.Mesh( geometry2, material2);
  mesh2.position.z = -1000;
  //mesh2.position.x = -100;
  //mesh2.position.y = 200;

var triangles = 500;
  var geometry3 = new THREE.BufferGeometry();



  				var positions = [];

  				var colors = [];



  				for ( var i = 0; i < triangles; i ++ ) {



  					positions.push( Math.random() - 0.5 );

  					positions.push( Math.random() - 0.5 );

  					positions.push( Math.random() - 0.5 );



  					colors.push( Math.random() * 255 );

  					colors.push( Math.random() * 255 );

  					colors.push( Math.random() * 255 );

  					colors.push( Math.random() * 255 );



  				}



  				var positionAttribute = new THREE.Float32BufferAttribute( positions, 3 );

  				var colorAttribute = new THREE.Uint8BufferAttribute( colors, 4 );



  				colorAttribute.normalized = true; // this will map the buffer values to 0.0f - +1.0f in the shader



  			//	geometry.addAttribute( 'position', positionAttribute );

  			//	geometry.addAttribute( 'color', colorAttribute );



  				// material



  				var material3 = new THREE.RawShaderMaterial( {



  					uniforms: {

  						time: { value: 1.0 }

  					},

  					vertexShader: document.getElementById( 'vertexShader' ).textContent,

  					fragmentShader: document.getElementById( 'fragmentShader' ).textContent,

  					side: THREE.DoubleSide,

  					transparent: true



  				} );



  				var mesh3 = new THREE.Mesh( geometry, material );

  				scene.add( mesh3 );


mesh = new THREE.Mesh( geometry, material );
mesh.position.z = -1000;
// ------------------------------------------------

// Add mesh to scene
scene.add( mesh);
scene.add( mesh2 );
}

// Render Loop
function render() {
  requestAnimationFrame( render );

  mesh.rotation.x += 0.00; //Continuously rotate the mesh
  mesh.rotation.y += 0.01;

  // Render the scene
  renderer.render(scene, camera);
};

init();
geometry();
render();
