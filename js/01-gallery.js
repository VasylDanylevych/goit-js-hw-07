import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryList = document.querySelector(".gallery");

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

galleryList.addEventListener("click", onGalleryLinkClick);

function createGalleryMarkup (gallery) {
    return gallery.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
            <a href="${original}" class="gallery__link">
                <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
            </a>
        </div>`
    }).join("");
}

function onGalleryLinkClick(evt) {
    evt.preventDefault()
    if (evt.target.nodeName !== 'IMG') {
        return;
    }

    onModal(evt);
}

function onModal(evt) {
    const instance = basicLightbox.create(
        `<img src="${evt.target.dataset.source}" width="800" height="600">`,
        {
        onShow: (instance) => {
            document.addEventListener("keydown", onEscPress)
        },
        onClose: (instance) => {
            document.removeEventListener("keydown", onEscPress)
        },
    });
    instance.show()

    function onEscPress(evt) {
        if (evt.code === "Escape") {
            instance.close()
        }
    }
}
