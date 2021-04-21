function testimonials(selector, data) {

  const DOM = document.querySelector(selector);
  let {list, imgPath, maxCount} = data;

  let HTML = '';
  let count = 0;

  for (let i = 0; i < list.length; i++) {
      const testimonial = list[i];

      if (!testimonial.active) {
          continue;
      }
      if (count === maxCount) {
        break;
      }

      count++;
      HTML += `<div class="testimonial-box ${testimonial.id}">
                <img class="mini-logo"
                  src="${imgPath + testimonial.img}"
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

let flow;
let mouseOn = false;
const up = document.querySelector('.up');
const down = document.querySelector('.down');
const testList = document.querySelector('.testimonials-list');
const box = document.querySelector('.overflow-box');

function changeTestimonials() {
  
  function setTimeout() {
    testList.style.transition = 'all 300ms';
  }

    up.addEventListener('click', () => {

      if (window.innerWidth < 767) {
        testList.style.transform = 'translate(102.2%)';
        setTimeout();
      }

      else {
        testList.style.transform = 'translate(51.3%)';
        setTimeout();
      }
    });
    
    down.addEventListener('click', () => {

      if (window.innerWidth < 767) {
        testList.style.transform = 'translate(-102.2%)';
        setTimeout()
      }
      
      else {
        testList.style.transform = 'translate(-51.3%)';
        setTimeout()
      }
    });

  testList.addEventListener('transitionend', () => {

    if (flow === 1) {
      testList.prepend(testList.lastElementChild);
    } 

    else {
      testList.appendChild(testList.firstElementChild);
    }
    
    testList.style.transition = 'none';
    testList.style.transform = 'translate(0)';
  });
}

function autoChange() {
  
  box.addEventListener('mouseenter', () => {
    mouseOn = true;
  });

  box.addEventListener('mouseleave', () => {
    mouseOn = false; 
  });

  up.addEventListener('mouseenter', () => {
    mouseOn = true;
  });

  up.addEventListener('mouseleave', () => {
    mouseOn = false;
  });

  down.addEventListener('mouseenter', () => {
    mouseOn = true;
  });

  down.addEventListener('mouseleave', () => {
    mouseOn = false;
  });
    
  if(mouseOn === false) {

      if (window.innerWidth < 767) {
        testList.style.transform = 'translate(-102.2%)';
        testList.style.transition = 'all 300ms';
      }

      else {
        testList.style.transform = 'translate(-51.3%)';
        testList.style.transition = 'all 300ms';
      }
    } 
    setTimeout(autoChange, 5000);
}

export { testimonials, changeTestimonials, autoChange };