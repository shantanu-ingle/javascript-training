var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// var msg = "hello typescript";
// msg = 100; // This will cause a type error in TypeScript, as msg is expected to be a string
var msg = "hello typescript"; // Explicitly declaring the type, this is known as type annotation
console.log(msg);
var age = 25; // Declaring a variable with type number
var isRaining = true; //declaration
isRaining = true;
var x;
x = "hii";
x = [10, 20];
x = false;
function Add(x, y) {
    if (x == 0) {
        return "x cannot be zero";
    }
    return x + y;
}
// Add("hello","world") // This will not work
// Add(10,20) // This will also work, as TypeScript allows number addition
// Add(10,"20") // This will not work, as TypeScript expects both parameters to be numbers  
var result = Add(10, 20);
// function PrintBook(author : string , title: string, numOfPages: number){
//     console.log(author,title,numOfPages);
// }
// PrintBook();  // This will not work, as TypeScript expects all parameters to be provided
// PrintBook("John Doe", "TypeScript Basics", 200); // This will work
//we ca make the paramters optional by adding a question mark
function PrintBookOptional(author, title, numOfPages) {
    if (numOfPages === void 0) { numOfPages = 10; }
    console.log(author, title, numOfPages);
}
PrintBookOptional("John Doe"); // This will work, as title and numOfPages are optional
var cars = ["BMW", "Audi", "Mercedes"]; // Declaring an array of strings
var numbers = [10, 20, 30]; // Declaring an
//Resr parameters
function PrintBooks(author) {
    var titles = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        titles[_i - 1] = arguments[_i];
    }
    console.log(author, titles);
}
PrintBooks("ABC", "Book1", "Book2", "Book3"); // This will work, as titles is a rest parameter
var Car = /** @class */ (function () {
    function Car(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    Car.prototype.accelerate = function () {
        return "this car " + this.name + " is accelerating at " + this.speed + " km/h";
    };
    return Car;
}());
var carObj = new Car("BMW", 200);
console.log(carObj.accelerate());
var JamesBondCar = /** @class */ (function (_super) {
    __extends(JamesBondCar, _super);
    function JamesBondCar(name, speed, canFly, canSubmerge) {
        var _this = _super.call(this, name, speed) || this; // Call the constructor of the parent class
        _this.canfly = canFly;
        _this.canSubmerge = canSubmerge;
        return _this;
    }
    JamesBondCar.prototype.accelerate = function () {
        return _super.prototype.accelerate.call(this) + "Can fly? " + this.canfly;
    };
    return JamesBondCar;
}(Car));
var jbc = new JamesBondCar("Aston Martin", 250, true, true);
console.log(jbc.accelerate()); // This will work, as JamesBondCar inherits from Car
var player = { name: "ABCD", sport: "Tennis" };
var Emp = /** @class */ (function () {
    function Emp() {
    }
    return Emp;
}());
