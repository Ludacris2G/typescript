function addTwo(num: number): number {
    return num + 2;
    // return 'hello';
}

function getUpper(val: string) {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {};

let logInUser = (name: string, email: string, isPaid: boolean = false) => {}

let myValue = addTwo(5);
getUpper('s');

signUpUser('meshida', 'abdul', true);
logInUser('H', 'das');

function getValue(myVal: number): boolean {
    if (myVal > 5) {
        return true;
    }
    // return '200 OK';
    return false;
}

const getHello = (s: string): string => {
    return 's';
}

const heroes = ['thor', 'spiderman', 'ironman'];
// const heroes = [1, 2, 3];

heroes.map((hero): string => {
    return `hero is ${hero}`;
})

function handleError(errorMsg: string): never {
    throw new Error(errorMsg);
}

export {};