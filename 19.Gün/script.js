//Egzersiz: Seviye 1
//1-)
function outerFunction() {
    let count = 0;
    function innerfunction() {
        count++;
        return count;
    }
    return innerfunction;
}

const increment = outerFunction();
increment();
increment();
console.log(increment());

//Egzersiz: Seviye 2
//1-)

function outerFunction2() {
    let count = 0;
    function plusOne() {
        count++
        return count
    }
    function minusOne() {
        count--
        return count
    }
    function hello() {
        console.log("Hello world");
    }
    return {
        plusOne: plusOne,
        minusOne: minusOne,
        hello: hello
    }
}
const counter = outerFunction2();

console.log(counter.plusOne()); // 1
console.log(counter.plusOne()); // 2
console.log(counter.minusOne()); // 1
counter.hello(); // "Hello world"

//Egzersiz: Seviye 3
function personAccount(firstName, lastName) {
    // Inner değişkenler
    let incomes = []; // Gelirler: { amount: sayı, description: string }
    let expenses = []; // Giderler: { amount: sayı, description: string }

    // Inner fonksiyonlar

    // Toplam gelir hesaplar
    function totalIncome() {
        return incomes.reduce((sum, income) => sum + income.amount, 0);
    }

    // Toplam gider hesaplar
    function totalExpense() {
        return expenses.reduce((sum, expense) => sum + expense.amount, 0);
    }

    // Hesap bilgilerini döndürür
    function accountInfo() {
        return `Account Holder: ${firstName} ${lastName}\nTotal Income: $${totalIncome()}\nTotal Expense: $${totalExpense()}\nAccount Balance: $${accountBalance()}`;
    }

    // Gelir ekler
    function addIncome(amount, description) {
        incomes.push({ amount, description });
    }

    // Gider ekler
    function addExpense(amount, description) {
        expenses.push({ amount, description });
    }

    // Hesap bakiyesini hesaplar
    function accountBalance() {
        return totalIncome() - totalExpense();
    }

    // Inner fonksiyonları döndür
    return {
        totalIncome,
        totalExpense,
        accountInfo,
        addIncome,
        addExpense,
        accountBalance
    };
}
// Yeni bir personAccount oluştur
const myAccount = personAccount("John", "Doe");

// Gelir ekle
myAccount.addIncome(5000, "Maaş");
myAccount.addIncome(200, "Freelance İş");

// Gider ekle
myAccount.addExpense(1000, "Kira");
myAccount.addExpense(300, "Market");

// Hesap bilgilerini yazdır
console.log(myAccount.accountInfo());
// Çıktı:
// Account Holder: John Doe
// Total Income: $5200
// Total Expense: $1300
// Account Balance: $3900

// Toplam gelir
console.log("Total Income:", myAccount.totalIncome()); // 5200

// Toplam gider
console.log("Total Expense:", myAccount.totalExpense()); // 1300

// Hesap bakiyesi
console.log("Account Balance:", myAccount.accountBalance()); // 3900


