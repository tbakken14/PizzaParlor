class Topping {
    constructor(name, isMeat) {
        this.name = name;
        this.isMeat = isMeat;
    }
}

class Pizza {
    constructor() {
        this.meatToppings = [];
        this.vegToppings = [];
    }
}

function testTopping() {
    let topping = new Topping("test", false);
    console.log(Object.hasOwn(topping, "name"));
    console.log(Object.hasOwn(topping, "isMeat"));
    console.log(topping.name === "test");
    console.log(topping.isMeat === false);
}

function testPizza() {
    let pizza = new Pizza();
    console.log(Object.hasOwn(pizza, "meatToppings"));
    console.log(Object.hasOwn(pizza, "vegToppings"));
}

