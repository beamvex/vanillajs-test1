import { ViewState } from "./view/viewstate";
import { Tabs } from "./controller/tabs/tabs";
import { Maps } from "./controller/maps/maps";

export class App {

    constructor(doc) {

        this.viewState = new ViewState(doc);

        this.controllers = [
            new Tabs(this),
            new Maps(this)
        ];

    }

    getViewState() {
        return this.viewState;
    }

}