// Derive Types from Constants
const MOVES = {
    ROCK: { beats: 'SCRISSOR'},
    PAPER: { beats: 'ROCK'},
    SCRISSOR: { beats: 'PAPER'}
};

type Move = keyof typeof MOVES;

const move: Move = 'PAPER'

console.log(MOVES[move].beats)

// Unknown user input

const validate = (s: unknown): never => {
    switch (typeof s) {
        case 'number':
            // do something
        case 'string':
            // do something
        default:
            throw new Error()
    }
}

// Mapped types
// # readonly
// type Readonly<T> = { readonly [P in keyof T]: T[P] }
// could also use Enum here

type Ledger = {
    name: string;
    job: string;
}

const obj: Readonly<Ledger> = {
    name: 'Sir Ledger',
    job: 'Grave digger'
}

// obj.job = 'Salesman'

// Derive a type from other type

interface Colors {
    red: string;
    green: number;
    blue: string;
}

type RedPicker = Pick<Colors, 'red'>;

const pickRedColor: RedPicker = {red: 'a'};


// ### RECORD
// defines many same types
type Day = 'Monday' | 'Tuesday' | 'Wednesday';

type Everyday = Record<Day, 'I am a day'>

// More advanced usage
type TimeSpans = {
    minutes: number;
    hours: number
}

type EverydayWithTimeSpans = Record<Day, TimeSpans>

// const myWeek: EverydayWithTimeSpans = {
//     Tuesday: {
//         minutes: 15,
//         hours: 15
//     }
// }

// ### OMIT
// Takes out a key and val from the type

type Duck = {
    feathers: number;
    colors: string[];
}

type DuckWithoutFeathers = Omit<Duck, 'feathers'>
