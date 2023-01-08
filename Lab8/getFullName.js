function getFullName() {
    return this.firstname + ' ' + this.lastname;
  }

  var obj1 = {
    firstname: 'John',
    lastname: 'Doe'
  };
  
  var obj2 = {
    firstname: 'Jane',
    lastname: 'Doe'
  };

  console.log(getFullName.apply(obj1));
  console.log(getFullName.apply(obj2));

  console.log(getFullName.apply(obj1)); // "John Doe"
  console.log(getFullName.apply(obj2)); // "Jane Doe"