//Pratik: 1. seviye

//1-)
let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}

let x = 0;
do {
    console.log(x);
    x++;
} while (x <= 10);

//2-)
let i2 = 10;
while (i2 >= 0) {
    console.log(i2);
    i2--;
}

let x2 = 10;
do {
    console.log(x2);
    x2--;
} while (x2 >= 0);

//3-)
let n = 15;
for (let i = 0; i <= n; i++) {
    console.log(i)
}

//4-)
let symbol = "";

for (let i = 1; i <= 7; i++) {
    symbol += "#";
    console.log(symbol);
}

//5-)
for (let i = 0; i <= 10; i++) {
    console.log(`${i} X ${i} = ${i * i}`);
}

//6-)
console.log("i    i^2   i^3");
for (let i = 0; i <= 10; i++) {
    console.log(`i= ${i} i^2= ${i * i}  i^3=${i * i * i}`);
}

//7-)
for (let i = 0; i <= 100; i += 2) {
    console.log(i);
}

//8-)
for (let i = 1; i <= 100; i += 2) {
    console.log(i);
}

//9-)
for (let i = 2; i <= 100; i++) {
    let isPrime = true; // Başlangıçta asal olduğunu varsayıyoruz
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrime = false; // Eğer bölünüyorsa asal değildir
            break; // Daha fazla kontrol etmeye gerek yok
        }
    }
    if (isPrime) {
        console.log(i);
    }
}
//10-)
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log(`0 ile 100 arasındaki sayıların toplamı:${sum}.`);
//11-)
let tekSayi = 0;
let ciftSayi = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        ciftSayi += i;
    }
    else {
        tekSayi += i;
    }
}
console.log(`Çift sayıların toplamı ${ciftSayi}
Tek sayıların toplamı ${tekSayi}`);

//Pratik: 2. seviye

//1-)
function generateRandomIds(count, min, max) {
    const ids = []; // Rastgele ID numaralarını saklamak için bir dizi oluştur
    for (let i = 0; i < count; i++) {
        // Rastgele ID numarası üret
        const randomId = Math.floor(Math.random() * (max - min + 1)) + min;
        ids.push(randomId); // Üretilen ID'yi diziye ekle
    }
    return ids; // Üretilen tüm ID'leri döndür
}

// Örnek kullanım:
const randomIds = generateRandomIds(10, 1000, 9999); // 10 tane rastgele ID numarası üret
console.log("Rastgele ID numaraları:", randomIds);

//2-)
function generateRandomHexadecimal() {
    // 0-15 aralığında rastgele bir tam sayı üretmek için bir fonksiyon
    const getRandomInt = () => Math.floor(Math.random() * 16);

    let hex = '#'; // Hexadecimal sayı için başlangıç karakteri

    // 6 haneli hexadecimal sayı oluştur
    for (let i = 0; i < 6; i++) {
        const randomValue = getRandomInt(); // Rastgele bir tam sayı al
        hex += randomValue.toString(16); // Sayıyı hexadecimal string'e çevir ve ekle
    }

    return hex; // Üretilen hexadecimal sayıyı döndür
}
// Örnek kullanım
const randomHex = generateRandomHexadecimal();
console.log("Rastgele Hexadecimal Sayı:", randomHex);

//3-)
function generateRandomRGB() {
    // Rastgele bir 0-255 aralığında değer üretmek için bir fonksiyon
    const getRandomInt = () => Math.floor(Math.random() * 256);

    // Rastgele kırmızı, yeşil ve mavi değerleri oluştur
    const r = getRandomInt(); // Kırmızı değeri
    const g = getRandomInt(); // Yeşil değeri
    const b = getRandomInt(); // Mavi değeri

    // RGB formatında renk kodunu oluştur
    return `rgb(${r}, ${g}, ${b})`;
}

// Örnek kullanım
const randomRGB = generateRandomRGB();
console.log("Rastgele RGB Renk Numarası:", randomRGB);

//4-)
const countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];

function getRandomArray(arr, numItems) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random()); // Diziyi karıştır
    return shuffled.slice(0, numItems); // İlk numItems kadar elemanı al
}

// Örnek kullanım: Rastgele 5 ülke seçelim
const randomCountries = getRandomArray(countries, 5);
console.log("Rastgele Seçilen Ülkeler:", randomCountries);

//5-)
const newArr = [];
for (const country of countries) {
    newArr.push(country.length);
}
console.log(`Harf uzunlukları içeren dizi: ${newArr}`);

//6-)
const result = [];

// Ülkeleri döngü ile gez
for (let i = 0; i < countries.length; i++) {
    const country = countries[i];
    const lowerCaseCountry = country.charAt(0).toUpperCase() + country.slice(1).toLowerCase(); // İlk harfi büyük, diğerleri küçük
    const abbreviation = country.slice(0, 3).toUpperCase(); // İlk üç harfi büyük harfle
    const length = country.length; // Ülkenin harf uzunluğu

    // İstenilen formatta diziye ekle
    result.push([lowerCaseCountry, abbreviation, length]);
}

// Sonucu konsola yazdır
console.log(result);

//7-)
const arr = [];
for (const country of countries) {
    if (country.includes("LAND")) {
        arr.push(country);
    }
}
console.log(arr);

//8-)
const countriesWithIa = [];
// Ülkeleri for...of döngüsü ile gez
for (const country of countries) {
    // Her ülkenin ismini kontrol et
    if (country.includes("IA")) {
        // Eğer "ia" içeriyorsa, diziye ekle
        countriesWithIa.push(country);
    }
}

// Sonucu konsola yazdır
console.log("IA kelimesini içeren ülkeler:", countriesWithIa);

//9-)
let longestCountry = "";

// Ülkeleri for...of döngüsü ile gez
for (const country of countries) {
    // Eğer mevcut ülkenin uzunluğu, en uzun ülkeden fazlaysa
    if (country.length > longestCountry.length) {
        longestCountry = country; // En uzun ülkeyi güncelle
    }
}

// Sonucu konsola yazdır
console.log("En fazla karakter içeren ülke:", longestCountry);

//10-)
const fiveCharacterCountry = [];

for (const country of countries) {
    if (country.length == 5) {
        fiveCharacterCountry.push(country);
    }
}
console.log("5 karakterli ülkeler " + fiveCharacterCountry);

//Pratik: 3. seviye
//1-)
const copyArray = [...countries];
console.log(copyArray);

//2-)
const sortedCountries = copyArray.sort();
console.log(sortedCountries);

//3-)
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
];
console.log(webTechs.sort());
console.log(webTechs);

//4-)
const landCountries = []; // "land" ile biten ülkeleri saklayacak dizi

// Ülkeleri kontrol et
for (let i = 0; i < countries.length; i++) {
    if (countries[i].endsWith("LAND")) { // "LAND" ile bitip bitmediğini kontrol et
        landCountries.push(countries[i]); // Eğer bitiyorsa yeni diziye ekle
    }
}

// Sonuçları konsola yazdır
console.log("Land ile biten ülkeler:", landCountries);

//5-)
console.log("En fazla karakter içeren ülke:", longestCountry);

//6-)
const fourCharCountries = [];

// Ülkeleri kontrol et
for (let i = 0; i < countries.length; i++) {
    if (countries[i].length === 4) { // Eğer ülkenin uzunluğu 4 ise
        fourCharCountries.push(countries[i]); // Diziye ekle
    }
}

// 4 karakterli ülkeleri konsola yazdır
console.log("4 karakterli ülkeler:", fourCharCountries);

//7-)
const multiWordCountries = [];

// Ülkeleri kontrol et
for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes(" ")) { // Eğer ülke ismi bir boşluk içeriyorsa
        multiWordCountries.push(countries[i]); // Diziye ekle
    }
}

// İki veya daha fazla kelime içeren ülkeleri konsola yazdır
console.log("İki veya daha fazla kelime içeren ülkeler:", multiWordCountries);

//8-)
const reversedCountries = [];

for (let i = countries.length - 1; i >= 0; i--) {
    reversedCountries.push(countries[i].toUpperCase());
}

console.log("Ters çevrilmiş ve büyük harfli ülkeler (Döngü ile):", reversedCountries);
