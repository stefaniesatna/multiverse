// let teacher = {
//     name: "Walter",
//     subject: "Chemistry",
// };
// console.log(name); // Syntax error: name is not defined ❌

let teacher = {
    name: "Walter",
    subject: "Chemistry",
};
const { name } = teacher;
console.log(name); // Walter ✅

//==========================================

const animals = ["Red Panda", "Otter", "Raccoon"];
const [pet] = animals;
console.log(pet); // Red Panda ✅

//==========================================

function shouldDelete({ admin, verified }) {
    return !admin && !verified;
}

let user = {
    id: 8732429,
    admin: true,
    verified: false,
};

console.log(shouldDelete(user)); // false ✅

//===========================================

// const [a, b, c] = [3, 1, 4, 1, 5];
// console.log(c); // 4 ✅

//===========================================

let a = 6;
let b = 22;

console.log({ a, b }); // {a: a, b: b} ❌
