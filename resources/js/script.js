function BlurElements(element) {
    element.style.animation = 'blurIn 1s';
};
function unBlurElements(element) {
    element.style.animation = 'blurOut 1s';
};
let images = document.getElementsByTagName('img');
for(let i = 0; i < images.length; i++) {
    images[i].addEventListener('mouseover', () => {BlurElements(images[i])});
    images[i].addEventListener('mouseleave', () => {unBlurElements(images[i])});
};