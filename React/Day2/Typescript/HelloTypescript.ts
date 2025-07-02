// var msg = "hello typescript";
// msg = 100; // This will cause a type error in TypeScript, as msg is expected to be a string
var msg: string = "hello typescript"; // Explicitly declaring the type, this is known as type annotation
console.log(msg)
var age: number = 25; // Declaring a variable with type number
var isRaining : boolean=true; //declaration
isRaining = true

var x;
x= "hii"
x= [10,20]
x= false

function Add(x:number,y:number):number|string{
    if(x==0){
        return "x cannot be zero";
    }
    return x+y;
}

// Add("hello","world") // This will not work
// Add(10,20) // This will also work, as TypeScript allows number addition
// Add(10,"20") // This will not work, as TypeScript expects both parameters to be numbers  
var result : number |string = Add(10,20)

// function PrintBook(author : string , title: string, numOfPages: number){
//     console.log(author,title,numOfPages);
// }
// PrintBook();  // This will not work, as TypeScript expects all parameters to be provided
// PrintBook("John Doe", "TypeScript Basics", 200); // This will work

//we ca make the paramters optional by adding a question mark
function PrintBookOptional(author : string , title?: string, numOfPages: number=10){
    console.log(author, title, numOfPages);
}
PrintBookOptional("John Doe"); // This will work, as title and numOfPages are optional

var cars : string[] = ["BMW", "Audi", "Mercedes"]; // Declaring an array of strings
var numbers : number[] = [10, 20, 30]; // Declaring an

//Resr parameters
function PrintBooks(author:string, ...titles:string[]){
    console.log(author,titles);
}

PrintBooks("ABC", "Book1", "Book2","Book3"); // This will work, as titles is a rest parameter

class Car{
    private id: number;
    name: string;
    speed : number;
    
    constructor(name, speed){
        this.name= name;
        this.speed = speed;
    }

    accelerate():string
{
    return "this car " + this.name + " is accelerating at " + this.speed + " km/h";
}
                                                                                                             
}
var carObj = new Car("BMW", 200);
console.log(carObj.accelerate());  


class JamesBondCar extends Car{
    canfly:boolean;
    canSubmerge:boolean;

    constructor(
        name:string,
        speed:number,
        canFly:boolean,
        canSubmerge:boolean
    ){
        super(name, speed); // Call the constructor of the parent class
        this.canfly = canFly;
        this  .canSubmerge = canSubmerge;
    }
    accelerate(): string {
        return super.accelerate()+"Can fly? "+this.canfly
    }
}

var jbc = new JamesBondCar("Aston Martin", 250,true,true);
console.log(jbc.accelerate()); // This will work, as JamesBondCar inherits from Car

// interface IPlayer{
//     name:string;
//     sport:string;
// }

type Player = {
    name: string;
    sport:string;
}

var player : Player = {name :"ABCD", sport: "Tennis"};

// '?' make thes attribute optional
interface IEmployee{
    name: string,
    salary: number;
    getSalary ?: ()=> number;
}

class Emp implements IEmployee {
    name: string;
    salary: number;
    getSalary(): number{
        return this.salary;
    }
}


//Generic
var cars: string[] = ["BMW", "merc","aston martin"];
var cars : Array<string> = new Array<string>();

var emps: Array<Emp> = new Array<Emp>()
// emps[0]= 100

function Swap<T>(x: T,y:T){
    var temp;
    temp = x
    x =y
    y = temp;
}

Swap<number>(20,30)
Swap<string>("Hello","TS");

class Point<T>{
    x:T;
    y: T;
}

var pointToBeNoted = new Point<number>();
pointToBeNoted.y;