const { fromJS } = require("immutable");

function accessImmutableObject(object, array) {
  const immutableObject = fromJS(object);

  return immutableObject.getIn(array);
}

module.exports = accessImmutableObject();