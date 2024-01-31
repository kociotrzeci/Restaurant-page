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
    const text = document.createElement('p');
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
    page.appendChild(dish(" ", 'Some Kaszanka', 'Juicy kashanka from the oven, served with onion and apples, seasoned with horseradish and cinnamon'));
    page.appendChild(dish(" ", 'Other Kaszanka', 'Crispy kashanka from the pan, mixed with caramelized onion, salt and pepper. Perfect with bread or fried egg'));
    page.appendChild(dish(" ", 'Kaszanka la bamba', 'Simple and delicious kashanka from the oven, drizzled with melted butter and sprinkled with horseradish. Tastes great with potatoes or salad'));
    return (page);
}

export { menu };

