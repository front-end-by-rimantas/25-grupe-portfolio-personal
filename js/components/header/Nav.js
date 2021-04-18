class Nav {
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

     submenuDirection(direction) {
         const available = ['bottom', 'right', 'left'];
         return available.includes(direction)? direction : available[0];
     }

     generateHTML(item) {
         let HTML = '';

         if (item.submenu) {
             const labelHTML = item.type === 'link'
                ? `<a href="${item.href}"class="label">${item.text}<i class="fa fa-angle-down"></i></a>`
                : `<div class="label">${item.text}<i class="fa fa-angle-down"></i></div>`

            let submenuHTML = '';
            for(const submenuItem of item.submenu) {
                submenuHTML += this.generateHTML(submenuItem);
            }

             HTML += `<div class="item dropdown ${this.submenuDirection(item.submenuDirection)}">
                        ${labelHTML}
                        <div class="submenu">
                              ${submenuHTML}
                        </div>
                    </div>`;

         } else {
             HTML += `<a href="${item.href}" class="item">${item.text}</a>`;
         }


         return HTML;
     }
 
     render() {
         let HTML = '';
         for (const item of this.data) {
             HTML += this.generateHTML(item);
         }
         this.DOM.insertAdjacentHTML('beforeend', `<nav>${HTML}</nav>`);
 
     }
}

export { Nav }