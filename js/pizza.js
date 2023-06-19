//Business Logic
class Topping {
    static pepperoni = new Topping("Pepperoni", true);
    static sausage = new Topping("Sausage", true);
    static bacon = new Topping("Bacon", true);
    static chicken = new Topping("Chicken", true);
    static onion = new Topping("Onion", false);
    static olive = new Topping("Olive", false);
    static jalapeno = new Topping("Jalapeno", false);
    static bananaPepper = new Topping("Banana Pepper", false);
    static tomato = new Topping("Tomato", false);
    static basil = new Topping("Basil", false);
    static mushroom = new Topping("Mushroom", false);
    static mozzarella = new Topping("Mozzarella", false);
    static blueCheese = new Topping("Blue Cheese", false);

    constructor(name, isMeat) {
        this.name = name;
        this.isMeat = isMeat;
    }
}

class Sauce {
    static red = new Sauce("Red", "Marinara");
    static white = new Sauce("White", "Alfredo");

    constructor(color, name) {
        this.color = color;
        this.name = name;
    }
}

class Size {
    static small = new Size("Small", 12);
    static medium = new Size("Medium", 16);
    static large = new Size("Large", 20);

    constructor(name, diameter) {
        this.name = name;
        this.diameter = diameter;
    }
}

class Pizza {
    constructor(size, sauce, meatToppings, vegToppings) {
        this.size = size;
        this.sauce = sauce;
        this.meatToppings = meatToppings;
        this.vegToppings = vegToppings;
    }

    setSauce(sauce) {
        this.sauce = sauce;
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

    getPrice() {
        let price = 14.99;
        //Price based on size
        switch (this.size) {
            case Size.large.name:
                price += 7
            case Size.medium.name:
                price += 7
            case Size.small.name:
                break;
            default:
                price = Number.NaN;
        }
        //1 free meat toppping, $2 per extra
        if (this.meatToppings.length > 1) {
            price += 2 * (this.meatToppings.length - 1);
        }
        //2 free veg toppping, $1 per extra
        if (this.vegToppings.length > 2) {
            price += 1 * (this.meatToppings.length - 2);
        }
        return price.toFixed(2);
    }
}

function testSauce() {
    console.log("static member", Sauce.red.color === "Red");
    console.log("static member", Sauce.white.color === "White");
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
    let pizza = new Pizza(Size.small, Sauce.red, [], []);
    console.log("constructor", Object.hasOwn(pizza, "sauce"));
    console.log("constructor", Object.hasOwn(pizza, "size"));
    console.log("constructor", Object.hasOwn(pizza, "meatToppings"));
    console.log("constructor", Object.hasOwn(pizza, "vegToppings"));
    console.log("constructor", pizza.size === Size.small);
    console.log("constructor", pizza.sauce === Sauce.red);
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
    pizza.setSize(Size.medium);
    console.log("setSize", pizza.size === Size.medium);
    pizza.setSauce(Sauce.white);
    console.log("setSauce", pizza.sauce === Sauce.white);
    console.log("getPrice", pizza.getPrice() === "21.99");
}

