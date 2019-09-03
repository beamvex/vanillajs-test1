import * as firebase from 'firebase/app';
import { ViewState } from "./view/viewstate";
import { Tabs } from "./controller/tabs/tabs";
import { Maps } from "./controller/maps/maps";

export class App {

    constructor(doc) {

        this.fbapp = firebase.initializeApp({ 
            apiKey: 'AIzaSyBpBwGqd8U8GA-HschlOvAUWJVjUFr1bJc',
            projectId: 'test1-2b206',
        });

        this.viewState = new ViewState(doc);

        this.controllers = [];
        
        this.controllers['tabs'] = new Tabs(this);
        this.controllers['maps'] = new Maps(this);      

    }

    getViewState() {
        return this.viewState;
    }

}