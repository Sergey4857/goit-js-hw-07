import { galleryItems } from "./gallery-items.js";
// Change code below this line
const refs = {
  list: document.querySelector(".gallery"),
  image: document.querySelector(".gallery__image"),
};

const createGalleryMarkup = galleryItems
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

refs.list.insertAdjacentHTML("afterbegin", createGalleryMarkup);

refs.image.addEventListener("click", onImageClick);

function onImageClick(event) {
  event.currentTarget.preventDefault();
}
console.log(galleryItems);
