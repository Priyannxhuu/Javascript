function setBackgroundImage(image) {
    document.body.style.backgroundImage = `url(${image.src})`;

    const container = document.querySelector('.container');
    const firstImage = container.children[0];
    container.appendChild(firstImage.cloneNode(true));
    container.removeChild(firstImage);
}