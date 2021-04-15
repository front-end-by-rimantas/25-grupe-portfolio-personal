function brands(selector, data) {
  const DOM = document.querySelector(selector);
  const brandsArray = data.list;
  const imgPath = data.imgPath;
  const maxCount = data.maxCount;

  let HTML = "";

  for (let i = 0; i < brandsArray.length; i++) {
    const brandsItem = brandsArray[i];

    HTML += `<div class="brandCell col-12 col-sm-12 col-md-3 col-lg-2 col-xl-2">
        <a href="${brandsItem.link}" class="brand"> <img src="${
      imgPath + brandsItem.img
    }" /></a></div>`;
  }

  DOM.innerHTML = HTML;
}

export { brands };
