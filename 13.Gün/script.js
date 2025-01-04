//Egzersiz 1.Seviye 

//1-)
const countries = ["Turkey", "Greece", "Bulgaria", "Syria"];
console.table(countries);

//2-)
const countriesObj = {
    name: "Turkey",
    capital: "Ankara",
    languages: "Turkish",
    population: 85.33
};
console.table(countriesObj);

//Egzersiz 2.Seviye

//1-)
console.assert(10 > 2 * 10, "10 is not greater than 2 times 10");

//2-)
console.warn("uyarı");

//3-)
console.error("HAta");

//Egzersiz 3.seviye
// Test verisi
const array = Array.from({ length: 1_000_000 }, (_, i) => i + 1);

// 1. While döngüsü
console.time("While döngüsü");
let i = 0;
while (i < array.length) {
    i++;
}
console.timeEnd("While döngüsü");

// 2. For döngüsü
console.time("For döngüsü");
for (let i = 0; i < array.length; i++) {
    // işlemler
}
console.timeEnd("For döngüsü");

// 3. for...of döngüsü
console.time("for...of döngüsü");
for (const item of array) {
    // işlemler
}
console.timeEnd("for...of döngüsü");

// 4. forEach döngüsü
console.time("forEach döngüsü");
array.forEach(item => {
    // işlemler
});
console.timeEnd("forEach döngüsü");
