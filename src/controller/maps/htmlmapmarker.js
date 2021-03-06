export class HTMLMapMarker {
  constructor(latlng, html, map) {
    this.latlng = new google.maps.LatLng(latlng.lat, latlng.lng);
    this.html = html;
    this.map = map;

    this.innerOverlay = new google.maps.OverlayView();

    this.innerOverlay.onAdd = this.onAdd.bind(this);
    this.innerOverlay.draw = this.draw.bind(this);
    this.innerOverlay.onRemove = this.onRemove.bind(this);

    this.innerOverlay.setMap(map);

  }

  createDiv() {
    this.div = document.createElement('div');
    this.div.style.position = 'absolute';
    
    if (this.html) {
      this.div.appendChild(this.html);

      google.maps.event.addDomListener(this.div, 'click', event => {
        google.maps.event.trigger(this, 'click');
      });

    }

    console.log(this.latlng.lng());

  }

  appendDivToOverlay() {
    const panes = this.innerOverlay.getPanes();
    panes.overlayMouseTarget.appendChild(this.div);
  }

  positionDiv() {
    const point = this.innerOverlay.getProjection().fromLatLngToDivPixel(this.latlng);
    if (point) {
      this.div.style.left = `${point.x}px`;
      this.div.style.top = `${point.y}px`;
    }
  }

  onAdd() {
    if (!this.div) {
      this.createDiv();
      this.appendDivToOverlay();
    }
  }

  draw() {
    this.positionDiv();
  }

  onRemove() {
    if (this.div) {
      this.div.parentNode.removeChild(this.div);
      this.div = null;
    }
  }

  getPosition() {
    return this.latlng;
  }

  getDraggable() {
    return false;
  }
}