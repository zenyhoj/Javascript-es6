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
            //=> this.teamName will point to the current object
            //using map with regular function, this.teamName will lose its value
        });
}
}

console.log(team.getTeamName());

