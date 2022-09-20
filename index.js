// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
let a = [1, 2, 3];
appDiv.innerHTML = `<h1>JS Starter111 ${a}</h1>`;

class car {
  constructor(color, price) {
    (this.color = color), (this.price = price);
  }
  show() {
    return `this car is ${this.color}`;
  }
}

let car1 = new car('red', '5000');
console.log(car1.show());
