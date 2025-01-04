//Egzersiz 1.Seviye

//1-)
/*Ortak Yönler:
Yüksek düzen fonksiyonlardır(callback fonksiyon alırlar).
Orijinal diziyi değiştirmezler(ancak forEach içinde dışarıdaki değişkenler değişebilir).
Daha okunaklı ve temiz kod yazmayı sağlarlar.*/

/*Farklı Yönler:
forEach, sadece işlem yapar, dönen bir değeri yoktur.
map, yeni bir dizi oluşturur.
filter, koşulu sağlayan elemanları seçer ve yeni bir dizi oluşturur.
reduce, diziyi tek bir değere indirger ve en karmaşık fonksiyondur.
 */

/* Özet Kullanım Senaryoları
Bir işlem yapmak istiyorum ➡️ forEach
Yeni bir dizi oluşturmak istiyorum ➡️ map
Belirli elemanları seçmek istiyorum ➡️ filter
Diziyi bir değere indirgemek istiyorum ➡️ reduce*/

//2-)
// Geri Çağırma Fonksiyonu
const ciftMi = (num) => num % 2 === 0;

// filter ile Kullanım
const sayilar = [1, 2, 3, 4, 5];
const ciftSayilar = sayilar.filter(ciftMi);

console.log(ciftSayilar); // [2, 4]


const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
];

//3-)
countries.forEach(country => console.log(country));

//4-)
names.forEach(nam => console.log(nam));

//5-)
numbers.forEach(num => console.log(num));

//6-)
const upperCountries = countries.map(country => country.toUpperCase());
console.log(upperCountries);

//7-)
const countriesLength = countries.map(country => country.length);
console.log(countriesLength);

//8-)
const square = numbers.map(number => number ** 2);
console.log(square);

//9-)
const upperNames = names.map(nam => nam.toUpperCase());
console.log(upperNames);

//10-)
const price = products.map(product => product.price);
console.log(price);

//11-)
const countriesWithLand = countries.filter(country => country.toLowerCase().includes("land"));
console.log(countriesWithLand);

//12-)
const sixChrCountries = countries.filter(country => country.length === 6);
console.log(sixChrCountries);

//13-)
const sixChrCountries2 = countries.filter(country => country.length >= 6);
console.log(sixChrCountries2);

//14-)
const startWithE = countries.filter(country => country.toLowerCase().startsWith("e"));
console.log(startWithE);

//15-)
const pricesWithValue = products.filter(product => product.price > 0);
console.log(pricesWithValue);

//16-)
function getStringLists(array) {
    // Sadece string öğeleri seçmek için filter kullanılır
    return array.filter(item => typeof item === 'string');
}

// Örnek kullanım:
const karisikDizi = [1, 'elma', true, 'muz', null, 'kiraz', 42];
const stringOgeler = getStringLists(karisikDizi);

console.log(stringOgeler); // Çıktı: ['elma', 'muz', 'kiraz']

//17-)
const sum = numbers.reduce((acc, current) => acc + current, 0);
console.log(sum);

//18-)
const sentence = countries.reduce((acc, country, index) => {
    if (index === 0) {
        // İlk ülkeyi doğrudan ekle
        return country;
    } else if (index === countries.length - 1) {
        // Son ülke için "ve" ekle
        return `${acc}, ve ${country}`;
    } else {
        // Diğer ülkeleri virgülle ekle
        return `${acc}, ${country}`;
    }
}, '') + ' kuzey Avrupa ülkeleridir.';

console.log(sentence);

//19-)
/* some:	En az bir öğe için koşul doğru mu?
true veya false	En az bir öğe için koşul doğruysa true; aksi halde false.
*/

/* every
Tüm öğeler için koşul doğru mu?
true veya false	Her öğe için koşul doğruysa true; aksi halde false.*/

//20-)
const some = names.some(nam => nam.length > 7);
console.log(some);

//21-)
const every = countries.every(country => country.toLowerCase().includes("land"));
console.log(every);

//22-)
// find belirtilen koşula uygun ilk öğeyi döndürür.
//findIndex belirtilen koşula uygun ilk öğenin index'ini döndürür.

//23-)
const find = countries.find(country => country.length === 6);
console.log(find);

//24-)
const findIndex = countries.findIndex(country => country.length === 6);
console.log(findIndex);

//25-)
const index = countries.findIndex(country => country === 'Norway');
console.log(index);

//26-)
const index2 = countries.findIndex(country => country === "Russia");
console.log(index2);

//Egzersiz 2.Seviye

//1-)
const prices = products.map(product => product.price);
const filt = prices.filter(price => price > 0);
const sumPrice = filt.reduce((acc, current) => acc + current, 0);
console.log(sumPrice);

//2-)
const totalPrice = products.reduce((acc, product) => {
    // Fiyatı kontrol et, sadece sayısal olanları topla
    if (typeof product.price === 'number') {
        return acc + product.price;
    }
    return acc;
}, 0);

console.log(totalPrice);

//3-)
function categorizeCountries(pattern) {
    return countries.filter(country => country.includes(pattern));
}

console.log(categorizeCountries('land'));
console.log(categorizeCountries('e'));

//4-)
function countLetterOccurrences() {
    return countries.reduce((acc, country) => {
        const firstLetter = country[0];  // İlk harfi alın
        acc[firstLetter] = (acc[firstLetter] || 0) + 1;  // Harf varsa sayısını artır, yoksa 1 olarak başla
        return acc;
    }, {});
}

console.log(countLetterOccurrences());

//5-)
const countries2 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'Iceland', 'Afghanistan', 'Kazakhstan', 'Netherlands', 'Belgium', 'France', 'Germany', 'Italy', 'Spain', 'Portugal'];

function getFirstTenCountries() {
    return countries2.filter((_, index) => index < 10);  // İlk 10 ülkeyi filtrele
}

console.log(getFirstTenCountries());

//6-)
function getLastTenCountries() {
    return countries2.filter((_, index) => index >= countries2.length - 10);  // Son 10 ülkeyi filtrele
}

console.log(getLastTenCountries());

//7-)
function mostCommonInitialLetter() {
    return countries.reduce((acc, country) => {
        const firstLetter = country[0];  // İlk harfi al
        acc[firstLetter] = (acc[firstLetter] || 0) + 1;  // Harf varsa sayısını artır, yoksa 1 olarak başlat
        return acc;
    }, {});
}

function getMostCommonLetter(obj) {
    let maxCount = 0;
    let commonLetter = '';

    for (const letter in obj) {
        if (obj[letter] > maxCount) {
            maxCount = obj[letter];
            commonLetter = letter;
        }
    }

    return commonLetter;
}

const letterCount = mostCommonInitialLetter();
console.log(letterCount);
const mostCommonLetter = getMostCommonLetter(letterCount);

console.log(mostCommonLetter);  // Çıktı: F

//Egzersiz 3:Seviye

//1-)
const countriesData = [
    { name: 'Finland', capital: 'Helsinki', population: 5540720 },
    { name: 'Sweden', capital: 'Stockholm', population: 10327589 },
    { name: 'Denmark', capital: 'Copenhagen', population: 5831404 },
    { name: 'Norway', capital: 'Oslo', population: 5421241 },
    { name: 'IceLand', capital: 'Reykjavik', population: 371580 },
];
const sortedByName = countriesData.sort((a, b) => a.name.localeCompare(b.name));
console.log(sortedByName);

const sortedByCapital = countriesData.sort((a, b) => a.capital.localeCompare(b.capital));
console.log(sortedByCapital);

const sortedByPopulation = countriesData.sort((a, b) => a.population - b.population);
console.log(sortedByPopulation);

