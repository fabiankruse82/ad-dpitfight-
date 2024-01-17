const fs = require("fs");
const readlineSync = require("readline-sync"); //*readline needs to be replaced
const tools = require("./tools");

//*check for existing json character sheet
if (fs.existsSync("charactersheet.json")) {
  const reuseContent = readlineSync.keyInYNStrict(
    "There is already a character sheet saved. Reuse?"
  );

  if (reuseContent) {
    const existingAttributes = tools.loadFromFile();
    console.log("Reusing existing attributes:");
    console.log(existingAttributes);
  } // *start character generation with generating attributes
} else {
  const newAttributes = tools.generateAttributes();
  console.log("Generated new attributes:");
  console.log(newAttributes);
  tools.saveToFile(newAttributes);
}
