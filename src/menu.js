function dish(imageAdress, name, textContent) {
    const container = document.createElement('div');
    container.className = 'dish-container';
    const textContainer = document.createElement('div');
    textContainer.className = 'dish-text-container';
    const image = document.createElement('img')
    image.className = 'dish-image';
    image.src = (imageAdress);
    const header = document.createElement('h1');
    header.textContent = name;
    const text = document.createElement('p1');
    text.className = 'dish-text';
    text.textContent = textContent;
    textContainer.appendChild(header);
    textContainer.appendChild(text);
    container.appendChild(image);
    container.appendChild(textContainer);
    return (container)

}



function menu() {
    const page = document.createElement('div');
    page.id = 'menu';
    page.appendChild(dish(" ", 'kaszanka', 'bardzo dobrrra kaszanka'));
    page.appendChild(dish(" ", 'kaszanka', 'bardzo dobrrra kaszanka'));
    page.appendChild(dish(" ", 'kaszanka', 'bardzo dobrrra kaszanka'));
    return (page);
}

export { menu };

