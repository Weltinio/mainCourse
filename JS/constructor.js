var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = () => {
        console.log(2020 - this.yearOfBirth)
    };
}

var francis = new Person('francis', 2000, 'teacher')
var victor = new Person('victor', 1969, 'designer')
var john = new Person('john', 1948, 'retired')

//create
var manuel = new Person
manuel.name = 'manuel'
manuel.yearOfBirth = 1993
manuel.job = 'none'