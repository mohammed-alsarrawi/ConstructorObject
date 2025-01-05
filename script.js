function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  
    this.getDetails = function () {
      return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`;
    };
  }
  
  let car1 = new Car("Toyota", "Corolla", 2020);
  let car2 = new Car("Honda", "Civic", 2021);
  let car3 = new Car("Ford", "Focus", 2022);
  
  console.log(car1.getDetails()); 
  console.log(car2.getDetails()); 
  console.log(car3.getDetails()); 


  const persons = {
    person1: { firstName: "Mohammed", lastName: "sarrawi" },
    person2: { firstName: "Hussein", lastName: "Al-Harbi" },
    person3: { firstName: "farah", lastName: "khalid" }
  };

  function firstName(personsObj) {
    const arr = [];
    let index = 0;
    for (const key in personsObj) {
      arr[index] = personsObj[key].firstName;
      index++;
    }
    return arr;
  }
console.log(firstName(persons));



function objectToArray(obj) {
    const result = [];
    for (const key in obj) {
        result.push(key, obj[key]);
    }
    return result;
}

const input = { firstName: "Mohammed", age: 21 };
console.log(objectToArray(input));