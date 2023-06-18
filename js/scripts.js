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
            meatToppings.after(label);
        }
        else {
            vegToppings.after(label);
        }
    });
}

function handleSumbitEvent(event) {
    event.preventDefault();
    console.log(event.target);
    const pizza = new Pizza()
    event.target.reset();
}

function addEventListeners() {
    const form = document.getElementsByTagName("form")[0];
    form.addEventListener("submit", (event) => handleSumbitEvent(event));
}

window.onload = (event) => {
    addFormSelectOptions(Size, "size", "name");
    addFormSelectOptions(Sauce, "sauce", "color");
    addToppingOptions();
    addEventListeners();
}