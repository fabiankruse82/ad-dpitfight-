const { getAttributeRequirements } = require("./racerequirements");

function generateAttributes() {
  const attributes = {
    STR: getRandomNumber(3, 18),
    DEX: getRandomNumber(3, 18),
    CON: getRandomNumber(3, 18),
    INT: getRandomNumber(3, 18),
    WIS: getRandomNumber(3, 18),
    CHA: getRandomNumber(3, 18),
  };
  return attributes;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
  generateAttributes,
};
