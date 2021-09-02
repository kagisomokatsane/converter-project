"use strict";
class ProjectInput {
    constructor() {
        this.templateElement = document.getElementById("project-input");
        this.hostElement = document.getElementById("app");
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = "user-input";
        this.numberInput = this.element.querySelector("#numInput");
        this.currencyIn = this.element.querySelector("in-amount");
        this.currencyOut = this.element.querySelector("out-amount");
        this.currOut = this.element.querySelector("numOut");
        this.configure();
        this.attach();
    }
    submitHandler(event) {
        event.preventDefault();
    }
    configure() {
        this.element.addEventListener("submit", this.conv.bind(this));
        this.element.addEventListener("submit", this.submitHandler.bind(this));
    }
    attach() {
        this.hostElement.insertAdjacentElement("afterbegin", this.element);
    }
    conv(event) {
        const select1 = document.getElementById("currencyIn");
        const from = select1.value;
        const select2 = document.getElementById("currencyOut");
        const to = select2.value;
        const rateEl = document.getElementById("rate");
        if (from === "USD" && to === "EUR") {
            const USD = 0.85;
            console.log(+this.numberInput.value * USD);
        }
        else if (from === "USD" && to === "YEN") {
            const USD = 109.39;
            console.log(+this.numberInput.value * USD);
        }
        else if (from === "USD" && to === "GBP") {
            const USD = 0.72;
            console.log(+this.numberInput.value * USD);
        }
        else if (from === "EUR" && to === "USD") {
            const EUR = 1.18;
            console.log(+this.numberInput.value * EUR);
        }
        else if (from === "EUR" && to === "YEN") {
            const EUR = 128.89;
            console.log(+this.numberInput.value * EUR);
        }
        else if (from === "EUR" && to === "GBP") {
            const EUR = 0.85;
            console.log(+this.numberInput.value * EUR);
        }
        else if (from === "YEN" && to === "USD") {
            const YEN = 0.0091;
            console.log(+this.numberInput.value * YEN);
        }
        else if (from === "YEN" && to === "EUR") {
            const YEN = 0.0078;
            console.log(+this.numberInput.value * YEN);
        }
        else if (from === "YEN" && to === "GBP") {
            const YEN = 0.0066;
            console.log(+this.numberInput.value * YEN);
        }
        else if (from === "YEN" && to === "YEN") {
            console.log(+this.numberInput.value);
        }
        else if (from === "USD" && to === "USD") {
            console.log(+this.numberInput.value);
        }
        else if (from === "GBP" && to === "GBP") {
            console.log(+this.numberInput.value);
        }
        else if (from === "EUR" && to === "EUR") {
            console.log(+this.numberInput.value);
        }
    }
}
const prjInput = new ProjectInput();
//# sourceMappingURL=app.js.map