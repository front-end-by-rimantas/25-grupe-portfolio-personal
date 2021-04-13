function testimonials(selector, testData) {

  const DOM = document.querySelector(selector);
  let {testList, testImgPath, testMaxCount} = testData;

  
  function hideTestimonial() {
    if (window.innerWidth > 767) {
      testMaxCount = 2;
    }
    else {
      testMaxCount = 1;
    }
  }
  window.addEventListener('resize', hideTestimonial);
  hideTestimonial();
  
  let HTML = '';
  let testCount = 0;

  for (let i = 0; i < testList.length; i++) {
      const testimonial = testList[i];
      
      if (!testimonial.active) {
        continue;
      } 
      if (testCount === testMaxCount) {
        break;
      }
      
      testCount++;
      HTML += `<div class="testimonial-box">
                <img class="mini-logo"
                  src="${testImgPath + testimonial.img}"
                  alt="User logo"
                  height="33px"
                  width="33px"
                />
                <div class="text-box">
                  <p class="subtitle"> ${testimonial.paragraph} </p>
                  <h1 class="header header-hover">${testimonial.header}</h1>
                  <p class="subtitle">${testimonial.secondParagraph}</p>
                </div>
               </div>`;
    }
    
DOM.innerHTML = HTML;
}

export { testimonials }