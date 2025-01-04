//Egzersiz: Seviye 1
import countries from "./country.js";
import webTechs from "./web_techs.js";

//1-)
const arr = Array(3).fill("x");
arr[0] = 1905;
console.log(arr);
//2-)
const games = ["GTA5", "Mafia 2", "Warcraft", "Sims 3", "Lol", "Cs",];
//3-)
console.log(games.length);
//4-)
let first = games[0], last = games[games.length - 1], middle = games[Math.floor(games.length / 2)];
console.log(first, last, middle);
//5-)
const mixedDataTypes = ["string", 1905, true, [1, 2, 3], { isim: "Ahmet" }, undefined, null];
console.log(mixedDataTypes, mixedDataTypes.length);
//6-)
const ItCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
//7-)
console.log(ItCompanies);
//8-)
console.log(ItCompanies.length);
//9-)
console.log(ItCompanies[0], ItCompanies[ItCompanies.length - 1], ItCompanies[Math.floor(ItCompanies.length / 2)]);
//10-)
for (let i = 0; i < ItCompanies.length; i++) {
    console.log(ItCompanies[i]);
}
//11-)
for (let i = 0; i < ItCompanies.length; i++) {
    console.log(ItCompanies[i].toUpperCase());
}
//12-)
let lastCompany = ItCompanies.pop();
console.log(ItCompanies.join(",") + " and " + lastCompany + " are big IT companies");
//13-)
let facebook = ItCompanies.includes("Facebook");
facebook ? console.log("evet dizide facebook var") : console.log("Dizide facebook yok");
//14-) 
let filteredCompanies = [];

for (let i = 0; i < ItCompanies.length; i++) {
    let company = ItCompanies[i];
    // Count occurrences of 'o'
    let count = 0;

    for (let char of company) {
        if (char.toLowerCase() === 'o') {
            count++;
        }
    }

    // If 'o' appears one or fewer times, add it to the filtered list
    if (count >= 2) {
        filteredCompanies.push(company);
    }
}

console.log(filteredCompanies);
//15-)
console.log(ItCompanies.sort());
//16-)
console.log(ItCompanies.reverse());
//17-)
console.log(ItCompanies.slice(0, 3));
//18-)
console.log(ItCompanies.slice(-3));
//19-)
let middleIndex = Math.floor(ItCompanies.length / 2);
let middleCompanies;

// Check if the number of companies is odd or even
if (ItCompanies.length % 2 === 1) {
    // Odd number of companies: slice out the middle company
    middleCompanies = ItCompanies.slice(middleIndex, middleIndex + 1);
} else {
    // Even number of companies: slice out the two middle companies
    middleCompanies = ItCompanies.slice(middleIndex - 1, middleIndex + 1);
}

console.log(middleCompanies);
//20-)
ItCompanies.splice(0, 1);
console.log(ItCompanies);

//21-)
let middleIndex2 = Math.floor(ItCompanies.length / 2);
let numberOfElementsToRemove;

// Check if the number of companies is odd or even
if (ItCompanies.length % 2 === 1) {
    // Odd number of companies: remove the middle company
    numberOfElementsToRemove = 1;
    ItCompanies.splice(middleIndex2, numberOfElementsToRemove);
} else {
    // Even number of companies: remove the two middle companies
    numberOfElementsToRemove = 2;
    ItCompanies.splice(middleIndex2 - 1, numberOfElementsToRemove);
}

console.log(ItCompanies);

//22-)
ItCompanies.splice(ItCompanies.length - 1, 1); // Remove the last company
console.log(ItCompanies);
//23-)
ItCompanies.splice(0);
console.log(ItCompanies);

//Egzersiz: Seviye 2

//1-)
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let words = text.replace(/[.,]/g, '').split(' ');
console.log(words);
console.log(words.length);

//2-)
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
let index = shoppingCart.includes("Meat");
index ? console.log("zaten Meat eklenmiş") : shoppingCart.unshift("Meat");
console.log(shoppingCart);

let index2 = shoppingCart.includes("Sugar");
index2 ? console.log("zaten şeker eklenmiş") : shoppingCart.push("Sugar");
console.log(shoppingCart);

let alerji = true;
let honey = shoppingCart.indexOf("Honey");
alerji ? shoppingCart.splice(honey, 1) : console.log("Alerjiniz yok");
console.log(shoppingCart);

let tea = shoppingCart.indexOf("Tea");
shoppingCart.splice(tea, 1, "Green Tea");
console.log(shoppingCart);

let ethiopia = countries.includes("Ethiopia");
ethiopia ? console.log("Ethiopia") : countries.push("Ethiopia");

let sass = webTechs.includes("Sass");
sass ? console.log("Sass is a CSS preprocess") : webTechs.push("Sass");
console.log(webTechs);

//3-)
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

//Egzersiz: Seviye 3
const ages = [19, 19, 20, 22, 24, 24, 24, 25, 25, 26];
ages.sort();
console.log(ages);

//1-)
console.log("En küçük", ages[0], "En büyük", ages[ages.length - 1]);

//2-)
let orta = Math.floor(ages.length / 2);
let toplam = ages[orta];
if (ages.length % 2 == 0) {
    toplam += ages[orta - 1];
    console.log(`Medyan :${toplam / 2}`);
}
else {
    console.log(`Medyan: ${toplam}`);
}

//3-)
console.log(ages);
// Toplam yaşı hesapla
let totalAge = 0;

for (let i = 0; i < ages.length; i++) {
    totalAge += ages[i];
}

// Ortalamayı hesapla
const averageAge = totalAge / ages.length;

console.log("Toplam Yaş:", totalAge); //  24
console.log("Ortalama Yaş:", averageAge); //  24

//4-)
console.log(`range:${Math.max(...ages) - Math.min(...ages)}`);

//5-)
let minumumAge = ages[0];
let MaximumAge = ages[ages.length - 1];
console.log(minumumAge, MaximumAge);
console.log(`min- ortalama ${minumumAge - averageAge}  maks-ortalama ${MaximumAge - averageAge}`);

//6-)

//1-)
console.log(countries.slice(0, 10));

//2-)
let ulkeOrta = Math.floor(countries.length / 2);
if (countries.length % 2 == 0) {
    let ortalar = countries.slice(ulkeOrta - 1, ulkeOrta + 1);
    console.log(ortalar);
}

else {
    console.log("ortanca ülke" + countries[ulkeOrta]);
}

//3-)
// Ortayı hesapla
const midpoint = Math.ceil(countries.length / 2);

// Ülkeler dizisini böl
const firstHalf = countries.slice(0, midpoint);
const secondHalf = countries.slice(midpoint);

console.log("İlk Yarı:", firstHalf);
console.log("İkinci Yarı:", secondHalf);


