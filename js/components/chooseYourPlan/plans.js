import { isValidPlans } from './isValidPlans.js';
import { isValidPlansItem} from './isValidPlansItem.js';

function plans (selector, data) {
    if (!isValidPlans(selector, data)) {
        return false;
    }
    
    const DOM = document.querySelector(selector);

    if (!DOM) {
        console.error('Pagal pateikta selektoriu nerastas norimas elementas');
        return false;
    }
    const { list, maxCount } = data;

    let HTML = '';
    let generatedPlansCount = 0;

    for (let i = 0; i < list.length; i++) {
        const planItem = list[i];

        if (!isValidPlansItem(planItem) || 
            !planItem.active){
            continue;
        }

        if (generatedPlansCount === maxCount) {
            break;
        }

        generatedPlansCount++;
        HTML += `<div class="plans-item">
                    <div>
                        <div class="circle">
                            <h2>${planItem.planNo}</h2>
                        </div>
                        <h3 class="pricetitle">${planItem.planTitle}</h3>
                        <p class="priceprg">${planItem.description}</p>
                    </div>
                    <div>
                        <div class="tblcenter">  
                            <p>${planItem.planList1}</p>
                            <p>${planItem.planList2}</p>
                            <p>${planItem.planList3}</p>    
                        </div>
                        <div>
                            <div class="price"><span>&#163;</span>${planItem.price}</div>
                            <a class="abtn" href="${planItem.link}">${planItem.text}</a>  
                        </div>  
                    </div>
                </div>`;
    }

    DOM.innerHTML = HTML;
}

export { plans }