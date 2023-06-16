# _{Application Name}_

#### By _**{List of contributors}**_

#### _{Brief description of application}_

## Technologies Used

* _List all_
* _the major technologies_
* _you used in your project_
* _here_

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

* _Any known issues_
* _should go here_

## License

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

Copyright (c) _date_ _author name(s)_


## Tests

# Describe: Pizza Object
# Code: let topping = new Topping("test", false);

Test: Topping object has property name
Code: Object.hasOwn(topping, "name")
Result: true

Test: Topping object has property isMeat
Code: Object.hasOwn(topping, "isMeat")
Result: true

Test: Topping constructor sets first parameter to name property
Code: topping.name === "test"
Result: true

Test: Topping constructor sets second parameter to isMeat property
Code: topping.isMeat === false
Result: true


# Describe: Pizza Object

Test: Pizza object has property meatToppings
Code: 
_let pizza = new Pizza();_
_Object.hasOwn(pizza, "meatToppings");_
Result: true

Test: Pizza object has property vegToppings
Code: 
_let pizza = new Pizza();_
_Object.hasOwn(pizza, "vegToppings");_
Result: true

Test: Pizza vegToppings has initial length 0
Code: 
_let pizza = new Pizza();_
_pizza.vegToppings.length === 0;_
Result: true

Test: Pizza meatToppings has initial length 0
Code: 
_let pizza = new Pizza();_
_pizza.meatToppings.length === 0;_
Result: true

Test: Pizza addTopping method adds to meat if topping is meat
Code: 
_let pizza = new Pizza();_
_pizza.addTopping(new Topping("meat1", true));_
_pizza.meatToppings.length === 1;_
Result: true

Test: Pizza addTopping method does not add to veg if topping is meat
Code: 
_let pizza = new Pizza();_
_pizza.addTopping(new Topping("meat1", true));_
_pizza.vegToppings.length === 0;_
Result: true

Test: Pizza addTopping method adds to veg if topping is not meat
Code: 
_let pizza = new Pizza();_
_pizza.addTopping(new Topping("veg1", false));_
_pizza.vegToppings.length === 1;_
Result: true

Test: Pizza addTopping method does not add to meat if topping is not meat
Code: 
_let pizza = new Pizza();_
_pizza.addTopping(new Topping("veg1", false));_
_pizza.meatToppings.length === 0;_
Result: true
