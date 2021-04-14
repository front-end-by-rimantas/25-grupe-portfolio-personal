function gallery(selector, data) {
  console.log(data);
  //input validation
  // logic

  const DOM = document.querySelector(selector);
  const galleryArray = data.list;
  let HTML = "";
  for (let i = 0; i < data.list.length; i++) {
    HTML += `<div class="filterDiv vector col-12 col-sm-4 col-md-4 col-xl-2 ml-xl-10">
          <img src="./img/gallery/p1.jpg" alt="vinylDesignVector" />
          <div class="galleryInner">
            <div class="row center"><h3>2d vinyl design</h3></div>
            <div class="row gallerySubtitle center">vector</div>
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
