

function contact() {
    const contact = document.createElement('div');
    contact.id = 'contact';
    const head = document.createElement('h3');
    const addr1 = document.createElement('p');
    const addr2 = document.createElement('p');
    const phone = document.createElement('p');

    head.textContent = 'FANATICS OF KASZANKA'
    addr1.textContent = 'Nostreet 31'
    addr2.textContent = '66-777 Nowhere'
    phone.textContent = '765432123';

    contact.appendChild(head);
    contact.appendChild(addr1);
    contact.appendChild(addr2);
    contact.appendChild(phone);
    return (contact);
}

export { contact }