import './styles.css';
import { homepage } from './homepage.js';
import { menu } from './menu.js';
import { contact } from './contact.js';

console.log('do i work, with autoreload?');
const content = document.getElementById('content');
const mainBody = document.createElement('div');
const footer = document.createElement('div');
const header = document.createElement('div');
header.id = 'header';
const logo = document.createElement('img');
logo.id = 'logo';
const buttonContainer = document.createElement('div');
const homepageButton = document.createElement('button');
homepageButton.addEventListener('click', () => {
    reset(homepage());
})
const menuButton = document.createElement('button');
menuButton.addEventListener('click', () => {
    reset(menu());
})
const contactButton = document.createElement('button');
contactButton.addEventListener('click', () => {
    reset(contact());
})
buttonContainer.appendChild(homepageButton);
buttonContainer.appendChild(menuButton);
buttonContainer.appendChild(contactButton);


header.appendChild(logo);
header.appendChild(buttonContainer);

footer.id = 'footer'
footer.textContent = 'to ja zrobiłem';
content.appendChild(header);
content.appendChild(mainBody);
content.appendChild(footer);
function reset(element) {
    if (mainBody.lastChild) mainBody.removeChild(mainBody.lastChild);
    mainBody.appendChild(element);
}
reset(homepage());