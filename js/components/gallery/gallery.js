// import { isValidGalleryPost } from "./isValidGalleryPost.js";
// import { isValidGalleryItem } from "./isValidGalleryItem.js";

class Gallery {
  constructor(selector, data) {
    this.selector = selector;
    this.data = data;

    this.DOM = null;
    this.activeFilterIndex = 0;

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
    this.addEvents();
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


  <div class="row center filters">${this.generateFilter()}</div>


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
    for (const galleryItem of this.data.list) {
      HTML += `<div class="galleryItem col-12 col-md-4 col-xl-2 ml-xl-10">
      <img src="${this.data.imgPath + galleryItem.img}" alt="${
        galleryItem.alt
      }" />
      <div class="galleryInner">
        <div class="row inGalleryTitle center"><p>${galleryItem.title}</p></div>
        <div class="row inGallerySubtitle center">${
          galleryItem.description
        }</div>
      </div>
    </div>`;
    }
    return HTML;
  }

  generateFilter() {
    let HTML = `<div class="filterBtn active">All</div>`;
    let allTags = [];
    let uniqueTags = [];

    for (const galleryItem of this.data.list) {
      allTags = [...allTags, ...galleryItem.tags];
    }

    for (const tag of allTags) {
      const formatedTag = tag.toLowerCase();
      if (!uniqueTags.includes(formatedTag)) {
        uniqueTags = [...uniqueTags, formatedTag];
      }
    }
    for (const tag of uniqueTags) {
      HTML += `<div class="filterBtn">${tag}</div>`;
    }
    console.log(allTags);
    console.log(uniqueTags);
    this.uniqueTags = ["all", ...uniqueTags];
    return HTML;
  }
  addEvents() {
    const filterItems = this.DOM.querySelectorAll(".filters > .filterBtn");
    filterItems.forEach((item, index) => {
      item.addEventListener("click", () => {
        filterItems[this.activeFilterIndex].classList.remove("active");
        item.classList.add("active");
        this.activeFilterIndex = index;
      });
    });
  }
}
export { Gallery };
