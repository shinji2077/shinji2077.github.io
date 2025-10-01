
$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(300, 650, 100, 20, "teal" );
    createPlatform(600, 600, 100, 20, "red" );
    createPlatform(850, 550, 100, 20, "black" );
    createPlatform(1200, 500, 100, 20, "yellow" );
    createPlatform(1300, 400, 100, 20, "green" );


    // TODO 3 - Create Collectables
    createCollectable("steve", 1300, 400, 0.7, 0.8);
    createCollectable("max", 1200, 500);
    createCollectable("grace", 600, 600);



    
    // TODO 4 - Create Cannons
    createCannon("top", 200, 1000);
    createCannon("top", 550, 1000);
    createCannon("top", 900, 1000);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
