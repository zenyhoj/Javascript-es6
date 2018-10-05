// ES6 Array Helpers

// array.prototype.forEach()
// Definition: The forEach() method executes a provided function once for each array element.
var arrayOfNumbers = [1,2,3];
arrayOfNumbers.forEach(number => console.log(number));
arrayOfNumbers.forEach(number => console.log(number * 2));

// array.prototype.map()
// The map() method creates a new array with the results of calling a provided function on every element in the calling array.prototype.
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


// array.prototype.filter
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

// Display every posts comment equal to the post id
var post = {id: 3, title: 'New Post'};
var comments = [
    {postId: 4, comment: 'lorem ipsum dolor sdfdsf'},
    {postId: 3, comment: 'lorem ipsum dolor sdfdsf'},
    {postId: 4, comment: 'lorem ipsum dolor sdfdsf'}
];

function commentsForPosts(post, comments) {
    return comments.filter(function(comment) { //return is important
        return comment.postId === post.id; //return the actual object value not a the boolean; if console log is used boolean is returned
    });

}

console.log(commentsForPosts(post, comments));


// array.prototype.find
// The find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.

var array1 = [5, 12, 8, 130, 44];

var found = array1.find(function(element) {
  return element > 10;
});

console.log(found);
// expected output: 12    


// Example 2
function Car(model) {
    this.model = model;
    
}
var cars = [
    new Car('Camaro'),
    new Car('Buick'),
    new Car('jaguar'),
];

var filteredCar = cars.find(function(car) {
    return car.model === 'Camaro';
})
console.log(filteredCar);
// expected output: Camaro