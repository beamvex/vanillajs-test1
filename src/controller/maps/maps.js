export class Maps {

    constructor(app) {
        this.app = app;

        this.viewState = app.getViewState();

        this.viewState.bindEvent('maptabbutton', 'click', this.clickbutton.bind(this));

        this.position = {
            coords: {
                latitude: 51.4769,
                longitude: -0.00050
            }
        };

        this.initMap();

        this.getLocation();

    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition.bind(this));
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    showPosition(position) {
        this.position = position;
        this.centreMap();
    }

    initMap() {
        this.map = new google.maps.Map(this.viewState.getElement('map'), {
            center: { lat: this.position.coords.latitude, lng: this.position.coords.longitude },
            zoom: 19
        });
    }

    centreMap() {
        this.map.setCenter({ lat: this.position.coords.latitude, lng: this.position.coords.longitude });
    }

    clickbutton(evt) {

        if (evt.target.id === 'maptabbutton') {
            this.centreMap();
        }
    }

}