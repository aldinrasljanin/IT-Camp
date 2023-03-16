console.log("Exercise for javascript classes");

// pocetna brzina 120,funkcija za ubrzanje 20 kad kaze uspori smanji brzina za 10 i kad ukoci da brzina bude 0
// clg kada se pozove bilo koja da clga i f-ju i brz
class Car {
  brand;
  speed = 120;

  constructor(brandName) {
    this.brand = brandName;
  }

  getSpeed() {
    return this.speed;
  }

  fastUp() {
    this.speed += 20;
  }

  slowDown() {
    this.speed -= 10;
  }

  stop() {
    this.speed = 0;
  }
}

const myNewCar = new Car();
