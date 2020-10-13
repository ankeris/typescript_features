// # Methods

function WithHowManyLetter(value: string) {
    // this is the decorator factory
    console.log(value);
    
    return function (target: any) {
        console.log(target);
        // this is the decorator
        // do something with 'target' and 'value'...
    };
}