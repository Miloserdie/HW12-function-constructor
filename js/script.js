const SIZE_SMALL = {price: 50, calories: 20}
const SIZE_MIDDLE = {price: 75, calories: 30}
const SIZE_BIG = {price: 100, calories: 40}

const CHEESE = {price: 10, calories: 20}
const SALAD = {price: 20, calories: 5}
const POTATO = {price: 15, calories: 10}
const SPICE = {price: 15, calories: 0}
const MAYO = {price: 20, calories: 5}

function Hamburger(s) {
	this.price = s.price;
   this.calories = s.calories;
   
	this.addModifier = (m) => {
   	this.price += m.price;
   	this.calories += m.calories;
	};

	this.getPrice = () => this.price;

	this.getCalories = () => this.calories;
}

const hamburger = new Hamburger(SIZE_SMALL);

hamburger.addModifier(MAYO);
hamburger.addModifier(POTATO);

console.log('Price with sauce: ' + hamburger.getPrice());
console.log('Calories with sauce: ' + hamburger.getCalories());