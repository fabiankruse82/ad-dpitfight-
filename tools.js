const fs = require("fs");

function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

function generateAttributes() {
  const attributes = ["STR", "DEX", "CON", "INT", "WIS", "CHA"];
  const attributeValues = [];

  for (let i = 0; i < attributes.length; i++) {
    const sumOfDice = rollDie() + rollDie() + rollDie();
    attributeValues.push(sumOfDice);
  }

  const result = attributes.map((attribute, index) => ({
    [attribute]: attributeValues[index],
  }));

  return result;
}

function saveToFile(attributesArray) {
  fs.writeFileSync(
    "charactersheet.json",
    JSON.stringify(attributesArray, null, 2)
  );
}

function loadFromFile() {
  const fileContent = fs.readFileSync("charactersheet.json", "utf8");
  return JSON.parse(fileContent);
}

module.exports = {
  generateAttributes,
  saveToFile,
  loadFromFile,
};
