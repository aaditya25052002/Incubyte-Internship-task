/**
 * Represents a spacecraft capable of moving in a three-dimensional space.
 */
class Spacecraft {
    /**
     * Creates a new spacecraft instance.
     * 
     * @param {number} x - Initial x-coordinate.
     * @param {number} y - Initial y-coordinate.
     * @param {number} z - Initial z-coordinate.
     * @param {string} direction - Initial direction ('N', 'E', 'S', 'W', 'U', 'D').
     */
    constructor(x, y, z, direction) {
      this.x = x;
      this.y = y;
      this.z = z;
      this.direction = direction;
  
      // Defines movement vectors for each direction.
      this.DIRECTION_MATRIX = {
        N: { x: 0, y: 1, z: 0 },  // North
        E: { x: 1, y: 0, z: 0 },  // East
        S: { x: 0, y: -1, z: 0 }, // South
        W: { x: -1, y: 0, z: 0 }, // West
        U: { x: 0, y: 0, z: 1 },  // Up
        D: { x: 0, y: 0, z: -1 }  // Down
      };
  
      // Defines the order of directions for turning purposes.
      this.DIRECTION_ORDER = ["N", "E", "S", "W"];
    }
  
    /**
     * Moves the spacecraft based on the provided command.
     * 
     * @param {string} command - Movement command ('f', 'b', 'l', 'r', 'u', 'd').
     */
    move(command) {
      switch (command) {
        case "f":
          this.advance(1);
          break;
        case "b":
          this.advance(-1);
          break;
        case "l":
          this.turn(-1);  // Turn left
          break;
        case "r":
          this.turn(1);   // Turn right
          break;
        case "u":
          this.direction = "U";  // Turn upwards
          break;
        case "d":
          this.direction = "D";  // Turn downwards
          break;
      }
    }
  
    /**
     * Turns the spacecraft in a given direction.
     * 
     * @param {number} turnDirection - Indicates the direction to turn. 1 for right and -1 for left.
     */
    turn(turnDirection) {
      if (this.direction === "U") {
        this.direction = turnDirection === 1 ? "S" : "N";
        return;
      }
      if (this.direction === "D") {
        this.direction = turnDirection === 1 ? "N" : "S";
        return;
      }
  
      const currentIdx = this.DIRECTION_ORDER.indexOf(this.direction);
      const newIdx = (currentIdx + turnDirection + 4) % 4;
      this.direction = this.DIRECTION_ORDER[newIdx];
    }
  
    /**
     * Advances the spacecraft in its current direction.
     * 
     * @param {number} multiplier - Represents the distance and direction to advance.
     */
    advance(multiplier) {
      const directionValues = this.DIRECTION_MATRIX[this.direction];
      if (!directionValues) {
        console.error(`Invalid direction: ${this.direction}`);
        return;
      }
      this.x += directionValues.x * multiplier;
      this.y += directionValues.y * multiplier;
      this.z += directionValues.z * multiplier;
    }
  }
  
  module.exports = Spacecraft;
  