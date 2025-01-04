//Egzersiz 1.Seviye

//1-)
const str = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month";
const pattern = /\d+/g;
const arr = str.match(pattern);
console.log(arr);
const salary = Number(arr[0]);
const bonus = Number(arr[1]);
const onlineCourses = Number(arr[2]);
const totalIncome = (salary * 12) + bonus + (onlineCourses * 12);
console.log(`Kişinin yıllık toplam geliri:${totalIncome}`);

//2-)
const points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8'];
let uniquePoints = Array.from(new Set(points.map(Number)));
let sortedPoints = uniquePoints.sort((a, b) => a - b);
console.log(sortedPoints);
let minPoint = sortedPoints[0];      // -4
let maxPoint = sortedPoints[sortedPoints.length - 1];  // 8

let distance = maxPoint - minPoint;
console.log(distance);

//3-)
function is_valid_variable(variable) {
    const pattern = /^[a-zA-Z_][a-zA-Z0-9_]*$/;
    return pattern.test(variable);
}

// Testler
console.log(is_valid_variable('first_name'));  // True
console.log(is_valid_variable('first-name'));  // False
console.log(is_valid_variable('1first_name')); // False
console.log(is_valid_variable('firstname'));   // True

//Egzersiz 2.Seviye

//1-)
function tenMostFrequentWords(paragraph) {
    // Adım 1: Paragrafı küçült ve kelimelere ayır
    const words = paragraph.toLowerCase().match(/\b\w+\b/g);

    // Adım 2: Frekans haritası oluştur
    const wordFrequency = {};
    for (const word of words) {
        if (wordFrequency[word]) {
            wordFrequency[word]++;
        } else {
            wordFrequency[word] = 1;
        }
    }

    // Adım 3: Kelimeleri frekansa göre sırala
    const sortedWords = Object.entries(wordFrequency).sort((a, b) => b[1] - a[1]);

    // Adım 4: En çok 10 frekanslı kelimeyi al
    const topTenWords = sortedWords.slice(0, 10).map(entry => entry[0]);

    return topTenWords;
}
const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;
console.log(tenMostFrequentWords(paragraph));

//Egzersiz 3.Seviye

//1-)
function cleanAndCountWords(sentence) {
    // Adım 1: Metni temizleme
    let cleanedSentence = sentence
        .replace(/[%$@&#;]/g, ' ')  // Özel karakterleri boşlukla değiştir
        .replace(/\s+/g, ' ')       // Fazla boşlukları tek boşluğa çevir
        .trim()                    // Başka hiçbir boşluk bırakmadan temizle

    // Adım 2: Kelimeleri ayırma ve frekans hesaplama
    const words = cleanedSentence.toLowerCase().split(' ');  // Küçült ve kelimelere ayır
    const wordFrequency = {};

    for (const word of words) {
        if (word && word.length > 0) {  // Boş veya anlamsız kelimeleri atla
            if (wordFrequency[word]) {
                wordFrequency[word]++;
            } else {
                wordFrequency[word] = 1;
            }
        }
    }

    // Adım 3: En sık kullanılan üç kelimeyi bulma
    const sortedWords = Object.entries(wordFrequency).sort((a, b) => b[1] - a[1]);
    const topThreeWords = sortedWords.slice(0, 3).map(entry => entry[0]);

    return topThreeWords;
}

// Örnek kullanım
const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
console.log(cleanAndCountWords(sentence));
