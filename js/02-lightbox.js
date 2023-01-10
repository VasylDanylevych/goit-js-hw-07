import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryList = document.querySelector(".gallery");

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryList.insertAdjacentHTML("beforeend", galleryMarkup);


galleryList.addEventListener("click", onGalleryLinkClick);

function createGalleryMarkup (gallery) {
    return gallery.map(({preview, original, description}) => {
        return `<a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}"/>
                </a>`
    }).join("");
}

function onGalleryLinkClick(evt) {
    evt.preventDefault()
    if (evt.target.nodeName !== 'IMG') {
        return;
    }
}
new SimpleLightbox('.gallery a', { captions: true,  captionsData: "alt", captionDelay: 250,});