console.log('module test');

function homepage() {
    const homepage = document.createElement('div');
    homepage.id = 'homepage';
    const head = document.createElement('h1');
    head.textContent = 'FanKasz'
    const paragraph = document.createElement('p');
    paragraph.textContent = "When they kill an ox, a hog or a ram, they don't spoil the smallest drop of blood, but they roll it out in a vessel; having mixed into it barley mash or calamari, they stuff the guts of the animal with it, brew it together in a cauldron and wrap it with a wreath on a big bowl, and so they put it on the table at every dinner and eat it for a great specialty.They also do it in the houses of the nobility; I was also served it to make me miserable, until I said that Poles are not worthy to eat it, because they would be enemies of our dogs, as it is their food.";
    homepage.appendChild(head);
    homepage.appendChild(paragraph);
    return (homepage);
}

export { homepage };
