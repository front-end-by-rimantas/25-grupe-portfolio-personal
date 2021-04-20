class MobileMenu {
    constructor(DOM){
       this.DOM = DOM;
    
       this.init();
    }

    init() {
        if (!this.isValidDom) {
            return false;
        }

        this.render();
    }

    isValidDom() {
        return true;
    }

    render() {
        let HTML = `<a href="#" class="mobile-menu">
                        <i class="fa fa-bars"></i>
                    </a>`;

        this.DOM.insertAdjacentHTML('beforeend', HTML);
    }
}

export { MobileMenu }