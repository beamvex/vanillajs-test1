import { App } from "./app";
import style from "./main.css";

var a = new App();

var homebutton;
var mapbutton;
var homepage;
var mappage;

var clickbutton = (evt) => {
    if(evt.target.id === 'maptabbutton') {
        homepage.style.display = "none"; 
        mappage.removeAttribute('style');
        map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        });        
    } else if(evt.target.id === 'hometabbutton') {
        mappage.style.display = "none"; 
        homepage.removeAttribute('style');
    }
}

window.addEventListener('load', function() {

    homebutton = this.document.getElementById('hometabbutton');
    mapbutton = this.document.getElementById('maptabbutton');
    homepage = this.document.getElementById('homepage');
    mappage = this.document.getElementById('mappage');

    homebutton.addEventListener('click', clickbutton);
    mapbutton.addEventListener('click', clickbutton);

})
