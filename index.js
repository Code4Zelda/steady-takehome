class CoffeeServer {
  constructor() {
    this.customers = [];
    this.completedDrinks = [];
    this.time;
  }
  takeOrder(customer) {
    this.customers.push(customer);
    this.time = customer.getTime();
    console.log(
      `Coffee Server: ${customer.getName()}, I've started working on yur order of ${customer.getDrinkOrdered()}`
    );
  }

  prepareDrink(customer) {
    // let time;
    // if (customer === "Cafe Au Lait") {
    //   time = customer.time;
    // }
    try {
      console.log("perparing...");
      setTimeout(() => console.log(`complete...`), this.time);
      this.completedDrinks.push(customer);
      console.log("drink", this.completedDrinks);
    } catch (e) {
      console.log(`drink wasn't perpared, Sorry!`);
    }
  }
  completedOrder() {
    for (let readyItem of this.completedDrinks) {
      console.log(`Order up: ${readyItem}`);
      for (let customer of this.customers) {
        customer.orderReady(readyItem);
      }
    }
  }
}

class Customer {
  constructor(name, drinkOrdered, time) {
    this.name = name;
    this.drinkOrdered = drinkOrdered;
    this.time = time;
  }
  getName() {
    return this.name;
  }
  getDrinkOrdered() {
    return this.drinkOrdered;
  }
  getTime() {
    return this.time;
  }
  orderReady(completedDrink) {
    if (this.drinkOrdered === completedDrink) this.exitStore();
  }

  exitStore() {
    console.log(
      `${this.name}!, Thank you, I've recevied my ${this.drinkOrdered} and leaving the coffee shop!`
    );
  }
}

let donte = new Customer("Donte", "Cafe Au Lait", 4000);
let coffeeServer = new CoffeeServer();
coffeeServer.takeOrder(donte);

// prepare drinks
coffeeServer.prepareDrink("Cafe Au Lait");
// order up...
coffeeServer.completedOrder();
// console.log(donte);
