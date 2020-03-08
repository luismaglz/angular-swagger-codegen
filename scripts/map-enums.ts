const fs = require("fs");
const replace = require("replace-in-file");

const enumsPath = "../string-enums.txt";
const paths = [
  "../../projects/api-models/src/model/*.ts",
  "../../projects/ts-dotrez-api/src/base/api/*.ts",
  "../../projects/ts-dotrez-api/src/store/api/*.ts"
];
const dry = false;

// Read and process enums
fs.readFile(enumsPath, "utf8", processEnums);

function processEnums(err, contents) {
  const enumDictionary = JSON.parse(contents);

  paths.forEach(modelPath => {
    const options = {
      files: modelPath,
      from: /<ENUM>(.*)<\/ENUM>/gm,
      to: (m, g) => replaceEnums(m, g, enumDictionary),
      dry
    };

    replace(options)
      .then(results => {
        // console.log("Replacement results:", results);
      })
      .catch(error => {
        console.error("Error occurred:", error);
      });
  });
}

function replaceEnums(match: string, group: string, enumDictionary: string) {
  if (typeof group !== "string") return "";
  const key = group.replace(/'/g, '"');
  return enumDictionary[key] ? enumDictionary[key] : match;
}
