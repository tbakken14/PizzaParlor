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

    addTopping(topping) {
        if (topping.isMeat) {
            this.meatToppings.push(topping.name);
        }
        else {
            this.vegToppings.push(topping.name);
        }
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
    console.log(pizza.vegToppings.length === 0);
    console.log(pizza.meatToppings.length === 0);
    pizza.addTopping(new Topping("meat1", true));
    console.log(pizza.meatToppings.length === 1);
    console.log(pizza.vegToppings.length === 0);
    pizza.addTopping(new Topping("veg1", false));
    console.log(pizza.meatToppings.length === 1);
    console.log(pizza.vegToppings.length === 1);
}

