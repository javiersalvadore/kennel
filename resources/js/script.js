let images = document.getElementsByTagName("img");
const overlay = (element) => {
    /*let paragraph = document.createElement('p');
    paragraph.innerHTML = `Nombre: ${element.h5.innerHTML}<br> Fecha de nacimiento: 17/12/2020 <br> Padres: Amazonas y Leopoldo`;
    
    paragraph.style.fontSize = '29px';
    paragraph.style.textAlign = 'center';
    element.appendChild(paragraph);*/
    element.style.blur = '8px';
};
for (let i = 0; i < images.length; i++) {
    images[i].onmouseover = overlay(images[i]);
    console.log(i);
};
console.log(images)
