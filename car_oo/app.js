class Vehicle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  honk() {
    return "Beep";
  }
  toString() {
    return `The vehicle is a ${this.a} ${this.b} from ${this.c}`;
  }
}

class Car extends Vehicle {
  constructor(a, b, c) {
    super(a, b, c);
    this.numWheels = 4;
  }
}

class Motorcycle extends Vehicle {
  constructor(a, b, c) {
    super(a, b, c);
    this.numWheels = 2;
  }
  revEngine() {
    return "VROOM";
  }
}

class Garage {
  constructor(capacity) {
    this.capacity = capacity;
    this.vehicles = [];
  }
  add(vehicle) {
    if (!(vehicle instanceof Vehicle)) {
      return "this is not vehicle :(";
    }
    if (this.vehicles.length >= 2) {
      return "too many vehicles!";
    } else {
      this.vehicles.push(vehicle);
      return "Vehicle added";
    }
  }
}
