export class Maps {

    constructor(app) {
        this.app = app;

        this.viewState = app.getViewState();

        this.viewState.bindEvent('maptabbutton', 'click', this.clickbutton.bind(this));
 
    }

    clickbutton(evt) {
    
        console.log('really map', evt);

        if(evt.target.id === 'maptabbutton') {
            map = new google.maps.Map(this.viewState.getElement('map'), {
                center: { lat: -34.397, lng: 150.644 },
                zoom: 8
            });        
        } 
    }

}