type Human = {
    lastName: string;
    firstName: string;
}

const constructRobotFromHuman = <T extends Human>(obj: T) => {
    const uniqNum = Math.floor(Math.random()*90000);
    return {
        ...obj,
        identifier: obj.firstName.substring(0, 3).toUpperCase() + uniqNum +  obj.lastName.substring(0, 2).toUpperCase()
    }
}
const robot = constructRobotFromHuman({firstName: 'Juozas', lastName: 'Rastenis', age: 15})

console.log(robot.identifier);
