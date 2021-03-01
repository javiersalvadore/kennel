let images = document.getElementsByTagName("img");

const enterBlur = (element) => {
    element.style.animation = 'blurIn 1s 1';
}
const exitBlur = (element) => {
    element.style.animation = 'blurOut 1s 1';
}

for (let i = 0; i < images.length; i++) {
    images[i].onmouseenter = enterBlur(images[i]);
    images[i].onmouseleave = exitBlur(images[i]);
}
console.log(images[1])