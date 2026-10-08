/*
Purpose
Create two methods:
1. Resolving a promise
2. Rejecting a promise
Both with a timeout of 500ms
*/

const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = { message: 'resolved promise!' };
            resolve(success);
        }, 500);
    });
};

const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('error: rejected promise!'));
        }, 500);
    });
};

resolvedPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error));

rejectedPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error));