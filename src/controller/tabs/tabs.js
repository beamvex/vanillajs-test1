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

    }

    clickbutton(evt) {
    
        console.log('really', evt);

        if(evt.target.id === 'maptabbutton') {
            this.viewState.getElement('homepage').style.display = "none"; 
            this.viewState.getElement('profilepage').style.display = "none"; 
            this.viewState.getElement('mappage').removeAttribute('style');     
        } else if(evt.target.id === 'hometabbutton') {
            this.viewState.getElement('mappage').style.display = "none"; 
            this.viewState.getElement('profilepage').style.display = "none"; 
            this.viewState.getElement('homepage').removeAttribute('style');
        } else if(evt.target.id === 'profiletabbutton') {
            this.viewState.getElement('mappage').style.display = "none"; 
            this.viewState.getElement('homepage').style.display = "none"; 
            this.viewState.getElement('profilepage').removeAttribute('style');
        }
    }

}