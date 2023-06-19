//UI Logic
function addFormSelectOptions(objectType, selectId, objectProperty) {
    const sizeDropDown = document.getElementById(selectId);
    Object.keys(objectType).forEach((element, index) => {
        const size = objectType[element];
        const option = document.createElement("option");
        option.setAttribute("value", size[objectProperty]);
        option.innerHTML = size[objectProperty];
        sizeDropDown.appendChild(option);
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

function handleSumbitEvent(event, cart) {
    event.preventDefault();
    const size = event.target.querySelector("#size option:checked").innerText;
    const sauce = event.target.querySelector("#sauce option:checked").innerText;
    const meatToppings = [...event.target.querySelectorAll("input.meat:checked")].map((e) => e.value);
    const vegToppings = [...event.target.querySelectorAll("input.veg:checked")].map((e) => e.value);
    const pizza = new Pizza(size, sauce, meatToppings, vegToppings);
    window.cart.push(pizza);
    event.target.reset();
}

function addEventListeners() {
    const form = document.getElementsByTagName("form")[0];
    form.addEventListener("submit", (event) => handleSumbitEvent(event));
}

window.onload = (event) => {
    window.cart = [];
    addFormSelectOptions(Size, "size", "name");
    addFormSelectOptions(Sauce, "sauce", "color");
    addToppingOptions();
    addEventListeners();
}