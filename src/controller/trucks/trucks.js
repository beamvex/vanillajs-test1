import { HTMLMapMarker } from "../maps/htmlmapmarker";

// This import loads the firebase namespace along with all its type information.
import * as firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/firestore';

export class Trucks {

    constructor(app, map) {

        this.app = app;

        this.viewState = app.getViewState();

        this.trucks = [];

        this.map = map;

        google.maps.event.addListenerOnce(this.map, 'idle', function(){
            // do something only the first time the map is loaded
            this.fetchTrucks();
        }.bind(this));

    }

    fetchTrucks() {

        this.listener = firebase.firestore().collection('trucks').onSnapshot(this.updateTrucks.bind(this));

    }

    updateTrucks(result) {

        result.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots
            
            if (!this.trucks[doc.id]) {

                var element = this.viewState.getElement('truckmarker').cloneNode(true);
                console.log(doc.id, " => ", doc.data(), element, this.map);
                var marker = new HTMLMapMarker(doc.data(), 
                    element, 
                    this.map);
        
                    google.maps.event.addListener(marker, 'click', function(evt) {
                        console.log('My marker was clicked!', element);
                      });
            
                var truck = {
                    id: doc.id,
                    marker: marker,
                    ...doc.data()
                }
                this.trucks[doc.id] = truck;
            }

        }.bind(this));
    }

}