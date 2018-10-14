function add(a, b) {
    return a + b;
}
console.log(add(1, 2));

// return and {} is not needed if only one statement after the parameter
let sum = (a, b) => a + b;
console.log(sum(2, 3));

const person = {
    name: 'joe',
    lastName: 'balingit',
    getFullName: function(name, lastName) { 
        console.log(`${this.name} ${this.lastName}`);
    } //using => will point to global 
     
}
console.log(person.getFullName());