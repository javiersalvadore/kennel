let images = document.getElementsByTagName('img');
const overlay = (element) => {
    let paragraph = document.createElement('p');
    paragraph.innerHTML = `Nombre: ${element.h5.innerHTML}<br> Fecha de nacimiento: 17/12/2020 <br> Padres: Amazonas y Leopoldo`;
    element.img.style.blur = '8px';
    paragraph.style.fontSize = '29px';
    paragraph.style.textAlign = 'center';
    element.appendChild(paragraph);
};
for (let i = 0; i < image.length; i++) {
    images[i].onmouseover(overlay(images[i]));
};
