function color(value: string) {
    // this is the decorator factory
    return function (target) {
        // this is the decorator
        // do something with 'target' and 'value'...
    };
}
