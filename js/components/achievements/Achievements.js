class Achievements {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;
        
        this.DOM = null;
        this.init();
    }
    
    init() {
        if(!this.isValidSelector()) {
            console.error('ERROR: nevalidus selectorius');
            return false;
        }
        
        if(!this.isValidData()) {
            console.error('ERROR: nevalidus duomenys');
            return false;
        }
        
        const DOM = document.querySelector(this.selector);
        if(!DOM) {
            console.error('ERROR: pagal pateikta selector nepavyko rasti norimos vietos/elemento');
            return false;
        }
        this.DOM = DOM;

        this.render();
    }

    isValidSelector() {
        if (typeof this.selector !== 'string') {
            console.warn('ERROR: selector turi buti tekstas');
            return false;
        }

        if (this.selector === '') {
            console.warn('ERROR: selector turi buti ne tuscias tekstas');
            return false;
        }

        return true;
    }

    isValidData() {
        if(typeof this.data !== 'object' || Array.isArray(this.data)) {
            console.error('ERROR: duomenys turi buti objekto tipo');
            return false;
        }

        if(this.data.list === undefined || !Array.isArray(this.data.list)) {
            console.error('ERROR: duomenyse esantis list turi buti array tipo');
            return false;
        }

        if(this.data.list === 0) {
            console.error('ERROR: duomenyse esantis list turi buti ne tuscias');
            return false;
        }

        return true;
    }

    render() {
        let HTML = '';

        for (const item of this.data.list) {
            HTML += `<div class="achievement">
                        <div class="number">${item.number}</div>
                        <div class="subtitle">${item.subtitle}</div>
                    </div>`;
        }

        this.DOM.innerHTML = HTML;
    }
}

export { Achievements }