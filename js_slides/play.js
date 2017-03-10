class CustomHTMLElement {
    constructor(element) {
        this.element = element;
    }
    get html() {
        console.log('..returning...');
        return this.element;
    }
    set html(value) {
        console.log('...setting...');
        this.element = value;
    }
}
