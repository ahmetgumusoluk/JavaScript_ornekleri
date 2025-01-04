//Egzersiz: Seviye 1

//1-)
const constants = [2.72, 3.14, 9.81, 37, 100];
let [e, pi, gravity, bodyTemp, boilingPoint] = constants;
console.log(e, pi, gravity, bodyTemp, boilingPoint);

//2-)
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];
const [fin, est, sw, den, nor] = countries;
console.log(fin); // Finland
console.log(est); // Estonia
console.log(sw);  // Sweden
console.log(den); // Denmark
console.log(nor); // Norway

//3-)
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
};

const { width, height, area, perimeter } = rectangle;
console.log(width, height, area, perimeter);

//Egzersiz: 2.seviye

//1-)
const users = [
    {
        name: 'Brook',
        scores: 75,
        skills: ['HTM', 'CSS', 'JS'],
        age: 16
    },
    {
        name: 'Alex',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'David',
        scores: 75,
        skills: ['HTM', 'CSS'],
        age: 22
    },
    {
        name: 'John',
        scores: 85,
        skills: ['HTML'],
        age: 25
    },
    {
        name: 'Sara',
        scores: 95,
        skills: ['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name: 'Martha',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'Thomas',
        scores: 90,
        skills: ['HTM', 'CSS', 'JS'],
        age: 20
    }
];
//1-)
for (const { name, scores, skills, age } of users) {
    console.log(name, scores, skills, age);
}

//2-)
for (const { name, scores, skills, age } of users) {
    if (skills.length < 2) {
        console.log(name);
    }
}

//Egzersiz: Seviye 3

//1-)
console.log(fin); // Finland
console.log(est); // Estonia
console.log(sw);  // Sweden
console.log(den); // Denmark
console.log(nor); // Norway

//2-)
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];
const [name, skills, [, , js, react]] = student;
console.log(name, skills, js, react);

//3-)
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
];
const convertArrayToObject = (arr) => {
    return arr.map(([name, skills, scores]) => ({ name, skills, scores }));
};

console.log(convertArrayToObject(students));

//4-)
const student2 = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node', level: 7 },
            { skill: 'GraphQL', level: 8 }
        ],
        dataBase: [
            { skill: 'MongoDB', level: 7.5 }
        ],
        dataScience: ['Python', 'R', 'D3.js']
    }
};

// Orijinal nesneyi değiştirmeden kopyala
const newStudent = JSON.parse(JSON.stringify(student2));

// Yeni beceriler ekle
newStudent.skills.frontEnd.push({ skill: 'Bootstrap', level: 8 });
newStudent.skills.backEnd.push({ skill: 'Express', level: 9 });
newStudent.skills.dataBase.push({ skill: 'SQL', level: 8 });
newStudent.skills.dataScience.push('SQL');

console.log('Orijinal Öğrenci:', student2);
console.log('Yeni Öğrenci:', newStudent);
