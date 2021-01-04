const Person = function(name) {
    this.name = name;
};

Person.prototype.myFriends6 = function(friends) {
    var arr = friends.map(el => `${this.name} is friends with ${el}`)
    console.log(arr)
}

let friends = ['juan', 'two']
new Person('tres').myFriends6(friends)