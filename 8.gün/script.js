//Egzersiz 1.Seviye

//1-)
const dog = {};

//2-)
console.log(dog);

//3-)
dog.name = "Buddy";
dog.legs = 4;
dog.color = "kahverengi";
dog.age = 3;

// Metot (fonksiyon) ekleme
dog.bark = function () {
    return "woof woof";
};

//4-)
console.log(dog);
console.log(dog.bark());
console.log(dog.name);
console.log(dog.legs);
console.log(dog["age"]);
console.log(dog["color"]);

//5-)
dog.breed = true;
dog.getDogInfo = function () {
    return `${this.name} ${this.color}`;
};
console.log(dog.breed);
console.log(dog.getDogInfo());

//Egzersiz 2.Seviye
const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

//1-)
let userWithMostSkills = '';
let maxSkills = 0;
for (const user in users) {
    if (users[user].skills.length > maxSkills) {
        maxSkills = users[user].skills.length;
        userWithMostSkills = user;
    }
}
console.log(maxSkills);
console.log(userWithMostSkills); // Çıktı: Asab

//2-)
let count = 0;
for (const user in users) {
    if (users[user].isLoggedIn == true) {
        count++;
    }
}
console.log(`Oturum açmış kullanıcı sayısı:${count}`);

let count2 = 0;
for (const user in users) {
    if (users[user].points >= 50) {
        count2++;
    }
}
console.log(`50 puandan fazla alan kullanıcı sayısı:${count2}`);

//3-)
const mernStackDevelopers = [];

for (const user in users) {
    const skills = users[user].skills;
    if (skills.includes('MongoDB') && skills.includes('Express') && skills.includes('React') && skills.includes('Node')) {
        mernStackDevelopers.push(user);
    }
}

console.log(mernStackDevelopers);

//4-)
const newUser = {
    name: 'YourName',
    email: 'yourname@yourmail.com',
    skills: ['JavaScript', 'Node', 'Express'],
    age: 22,
    isLoggedIn: true,
    points: 35
};

// Eski `users` nesnesine yeni kullanıcı eklenir
const updatedUsers = Object.assign({}, users, { YourName: newUser });

console.log(updatedUsers);  // Yeni kullanıcı `YourName` ile birlikte gösterilir

//5-)
console.log(Object.keys(users));
//6-)
console.log(Object.values(users));
//7-)
const countries = {
    USA: {
        capital: 'Washington, D.C.',
        population: 331002651,
        languages: ['English']
    },
    France: {
        capital: 'Paris',
        population: 65273511,
        languages: ['French']
    },
    Japan: {
        capital: 'Tokyo',
        population: 126476461,
        languages: ['Japanese']
    }
};

for (const country in countries) {
    const countryInfo = countries[country];
    console.log(`Country: ${country}`);
    console.log(`Capital: ${countryInfo.capital}`);
    console.log(`Population: ${countryInfo.population}`);
    console.log(`Languages: ${countryInfo.languages.join(', ')}\n`);
}

//Egzersiz 3.Seviye

//1-)
const personAccount = {
    firstName: '',
    lastName: '',
    incomes: {},
    expenses: {},

    // Toplam gelir hesaplama
    totalIncome: function () {
        let total = 0;
        for (let income in this.incomes) {
            total += this.incomes[income];
        }
        return total;
    },

    // Toplam harcama hesaplama
    totalExpense: function () {
        let total = 0;
        for (let expense in this.expenses) {
            total += this.expenses[expense];
        }
        return total;
    },

    // Hesap bilgileri
    accountInfo: function () {
        return `${this.firstName} ${this.lastName}`;
    },

    // Gelir ekleme
    addIncome: function (description, amount) {
        this.incomes[description] = amount;
    },

    // Harcama ekleme
    addExpense: function (description, amount) {
        this.expenses[description] = amount;
    },

    // Bakiye hesaplama
    accountBalance: function () {
        return this.totalIncome() - this.totalExpense();
    }
};
personAccount.firstName = 'John';
personAccount.lastName = 'Doe';

personAccount.addIncome('Monthly Salary', 5000);
personAccount.addIncome('Freelance Work', 2000);

personAccount.addExpense('Rent', 1500);
personAccount.addExpense('Utilities', 300);

console.log(personAccount.accountInfo());        // John Doe
console.log(personAccount.totalIncome());        // 7000
console.log(personAccount.totalExpense());       // 1800
console.log(personAccount.accountBalance());     // 5200

//2-)
const users2 = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
]

