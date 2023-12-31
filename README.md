# _Pizza Parlor_

#### By _**Thomas Bakken**_

#### _A web application for creating a pizza order._

## Technologies Used

* _Javascript_
* _HTML_
* _CSS_

## Description

_This app provides the user the ability to create a pizza order. Both specialty and custom pizzas can be added to the order. A list of pizzas in the order is provided as well as line and total costs._

## Setup/Installation Requirements

* _Run a local or remote hosted server for this web page_
* _Open the corresponding link in a web browser of your choosing_

_This is a dynamic web page relying on javascript, html, and css._

## Known Bugs

* _The rendering of pepperoni pieces on the ui pizzas have pixel blemishes depending on the viewport._
* _Too small of a viewport will overlap pizzas and text._

## License

_MIT license, contact author for details/support_

Copyright (c) _6/19/2023_ _Thomas Bakken_


## Tests

# Describe: Topping()

Test: Topping object has property name
Code: 
_let topping = new Topping("test", false);_
_Object.hasOwn(topping, "name");_
Result: true

Test: Topping object has property isMeat
Code: 
_let topping = new Topping("test", false);_
_Object.hasOwn(topping, "isMeat");_
Result: true

Test: Topping constructor sets first parameter to name property
Code: 
_let topping = new Topping("test", false);_
_topping.name === "test";_
Result: true

Test: Topping constructor sets second parameter to isMeat property
Code: 
_let topping = new Topping("test", false);_
_topping.isMeat === false;_
Result: true


# Describe: Size

Test: Small size has a diameter of 12 inches
Code: Size.small.diameter === 12;
Result: true

Test: Medium size has a diameter of 12 inches
Code: Size.medium.diameter === 16;
Result: true

Test: Large size has a diameter of 12 inches
Code: Size.large.diameter === 20;
Result: true


# Describe: Sauce

Test: Sauce static member white has color property White
Code: Sauce.white.color === "White";
Result: true

Test: Sauce static member red has color property Red
Code: Sauce.red.color === "Red";
Result: true


# Describe: Pizza()

Test: Pizza object has property size
Code: 
_let pizza = new Pizza(Size.small, Sauce.red, [], []);_
_Object.hasOwn(pizza, "size");_
Result: true

Test: Pizza object has property sauce
Code: 
_let pizza = new Pizza(Size.small, Sauce.red, [], []);_
_Object.hasOwn(pizza, "sauce");_
Result: true

Test: Pizza object has property meatToppings
Code: 
_let pizza = new Pizza(Size.small, Sauce.red, [], []);_
_Object.hasOwn(pizza, "meatToppings");_
Result: true

Test: Pizza object has property vegToppings
Code: 
_let pizza = new Pizza(Size.small, Sauce.red, [], []);_
_Object.hasOwn(pizza, "vegToppings");_
Result: true

Test: Pizza size has value equal to first argument
Code: 
_let pizza = new Pizza(Size.small, Sauce.red, [], []);_
_pizza.size === Size.small;_
Result: true

Test: Pizza sauce has value equal to second argument
Code: 
_let pizza = new Pizza(Size.small, Sauce.red, [], []);_
_pizza.sauce === Sauce.red;_
Result: true

Test: Pizza vegToppings has initial length 0
Code: 
_let pizza = new Pizza(Size.small, Sauce.red, [], []);_
_pizza.vegToppings.length === 0;_
Result: true

Test: Pizza meatToppings has initial length 0
Code: 
_let pizza = new Pizza(Size.small, Sauce.red, [], []);_
_pizza.meatToppings.length === 0;_
Result: true


# Describe: Pizza.addTopping()

Test: Pizza addTopping method adds to meat if topping is meat
Code: 
_let pizza = new Pizza(Size.small, Sauce.red, [], []);_
_pizza.addTopping(new Topping("meat1", true));_
_pizza.meatToppings.length === 1;_
Result: true

Test: Pizza addTopping method does not add to veg if topping is meat
Code: 
_let pizza = new Pizza(Size.small, Sauce.red, [], []);_
_pizza.addTopping(new Topping("meat1", true));_
_pizza.vegToppings.length === 0;_
Result: true

Test: Pizza addTopping method adds to veg if topping is not meat
Code: 
_let pizza = new Pizza(Size.small, Sauce.red, [], []);_
_pizza.addTopping(new Topping("veg1", false));_
_pizza.vegToppings.length === 1;_
Result: true

Test: Pizza addTopping method does not add to meat if topping is not meat
Code: 
_let pizza = new Pizza(Size.small, Sauce.red, [], []);_
_pizza.addTopping(new Topping("veg1", false));_
_pizza.meatToppings.length === 0;_
Result: true


# Describe: Pizza.removeTopping(topping)

Test: Pizza removeTopping method does not remove topping that has not been added
Code: 
_let pizza = new Pizza(Size.small, Sauce.red, [], []);_
_pizza.addTopping(new Topping("meat1", true));_
_pizza.removeTopping(new Topping("meat2", true));_
_pizza.meatToppings.length === 1;_
Result: true

Test: Pizza removeTopping method removes meat topping from meat array 
Code: 
_let pizza = new Pizza(Size.small, Sauce.red, [], []);_
_pizza.addTopping(new Topping("meat1", true));_
_pizza.removeTopping(new Topping("meat1", true));_
_pizza.meatToppings.length === 0;_
Result: true

Test: Pizza removeTopping method does not remove meat topping from veg array 
Code: 
_let pizza = new Pizza(Size.small, Sauce.red, [], []);_
_pizza.addTopping(new Topping("veg1", false));_
_pizza.removeTopping(new Topping("veg1", true));_
_pizza.vegToppings.length === 1;_
Result: true

Test: Pizza removeTopping method removes veg topping from veg array 
Code: 
_let pizza = new Pizza(Size.small, Sauce.red, [], []);_
_pizza.addTopping(new Topping("veg1", false));_
_pizza.removeTopping(new Topping("veg1", false));_
_pizza.vegToppings.length === 0;_
Result: true


# Describe: Pizza.setSize(size)

Test: Update size of pizza
Code: 
_let pizza = new Pizza(Size.small, Sauce.red, [], []);_
_pizza.setSize(Size.medium)_
_pizza.size === Size.medium;_
Result: true


# Describe: Pizza.setSauce(sauce)

Test: Update sauce of pizza
Code: 
_let pizza = new Pizza(Size.small, Sauce.red, [], []);_
_pizza.setSacue(Sauce.white)_
_pizza.sauce === Sauce.white;_
Result: true

# Describe: Pizza.getPrice()

Test: Price of small pizza, no toppings.
Code:
_let pizza = new Pizza(Size.medium, Sauce.red, [], []);_
_pizza.getSize() === 21.99;_
Result: true
