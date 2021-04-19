import { isValidBlogPost } from './isValidBlogPost.js';
import { isValidBlogItem } from './isValidBlogItem.js';

function blog(selector, data) {
    if (!isValidBlogPost(selector, data)) {
        return false;
    }

  const DOM = document.querySelector(selector);

  if (!DOM) {
      console.error('Pagal pateikta selektoriu nerastas norimas elementas');
      return false;
  }
  const {list, imgPath, maxCount} = data;

  let HTML = '';
  let generatedBlogCount = 0;

  for (let i = 0; i < list.length; i++) {
    const blogItem = list[i];

    if (!isValidBlogItem(blogItem) ||
        !blogItem.active){
        continue;
    }
    
    if (generatedBlogCount === maxCount) {
        break;
    }
    generatedBlogCount++;
    HTML += `<div class="blog-item"> 
                <div class="blog-img">
                    <img src="${imgPath + blogItem.img}" alt="#" />
                </div>
                <div class="social-info">
                    <div class="social-info-left" >
                        <img src="${imgPath + blogItem.imgAuthor}" alt="#" />
                        <a href="${blogItem.authorLink}">
                        <span>${blogItem.author}</span>
                        </a>
                    </div>
                    <div class="social-info-right">
                        <p> ${blogItem.date} <i class="fa fa-heart-o"> ${blogItem.likes}</i><i class="fa fa-comment-o"></i> ${blogItem.coments}</p>
                    </div>
                </div>
                <a href="#">
                    <h4>${blogItem.title}</h4>
                </a>
                <p>${blogItem.description}</p>
            </div>`;
  }

  DOM.innerHTML = HTML;
}

export { blog };
