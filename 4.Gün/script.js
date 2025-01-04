//Egzersiz: Seviye 1
x
//1-)
let age = Number(prompt("Enter your age:"));
age >= 18 ? console.log(`You are old enough to drive.`) : console.log(`You are left with ${18 - age} years to drive.`);
//2-)
let myAge = 24;
let yourAge = Number(prompt("Yaşınızı giriniz:"));
if (myAge > yourAge) {
    console.log(`Ben senden ${myAge - yourAge} yaş kadar büyüğüm`);
}
else if (myAge == yourAge) {
    console.log("ikimiz aynı yaştayız");
}
else {
    console.log(`Sen benden ${yourAge - myAge} yaş kadar büyüksün`);
}
//3-)
let a = 5;
let b = 4;
a > b ? console.log(`${a} büyüktür ${b}`) : console.log(`${b} büyüktür ${a}`);
//4-)
let sayi = Number(prompt("sayıyı giriniz:"));
sayi % 2 == 0 ? console.log(`${sayi} çift sayıdır`) : console.log(`${sayi} tek sayıdır`);

//Egzersiz: Seviye 2
//1-)
let puan = Number(prompt("Puanınızı girin:"));

if (puan >= 80 && puan <= 100) {
    console.log("Notunuz: A");
} else if (puan >= 70 && puan <= 79) {
    console.log("Notunuz: B");
} else if (puan >= 60 && puan < 70) {
    console.log("Notunuz: C");
} else if (puan >= 50 && puan < 60) {
    console.log("Notunuz: D");
} else if (puan >= 0 && puan < 50) {
    console.log("Notunuz: F");
} else {
    console.log("Geçerli bir puan girin.");
}
//2-)
let ay = prompt("Ayı girin:").toLowerCase();
if (ay == "eylül" || ay == "ekim" || ay == "kasım") {
    console.log("Mevsim sonbahardır");
}

else if (ay == "aralık" || ay == "ocak" || ay == "şubat") {
    console.log("Mevsim Kıştır");
}

else if (ay == "mart" || ay == "nisan" || ay == "mayıs") {
    console.log("Mevsim İlkbahardır");
}
else if (ay == "haziran" || ay == "temmuz" || ay == "ağustos") {
    console.log("Mevsim Yazdır");
}
else {
    console.log("Geçerli bir değer giriniz");
}
//3-)
let gun = prompt("Bugün hangi gün?").toLowerCase();
if (gun == "pazartesi" || gun == "salı" || gun == "çarşamba" || gun == "perşembe" || gun == "cuma") {
    console.log("Hafta içidir");
}
else if (gun == "cumartesi" || gun == "pazar") {
    console.log("Hafta sonudur");
}
else {
    console.log("Lütfen geçerli bir gün giriniz");
}

//Egzersiz: Seviye 3
//1-)
let ay2 = prompt("Bir ay girin:").toLowerCase();

switch (ay2) {
    case 'ocak':
    case 'mart':
    case 'mayıs':
    case 'temmuz':
    case 'ağustos':
    case 'ekim':
    case 'aralık':
        console.log(ay2.charAt(0).toUpperCase() + ay2.slice(1) + " ayı 31 gündür.");
        break;
    case 'nisan':
    case 'haziran':
    case 'eylül':
    case 'kasım':
        console.log(ay2.charAt(0).toUpperCase() + ay2.slice(1) + " ayı 30 gündür.");
        break;
    case 'şubat':
        console.log(ay2.charAt(0).toUpperCase() + ay2.slice(1) + " ayı 28 gündür.");
        break;
    default:
        console.log("Geçerli bir ay girin.");
}
//2-)
let ay3 = prompt("Bir ay girin:").toLowerCase();
let yil = prompt("Bir yıl girin:");

let ayNumarasi;
switch (ay3) {
    case 'ocak': ayNumarasi = 0; break;
    case 'şubat': ayNumarasi = 1; break;
    case 'mart': ayNumarasi = 2; break;
    case 'nisan': ayNumarasi = 3; break;
    case 'mayıs': ayNumarasi = 4; break;
    case 'haziran': ayNumarasi = 5; break;
    case 'temmuz': ayNumarasi = 6; break;
    case 'ağustos': ayNumarasi = 7; break;
    case 'eylül': ayNumarasi = 8; break;
    case 'ekim': ayNumarasi = 9; break;
    case 'kasım': ayNumarasi = 10; break;
    case 'aralık': ayNumarasi = 11; break;
    default: console.log("Geçerli bir ay girin."); break;
}

let tarih = new Date(yil, ayNumarasi + 1, 0);
console.log(ay3.charAt(0).toUpperCase() + ay3.slice(1) + " ayı " + tarih.getDate() + " gündür.");


