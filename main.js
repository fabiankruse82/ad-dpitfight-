const fs = require("fs");
const readlineSync = require("readline-sync");
const tools = require("./tools");

if (fs.existsSync("charactersheet.json")) {
  const reuseContent = readlineSync.keyInYNStrict(
    "There is already a character sheet saved. Reuse?"
  );

  if (reuseContent) {
    const existingAttributes = tools.loadFromFile("charactersheet.json");
    console.log("Reusing existing attributes:");
    console.log(existingAttributes);
    tools.chooseRace(existingAttributes);
  } else {
    console.log(
      "No existing character sheet reused. Continuing with the program."
    );

    // Continue with the program logic...
    const newAttributes = tools.generateAttributes();
    console.log("Generating new attributes:");
    console.log(newAttributes);
    tools.saveToFile("charactersheet.json", newAttributes);

    const raceChoice = readlineSync.questionInt(
      "Choose your race (enter the corresponding number): "
    );
    const chosenRace = tools.chooseRace(newAttributes, raceChoice);

    // Apply race modifier to attributes and save to file
    tools.applyRaceModifier(newAttributes, chosenRace);
  }
} else {
  // Continue with the program logic...
  const newAttributes = tools.generateAttributes();
  console.log("Generating new attributes:");
  console.log(newAttributes);
  tools.saveToFile("charactersheet.json", newAttributes);

  const raceChoice = readlineSync.questionInt(
    "Choose your race (enter the corresponding number): "
  );
  const chosenRace = tools.chooseRace(newAttributes, raceChoice);

  // Apply race modifier to attributes and save to file
  tools.applyRaceModifier(newAttributes, chosenRace);
}
