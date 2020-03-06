function capitalize(a, s) {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
}

module.exports = {
  from: /<CAP>(.*)<\/CAP>/gm,
  to: capitalize,
  files: "projects/ts-dotrez-api/model/*.ts",
  dry: false,
  verbose: true
};
