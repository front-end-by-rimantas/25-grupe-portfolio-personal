class Search {
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
        let HTML = `<div class="search">
                        <input type="text"></input>
                        <i class="fa fa-search"></i>
                    </div>`;

        this.DOM.insertAdjacentHTML('beforeend', HTML);
    }
}

export { Search }