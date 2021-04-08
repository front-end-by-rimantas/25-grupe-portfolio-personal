function blog(selector, data) {
  const DOM = document.querySelector(selector);
  const {list, imgPath, maxCount} = data;

  let HTML = '';
  let generatedBlogCount = 0;

  for (let i = 0; i < list.length; i++) {
    const blogItem = list[i];
    

    if (!blogItem.active) {
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
                        <img src="./img/blog/user.png" alt="#" />
                        <a href="#">
                        <span>Mark Wiens</span>
                        </a>
                    </div>
                    <div class="social-info-right">
                        <p> 13th Dec <i class="fa fa-heart-o"></i><i class="fa fa-comment-o"></i> 04</p>
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
