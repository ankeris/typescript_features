// # Type Alias

// # Interfaces - powerful way of defining contracts within your code as well as contracts with code outside of your project.
interface LabeledValue {
    label: string;
}

interface PrintLabel {
    labeledValue: string;
    labeledValueLength: number;
}

function printLabel(labeledObj: LabeledValue): PrintLabel {
    console.log(labeledObj.label);
    return {
        labeledValue: labeledObj.label,
        labeledValueLength: labeledObj.label.length,
    };
}

let myObj = { size: 10, label: "Size 10 Object" };

printLabel(myObj);
printLabel({ label: "I am a label" });

// # Type alias vs Interface
// 1. Type aliases create a new name for a type. Type aliases are sometimes similar to interfaces, but can name primitives, unions, tuples, and any other types that you’d otherwise have to write by hand.
// 2. Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs a interface which is always extendable.
// 3. Because an interface more closely maps how JavaScript object work by being open to extension, we recommend using an interface over a type alias when possible.
// 4. On the other hand, if you can’t express some shape with an interface and you need to use a union or tuple type, type aliases are usually the way to go.
// in conclusion type aliases for small internal roles & documentations and Interfaces for data contracts and core parts of an app

type Second = number;
// interface First = number;

let timeInSecond: number = 10;
let time: Second = 10;

interface Animal {
    name: string;
}

type Tiger = {
    name: string;
};

interface Bear extends Animal {
    honey: boolean;
}

interface SnowTiger extends Tiger {}

// type BloodTiger extends Tiger = {}

// # Classes
class Greeter {
    public readonly greeting: string;
    private readonly greeting2: string;

    constructor(message: string) {
        this.greeting = message;
        this.greeting2 = message;
    }

    greet() {
        return "Hello, " + this.greeting;
    }
}

const welcomingPerson: Greeter = new Greeter("Hey look at me");
