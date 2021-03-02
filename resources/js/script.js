function BlurElements(element) {
    element.style.animation = 'blurIn 1s';
};
function unBlurElements(element) {
    element.style.animation = 'blurOut 1s';
};
let images = document.getElementsByTagName('img');
console.log(images.length);
let picture = document.getElementById('pic1');
picture.addEventListener('mouseenter', BlurElements(picture), false);
picture.addEventListener('mouseleave', unBlurElements(picture), false);