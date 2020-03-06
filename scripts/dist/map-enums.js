const fs = require("fs");
fs.readFile("../../swagger-gen/types/enums.ts", "utf8", function (err, contents) {
    // console.log(contents);
    const regex = /^export enum .* {\r([\s\S]*?)}/gm;
    const matches = contents.match(regex);
    console.log(contents.match(regex)[0]);
});
//# sourceMappingURL=map-enums.js.map