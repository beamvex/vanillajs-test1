import { App } from "./app";
import style from "./main.css";

var a = new App();


var clickbutton = (evt) => {
    console.log(evt.target);
}

window.addEventListener('load', function() {

    var homebutton = this.document.getElementById('hometabbutton');
    var mapbutton = this.document.getElementById('maptabbutton');

    homebutton.addEventListener('click', clickbutton);
    mapbutton.addEventListener('click', clickbutton);

})
