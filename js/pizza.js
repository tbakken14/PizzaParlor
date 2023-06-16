class Topping {
    constructor(name, isMeat) {
        this.name = name;
        this.isMeat = isMeat;
    }
}

class Size {
    constructor(diameter) {
        this.diameter = diameter;
    }

    static small = new Size(12);
    static medium = new Size(16);
    static large = new Size(20);
}

class Pizza {
    constructor(size) {
        this.size = size;
        this.meatToppings = [];
        this.vegToppings = [];
    }

    setSize(size) {
        this.size = size;
    }

    addTopping(topping) {
        if (topping.isMeat) {
            this.meatToppings.push(topping.name);
        }
        else {
            this.vegToppings.push(topping.name);
        }
    }

    removeTopping(topping) {
        if (topping.isMeat) {
            this.removeToppingFromToppings(topping, this.meatToppings);
        }
        else {
            this.removeToppingFromToppings(topping, this.vegToppings);
        }
    }

    removeToppingFromToppings(topping, toppings) {
        const index = toppings.indexOf(topping.name);
        if (index != -1) {
            toppings.splice(index, 1);
        }
    }
}

function testSize() {
    console.log("static member", Size.small.diameter === 12);
    console.log("static member", Size.medium.diameter === 16);
    console.log("static member", Size.large.diameter === 20);
}

function testTopping() {
    let topping = new Topping("test", false);
    console.log("constructor", Object.hasOwn(topping, "name"));
    console.log("constructor", Object.hasOwn(topping, "isMeat"));
    console.log("constructor", topping.name === "test");
    console.log("constructor", topping.isMeat === false);
}

function testPizza() {
    let pizza = new Pizza(Size.small.diameter);
    console.log("constructor", Object.hasOwn(pizza, "size"));
    console.log("constructor", Object.hasOwn(pizza, "meatToppings"));
    console.log("constructor", Object.hasOwn(pizza, "vegToppings"));
    console.log("constructor", pizza.size === Size.small.diameter);
    console.log("constructor", pizza.vegToppings.length === 0);
    console.log("constructor", pizza.meatToppings.length === 0);
    pizza.addTopping(new Topping("meat1", true));
    console.log("add", pizza.meatToppings.length === 1);
    console.log("add", pizza.vegToppings.length === 0);
    pizza.addTopping(new Topping("veg1", false));
    console.log("add", pizza.meatToppings.length === 1);
    console.log("add", pizza.vegToppings.length === 1);
    pizza.removeTopping(new Topping("meat2", true));
    console.log("remove", pizza.meatToppings.length === 1);
    pizza.removeTopping(new Topping("meat1", true));
    console.log("remove", pizza.meatToppings.length === 0);
    pizza.removeTopping(new Topping("veg1", true));
    console.log("remove", pizza.vegToppings.length === 1);
    pizza.removeTopping(new Topping("veg1", false));
    console.log("remove", pizza.vegToppings.length === 0);
    pizza.setSize(Size.medium.diameter);
    console.log("setSize", pizza.size === Size.medium.diameter);
}

