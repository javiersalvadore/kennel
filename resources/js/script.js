let images = document.getElementsByTagName("img");
function BlurElements(element) {
    element.style.animation = 'blurIn 1s';
};
function unBlurElements(element) {
    element.style.animation = 'blurOut 1s'
};
for (let elem = 0; elem < images.length; elem++) {
    images[elem].onmouseenter = BlurElements(this);
    images[elem].onmouse = BlurElements(this);
};
