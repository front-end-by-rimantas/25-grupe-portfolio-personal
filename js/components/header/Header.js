class Header {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;

        this.DOM = null;
        
        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return false;
        }
        
        if (!this.isValidData()) {
            return false;
        }

        const DOM = document.querySelector(this.selector);
        if (!DOM) {
            console.error('ERROR: pagal pateikta selector nepavyko rasti jokio elemento');
            return false;
        }
        
        this.DOM = DOM;

        this.DOM.classList.add('header-bar');

         
        // sukuri logo
        // sukurti nav
        // sukurti search
    }

    isValidSelector() {
        return true;
    }

    isValidData() {
        return true;
    }
}

export { Header }