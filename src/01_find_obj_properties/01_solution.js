function findObjPropHasOwn(object) {
  let result = [];
  for (let key in object) {
    if (object.hasOwnPorperty(key)) {
      result.push(key);
    }
  }
  return result.join(', ');
}

function findObjKeys(obj) {
  let keys = Object.keys(obj);
  return keys.join(', ');
}
