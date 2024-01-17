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

function saveToFile(filename, data) {
  fs.writeFileSync(filename, JSON.stringify(data, null, 2));
}

function loadFromFile(filename) {
  const fileContent = fs.readFileSync(filename, "utf8");
  return JSON.parse(fileContent);
}

function chooseRace(attributes) {
  const strDwarfCondition = attributes.find((attr) => attr.STR >= 8);
  const conDwarfCondition = attributes.find((attr) => attr.CON >= 11);
  const dexElfCondition = attributes.find((attr) => attr.DEX >= 6);
  const conElfCondition = attributes.find((attr) => attr.CON >= 7);
  const intElfCondition = attributes.find((attr) => attr.INT >= 8);
  const chaElfCondition = attributes.find((attr) => attr.CHA >= 8);
  const strGnomeCondition = attributes.find((attr) => attr.STR >= 6);
  const conGnomeCondition = attributes.find((attr) => attr.CON >= 8);
  const intGnomeCondition = attributes.find((attr) => attr.INT >= 6);
  const dexHalfElfCondition = attributes.find((attr) => attr.DEX >= 6);
  const conHalfElfCondition = attributes.find((attr) => attr.CON >= 6);
  const intHalfElfCondition = attributes.find((attr) => attr.INT >= 4);
  const strHalflingCondition = attributes.find((attr) => attr.STR >= 7);
  const dexHalflingCondition = attributes.find((attr) => attr.DEX >= 7);
  const conHalflingCondition = attributes.find((attr) => attr.CON >= 10);
  const intHalflingCondition = attributes.find((attr) => attr.INT >= 6);
  console.log("Available races:");
  const eligibleRaces = [];

  if (strDwarfCondition && conDwarfCondition) {
    eligibleRaces.push("Dwarf");
  }
  if (
    dexElfCondition &&
    conElfCondition &&
    intElfCondition &&
    chaElfCondition
  ) {
    console.log("2. Elf");
  }
  if (strGnomeCondition && conGnomeCondition && intGnomeCondition) {
    console.log("3. Gnome");
  }
  if (dexHalfElfCondition && conHalfElfCondition && intHalfElfCondition) {
    console.log("4. Half-Elf");
  }

  if (
    strHalflingCondition &&
    dexHalflingCondition &&
    conHalflingCondition &&
    intHalflingCondition
  ) {
    console.log("5. Halfling");
  }
  console.log("6. Human (always valid)");

  if (eligibleRaces.length > 0) {
    const chosenRace = readlineSync.questionInt(
      "Choose your race (enter the corresponding number): "
    );
    const selectedRace = eligibleRaces[chosenRace - 1];
    console.log(`You chose ${selectedRace}.`);

    // Save the chosen race to charactersheet.json
    const characterSheet = loadFromFile("charactersheet.json");
    characterSheet.race = selectedRace;
    saveToFile("charactersheet.json", characterSheet);
  } else {
    console.log("No eligible races based on attributes.");
  }
}
function applyRaceModifier(attributes, chosenRace) {
  let raceModifier;

  switch (chosenRace) {
    case "Dwarf":
      raceModifier = { CON: 1, CHA: -1 };
      break;
    case "Elf":
      raceModifier = { DEX: 1, CON: -1 };
      break;
    case "Gnome":
      raceModifier = { INT: 1, WIS: -1 };
      break;
    case "Half-Elf":
      // Handle Half-Elf race modifier if needed
      break;
    case "Halfling":
      raceModifier = { DEX: 1, STR: -1 };
      break;
    case "Human":
      // Handle Human race modifier if needed
      break;
    default:
      console.log("Invalid choice. You are Human by default.");
      chosenRace = "Human";
  }

  console.log(`You chose ${chosenRace}!`);
  const modifiedAttributes = attributes.map((attribute) => {
    const attributeName = Object.keys(attribute)[0];
    const attributeValue = attribute[attributeName];

    // Apply race modifier if applicable
    if (raceModifier && raceModifier[attributeName] !== undefined) {
      const modifiedValue = attributeValue + raceModifier[attributeName];
      console.log(
        `Modified ${attributeName} ${
          raceModifier[attributeName] > 0 ? "+" : ""
        }${raceModifier[attributeName]}: ${modifiedValue}`
      );
      return { [attributeName]: modifiedValue };
    }

    return attribute;
  });

  // Display modified attributes in the console
  console.log("Modified attributes:");
  console.log(modifiedAttributes);

  // Save modified attributes to file
  saveToFile("charactersheet.json", modifiedAttributes);
}

module.exports = {
  generateAttributes,
  saveToFile,
  loadFromFile,
  chooseRace,
  applyRaceModifier,
};
