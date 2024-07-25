const fs = require("node:fs/promises");
const path = require("node:path");

async function compileTemplates() {
  // get all the files in the templates directory
  const files = await fs.readdir(path.join(__dirname, "../src", "templates"));

  // loop through the files and log the contents
  for (const file of files) {
    if (!file.endsWith(".ejs")) {
      continue;
    }

    const content = await fs.readFile(
      path.join(__dirname, "../src", "templates", file),
      {
        encoding: "utf-8",
      }
    );

    await fs.writeFile(
      path.join(__dirname, "../src", "templates", `${file.split(".")[0]}.ts`),
      `export default \`${content
        .replaceAll("`", "\\`")
        .replaceAll("${", "\\${")}\``,
      {
        encoding: "utf-8",
      }
    );
  }
}

compileTemplates();
