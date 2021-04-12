function services(selector, data) {
    

    //logic
    const DOM = document.querySelector(selector);
    const {list, maxCount} = data;


    let HTML = '';

    for (let i=0; i < list.length; i++) {
        const services = list[i];
        if (!services.active) {
            continue;
        }
        
        HTML += `<div class="col-12 col-md-6 col-lg-4 h">
                        <div>
                            <i class="${services.icon}"></i>
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