import { Logo } from './Logo.js';
import { Nav } from './Nav.js';
import { Search } from './Search.js';

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
        console.log(DOM)
        if (!DOM) {
            console.error('ERROR: pagal pateikta selector nepavyko rasti jokio elemento');
            return false;
        }
        
        this.DOM = DOM;

        this.DOM.classList.add('header-bar');

        this.render();
        this.addEvent();


        // sukurti search
    }

    isValidSelector() {
        return true;
    }

    isValidData() {
        return true;
    }

    render() {
        const HTML = `<div class="row"><div class="col-12 header-content"></div></div>`;
        
        this.DOM.innerHTML = HTML;
        
        const col = this.DOM.querySelector('.col-12');

        new Logo(col, this.data.logo);
        new Nav(col, this.data.nav);
        new Search(col);
    }

    addEvent(){
        const fixHeaderPositionAtHeight = 200;
        const staticHeaderPositionAtHeight = 40;
        addEventListener('scroll', () => {
           if (scrollY >= fixHeaderPositionAtHeight) {
            this.DOM.classList.add('fixed');
           } 
           if (scrollY < staticHeaderPositionAtHeight) {
            this.DOM.classList.remove('fixed');
           }
        })
    }

    
}

export { Header }