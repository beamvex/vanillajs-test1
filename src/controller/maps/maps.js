import { HTMLMapMarker } from "./htmlmapmarker";
import { Trucks } from "../trucks/trucks";

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

        google.maps.event.addListener(this.map, 'click', function(evt) {
            console.log('Map was clicked!', evt);
          });

         this.trucks = new Trucks(app, this.map);
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

        this.centerLatLng = { lat: this.position.coords.latitude, lng: this.position.coords.longitude };

        this.map.setCenter(this.centerLatLng);

        if (!this.mymarker) {
            this.mymarker = new HTMLMapMarker(this.centerLatLng, 
            this.viewState.getElement('mymarker'), 
            this.map);

            google.maps.event.addListener(this.mymarker, 'click', function(evt) {
                console.log('My marker was clicked!', evt);
              });
        } 
        
    }

    clickbutton(evt) {

        if (evt.target.id === 'maptabbutton') {
            this.centreMap();
        }
    }

}