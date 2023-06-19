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

function handleCustomSubmit(event, cart) {
    event.preventDefault();
    const size = event.target.querySelector("#size option:checked").innerText;
    const sauce = event.target.querySelector("#sauce option:checked").innerText;
    const meatToppings = [...event.target.querySelectorAll("input.meat:checked")].map((e) => e.value);
    const vegToppings = [...event.target.querySelectorAll("input.veg:checked")].map((e) => e.value);
    const pizza = new Pizza(size, sauce, meatToppings, vegToppings);
    addPizzaToCart(pizza);
    event.target.reset();
}

function addEventListeners() {
    const form = document.getElementById("customPizza");
    form.addEventListener("submit", (event) => handleCustomSubmit(event));
}

function addPizzaToCart(pizza) {
    const cart = document.getElementById("cart");
    const cost = document.getElementById("cost");
    let p = document.createElement("p");
    p.innerText = pizza.toString();
    cart.appendChild(p);
    console.log(parseInt(cost.innerText.slice(1)))
    console.log()
    cost.innerText = "$" + (parseFloat(cost.innerText.slice(1)) + parseFloat(pizza.getPrice())).toFixed(2);
}

window.onload = (event) => {
    window.cart = [];
    addFormSelectOptions(Size, "#margForm .size", "name");
    addFormSelectOptions(Size, "#customPizza #size", "name");
    addFormSelectOptions(Sauce, "#customPizza #sauce", "name");
    addToppingOptions();
    addEventListeners();
}