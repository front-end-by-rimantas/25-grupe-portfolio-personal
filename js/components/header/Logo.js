class Logo {
    constructor(DOM, data){
       this.DOM = DOM;
       this.data = data;
    
       this.init();
    }

    init() {
        if (!this.isValidDom) {
            return false;
        }

        if (!this.isValidData) {
            return false;
        }

        this.render();
    }

    isValidDom() {
        return true;
    }

    isValidData() {
        return true;
    }

    render() {
        const {link, imgPath, logo, alt} = this.data
        let HTML = `<a href="${link}"><img class="logo" src="${imgPath + logo}" alt="${alt}"></img></a>`;

        this.DOM.insertAdjacentHTML('beforeend', HTML);

    }
}

export { Logo }