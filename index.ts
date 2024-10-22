// Generating a new code

// const createdCodes: string[] = ["ABsadf12345gf", "ABsadf12345gf", "ABsadf12345gf"];

// let code: string;

// const codeAlphabats: string = "A129bcDEFGHi5678yKlmn34OpRst0yVwXyZ";

// do {
//     code = "";

//     for (let i = 0; i < 12; i++) {
//         const randomNum = Math.floor(Math.random() * codeAlphabats.length);
//         code += codeAlphabats[randomNum];
//     };
// } while (createdCodes.includes(code));

// createdCodes.push(code);

// console.log(code);

// Generating a new hash code 

class Car {
    model: string;
    owner: string;
    color: string;

    constructor(model: string, owner: string, color: string) {
        this.model = model,
        this.owner = owner,
        this.color = color
    }
}

const car1: Car = new Car("Toyota camry", "gmuhiuddin", "black");

console.log(car1);
