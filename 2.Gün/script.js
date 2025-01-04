//Egzersiz:Seviye 1

//1-)
let Challenge = "30 Days Of JavaScript";
//2-)
console.log(Challenge);
//3-)
console.log(Challenge.length);
//4-)
console.log(Challenge.toUpperCase());
//5-)
console.log(Challenge.toLowerCase());
//6-)
let newStr = Challenge.substring(3);
//7-)
console.log(newStr);
//8-)
console.log(Challenge.includes("Script"));
//9-)
console.log(Challenge.split());
//10-)
console.log(Challenge.split(" "));
//11-)
let company = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(company.split(", "));
//12-)
console.log(Challenge.replace("JavaScript", "Python"));
//13-)
console.log(Challenge.charAt(15));
//14-)
console.log(Challenge.charCodeAt(Challenge.indexOf("J")));
//15-)
console.log(Challenge.indexOf("a"));
//16-)
console.log(Challenge.lastIndexOf("a"));
//17-)
let sentence = "Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir baglactir";
console.log(sentence.indexOf("çünkü"));
//18-) 
console.log(sentence.lastIndexOf("çünkü"));
//19-)
console.log(sentence.search("çünkü"));
//20-)  
console.log(Challenge.trim());
//21-)
console.log(Challenge.startsWith("30"));
//22-)
console.log(Challenge.endsWith("JavaScript"));
//23-)
console.log(Challenge.match(/a/g));
//24-)
let part1 = '30 Days of';
let part2 = 'JavaScript';

let result = part1.concat(' ', part2);
console.log(result); // "30 Days of JavaScript"
//25-)
console.log(Challenge.repeat(2));

//Egzersiz:Seviye 2

//1-)
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
//2-)
console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"");
//3-)
let number = "10";
let number2 = 10;
if (number === number2) {
    console.log("Bu iki Değişken tam olarak eşittir");
}
else {
    let number3 = Number(number);
    console.log(`String Number a çevirildi ve değeri ${number3}`);
}

//4-)
let floatNum = 9.8;
if (floatNum !== 10) {
    floatNum = Math.ceil(floatNum);
}
console.log(floatNum);
//5-)
console.log("python".includes("on") && "jargon".includes("on"));
//6-)
console.log("Umarim bu kurs jargonla dolu değildir".includes("jargon"));
//7-)
let randNumber = Math.random() * 101;
console.log(Math.floor(randNumber));
//8-)
console.log(Math.floor(Math.random() * 51) + 50);
//9-)
console.log(Math.floor(Math.random() * 256));
//10-)
let js = "JavaScript";
let randIndex = Math.floor(Math.random() * js.length);
console.log(js[randIndex]);
//11-)
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");
//12-)
let fullSentence = 'You cannot end a sentence with because because because is a conjunction';
let start = fullSentence.indexOf('because');
let end = fullSentence.lastIndexOf('because') + 'because'.length;
let becausePhrase = fullSentence.substr(start, end - start);
console.log(becausePhrase);

//Egzersiz:Seviye 3
//1-)
let sentence2 = 'Love is the best thing in this world. Some found their love and some are still looking for their love';
let count = (sentence2.match(/love/gi) || []).length;
console.log(count);
//2-)
let sentenceBecause = 'You cannot end a sentence with because because because is a conjunction';
let countBecause = (sentenceBecause.match(/because/g) || []).length;
console.log(countBecause);
//3-)
let messySentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

let cleanSentence = messySentence.replace(/[^a-zA-Z ]/g, "").toLowerCase();
console.log(cleanSentence);

let words = cleanSentence.split(' ');
console.log(words);

let wordCounts = {};
for (let i = 0; i < words.length; i++) {
    if (words[i] !== '') {
        wordCounts[words[i]] = (wordCounts[words[i]] || 0) + 1;
    }
}
console.log(wordCounts);

let maxWord = '';
let maxCount = 0;
for (let word in wordCounts) {
    if (wordCounts[word] > maxCount) {
        maxCount = wordCounts[word];
        maxWord = word;
    }
}

console.log(`Most frequent word is '${maxWord}' with count ${maxCount}`);

//4-)
let text = 'Aylık maaşından 5000 euro, yıllık 10000 euro ikramiye, ayda 15000 euro online kurstan kazanıyor.';

// Metni sayılardan arındır ve sayıları bul
let salaries = text.match(/\d+/g); // Tüm sayıları bul
console.log(salaries);
// Sayıları sayılara dönüştür
let monthlySalary = parseInt(salaries[0]); // Aylık maaş
let yearlyBonus = parseInt(salaries[1]); // Yıllık ikramiye
let monthlyCourseIncome = parseInt(salaries[2]); // Aylık online kurstan kazanılan

// Yıllık toplam gelir hesaplama
let yearlySalary = monthlySalary * 12; // Aylık maaşı yıllığa çevir
let totalIncome = yearlySalary + yearlyBonus + (monthlyCourseIncome * 12); // Yıllık toplam gelir

console.log(`Kişinin yıllık toplam geliri: ${totalIncome} euro`);
