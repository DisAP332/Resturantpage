import "./style.css";
import { initPageLoad } from "./initPageLoad";
import { initHome } from "./initHome";
import { initMenu } from "./initMenu";
import { initContact } from "./initContact.js";
initPageLoad()

const home = document.getElementById('home');
const menu = document.getElementById('menu');
const contact = document.getElementById('contact');
let option = null;
initHome(option)

home.addEventListener('click', () => {
    if (option === 1) {
    } else {
        option = 1;
        initHome(option)
    }
});

menu.addEventListener('click', () => {
    if (option === 2) {
        console.log('nope')
    } else {
        option = 2;
        initMenu()
    }
});

contact.addEventListener('click', () => {
    if (option === 3) {
        console.log('nope')
    } else {
        option = 3;
        initContact()
    }
});