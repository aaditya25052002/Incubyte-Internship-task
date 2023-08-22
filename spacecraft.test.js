const Spacecraft = require("./spacecraft");

function setupAndMove(x, y, z, direction, command) {
  const spacecraft = new Spacecraft(x, y, z, direction);
  spacecraft.move(command);
  return spacecraft;
}

function assertPositionAndDirection(spacecraft, x, y, z, direction) {
  expect(spacecraft.x).toBe(x);
  expect(spacecraft.y).toBe(y);
  expect(spacecraft.z).toBe(z);
  expect(spacecraft.direction).toBe(direction);
}

describe('Spacecraft initialization', () => {

    const testCases = [
        { x: 0, y: 0, z: 0, direction: "N" },
        { x: 0, y: 0, z: 0, direction: "E" },
        { x: 0, y: 0, z: 0, direction: "W" },
        { x: 0, y: 0, z: 0, direction: "S" },
        { x: 0, y: 0, z: 0, direction: "U" },
        { x: 0, y: 0, z: 0, direction: "D" }
    ];

    testCases.forEach((testCase) => {
        test(`initializes spacecraft with position (${testCase.x}, ${testCase.y}, ${testCase.z}) and direction ${testCase.direction}`, () => {
            const spacecraft = new Spacecraft(testCase.x, testCase.y, testCase.z, testCase.direction);
            assertPositionAndDirection(spacecraft, testCase.x, testCase.y, testCase.z, testCase.direction);
        });
    });

});

describe("Spacecraft movements in N direction", () => {
  test("moves spacecraft forward when direction is N", () => {
    const spacecraft = setupAndMove(0, 0, 0, "N", "f");
    assertPositionAndDirection(spacecraft, 0, 1, 0, "N");
  });

  test("moves spacecraft backward when direction is N", () => {
    const spacecraft = setupAndMove(0, 0, 0, "N", "b");
    assertPositionAndDirection(spacecraft, 0, -1, 0, "N");
  });

  test("turns spacecraft right from N direction", () => {
    const spacecraft = setupAndMove(0, 0, 0, "N", "r");
    assertPositionAndDirection(spacecraft, 0, 0, 0, "E");
  });

  test("turns spacecraft left from N direction", () => {
    const spacecraft = setupAndMove(0, 0, 0, "N", "l");
    assertPositionAndDirection(spacecraft, 0, 0, 0, "W");
  });

  test("turns spacecraft up from N direction", () => {
    const spacecraft = setupAndMove(0, 0, 0, "N", "u");
    assertPositionAndDirection(spacecraft, 0, 0, 0, "U");
  });

  test("turns spacecraft down from N direction", () => {
    const spacecraft = setupAndMove(0, 0, 0, "N", "d");
    assertPositionAndDirection(spacecraft, 0, 0, 0, "D");
  });
});

// Unit tests to handle movements in EAST direction.

describe("Spacecraft movements in E direction", () => {
  test("moves spacecraft forward when direction is E", () => {
    const spacecraft = setupAndMove(0, 0, 0, "E", "f");
    assertPositionAndDirection(spacecraft, 1, 0, 0, "E");
  });

  test("moves spacecraft backward when direction is E", () => {
    const spacecraft = setupAndMove(0, 0, 0, "E", "b");
    assertPositionAndDirection(spacecraft, -1, 0, 0, "E");
  });

  test("turns spacecraft right from E direction", () => {
    const spacecraft = setupAndMove(0, 0, 0, "E", "r");
    assertPositionAndDirection(spacecraft, 0, 0, 0, "S");
  });

  test("turns spacecraft left from E direction", () => {
    const spacecraft = setupAndMove(0, 0, 0, "E", "l");
    assertPositionAndDirection(spacecraft, 0, 0, 0, "N");
  });

  test("turns spacecraft up from E direction", () => {
    const spacecraft = setupAndMove(0, 0, 0, "E", "u");
    assertPositionAndDirection(spacecraft, 0, 0, 0, "U");
  });

  test("turns spacecraft down from E direction", () => {
    const spacecraft = setupAndMove(0, 0, 0, "E", "d");
    assertPositionAndDirection(spacecraft, 0, 0, 0, "D");
  });
});

// Unit Tests to test movements in South direction

describe("Spacecraft movements in S direction", () => {
  test("moves spacecraft forward when direction is S", () => {
    const spacecraft = setupAndMove(0, 0, 0, "S", "f");
    assertPositionAndDirection(spacecraft, 0, -1, 0, "S");
  });

  test("moves spacecraft backward when direction is S", () => {
    const spacecraft = setupAndMove(0, 0, 0, "S", "b");
    assertPositionAndDirection(spacecraft, 0, 1, 0, "S");
  });

  test("turns spacecraft right from S direction", () => {
    const spacecraft = setupAndMove(0, 0, 0, "S", "r");
    assertPositionAndDirection(spacecraft, 0, 0, 0, "W");
  });

  test("turns spacecraft left from S direction", () => {
    const spacecraft = setupAndMove(0, 0, 0, "S", "l");
    assertPositionAndDirection(spacecraft, 0, 0, 0, "E");
  });

  test("turns spacecraft up from S direction", () => {
    const spacecraft = setupAndMove(0, 0, 0, "S", "u");
    assertPositionAndDirection(spacecraft, 0, 0, 0, "U");
  });

  test("turns spacecraft down from S direction", () => {
    const spacecraft = setupAndMove(0, 0, 0, "S", "d");
    assertPositionAndDirection(spacecraft, 0, 0, 0, "D");
  });
});

// Unit Tests to test movements in West direction

describe("Spacecraft movements in W direction", () => {
  test("moves spacecraft forward when direction is W", () => {
    const spacecraft = setupAndMove(0, 0, 0, "W", "f");
    assertPositionAndDirection(spacecraft, -1, 0, 0, "W");
  });

  test("moves spacecraft backward when direction is W", () => {
    const spacecraft = setupAndMove(0, 0, 0, "W", "b");
    assertPositionAndDirection(spacecraft, 1, 0, 0, "W");
  });

  test("turns spacecraft right from W direction", () => {
    const spacecraft = setupAndMove(0, 0, 0, "W", "r");
    assertPositionAndDirection(spacecraft, 0, 0, 0, "N");
  });

  test("turns spacecraft left from W direction", () => {
    const spacecraft = setupAndMove(0, 0, 0, "W", "l");
    assertPositionAndDirection(spacecraft, 0, 0, 0, "S");
  });

  test("turns spacecraft up from W direction", () => {
    const spacecraft = setupAndMove(0, 0, 0, "W", "u");
    assertPositionAndDirection(spacecraft, 0, 0, 0, "U");
  });

  test("turns spacecraft down from W direction", () => {
    const spacecraft = setupAndMove(0, 0, 0, "W", "d");
    assertPositionAndDirection(spacecraft, 0, 0, 0, "D");
  });
});

// Unit Tests to test movements in UP direction

describe("Spacecraft movements in U direction", () => {
  test("moves spacecraft forward when direction is U", () => {
    const spacecraft = setupAndMove(0, 0, 0, "U", "f");
    assertPositionAndDirection(spacecraft, 0, 0, 1, "U");
  });

  test("moves spacecraft backward when direction is U", () => {
    const spacecraft = setupAndMove(0, 0, 0, "U", "b");
    assertPositionAndDirection(spacecraft, 0, 0, -1, "U");
  });

  test("turns spacecraft right from U direction", () => {
    const spacecraft = setupAndMove(0, 0, 0, "U", "r");
    assertPositionAndDirection(spacecraft, 0, 0, 0, "S"); // Adjusted based on your provided logic
  });

  test("turns spacecraft left from U direction", () => {
    const spacecraft = setupAndMove(0, 0, 0, "U", "l");
    assertPositionAndDirection(spacecraft, 0, 0, 0, "N"); // Adjusted based on your provided logic
  });

  test("turns spacecraft up when facing U direction", () => {
    const spacecraft = setupAndMove(0, 0, 0, "U", "u");
    assertPositionAndDirection(spacecraft, 0, 0, 0, "U");
  });

  test("turns spacecraft down when facing U direction", () => {
    const spacecraft = setupAndMove(0, 0, 0, "U", "d");
    assertPositionAndDirection(spacecraft, 0, 0, 0, "D");
  });
});

// Unit Tests to test movements in Down direction

describe("Spacecraft movements in D direction", () => {
  test("moves spacecraft forward when direction is D", () => {
    const spacecraft = setupAndMove(0, 0, 0, "D", "f");
    assertPositionAndDirection(spacecraft, 0, 0, -1, "D");
  });

  test("moves spacecraft backward when direction is D", () => {
    const spacecraft = setupAndMove(0, 0, 0, "D", "b");
    assertPositionAndDirection(spacecraft, 0, 0, 1, "D");
  });

  test("turns spacecraft right from D direction", () => {
    const spacecraft = setupAndMove(0, 0, 0, "D", "r");
    assertPositionAndDirection(spacecraft, 0, 0, 0, "N");
  });

  test("turns spacecraft left from D direction", () => {
    const spacecraft = setupAndMove(0, 0, 0, "D", "l");
    assertPositionAndDirection(spacecraft, 0, 0, 0, "S");
  });

  test("turns spacecraft up when facing D direction", () => {
    const spacecraft = setupAndMove(0, 0, 0, "D", "u");
    assertPositionAndDirection(spacecraft, 0, 0, 0, "U");
  });

  test("turns spacecraft down when facing D direction", () => {
    const spacecraft = setupAndMove(0, 0, 0, "D", "d");
    assertPositionAndDirection(spacecraft, 0, 0, 0, "D");
  });
});

//Tests to handle the invalid commands
describe("Spacecraft with invalid commands and directions", () => {
  test("does not change position or direction with invalid command", () => {
    const spacecraft = setupAndMove(0, 0, 0, "N", "x"); // invalid command
    assertPositionAndDirection(spacecraft, 0, 0, 0, "N");
  });

  test("does not move when facing an invalid direction", () => {
    const spacecraft = setupAndMove(0, 0, 0, "A", "f"); // invalid direction
    assertPositionAndDirection(spacecraft, 0, 0, 0, "A");
  });
});
