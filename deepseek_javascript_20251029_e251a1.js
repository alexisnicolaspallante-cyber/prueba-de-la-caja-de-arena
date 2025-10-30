removeSelectedObject() {
  if (this.selectedObject) {
    this.objectsGroup.remove(this.selectedObject);
    this.selectedObject = null;
  }
}