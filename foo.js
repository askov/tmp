console.log("module:foo");

import("./bar.js").then((r) => {
  console.log("import:bar", r.default());
});
