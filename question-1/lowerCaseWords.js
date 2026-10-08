/* 
Purpose:
Script with a function that takes a mixed array as input and:
1. returns a promise that is resolved or rejected,
2. filters the non-strings and lower cases the remaining words
*/

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(mixedArray)) {
            reject('Input needs to be an array');
            return;
        }

        const filteredArray = mixedArray.filter(item => typeof item === 'string');

        const lowerCasedArray = filteredArray.map(word => word.toLowerCase());

        resolve(lowerCasedArray);
    });
}

lowerCaseWords(mixedArray)
    .then(result => {
        console.log('Lowercased words:', result);
    })
    .catch(error => {
        console.error('Error:', error);
    });