
function plans (selector, data) {
    // input validation

    // logic
    const DOM = document.querySelector(selector);

    if (!DOM) {
        console.error('Pagal pateikta selektoriu nerastas norimas elementas');
        return false;
    }
    const { list, maxCount } = data;

    let HTML = '';
    let generatedPlanCount = 0;

    for (let i = 0; i < list.length; i++) {
        const planItem = list[i];

        if (!planItem.active){
        continue;
        }

        if (generatedPlanCount === maxCount) {
            break;
        }

        generatedPlanCount++;
        HTML += `<div class="col-12 col-md-6 col-lg-3 col-xl-3 plans-item">
                    <div>
                        <div class="circle">
                            <h2>${planItem.planNo}</h2>
                        </div>
                        <h3 class="pricetitle">${planItem.planTitle}</h3>
                        <p class="priceprg">${planItem.description}</p>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3 col-xl-3">
                        <div>
                            <ul class="tblcenter">
                                <li>${planItem.planList1}</li>
                                <li>${planItem.planList2}</li>
                                <li>${planItem.planList3}</li>
                            </ul>
                        </div>
                        <div>
                            <div class="price"><span>&#163;</span>${planItem.price}</div>
                            <a class="abtn" href="${planItem.link}">${planItem.text}</a>  
                        </div>  
                    </div>
                </div>`;
    }

  

    //post logic validation

    // result return
    DOM.innerHTML = HTML;
}

export { plans }