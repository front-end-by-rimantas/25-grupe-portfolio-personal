// import { isValidGalleryPost } from "./isValidGalleryPost.js";
// import { isValidGalleryItem } from "./isValidGalleryItem.js";

class Gallery {
  constructor(selector, data) {
    this.selector = selector;
    this.data = data;

    this.DOM = null;

    this.init();
  }
  init() {
    if (!this.isValidSelector()) {
      return false;
    }
    if (!this.isValidData()) {
      return false;
    }
    this.DOM = document.querySelector(this.selector);
    if (!this.DOM) {
      console.error(
        "ERROR: nepavyko rasti galerijos vietos pagal pateikta selektoriu."
      );
      return false;
    }
    this.render();
    console.log(this);
  }

  isValidSelector() {
    return true;
  }

  isValidData() {
    return true;
  }

  render() {
    const HTML = `
  <div class="row">
    <div class="menuContent center">
      <div class="center">
        <h1 class="galleryTitle">Our latest featured projects</h1>
        <p class="gallerySubtitle">
          Who are in extremely love with eco friendly system.
        </p>
      </div>
    </div>
  </div>


  <div class="row center filters">
  <div class="filterBtn">a</div>
  <div class="filterBtn">b</div>
  <div class="filterBtn">c</div>
  <div class="filterBtn">d</div>
  <div class="filterBtn">e</div> </div>

  <div class="row galleryContainer">
          <div id="wrapper" class="grid wrapper">
          ${this.generateList()}
            </div>
          </div>
  `;
    this.DOM.innerHTML = HTML;
  }
  generateList() {
    let HTML = "";
    for (const item of this.data.list) {
      HTML += `<div class="galleryItem col-12 col-md-4 col-xl-2 ml-xl-10">
      <img src="${this.data.imgPath + item.img}" alt="${item.alt}" />
      <div class="galleryInner">
        <div class="row inGalleryTitle center"><p>${item.title}</p></div>
        <div class="row inGallerySubtitle center">${item.description}</div>
      </div>
    </div>`;
    }
    return HTML;
  }
}

export { Gallery };
