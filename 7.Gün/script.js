//Egzersiz 1.Seviye

//1-)
function fullName2() {
    let name = "Alihan";
    let surName = "Gümüşoluk";
    let fullName = name + " " + surName;
    console.log(fullName);
}
fullName2();

//2-)
function fullName(name, lastName) {
    let fulName = name + " " + lastName;
    return fulName;
}
console.log(fullName("Ahmet", "Gümüşoluk"));

//3-)
const addNumbers = (num1, num2) => num1 + num2;
console.log(addNumbers(10, 8));

//4-)
const areaOfRectangle = (length, width) => length * width;
console.log(areaOfRectangle(80, 4));

//5-)
function perimeterOfRectangle(length, width) {
    return 2 * (length + width);
}
console.log(perimeterOfRectangle(80, 4));

//6-)
const volumeOfRectPrism = (length, width, height) => length * width * height;
console.log(volumeOfRectPrism(5, 4, 6));

//7-)
function areaOfCircle(r) {
    return (Math.PI * r * r);
}
console.log(areaOfCircle(5));

//8-)
const circumOfCircle = r => Math.PI * 2 * r;
console.log(circumOfCircle(5));

//9-)
const density = (mass, volume) => mass / volume;
console.log(density(100, 20));

//10-)
const speed = (distance, time) => distance / time;
console.log(speed(1000, 100));

//11-)
const weight = (mass, gravity) => mass * gravity;
console.log(weight(95, 9.81));

//12-)
const convertCelsiusToFahrenheit = c => (c * 9 / 5) + 32;
console.log(convertCelsiusToFahrenheit(25));

//13-)
function BMI(weight, height) {
    let bmi = (weight / (height * height));
    if (bmi < 18.5) {
        console.log(`düşük Kilolusunuz :${bmi}`);
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        console.log(`Normal Kilolusunuz :${bmi}`);
    }

    else if (bmi >= 25 && bmi <= 29.9) {
        console.log(`fazla Kilolusunuz :${bmi}`);
    }
    else {
        console.log(`obezsiniz :${bmi}`);
    }
}
BMI(52, 1.67);

//14-)
function checkSeason(month) {
    if (month == "Aralık" || month == "Ocak" || month == "Şubat") {
        return "Kış";
    }

    else if (month == "Haziran " || month == "Temmuz" || month == "Ağustos") {
        return "Yaz";
    }

    else if (month == "Mart " || month == "Nisan" || month == "Mayıs") {
        return "İlkbahar";
    }

    else if (month == "Eylül" || month == "Ekim" || month == "Kasım") {
        return "Sonbahar";
    }
    else {
        alert("Yanlış ay girdiniz");
    }
}
console.log(checkSeason("Eylül"));

//15-)
function findMax(num1, num2, num3) {
    let max = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (max < arguments[i]) {
            max = arguments[i]
        }
    }
    return max;
}
console.log(findMax(5, 16, 14));

//Egzersiz:2.Seviye

//1-)
function solveLinEquation(a, b, c, known, solveFor = 'y') {
    if (solveFor === 'y') {
        if (b === 0) return "y için çözüm yapılamaz, çünkü b sıfır olamaz.";
        return (-a * known - c) / b; // Bilinen x ile y'yi çözer
    } else if (solveFor === 'x') {
        if (a === 0) return "x için çözüm yapılamaz, çünkü a sıfır olamaz.";
        return (-b * known - c) / a; // Bilinen y ile x'i çözer
    } else {
        return "Geçersiz solveFor parametresi. 'x' ya da 'y' kullanılmalı.";
    }
}
console.log(solveLinEquation(2, 3, 1, 2, "x"));

//2-)
function solveQuadEquation(a, b, c) {
    if (a === 0) {
        return "Bu bir ikinci dereceden denklem değildir (a = 0).";
    }

    const discriminant = b ** 2 - 4 * a * c; // Diskriminant hesaplama
    let root1, root2;

    if (discriminant > 0) {
        // İki farklı reel kök
        root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return `Denklemin iki farklı kökü vardır: x1 = ${root1}, x2 = ${root2}`;
    } else if (discriminant === 0) {
        // Çift kök (bir reel kök)
        root1 = -b / (2 * a);
        return `Denklemin çift kökü vardır: x = ${root1}`;
    } else {
        // Karmaşık kökler
        const realPart = -b / (2 * a);
        const imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
        return `Denklemin karmaşık kökleri vardır: x1 = ${realPart} + ${imaginaryPart}i, x2 = ${realPart} - ${imaginaryPart}i`;
    }
}
console.log(solveQuadEquation(1, 4, 4));
console.log(solveQuadEquation(1, 7, 12));
console.log(solveQuadEquation(1, 2, 5));

//3-)
function printArray(arr) {
    for (const number of arr) {
        console.log(number);
    }
}
const numbers = [1, 2, 3, 4, 5];
printArray(numbers);

//4-)
function showDateTime() {
    const now = new Date(); // Şu anki tarih ve saat
    const day = String(now.getDate()).padStart(2, '0'); // Gün (2 basamaklı)
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Ay (0 indeksli, bu yüzden +1 eklenir)
    const year = now.getFullYear(); // Yıl (4 basamaklı)
    const hours = String(now.getHours()).padStart(2, '0'); // Saat (2 basamaklı)
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Dakika (2 basamaklı)

    return `${day}/${month}/${year} ${hours}:${minutes}`; // İstenilen formatta string döndür
}
console.log(showDateTime());

//5-)
function swapValues(x, y) {
    let temp = x;
    x = y;
    y = temp;
    return `x=>${x} y=>${y}`
}
console.log(swapValues(5, 10));

//6-)
function reverseArray(arr) {
    const newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}
const countries = ["Turkey", "Syria", "Greece", "Bulgaria", "Georgia"];
console.log(reverseArray(countries));

//7-)
function capitalizeArray(arr) {
    const capitalizeArray = [];
    for (const element of arr) {
        capitalizeArray.push(element.toUpperCase());
    }
    return capitalizeArray;
}
const city = ["istanbul", "kahramanmaraş", "gaziantep", "ankara"];
console.log(capitalizeArray(city));

//8-)
function addItem(arr, item) {
    arr.push(item);  // öğe ekleme
    return arr;      // güncellenmiş dizi döner
}

const fruits = ['apple', 'banana'];
console.log(addItem(fruits, 'cherry'));  // ['apple', 'banana', 'cherry']

//9-)
function removeItem(arr, index) {
    arr.splice(index, 1);
    return arr;
}
const digit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(removeItem(digit, 9));

//10-)
function sumOfNumbers(number) {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        sum += i
    }
    return sum;
}
console.log(sumOfNumbers(10));

//11-)
function sumOfOdds(number) {
    let sum = 0;
    for (let i = 1; i <= number; i += 2) {
        sum += i
    }
    return sum;
}
console.log(sumOfOdds(10));

//12-)
function sumOfEven(number) {
    let sum = 0;
    for (let i = 0; i <= number; i += 2) {
        sum += i
    }
    return sum;
}
console.log(sumOfEven(10));

//13-)
function evensAndOdds(number) {
    let odd = 0;
    let even = 0;
    for (let i = 0; i <= number; i++) {
        if (i % 2 == 0) {
            even += 1;
        }
        else {
            odd += 1;
        }
    }

    return `The number of odds are ${odd} \nThe number of evens are ${even}`
}
console.log(evensAndOdds(100));

//14-)
function sum() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));

//15-)
function randomUserIp() {
    const getInt = () => Math.floor(Math.random() * 256);
    const one = getInt();
    const two = getInt();
    const three = getInt();
    const four = getInt();
    return `IPv4:${one}.${two}.${three}.${four}`
}
console.log(randomUserIp());

//16-)
function randomMacAddress() {
    const getHexPair = () => Math.floor(Math.random() * 256).toString(16).padStart(2, '0'); // Hexadecimal çift oluştur
    return `${getHexPair()}:${getHexPair()}:${getHexPair()}:${getHexPair()}:${getHexPair()}:${getHexPair()}`;  // MAC adres formatında döner
}
console.log(randomMacAddress());

//17-)
function randomHexaNumberGenerator() {
    let hex = "#";
    for (let i = 0; i < 6; i++) {
        const getInt = Math.floor(Math.random() * 16);
        const hexa = getInt.toString(16);
        hex += hexa;
    }
    return hex
}
console.log(randomHexaNumberGenerator());

//18-)
function userIdGenerator() {
    let id = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 7;

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        id += chars[randomIndex];
    }

    return id;
}
console.log(userIdGenerator());

//Egzersiz:3.Seviye

//1-)
function userIdGeneratedByUser() {
    // prompt ile kullanıcıdan giriş alıyoruz
    const numberOfCharacters = parseInt(prompt("Enter the number of characters for the user ID:"));
    const numberOfIds = parseInt(prompt("Enter the number of IDs to generate:"));

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; // Karakter kümesi
    let ids = []; // Kimlikleri depolamak için bir dizi oluşturuyoruz

    // Kimlikleri üret
    for (let i = 0; i < numberOfIds; i++) {
        let id = '';
        for (let j = 0; j < numberOfCharacters; j++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            id += chars[randomIndex];
        }
        ids.push(id); // Her oluşturulan kimliği diziye ekle
    }

    return ids; // Üretilen kimlikleri döndür
}

// Kullanıcıdan girdiler alıp kimlikleri oluşturur ve gösterir
console.log(userIdGeneratedByUser());

//2-)
function rgbColorGenerator() {
    const getInt = () => Math.floor(Math.random() * 256);
    const r = getInt();
    const g = getInt();
    const b = getInt();
    return `rgb(${r},${g},${b})`
}
console.log(rgbColorGenerator());

//3-)
function arrayOfHexaColors(numberOfColors) {
    const hexColors = []; // Renklerin saklanacağı dizi
    const generateHex = () => {
        let hex = '#';
        for (let i = 0; i < 6; i++) {
            const randomInt = Math.floor(Math.random() * 16); // 0-15 arasında rastgele sayı
            hex += randomInt.toString(16); // Sayıyı 16'lık sisteme çevirip ekle
        }
        return hex;
    };

    for (let i = 0; i < numberOfColors; i++) {
        hexColors.push(generateHex()); // Her döngüde bir renk oluştur ve diziye ekle
    }

    return hexColors; // Hexadecimal renk dizisini döndür
}

// Örnek kullanım
console.log(arrayOfHexaColors(5)); // Örnek: ['#1a2b3c', '#abcdef', '#123456', '#ff0044', '#00ffcc']

//4-)
function arrayOfRgbColors(number) {
    const rgbColors = [];
    const generateRGB = () => {
        const getInt = () => Math.floor(Math.random() * 256);
        const r = getInt();
        const g = getInt();
        const b = getInt();
        return `rgb(${r},${g},${b})`

    }
    for (let i = 0; i < number; i++) {
        rgbColors.push(generateRGB());
    }
    return rgbColors;
}
console.log(arrayOfRgbColors(3));

//5-)
function convertHexaToRgb(hexa) {
    // Hex kodunun ilk karakteri '#' ise kaldır
    if (hexa.startsWith('#')) {
        hexa = hexa.slice(1);
    }

    // Hex kodunun uzunluğunu kontrol et
    if (hexa.length !== 6) {
        throw new Error('Invalid hexadecimal color');
    }

    // Renk bileşenlerini ayıkla
    const r = parseInt(hexa.slice(0, 2), 16); // İlk 2 karakter kırmızı
    const g = parseInt(hexa.slice(2, 4), 16); // 3. ve 4. karakter yeşil
    const b = parseInt(hexa.slice(4, 6), 16); // 5. ve 6. karakter mavi

    return `rgb(${r}, ${g}, ${b})`;
}

// Örnek kullanım
console.log(convertHexaToRgb('#FF5733')); // 'rgb(255, 87, 51)'
console.log(convertHexaToRgb('#4287f5')); // 'rgb(66, 135, 245)'
console.log(convertHexaToRgb('#ffffff')); // 'rgb(255, 255, 255)'

//6-)
function convertRgbToHexa(r, g, b) {
    // 0-255 arasında olup olmadığını kontrol et
    if (
        r < 0 || r > 255 ||
        g < 0 || g > 255 ||
        b < 0 || b > 255
    ) {
        throw new Error('RGB values must be between 0 and 255');
    }

    // Her renk bileşenini iki basamaklı hexadecimal stringe çevir
    const toHex = (value) => value.toString(16).padStart(2, '0');

    const hexR = toHex(r); // Kırmızı
    const hexG = toHex(g); // Yeşil
    const hexB = toHex(b); // Mavi

    return `#${hexR}${hexG}${hexB}`;
}

// Örnek kullanım
console.log(convertRgbToHexa(255, 87, 51)); // '#ff5733'
console.log(convertRgbToHexa(66, 135, 245)); // '#4287f5'
console.log(convertRgbToHexa(255, 255, 255)); // '#ffffff'
console.log(convertRgbToHexa(0, 0, 0)); // '#000000'

//7-)
function generateColors(type, count) {
    const colors = [];

    // Hexadecimal renk oluşturma fonksiyonu
    const generateHexaColor = () => {
        let hex = "#";
        for (let i = 0; i < 6; i++) {
            const randomHex = Math.floor(Math.random() * 16).toString(16);
            hex += randomHex;
        }
        return hex;
    };

    // RGB renk oluşturma fonksiyonu
    const generateRgbColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    };

    // Renk türüne göre renkler oluştur
    for (let i = 0; i < count; i++) {
        if (type === 'hexa') {
            colors.push(generateHexaColor());
        } else if (type === 'rgb') {
            colors.push(generateRgbColor());
        } else {
            throw new Error("Invalid type! Use 'hexa' or 'rgb'.");
        }
    }

    return colors;
}

// Örnek kullanım
console.log(generateColors('hexa', 5)); // ['#a3c9ff', '#e23f8a', '#00f3cc', ...]
console.log(generateColors('rgb', 5));  // ['rgb(123, 45, 67)', 'rgb(0, 255, 0)', ...]

//8-)
function shuffleArray(array) {
    const shuffled = [...array]; // Orijinal diziyi korumak için kopyasını alıyoruz
    for (let i = shuffled.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1)); // Rastgele bir index seç
        // Elemanları yer değiştir (swap işlemi)
        [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
    }
    return shuffled; // Karıştırılmış diziyi döndür
}

// Örnek kullanım
const numberss = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Original Array:", numberss);
console.log("Shuffled Array:", shuffleArray(numberss));

//9-)
function factorial(n) {
    if (n === 0 || n === 1) { // 0! ve 1! her zaman 1'e eşittir
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i; // result = result * i
    }
    return result;
}

// Örnek kullanım
console.log(factorial(5));  // 120
console.log(factorial(0));  // 1
console.log(factorial(7));  // 5040

//10-)
function isEmpty(value) {
    if (value === null || value === undefined) {
        return true;
    }

    if (typeof value === 'string' || Array.isArray(value) || typeof value === 'object') {
        return Object.keys(value).length === 0; // Boş ise true döner
    }

    return false; // Diğer türler için false döner
}

// Örnek kullanım
console.log(isEmpty(''));         // true
console.log(isEmpty([]));         // true
console.log(isEmpty({}));         // true
console.log(isEmpty(null));       // true
console.log(isEmpty(undefined));  // true
console.log(isEmpty('Hello'));    // false
console.log(isEmpty([1, 2, 3]));  // false
console.log(isEmpty({ key: 'value' })); // false

//11-)
function sum(...args) {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i]; // Toplamı günceller
    }
    return total;
}

// Örnek kullanım
console.log(sum(1, 2, 3));          // 6
console.log(sum(10, 20, 30, 40));   // 100
console.log(sum(5, 15, 25, 35, 45)); // 125

//12-)
function sumOfArrayItems(arr) {
    // Tüm öğelerin sayı olup olmadığını kontrol et
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            return 'Dizide sadece sayılar bulunmalıdır.';
        }
    }

    // Tüm öğeleri topla
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Örnek kullanım
console.log(sumOfArrayItems([1, 2, 3, 4]));          // 10
console.log(sumOfArrayItems([10, 20, '30', 40]));   // 'Dizide sadece sayılar bulunmalıdır.'

//13-)
function average(arr) {
    // Tüm öğelerin sayı olup olmadığını kontrol et
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            return 'Dizide sadece sayılar bulunmalıdır.';
        }
    }

    // Tüm öğelerin ortalamasını hesapla
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

// Örnek kullanım
console.log(average([1, 2, 3, 4]));          // 2.5
console.log(average([10, 20, '30', 40]));   // 'Dizide sadece sayılar bulunmalıdır.'

//14-)
function modifyArray(arr) {
    if (arr.length >= 5) {
        arr[4] = 'Modified'; // Beşinci öğeyi değiştir
        return arr;
    } else {
        return 'item not found'; // Beşinci öğe bulunamıyor
    }
}

// Örnek kullanım
console.log(modifyArray([1, 2, 3, 4, 5]));          // [1, 2, 3, 4, 'Modified']
console.log(modifyArray([10, 20]));                // 'item not found'

//15-)
function isPrime(num) {
    if (num <= 1) return false; // 1 ve 0 asal değildir
    if (num <= 3) return true;  // 2 ve 3 asal sayılardır

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // Bölen varsa asal değildir
    }
    return true; // Eğer bölen yoksa asal sayıdır
}
console.log(isPrime(5));
console.log(isPrime(6));
console.log(isPrime(2));

//16-)
function areAllItemsUnique(arr) {
    const uniqueItems = new Set(arr);  // Set kullanarak benzersiz öğeleri alır
    return uniqueItems.size === arr.length; // Set uzunluğu ile orijinal dizi uzunluğu kontrol edilir
}
console.log(areAllItemsUnique([1, 2, 3, 4]));       // true
console.log(areAllItemsUnique([1, 2, 2, 4]));       // false
console.log(areAllItemsUnique(['a', 'b', 'c']));    // true
console.log(areAllItemsUnique(['a', 'b', 'b']));    // false

//17-)
function areItemsSameType(arr) {
    if (arr.length === 0) return true; // Boş dizi kontrolü

    const firstType = typeof arr[0];  // İlk öğenin veri tipi alınır

    for (let i = 1; i < arr.length; i++) {
        if (typeof arr[i] !== firstType) {  // Diğer öğelerin tipi ile karşılaştırılır
            return false;  // Türler farklıysa false döner
        }
    }
    return true;  // Tüm öğeler aynı veri tipi ise true döner
}

//18-)
function isValidVariable(variableName) {
    // Değişken adı sadece harfler, rakamlar, $ ve _ içerebilir.
    const validVariableRegex = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
    return validVariableRegex.test(variableName);  // Düzenli ifade ile kontrol edilir
}

//19-)
function generateUniqueRandomNumbers() {
    const uniqueNumbers = new Set();  // Tekrar eden değerleri önlemek için Set kullanılır

    while (uniqueNumbers.size < 7) {
        const randomNum = Math.floor(Math.random() * 10);  // 0-9 arasında rastgele sayı üretir
        uniqueNumbers.add(randomNum);  // Set'e rastgele sayıyı ekler
    }

    return Array.from(uniqueNumbers);  // Set'i diziye çevirir
}

console.log(generateUniqueRandomNumbers());

//20-)
function reverseCountries(arr) {
    const countries = [...arr];
    const reverseCountries = [];
    for (let i = countries.length - 1; i >= 0; i--) {
        reverseCountries.push(countries[i]);
    }
    return reverseCountries;
}
const ctr = ["Germany", "France", "England", "Spain", "Italy"];
console.log(reverseCountries(ctr));
console.log(ctr);


