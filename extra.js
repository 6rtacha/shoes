const fs = require("fs-extra");

const directoriesToCopy = [
  { source: "src/views", destination: "dist/src/views" },
  { source: "src/public", destination: "dist/src/public" },
];

async function copyDirectories() {
  try {
    for (const directory of directoriesToCopy) {
      await fs.copy(directory.source, directory.destination);
    }
    console.log("Successfully Duplicated!");
  } catch (error) {
    console.error("Error, extra:", error);
  }
}

copyDirectories().then();
