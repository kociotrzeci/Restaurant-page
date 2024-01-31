import './styles.scss';
import { homepage } from './homepage.js';
import { menu } from './menu.js';
import { contact } from './contact.js';

console.log('do i work, with autoreload?');
const content = document.getElementById('content');
const mainBody = document.createElement('div');
mainBody.id = 'main-body'
const footer = document.createElement('div');
const header = document.createElement('div');
header.id = 'header';
const logo = document.createElement('img');
logo.id = 'logo';
const buttonContainer = document.createElement('div');
buttonContainer.id = 'button-container';
const homepageButton = document.createElement('button');
homepageButton.textContent = 'HOME';
homepageButton.addEventListener('click', () => {
    reset(homepage());
})
const menuButton = document.createElement('button');
menuButton.textContent = 'MENU';
menuButton.addEventListener('click', () => {
    reset(menu());
})
const contactButton = document.createElement('button');
contactButton.textContent = 'CONTACT';
contactButton.addEventListener('click', () => {
    reset(contact());
})
buttonContainer.appendChild(homepageButton);
buttonContainer.appendChild(menuButton);
buttonContainer.appendChild(contactButton);

header.appendChild(logo);
header.appendChild(buttonContainer);

footer.id = 'footer'
const footerText = document.createElement('p');
footerText.textContent = 'made by';
const link = document.createElement('a');
link.href = 'https://github.com/kociotrzeci';
link.textContent = 'kociotrzeci'
footer.appendChild(footerText);
footer.appendChild(link);

content.appendChild(header);
content.appendChild(mainBody);
content.appendChild(footer);
function reset(element) {
    if (mainBody.lastChild) mainBody.removeChild(mainBody.lastChild);
    mainBody.appendChild(element);
}
reset(homepage());