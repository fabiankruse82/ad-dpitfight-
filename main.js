const { generateAttributes } = require("./tools");
const { getAttributeRequirements } = require("./charrequirements");

function startCharacterCreation() {
  const attributes = generateAttributes();
  console.log("Generated attributes:", attributes);
}

startCharacterCreation();
