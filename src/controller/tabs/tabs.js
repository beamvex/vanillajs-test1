export class Tabs {

    constructor(app) {
        this.app = app;

        this.viewState = app.getViewState();

        this.viewState.bindEvent('hometabbutton', 'click', this.clickbutton.bind(this));
        this.viewState.bindEvent('maptabbutton', 'click', this.clickbutton.bind(this));
        this.viewState.bindEvent('profiletabbutton', 'click', this.clickbutton.bind(this));

        this.viewState.getElement('hometabbutton').checked = true;
        this.viewState.getElement('maptabbutton').checked = false;
        this.viewState.getElement('profiletabbutton').checked = false;

        this.viewState.getElement('canvas').appendChild(this.viewState.getElement('homepage'));

    }

    clickbutton(evt) {

        while (this.viewState.getElement('canvas').childNodes.length > 0) {
            this.viewState.getElement('canvas').removeChild(this.viewState.getElement('canvas').childNodes[0]);
        }

        if(evt.target.id === 'maptabbutton') {
            this.viewState.getElement('canvas').appendChild(this.viewState.getElement('mappage'));   
        } else if(evt.target.id === 'hometabbutton') {
            this.viewState.getElement('canvas').appendChild(this.viewState.getElement('homepage'));
        } else if(evt.target.id === 'profiletabbutton') {
            this.viewState.getElement('canvas').appendChild(this.viewState.getElement('profilepage'));
        }
    }

}