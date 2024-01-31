function contact() {
    const contact = document.createElement('div');
    contact.id = 'contact';
    const head = document.createElement('h3');
    const addr1 = document.createElement('p');
    const addr2 = document.createElement('p');
    const phone = document.createElement('p');
    const image = document.createElement('div');
    image.id = 'image';
    const textContainer = document.createElement('div');
    textContainer.id = 'text-container'
    head.textContent = 'Fan Kasz'
    addr1.textContent = 'Nostreet 31'
    addr2.textContent = '66-777 Nowhere'
    phone.textContent = '765432123';

    textContainer.appendChild(head);
    textContainer.appendChild(addr1);
    textContainer.appendChild(addr2);
    textContainer.appendChild(phone);
    contact.appendChild(textContainer);
    contact.appendChild(image);
    return (contact);
}

export { contact }