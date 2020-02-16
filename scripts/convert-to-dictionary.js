module.exports = {
  from: /export interface (.*) \{ \n    \?: (.*);\n\}/g,
  to: 'import {Dictionary} from "lodash"; export type $1 =  Dictionary<$2>',
  files: "projects/dotrez-api/src/lib/model",
  dry: true,
  verbose: true
};
