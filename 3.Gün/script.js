//Egzersiz: Seviye 1

//1-)
let firstName = "Ahmet", lastName = "Gümüşoluk", city = "Kahramanmaras", age = 24, isMarried = false, year = 2024;
console.log(typeof (firstName), typeof (lastName), typeof (city), typeof (age), typeof (isMarried), typeof (year));
//2-)
console.log("10" === 10);
//3-)
console.log(parseInt("9.8") === 10);
//4-)
console.log(4 > 3);
console.log(3 > 4);
//5-)
console.log(4 > 3);//true
console.log(4 >= 3);//true
console.log(4 < 3); //false
console.log(4 <= 3);//false
console.log(4 == 4);//true
console.log(4 === 4);//true
console.log(4 != 4);//false
console.log(4 !== 4);//false
console.log(4 != "4");//false
console.log(4 !== "4");//true
console.log("python".length == "jargon".length);//true
//6-)
console.log(4 > 3 && 10 < 12);//true
console.log(4 > 3 && 10 > 12);//false
console.log(4 > 3 || 10 < 12);//true
console.log(4 > 3 || 10 > 12);//true
console.log(!(4 > 3));//false
console.log(!(4 < 3));//true
console.log(!(false));//true
console.log(!(4 > 3 && 10 < 12));//false
console.log(!(4 > 3 && 10 > 12));//true
console.log(!(4 === '4'));//true
console.log(!('dragon'.includes('on') && 'python'.includes('on'))); // false
//7-)  
const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(Math.floor(now.getTime() / 1000));

//Egzersiz: Seviye 2

//1-)
let base = Number(prompt("Lütfen üçgenin tabanını giriniz:"));
let height = Number(prompt("Lütfen üçgenin yüksekliğini giriniz:"));
let area = 0.5 * base * height;
console.log(`Üçgenin alanı :${area}`);
//2-)
let sideA = parseFloat(prompt("A kenarını girin: "));
let sideB = parseFloat(prompt("B kenarını girin: "));
let sideC = parseFloat(prompt("C kenarını girin: "));
let perimeter = sideA + sideB + sideC;
console.log(`Üçgenin çevresi ${perimeter}`);
//3-)
let uzunluk = Number(prompt("Uzunluğu giriniz:"));
let genislik = Number(prompt("Genişliği giriniz:"));
let alan = uzunluk * genislik;
console.log(`Dikdörtgenin alanı:${alan}`);
//4-)
let cap = Number(prompt("Çapı giriniz:"));
let daireAlan = Math.PI * cap * cap;
console.log(`Dairenin Alanı:${daireAlan}`);
//5-)
let slope = 2; // m
let x_intercept = 1; // c / m
let y_intercept = -2; // c
console.log(`Eğim: ${slope}, x-kesim noktası: ${x_intercept}, y-kesim noktası: ${y_intercept}`);
//6-)
let x1 = 2, y1 = 2;
let x2 = 6, y2 = 10;
let slope2 = (y2 - y1) / (x2 - x1);
console.log(`Eğim: ${slope2}`)
//7-)
console.log(slope === slope2);
//8-)
let x_values = [-3, 0, 1, 2, 3];
for (let x of x_values) {
    let y = x * x + 6 * x + 9;
    console.log(`x=${x}, y=${y}`);
}
//9-)
let hours = Number(prompt("Kaç saat çalıştığınızı giriniz:"));
let rate = Number(prompt("Saatlik ücreti giriniz:"));
let total = hours * rate;
console.log(`toplam para :${total}`);;
//10-)
let name = prompt("İsminizi girin: ");
let message = (name.length > 7) ? "İsminiz uzun." : "İsminiz kısa.";
console.log(message);
//11-)
let firstName2 = prompt("Adınızı girin: ");
let lastName2 = prompt("Soyadınızı girin: ");
let message2 = (firstName2.length > lastName2.length) ? `Adınız, ${firstName2}, soyadınızdan, ${lastName2}, daha uzun.` : `Soyadınız, ${lastName2}, adınızdan, ${firstName2}, daha uzun.`;
console.log(message2);
//12-)
let myAge = 250
let yourAge = 25
let mesg = `Ben sizden ${myAge - yourAge} yıl daha yaşlıyım.`;
console.log(mesg);
//13-)
let yil = Number(prompt("Doğum yılınızı Giriniz:"));
let noww = new Date();
let yas = noww.getFullYear() - yil;
yas >= 18 ? console.log(`you are ${yas}  You are old enough to drive`) : console.log(`you are${yas} You will be allowed to drive after ${18 - yas} years. `);
//14-)
let years = parseFloat(prompt("Kaç yıl yaşadınız: "));
let seconds = years * 365 * 24 * 60 * 60;
console.log(`Sen ${seconds} saniye yaşadın.`);
//15-)
let now3 = new Date();

let year3 = now3.getFullYear();
let month = now3.getMonth() + 1;
let day = now3.getDate();
let hour = now3.getHours();
let minute = now3.getMinutes();

console.log(`YYYY-MM-DD HH:mm: ${year3}-${month}-${day} ${hour}:${minute}`);
console.log(`DD-MM-YYYY HH:mm: ${day}-${month}-${year3} ${hour}:${minute}`);
console.log(`DD/MM/YYYY HH:mm: ${day}/${month}/${year3} ${hour}:${minute}`);

//Egzersiz: Seviye 3
//1-)
let now2 = new Date();

let year2 = now2.getFullYear();
let month2 = String(now2.getMonth() + 1).padStart(2, '0'); // ayı 2 basamaklı hale getirir
let day2 = String(now2.getDate()).padStart(2, '0'); // günü 2 basamaklı hale getirir
let hour2 = String(now2.getHours()).padStart(2, '0'); // saati 2 basamaklı hale getirir
let minute2 = String(now2.getMinutes()).padStart(2, '0'); // dakikayı 2 basamaklı hale getirir

console.log(`YYYY-MM-DD HH:mm: ${year2}-${month2}-${day2} ${hour2}:${minute2}`);

