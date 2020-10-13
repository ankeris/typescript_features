// ---- str
const cityName: string | String = "Brussels";

// ---- number
const luckyNumber: number = 15;

// ---- boolean
const isDone: boolean = false;

// ---- Array
const list1: [] = [];
const list2 = [1];
// list2.push("hi");

// ---- Enum
enum Color {
    Red,
    Green,
    Blue,
}

// ---- Void
const alertAndShut = (): never => {
    alert("hi");
    throw new Error();
};

// ---- Never: Function returning never must not have a reachable end point
function error(message: string): never {
    throw new Error(message);
}

// ---- null | undefined
let whatAmI: null = null;
// whatAmI = undefined;

// ---- Unknown
let notSure: unknown = 4;
notSure = "maybe a string instead";
notSure = false;

// ---- and the main type
const iWillBreakYourCode: any = {};

// ---- "as" keyword
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;

// ---- literal
function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {
    return (Math.floor(Math.random() * 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6;
}
const result = rollDice();

let fontWeight: "light" | "normal" | "bold" | "900";
fontWeight = "normal";
// fontWeight = 'absolute'

export {};
