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
      data-source="${info.original}"
      alt="${info.description}"
    />
  </a>
</li>`
  )
  .join("");

refs.list.insertAdjacentHTML("afterbegin", creatingGalleryMarkup);

refs.list.addEventListener("click", onImageClick);

function onImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}" width="800" height="600">
`,
    {
      onShow: () => {
        window.addEventListener("keydown", onEscClickClose);
      },

      onClose: () => {
        window.removeEventListener("keydown", onEscClickClose);
      },
    }
  );

  instance.show();

  function onEscClickClose(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
