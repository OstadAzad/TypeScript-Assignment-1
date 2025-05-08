    //Define the function
    function formatString(input: String, toUpper?: boolean) : string {
    if(toUpper === false) {  //use logic
        return input.toLowerCase(); // convert to lowercase
    }
    else{
        return input.toUpperCase(); // convert to uppercase by default
    }
}

//test the result
console.log(formatString("Hello")); //Output: "HELLO"
console.log(formatString("Hello", true)); //Output: "HELLO"
console.log(formatString("Hello", false)); //Output: "hello"


    // Define the function 
function filterByRating(items: {title: string; rating: number}[]) : {title: string; rating: number}[]{
    //Use filter() to return only items with rating >= 4
    return items.filter(item => item.rating >=4);
}

    // Example usage
const books = [
    {title: "Book A", rating: 4.5},
    {title: "Book B", rating: 3.2},
    {title: "Book C", rating: 5.0}
];
// test the function
console.log(filterByRating(books)); //output: [ { title: 'Book A', rating: 4.5 }, { title: 'Book C', rating: 5 } ]


//define the function
function concateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat(); // T=Generic Function, (...arrays)=rest parameter
}

//test the result
console.log(concateArrays(["a", "b"], ["c"])); //Output: [ 'a', 'b', 'c' ]
console.log(concateArrays([1, 2], [3, 4], [5])); //Output: [ 1, 2, 3, 4, 5 ]


//Main or Base Class
class Vehicle {
    private make : string;
    private year : number;

    // Constructor to initialize the properties
constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
}

// Public method to get vehicle info
public getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
}
}

//sub class

class Car extends Vehicle {
    private model : string; // Additional private property for Car


    // Constructor that calls parent constructor using super()
    constructor(make: string, year: number, model: string) {
        super(make, year); // Call the constructor of Vehicle
        this.model = model;
    }
    
    // Additional method specific to Car
    public getModel(): string{
        return `Model: ${this.model}`;
    }
}

// Create object 
const myCar = new Car("Toyota", 2020, "Corolla");

//test the result
console.log(myCar.getInfo()); // Output: "Make: Toyota, Year: 2020"
console.log(myCar.getModel()); // Output: "Model: Corolla"

function processValue(value: string | number): number {
    if(typeof value === "string"){
        return value.length; // length of the string
    } else{
        return value * 2; // double the number
    }
}

//test the result
console.log(processValue("hello")); //Output: 5
console.log(processValue(10)); //output: 20


//define interface
interface Product {
    name : string;
    price : number;
}

//define function
function getMostExpensiveProduct(products: Product[]) : Product | null {
    if(products.length === 0)
        return null;

    let highestProduct = products[0];

    for (let i = 1; i<products.length; i++) {
        if(products[i].price>highestProduct.price){
            highestProduct = products[i];
        }
    }  
    return highestProduct;
}

//Array of object
const products = [{name : "Pen", price : 10},
                  {name : "Notebook", price : 25},
                  {name : "Bag", price : 50}
                 ];

const expensive = getMostExpensiveProduct(products);

//test the result
console.log(expensive); //Output: {name: "Bag", price: 50}


// Define enum Day for the days of the week
enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

// Function that returns "Weekday" or "Weekend"
function getDayType(day : Day) : string {
    if(day === Day.Saturday || day === Day.Sunday){
        return "Weekend";
    } else{
        return "Weekday";
    }
}

//test the result
console.log(getDayType(Day.Monday)); //Output: "Weekday"
console.log(getDayType(Day.Sunday)); //Output: "Weekend"


async function squareAsync(n: number) : Promise <number> {
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            if(n<0){
                reject(new Error("Negative number not allowed"));
            }else{
                resolve (n * n);
            }
        }, 1000); // 1 second = 1000 milliseconds // 1 second delay
    });
}

squareAsync(4).then(console.log) // Output after 1s: 16
              .catch(console.error);

squareAsync(-3)
    .then(console.log)
    .catch(console.error); // Output: Error: Negative number not allowed
