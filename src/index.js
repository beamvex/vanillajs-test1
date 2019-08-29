import { App } from "./app";
import style from "./main.css";

var a = new App();

var homebutton;
var mapbutton;
var profilebutton;

var homepage;
var mappage;
var profilepage;

var profilepage;
var homepagebutton;
var mappagebutton;

var clickbutton = (evt) => {
    if(evt.target.id === 'maptabbutton') {
        homepage.style.display = "none"; 
        profilepage.style.display = "none"; 
        mappage.removeAttribute('style');
        map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        });        
    } else if(evt.target.id === 'hometabbutton') {
        mappage.style.display = "none"; 
        profilepage.style.display = "none"; 
        homepage.removeAttribute('style');
    } else if(evt.target.id === 'profiletabbutton') {
        mappage.style.display = "none"; 
        homepage.style.display = "none"; 
        profilepage.removeAttribute('style');
    }
}

window.addEventListener('load', function() {

    homebutton = this.document.getElementById('hometabbutton');
    mapbutton = this.document.getElementById('maptabbutton');
    profilebutton = this.document.getElementById('profiletabbutton');

    homepage = this.document.getElementById('homepage');
    mappage = this.document.getElementById('mappage');
    profilepage = this.document.getElementById('profilepage');

    homepagebutton = this.document.getElementById('homepagebutton');
    mappagebutton = this.document.getElementById('mappagebutton');
    profilepagebutton = this.document.getElementById('profilepagebutton');

    homebutton.addEventListener('click', clickbutton);
    mapbutton.addEventListener('click', clickbutton);
    profilebutton.addEventListener('click', clickbutton);

    hometabbutton.checked = true;
    mappagebutton.checked = false;
    profilepagebutton.checked = false;

})
