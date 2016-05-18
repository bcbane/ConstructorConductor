//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
  var Person = function person(name,age) {

    this.name = name;
    this.age = age;

  }

//Now create three instances of Person with data you make up

  //code here
  var batty = new Person('Batty Billson', 10);
  var gim = new Person('Gim Jordon', 48);
  var wruce = new Person('Wruce Brayne', 40);


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  Person.prototype.sayName = function(){

    alert(this.name);

  }
  //code here
