function gallery(selector, data) {
  console.log(data);
  //input validation
  // logic

  const DOM = document.querySelector(selector);
  const galleryArray = data.list;
  const imgPath = data.imgPath;
  let HTML = "";
  for (let i = 0; i < galleryArray.length; i++) {
    const galleryItem = galleryArray[i];

    if (!galleryItem.active) {
      continue;
    }
    HTML += `<div class="filterDiv vector col-12 col-md-4 col-xl-2 ml-xl-10">
          <img src="${imgPath + galleryItem.img}" alt="vinylDesignVector" />
          <i class="fa fa-binoculars"></i>
          <div class="galleryInner">
            <div class="row inGalleryTitle center"><p>${
              galleryItem.title
            }</p></div>
            <div class="row inGallerySubtitle center">${galleryItem.type}</div>
          </div>
          </div>
          </div>`;
  }
  // post logic validation
  // result return
  DOM.innerHTML = HTML;
  console.log(HTML);
}

export { gallery };
