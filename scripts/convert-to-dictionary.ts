const r = require("replace-in-file");

const options = {
  from: /^export interface (.*?) { \r\n    \?: (.*?);\r\n}$/gm,
  to: 'import {Dictionary} from "lodash"; export type $1 =  Dictionary<$2>',
  files: "../../projects/api-models/src/model/*.ts",
  dry: false,
  verbose: true
};

r(options)
  .then(results => {
    console.log("Replacement results:", results);
  })
  .catch(error => {
    console.error("Error occurred:", error);
  });
