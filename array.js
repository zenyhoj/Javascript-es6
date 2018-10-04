// ES6 Array Helpers

// array.forEach()
// Definition: The forEach() method executes a provided function once for each array element.
var arrayOfNumbers = [1,2,3];
arrayOfNumbers.forEach(number => console.log(number));
arrayOfNumbers.forEach(number => console.log(number * 2));

// array.map()
// The map() method creates a new array with the results of calling a provided function on every element in the calling array.
// return an exact length of array elements
// Possible use case: display post objects from post array of objects
// Example 1
var doubleNumbers = arrayOfNumbers.map(function(x) {
 return x*2;
});
// 
console.log(doubleNumbers);

// Example 2
// array of cars. display all the prices of each car
var cars = [
    {name: 'Buick', price: 'Cheap'},
    {name: 'Jaguar', price: 'Expensive'},
    {name: 'Limo', price: 'Very Expensive'}
];

var carPrices = cars.map(function(car) {
    return car.price;
})

console.log(carPrices);


// array.filter
// Definition: The filter() method creates a new array with all elements that pass the test implemented by the provided function.

var products = [
    {name: 'orange' , type: 'fruit'},
    {name: 'tomato' , type: 'fruit'},
    {name: 'eggplant' , type: 'vegetable'},

];

var filteredProduct = products.filter(function(product){
    // if(product.type === 'fruit')
    return product.type!=='fruit'; //evaluates each element produces truthy or falsy value and return the property value;
});
console.log(filteredProduct);

/* for loop implementation

var filteredProducts = [];
for(var i = 0; i<products.length; i++) {
    if(products[i].type ==='fruit') {
        filteredProducts.push(products[i]);
    }
}
console.log(filteredProducts);*/


