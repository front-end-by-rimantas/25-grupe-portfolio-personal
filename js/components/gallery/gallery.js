// // import { isValidGalleryPost } from "./isValidGalleryPost.js";
// // import { isValidGalleryItem } from "./isValidGalleryItem.js";

titles = ["2d vinyl design", "3d vinyl design", "4d vinyl design"];

textfull = "";
for (let i = 0; i < titles.length; i++) {
  textfull +=
    ` <div
              class="filterDiv vector col-12 col-sm-4 col-md-4 col-xl-2 ml-xl-10"
            >
              <img src="./img/gallery/p1.jpg" alt="vinylDesignVector" />
              <div class="middle">
                <img
                  src="./img/gallery/preview.png"
                  class="binoculars"
                  alt="preview"
                />
              </div>
              <div class="galleryInner">
                <div class="row center"><h3>` +
    titles[i] +
    `</h3></div>
                <div class="row gallerySubtitle center">vector</div>
              </div>
            </div>`;
}
document.getElementById("1stWrapper").innerHTML = textfull;

export { gallery };
