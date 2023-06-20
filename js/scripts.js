//UI Logic
function addFormSelectOptions(objectType, selector, objectProperty) {
    let dropDown = document.querySelector(selector);
    Object.keys(objectType).forEach((element) => {
        const size = objectType[element];
        const option = document.createElement("option");
        option.setAttribute("value", size[objectProperty]);
        option.innerHTML = size[objectProperty];
        dropDown.appendChild(option);
    })
}

function addToppingOptions() {
    const meatToppings = document.getElementById("meatToppingsHeader");
    const vegToppings = document.getElementById("vegToppingsHeader");
    Object.keys(Topping).forEach((element) => {
        const topping = Topping[element];
        const label = document.createElement("label");
        label.setAttribute("for", topping.name);
        label.innerText = topping.name;
        const input = document.createElement("input");
        input.setAttribute("id", topping.name);
        input.setAttribute("name", topping.name);
        input.setAttribute("value", topping.name);
        input.setAttribute("type", "checkbox");
        label.appendChild(input);
        const br = document.createElement("br");
        label.appendChild(br)
        if (topping.isMeat) {
            input.classList.add("meat");
            meatToppings.after(label);
        }
        else {
            input.classList.add("veg");
            vegToppings.after(label);
        }
    });
}

function handleCustomSubmit(event) {
    event.preventDefault();
    const size = event.target.querySelector(".size option:checked").innerText;
    const sauce = event.target.querySelector("#sauce option:checked").innerText;
    const meatToppings = [...event.target.querySelectorAll("input.meat:checked")].map((e) => e.value);
    const vegToppings = [...event.target.querySelectorAll("input.veg:checked")].map((e) => e.value);
    const pizza = new Pizza(size, sauce, meatToppings, vegToppings);
    addPizzaToCart(pizza);
    event.target.reset();
}

function handleSpecialtySubmit(event) {
    event.preventDefault();
    const size = event.target.querySelector(".size option:checked").innerText;
    let pizza;
    console.log(event.target.id);
    if (event.target.id === "margForm") {
        pizza = new Pizza(size, Sauce.red.name, [], [Topping.basil.name, Topping.tomato.name, Topping.mozzarella.name]);
    }
    else if (event.target.id === "bbqChickenForm") {
        pizza = new Pizza(size, Sauce.bbq.name, [Topping.chicken.name], [Topping.onion.name]);
    }
    addPizzaToCart(pizza);
    event.target.reset();
}

function addEventListeners() {
    const customForm = document.getElementById("customPizza");
    const margForm = document.getElementById("margForm");
    const bbqChickenForm = document.getElementById("bbqChickenForm");
    customForm.addEventListener("submit", (event) => handleCustomSubmit(event));
    margForm.addEventListener("submit", (event) => handleSpecialtySubmit(event));
    bbqChickenForm.addEventListener("submit", (event) => handleSpecialtySubmit(event));
}

function addPizzaToCart(pizza) {
    const cart = document.getElementById("cart");
    const cost = document.getElementById("cost");
    let p = document.createElement("p");
    p.innerText = pizza.toString() + ", $" + pizza.getPrice();
    cart.appendChild(p);
    console.log(cost.innerText.slice(0, 9), parseFloat(cost.innerText))
    cost.innerText = cost.innerText.slice(0, 8) + (parseFloat(cost.innerText.slice(8)) + parseFloat(pizza.getPrice())).toFixed(2);
}

window.onload = (event) => {
    window.cart = [];
    addFormSelectOptions(Size, "#margForm .size", "name");
    addFormSelectOptions(Size, "#bbqChickenForm .size", "name");
    addFormSelectOptions(Size, "#customPizza .size", "name");
    addFormSelectOptions(Sauce, "#customPizza #sauce", "name");
    addToppingOptions();
    addEventListeners();
}