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
    getFullName: function() { 
        console.log(`${this.name} ${this.lastName}`);
    } //using => will point to global 
     
}
console.log(person.getFullName());

// Solving this.
let team = {
    members: ['jane', 'joe'], 
    teamName: 'Super coders',
    getTeamName: function() {
        return this.members.map( (member) => { 
            return `${member} is on team ${this.teamName}`;
            //=> using => this will point to team object so this.teamName or team.teamName will return an exact values
            //using map with regular function, this.teamName will lose its value
        });
}
}

console.log(team.getTeamName());

//Example 3. Enhanced Object Literal

function createbookShop(inventory) {
    // returns an object
    return {
        inventory, 
        //omit the value with the same key name ie. inventory: inventory
        /*bookTitle() {
            return inventory.map(book => `${book.title} worths ${book.price} USD`);
        },*/
        inventoryValue() {
        //if the value is a function, function word and the : can be omitted
            return this.inventory.reduce((total, book) => total + book.price, 0); 
        },
        priceforTitle(title) {
            return this.inventory.find(book => book.title === title).price;
        }
    }; 
}


const inventory = [
    { title: 'harry potter', price: 102 },
    { title: 'javascript ninja', price: 100 },
    { title: 'harry potter', price: 102 },
    { title: 'harry potter', price: 102 },
    { title: 'harry potter', price: 102 },
    { title: 'harry potter', price: 102 },
    { title: 'eloquent javascript', price: 102 },

];

const bookShop = createbookShop(inventory); //array of inventory
//console.log(bookShop.inventory);
//console.log(bookShop.bookTitle());
console.log(bookShop.inventoryValue());
console.log(bookShop.priceforTitle('javascript ninja'));