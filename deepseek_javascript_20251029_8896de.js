rotateSelectedObject() {
  if (this.selectedObject) {
    this.selectedObject.rotation.y += Math.PI / 4;
  }
}