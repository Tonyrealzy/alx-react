const getImmutableObject = require("./0-fromjs");
const { isImmutable } = require("immutable");

const obj = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132,
};

const immutableMap = getImmutableObject(obj);
console.log(immutableMap);
console.log("Is Immutable: ", isImmutable(immutableMap));
