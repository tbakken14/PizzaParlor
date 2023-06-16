class Pizza {
    constructor() {
        this.meatToppings = [];
        this.vegToppings = [];
    }
}

function testPizza() {
    let pizza = new Pizza();
    console.log(Object.hasOwn(pizza, "meatToppings"));
    console.log(Object.hasOwn(pizza, "vegToppings"));
}