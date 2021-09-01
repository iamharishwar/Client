// Simplify / Refactorize this function
// const calculateDiscount = (amount, type, years) => {
//     result = 0
//     disc = (years > 5) ? 5 / 100 : years / 100;
    
//     if (type === 1) {
//         result = amount
//     }
//     else if (type === 2) {
//         result = (amount - (0.1 * amount)) - disc * (amount - (0.1 * amount));
//     }
//     else if (type === 3) {
//         result = (0.7 * amount) - disc * (0.7 * amount);
//     }
//     else if (type === 4) {
//         result = (amount - (0.5 * nodeamount)) - disc * (amount - (0.5 * amount));
//     }
//     return result;
// }

// assert(99, calculateDiscount(100, 1, 1));

const calculateDiscount = (amount, type, years) => {
    result = 0
    disc = (years > 5) ? 5 / 100 : years / 100;

    switch (type){
        case 1:
            result = amount
            console.warn("type 1");
            break;
        case 2:
            result = (amount - (0.1 * amount)) - disc * (amount - (0.1 * amount));
            console.warn("type 2");
            break;
        case 3:
            result = (0.7 * amount) - disc * (0.7 * amount);
            console.warn("type 3");
            break;
        case 4:
            result = (amount - (0.5 * nodeamount)) - disc * (amount - (0.5 * amount));
            console.warn("type 4");
            break;
    }
}

const assert = (expected, actual) => {
    if (expected !== actual)
        console.warn(`${actual} is not equal to ${expected}`);
}

assert(99, calculateDiscount(100, 1, 1));