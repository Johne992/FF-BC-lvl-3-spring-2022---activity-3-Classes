

// a class is just a template for an object
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return "I have a " + this.carname;
  }
}
// an example object that has the properties of the Class Car
let ourCar = {
  carname: "Honda",
  present: function(){
    return "I have a " + this.carname;
  }
}

class House {
  constructor(rent) {
    this.renthouse = rent;
  }
  present() {
    return "I have a " + this.renthouse;
  }
}

let document

myCar = new Car("Maserati");
rental = new House("2000 Square Foot apartment");

document.getElementById("Cars").innerHTML = myCar.present();
console.log(myCar);
document.write(ourCar.present());
console.log(ourCar);
document.getElementById("House2").innerHTML = rental.present();
