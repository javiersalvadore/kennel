function BlurElements(element) {
    element.style.animation = 'blurIn 1s';
};
function unBlurElements(element) {
    element.style.animation = 'blurOut 1s';
};
let images = document.getElementsByTagName('img');
