console.log('module test');

function homepage() {
    const homepage = document.createElement('div');
    const backgroundBlur = document.createElement('div');
    backgroundBlur.id = 'blur'
    homepage.id = 'homepage';
    const head = document.createElement('h1');
    head.textContent = 'FanKasz'
    const paragraph = document.createElement('p');
    paragraph.textContent = "When they slaughter an ox, a hog, or a ram, they waste not the smallest drop of blood, but collect it in a vessel; having mixed into it barley mash or calamari, they stuff the innards of the beast with it, brew it together in a cauldron and garnish it with a wreath on a large bowl, and thus they place it on the table at every supper and consume it as a great delicacy. They also prepare it in the houses of the gentry; I was also served it to my discomfort, until I declared that Poles are not fit to consume it, for they would be foes of our dogs, as it is their sustenance";
    backgroundBlur.appendChild(head);
    backgroundBlur.appendChild(paragraph);
    homepage.appendChild(backgroundBlur);
    return (homepage);
}

export { homepage };
