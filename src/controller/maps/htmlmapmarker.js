export class HTMLMapMarker {
    constructor(latlng, html, map) {      
      this.latlng = new google.maps.LatLng(latlng.lat, latlng.lng);
      this.html = html;
      this.map = map;

      this.innerOverlay = new google.maps.OverlayView();

      this.innerOverlay.draw = this.draw.bind(this);

      this.innerOverlay.setMap(map);

    }
  
    createDiv() {
      this.div = document.createElement('div');
      this.div.style.position = 'absolute';
      console.log(this.html);
      if (this.html) {
        this.div.appendChild(this.html);
      
      google.maps.event.addDomListener(this.html, 'click', event => {
        console.log('you clicked it');
        google.maps.event.trigger(this, 'click');
      });

      google.maps.event.addListener(this.innerOverlay, 'click', event => {
        console.log('you clicked it');
      });
    }
      
    }
  
    appendDivToOverlay() {
      const panes = this.innerOverlay.getPanes();
      panes.overlayLayer.appendChild(this.div);
    }
  
    positionDiv() {
      const point = this.innerOverlay.getProjection().fromLatLngToDivPixel(this.latlng);
      if (point) {
        this.div.style.left = `${point.x}px`;
        this.div.style.top = `${point.y}px`;
      }
      console.log(point, this.div);
    }
  
    draw() {
      if (!this.div) {
        this.createDiv();
        this.appendDivToOverlay();
      }
      this.positionDiv();
    }
  
    remove() {
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