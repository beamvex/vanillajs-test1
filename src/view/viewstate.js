export class ViewState {

    constructor(doc) {

        this.doc = doc;

        this.elements = [];

        this.findElements(['hometabbutton',
            'maptabbutton',
            'profiletabbutton',
            'homepage',
            'mappage',
            'profilepage',
            'homepagebutton',
            'mappagebutton',
            'profilepagebutton',
            'map'
        ]);

    }

    findElements(elms) {
        for (name of elms) {
            this.elements[name] = this.doc.getElementById(name);
        }
    }

    getElement(name) {
        if (this.elements[name] === undefined) {
            this.findElements([name]);
        }
        return this.elements[name];
    }

    bindEvent(element, eventName, callback) {
        this.getElement(element).addEventListener(eventName, callback);
    }

}