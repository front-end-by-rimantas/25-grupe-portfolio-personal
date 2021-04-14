import { isValidServices } from './isValidServices.js'



function services(selector, data) {
    //input Validation
    if(!isValidServices(selector, data)) {
        return false;
    }
    

    //logic
    const DOM = document.querySelector(selector);
    if (!DOM) {
        console.error('Pagal pateikta selektoriu nerastas norimas elementas');
        return false;
    }


    const {list, maxCount} = data;


    let HTML = '';
    let generatedServicesCount = 0;

    for (let i=0; i < list.length; i++) {
        const services = list[i];

        if (!services.active) {
            continue;
        }

        if (generatedServicesCount === maxCount ) {
            break;
        }

        generatedServicesCount++;
        HTML += `<div class="col-12 col-md-6 col-lg-4 h">
                        <div>
                            <i class="${services.icon} ico"></i>
                            <a href="${services.link}" class="offservices">
                            <h1 class="h1offsersize">${services.title}</h1>
                            </a>
                        </div>
                        <div>
                            <p class="pservices">
                            ${services.description}
                            </p>
                        </div>
                    </div>
                </div>`;

    }
        
            //post logic validation


            //result return
            DOM.innerHTML = HTML;
}

export { services }