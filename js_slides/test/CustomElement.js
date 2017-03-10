export default class CustomHTMLElement {
    constructor(element) {
        this.element = element;
    }
    get element() {
        return this.element;
    }
    set element(value) {
        this.element = value;
    }
}
