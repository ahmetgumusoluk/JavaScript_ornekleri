//Egzersiz 1.Seviye

//1-)
class Animal {
    constructor(name, age, color, feet) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.feet = feet;
    }
    getFullName() {
        const fullName = this.name;
        return fullName;
    }

    get getAge() {
        return this.age;
    }
}
const animal = new Animal("Cat", 10, "White", 4);
const name = animal.getFullName();
const age = animal.getAge;
console.log(animal);
console.log(age);
console.log(name);

//2-)
class Dog extends Animal {
    constructor(name, age, color, legs, breed) {
        super(name, age, color, legs); // Animal sınıfının constructor'ını çağırır
        this.breed = breed; // Ek özellik
    }

    makeSound() {
        console.log(`${this.name} barks: Woof! Woof!`);
    }

    fetch() {
        console.log(`${this.name} is fetching a ball.`);
    }
}


//Egzersiz 2.Seviye

//1-)

class Cat extends Animal {
    constructor(name, age, color, legs, isIndoor) {
        super(name, age, color, legs); // Animal sınıfının constructor'ını çağırır
        this.isIndoor = isIndoor; // Ek özellik
    }

    // Metodu override ediyoruz
    makeSound() {
        console.log(`${this.name} meows: Meow!`);
    }

    scratch() {
        console.log(`${this.name} is scratching the furniture.`);
    }
}

//Egzersiz 3.Seviye

//1-)
class personAccount {
    constructor(name, surname, income, expense) {
        this.name = name;
        this.surname = surname;
        this.income = income;
        this.expense = expense;
    }
    addIncome(money) {
        this.income += money;
    }
    addExpense(money) {
        this.expense += money;
    }

    totalIncome() {
        return this.income;
    }
    totalExpense() {
        return this.expense;
    }
    accountBalance() {
        let total = this.income - this.expense;
        return total;
    }

    accountInfo() {
        return `Name:${this.name} Surname:${this.surname} totalIncome:${this.totalIncome()} totalExpense:${this.totalExpense()} accountBalance:${this.accountBalance()}`;
    }
}

const person = new personAccount("Ahmet", "Gümüşoluk", 5000, 2500);
person.addIncome(1000);
console.log(person.totalIncome());
person.addExpense(500);
console.log(person.totalExpense());
console.log(person.accountBalance());
console.log(person.accountInfo());

