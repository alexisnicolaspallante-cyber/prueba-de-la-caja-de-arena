createObjectPreview(objectType) {
  // Eliminar previsualización anterior
  if (this.objectPreview) {
    this.scene.remove(this.objectPreview);
  }

  const preview = this.createObject(objectType);
  preview.material.transparent = true;
  preview.material.opacity = 0.7;
  this.objectPreview = preview;
  this.scene.add(this.objectPreview);
}