const User = {
    name: "Grzegorz",
    email: 'brzeczeszczykiewicz@bydgoszcz.com',
    isActive: true
};

function createUser({name: string, isPaid: boolean}) {
    return {}
}

let newUser = {name: 'john', isPaid: false, email: 'sth'};

createUser(newUser);
// createUser({name: 'john', isPaid: false, email: 'sth'})



function createCourse():{name: string, price: number} {
    return {
        name: '',
        price: 2
    };
}

export {}