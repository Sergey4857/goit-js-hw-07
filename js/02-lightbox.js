import { galleryItems } from "./gallery-items.js";
// Change code below this line
const refs = {
  list: document.querySelector(".gallery"),
};

const creatingGalleryMarkup = galleryItems
  .map(
    (info) => `<li class="gallery__item">
  <a class="gallery__link" href="${info.original}">
    <img
      class="gallery__image"
      src="${info.preview}"
      alt="${info.description}"
    />
  </a>
</li>`
  )
  .join("");

refs.list.insertAdjacentHTML("afterbegin", creatingGalleryMarkup);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
