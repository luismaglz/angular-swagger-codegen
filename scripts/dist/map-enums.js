const fs = require("fs");
const replace = require("replace-in-file");
const enumsPath = "../string-enums.txt";
const modelsPath = "../../projects/ts-dotrez-api/model/*.ts";
const dry = false;
// Read and process enums
fs.readFile(enumsPath, "utf8", processEnums);
function processEnums(err, contents) {
    // console.log(contents);
    const enumDictionary = JSON.parse(contents);
    // console.log(Object.keys(enumDictionary)[0].replace(/"/g, "'"));
    // const regex = /^export enum .* {\r([\s\S]*?)}/gm;
    // const matches = contents.match(regex);
    const options = {
        files: modelsPath,
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
}
function replaceEnums(match, group, enumDictionary) {
    if (typeof group !== "string")
        return "";
    const key = group.replace(/'/g, '"');
    return enumDictionary[key] ? enumDictionary[key] : match;
}
//# sourceMappingURL=map-enums.js.map