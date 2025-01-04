//Egzersiz 1.Seviye

//1-)
const set = new Set();

//2-)
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const number of numbers) {
    set.add(number);
}
console.log(set);

//3-)
set.delete(1);

//4-)
set.clear();
console.log(set);

//5-)
const fiveStrings = ["FB", "GS", "TS", "BJK", "BS"];
const setStrings = new Set();
fiveStrings.forEach(string => setStrings.add(string));
console.log(setStrings);

//6-)
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'];

const countryMap = new Map();

countries.forEach(country => {
    countryMap.set(country, country.length); // Ülke adı ve karakter sayısını ekliyoruz
});

console.log(countryMap);
// Çıktı: Map(5) { 'Finland' => 7, 'Sweden' => 6, 'Denmark' => 7, 'Norway' => 6, 'Iceland' => 7 }

//Egzersiz 2.seviye

//1-)
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

const setA = new Set(a);
const setB = new Set(b);
const c = [...setA, ...setB];
const setC = new Set(c);
console.log(setC);

//2-)
const intersection = new Set([...setA].filter(element => setB.has(element)));

console.log(intersection);
// Çıktı: Set { 4, 5 }

//3-)
const difference = new Set([...setA].filter(element => !setB.has(element)));

console.log(difference);

