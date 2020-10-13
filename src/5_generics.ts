// basic TS type generic
const currenciesArr: Array<string> = ['DKK', 'SEK', 'NOK', 'EUR', 'USD'];
const populationSizes: Array<number> = [1512341, 94123, 758212, 1244001, 8003178];
const isDemocratic: Array<boolean> = [true, true, true, false, true, true];
const arrBoolStrNum = [false, 'hello', 15];

// will the line below work?
// currenciesArr.push(new String('PLN'))

type EitherArrOrVal<T> = T | Array<T>;

const findMiddleElementInArr = <T>(arr: T[]): EitherArrOrVal<T> => {
    if (arr.length % 2 !== 0) {
        return arr[Math.floor(arr.length/2)]
    } else {
        return [arr[arr.length/2 - 1], arr[arr.length/2]]
    }
}

const middleCurrency = findMiddleElementInArr<string>(currenciesArr);
const middlePopulation = findMiddleElementInArr<number>(populationSizes);
const middleIsDemocratic = findMiddleElementInArr<boolean>(isDemocratic);
const middleArrBoolStrNum = findMiddleElementInArr<(boolean | string | number)>(arrBoolStrNum)

// console.log(middleCurrency);
// console.log(middlePopulation);
// console.log(middleIsDemocratic);
// console.log(middleArrBoolStrNum);

// Next
const makeArray = (...values: number[]) => values

console.log(makeArray(1,2,3,4))
// console.log(makeArray("a", "b"))

export {};
