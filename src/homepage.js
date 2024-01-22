console.log('module test');

function homepage() {
    const homepage = document.createElement('div');
    homepage.id = 'homepage';
    const head = document.createElement('h1');
    head.textContent = 'FANATYCY KASZANKI'
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Wołu, wieprza albo barana kiedy zabiją, to najmniejszej krople krwie nie zepsują, ale ją wytoczą w naczynie; namieszawszy w to krup jęczmiennych albo tatarczanych to tym kiszki owego bydlęcia nadzieją, razem w kotle uwarzą i osnują to wieńcem na wielkiej misie i tak to na stole stawiają przy każdom obiedzie i jedzą za wielki specyjał. Etiam i w domach szlacheckich tak czynią; i mnie częstowano tym do uprzykrzania, ażem powiedział, że się Polakom tego jeść nie godzi, boby nam psi nieprzyjaciołmi byli, gdyż to ich potrawa.';
    homepage.appendChild(head);
    homepage.appendChild(paragraph);
    return (homepage);
}

export { homepage };
