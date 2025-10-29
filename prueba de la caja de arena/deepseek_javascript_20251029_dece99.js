selectObject(object) {
  // Deseleccionar anterior
  if (this.selectedObject) {
    this.selectedObject.material.emissive.setHex(this.selectedObject.userData.originalEmissive);
  }
  this.selectedObject = object;
  if (object) {
    object.userData.originalEmissive = object.material.emissive.getHex();
    object.material.emissive.setHex(0x888888);
  }
}