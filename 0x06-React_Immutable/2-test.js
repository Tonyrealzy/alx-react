const accessImmutableObject = require("./2-nested").default;

const obj = {
  name: {
    first: "Guillaume",
    last: "Salva",
  },
};

console.log(JSON.stringify(accessImmutableObject(obj, ["name", "first"])));
console.log(JSON.stringify(accessImmutableObject(obj, ["name", "last"])));
console.log(JSON.stringify(accessImmutableObject(obj, ["name", "middle"])));
