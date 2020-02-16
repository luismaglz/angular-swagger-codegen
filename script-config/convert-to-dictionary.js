module.exports = {
  from: /^export interface (.*?) { \r\n    \?: (.*?);\r\n}$/gm,
  to: 'import {Dictionary} from "lodash"; export type $1 =  Dictionary<$2>',
  files: "projects/dotrez-api/src/lib/model/*.ts",
  dry: false,
  verbose: true
};
