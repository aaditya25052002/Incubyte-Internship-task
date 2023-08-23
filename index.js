// Required modules
const readline = require("readline");
const Spacecraft = require("./spacecraft.js");

// Setup CLI interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Get initial direction for the spacecraft
rl.question("Initial direction (N, S, E, W, U, D): ", (initialDirection) => {
  // Get movement commands after setting direction
  rl.question("Commands (e.g., f,r,u,b,l): ", (input) => {
    // Parse and trim command input
    const commands = input.split(",").map((command) => command.trim());

    // Initialize spacecraft at origin with user-defined direction
    const spacecraft = new Spacecraft(0, 0, 0, initialDirection);

    // Process each command
    commands.forEach((command) => spacecraft.move(command));

    // Output final position and direction
    console.log(
      `Position: (${spacecraft.x}, ${spacecraft.y}, ${spacecraft.z})`
    );
    console.log(`Direction: ${spacecraft.direction}`);

    // Terminate program
    rl.close();
  });
});
