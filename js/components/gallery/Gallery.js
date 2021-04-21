// import { isValidGalleryPost } from "./isValidGalleryPost.js";
// import { isValidGalleryItem } from "./isValidGalleryItem.js";

class Gallery {
  constructor(selector, data) {
    this.selector = selector;
    this.data = data;

    this.DOM = null;
    this.allGalleryItemsDOM = [];
    this.activeFilterIndex = 0;
    this.uniqueTags = [];

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
    this.allGalleryItemsDOM = this.DOM.querySelectorAll(".wrapper > .item");
  }
  generateList() {
    let HTML = "";
    for (const item of this.data.list) {
      HTML += `<div class="item">
      <img src="${this.data.imgPath + item.img}" alt="${item.alt}" />
      <div class="galleryInner">
        <div class="row inGalleryTitle center"><p>${item.title}</p></div>
        <div class="row inGallerySubtitle center">${item.description}</div>
      </div>
    </div>`;
    }
    return HTML;
  }

  generateFilter() {
    let HTML = `<div class="item active">all</div>`;
    let allTags = [];
    let uniqueTags = [];

    for (const item of this.data.list) {
      allTags = [...allTags, ...item.tags];
    }

    for (const tag of allTags) {
      if (!uniqueTags.includes(tag)) {
        uniqueTags = [...uniqueTags, tag];
      }
    }

    for (const tag of uniqueTags) {
      HTML += `<div class="item">${tag}</div>`;
    }
    this.uniqueTags = ["all", ...uniqueTags];
    return HTML;
  }

  addEvents() {
    const filterItems = this.DOM.querySelectorAll(".filters > .item");

    filterItems.forEach((item, index) => {
      item.addEventListener("click", () => {
        filterItems[this.activeFilterIndex].classList.remove("active");
        item.classList.add("active");
        this.activeFilterIndex = index;

        this.updateList(this.uniqueTags[index]);
      });
    });
  }
  updateList(tag) {
    for (let i = 0; i < this.data.list.length; i++) {
      const itemTags = this.data.list[i].tags;
      if (itemTags.includes(tag) || tag === "all") {
        this.allGalleryItemsDOM[i].classList.remove("hidden");
      } else {
        this.allGalleryItemsDOM[i].classList.add("hidden");
      }
    }
  }
}

export { Gallery };
