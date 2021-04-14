import { isValidGalleryPost } from "./isValidGalleryPost.js";
import { isValidGalleryItem } from "./isValidGalleryItem.js";

function gallery(selector, data) {
  if (!isValidGalleryPost(selector, data)) {
    return false;
  }

  const DOM = document.querySelector(selector);

  if (!DOM) {
    console.error("Pagal pateikta selektoriu nerastas norimas elementas");
    return false;
  }

  const galleryArray = data.list;
  const imgPath = data.imgPath;
  const maxCount = data.maxCount;

  let HTML = "";
  let generatedGalleryCount = 0;

  for (let i = 0; i < galleryArray.length; i++) {
    const galleryItem = galleryArray[i];

    if (!isValidGalleryItem(galleryItem) || !galleryItem.active) {
      continue;
    }
    if (generatedGalleryCount === maxCount) {
      break;
    }
    generatedGalleryCount++;

    HTML += `<div class="filterDiv vector col-12 col-md-4 col-xl-2 ml-xl-10">
          <img src="${imgPath + galleryItem.img}" alt="vinylDesignVector" />
          <i class="fa fa-binoculars"></i>
          <div class="galleryInner">
            <div class="row inGalleryTitle center"><p>${
              galleryItem.title
            }</p></div>
            <div class="row inGallerySubtitle center">${
              galleryItem.description
            }</div>
          </div>
          </div>
          </div>`;
  }

  DOM.innerHTML = HTML;
}

export { gallery };
