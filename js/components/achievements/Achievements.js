import { achievementsData } from "../../data/achievementsData.js";

class Achievements {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;
        this.DOM = null;
        this.validUsedData = [];
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
        this.eventListener();
        return true;
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
            this.validUsedData.push(item);
            HTML += `<div class="achievement">
                        <div class="number">0</div>
                        <div class="subtitle">${item.subtitle}</div>
                    </div>`;
        }

        this.DOM.innerHTML = HTML;
        }
    
numberAnimation(index, DOM) {
    const screenBottom = scrollY + innerHeight;
    const numberBottom = DOM.offsetTop + DOM.offsetHeight;

    if (screenBottom > numberBottom) {
        
        if (this.validUsedData[index].animated) {
            return false;
        }
        this.validUsedData[index].animated = true;
        
        const countFrom = 0;
        const speed = 300;
        let counterSpeed = this.validUsedData[index].number / speed;
        let countPosition = 0;
        
        const stopPoint = setInterval( () => {
            const currentNumber = Math.floor(countFrom + countPosition);
            countPosition+=counterSpeed;
            DOM.innerText = currentNumber;
            
            if (currentNumber >= this.validUsedData[index].number) {
                DOM.innerText = this.validUsedData[index].number;
                clearInterval(stopPoint);
            }
            
        });
    } 
}   
    
    eventListener() {
        addEventListener('scroll', () => {

            const numbersDOM = document.querySelectorAll('.achievement > .number')

            for (let i = 0; i < this.validUsedData.length; i++) {
                this.numberAnimation(i, numbersDOM[i]);
            }
            
        });
    }
}
export { Achievements }