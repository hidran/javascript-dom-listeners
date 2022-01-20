document.addEventListener('DOMContentLoaded', () => {
    const doc = document;
    const ps = doc.getElementsByTagName('p');
    for (let i = 0; ps[i]; i++) {
        let ele = ps[i];
        ele.style.border = '2px solid red';
        ele.style.padding = '4px';
        ele.classList.add('text-danger');
        ele.style.cursor = 'pointer';
        ele.onclick = (evt) => {
            evt.target.classList.remove('text-danger');
        };
    }
    const tds = doc.getElementsByTagName('td');
    const arrTds = Array.from(tds);
    console.log(arrTds);
    arrTds.forEach((td) => (td.style.padding = '5px'));

    // add css class to h1
    const h1 = doc.getElementById('title');
    h1.classList.add('header1');
});
