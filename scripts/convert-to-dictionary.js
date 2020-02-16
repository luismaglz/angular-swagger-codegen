module.exports = {
  from: /^export interface (.*?) { \r\n    \?: (.*?);\r\n}$/gm,
  to: 'import {Dictionary} from "lodash"; export type $1 =  Dictionary<$2>',
  files: "projects/dotrez-api/src/lib/model",
  dry: true,
  verbose: true
};
// module.exports = {
//   from: /export interface (.*) \{ \n    \?: (.*);\n\}/g,
//   to: 'import {Dictionary} from "lodash"; export type $1 =  Dictionary<$2>',
//   files: "projects/dotrez-api/src/lib/model",
//   dry: false,
//   verbose: true
// };

// const replace = require("replace-in-file");
// debugger;
// const results = replace.sync({
//   from: /^export interface (.*?) { \r\n    \?: (.*?);\r\n}$/gm,
//   to: 'import {Dictionary} from "lodash"; export type $1 =  Dictionary<$2>',
//   files:
//     "../projects/dotrez-api/src/lib/model",
//   dry: false,
//   verbose: true,
//   countMatches: true
// });
// console.log(results.filter(result => result.hasChanged));
// const fs = require("fs");
// const contents = fs.readFileSync(
//   "../projects/dotrez-api/src/lib/model/activitySimpleRequestParameters.ts",
//   "utf-8"
// );
// console.log(contents);
// console.log(
//   contents.match(/^export interface (.*?) { \r\n    \?: (.*?);\r\n}$/gm)
// );

// const replace = require("replace");
// const results = replace({
//   // regex: /export interface (.*) { \n    \?: (.*);\n}/gm,
//   regex: new RegExp("export interface (.*) \\{ \\n    \\?: (.*);\\n\\}", "gm"),
//   replacement:
//     'import {Dictionary} from "lodash"; export type $1 =  Dictionary<$2>',
//   paths: ["../projects/dotrez-api/src/lib/model"],
//   recursive: true,
//   preview: true
// });
