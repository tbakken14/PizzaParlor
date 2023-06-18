//UI Logic
function addToppingCheckboxes() {
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

window.onload = (event) => {
    addToppingCheckboxes();
}