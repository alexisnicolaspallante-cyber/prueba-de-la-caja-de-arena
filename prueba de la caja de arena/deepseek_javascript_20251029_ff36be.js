placeObject(position, objectType) {
  const object = this.createObject(objectType);
  object.position.copy(position);
  object.userData = { type: objectType };
  this.objectsGroup.add(object);
  this.selectObject(object);
}