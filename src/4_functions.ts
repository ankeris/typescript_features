const addFunc = (baseValue: number, increment: number): number => {
    return baseValue + increment;
};

addFunc(1, 5);

// type AddingFunction = (baseValue: number, increment: number) => number
const addFunc2: (baseValue: number, increment: number) => number = function (x, y) {
    return x + y;
};

function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

buildName("carl", "john", "kingston");
