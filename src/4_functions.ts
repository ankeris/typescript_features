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

// Functional programming

interface RawPerson {
    identifier: number;
    first_name: string;
    last_name: string;
}

interface Person {
    id: string;
    fullName: string;
}
type PersonTransformer = (raw: RawPerson) => Person

const transformPerson: PersonTransformer = (raw) => {
    return {
        id: `${raw.identifier}`,
        fullName: `${raw.first_name} ${raw.last_name}`
    }
}