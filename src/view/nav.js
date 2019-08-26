export class Nav {

    render(r) {
        var nav = document.createElement('nav');

        nav.className = "navbar navbar-dark bg-dark box-shadow";

        nav.innerText = 'Hello';

        return nav;
    }

}