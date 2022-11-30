import "./style.css";
import { initPageLoad } from "./initPageLoad";
import { initHome } from "./initHome";
import { initMenu } from "./initMenu";
import { initContact } from "./initContact.js";
import { reset } from "./reset.js"
initPageLoad()

const home = document.getElementById('home');
const menu = document.getElementById('menu');
const contact = document.getElementById('contact');
let option = null;
initHome()

home.addEventListener('click', () => {
    if (option === 1) {
    } else {
        option = 1;
        reset(option)
        initHome(option)
    }
});

menu.addEventListener('click', () => {
    if (option === 2) {
        console.log('nope')
    } else {
        option = 2;
        reset(option)
        initMenu(option)
    }
});

contact.addEventListener('click', () => {
    if (option === 3) {
        console.log('nope')
    } else {
        option = 3;
        reset(option)
        initContact(option)
    }
});