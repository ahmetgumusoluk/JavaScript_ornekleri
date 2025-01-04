//Egzersiz: Seviye 1

//1-)
localStorage.setItem("name", "Ahmet");
localStorage.setItem("surname", "Gümüşoluk");
localStorage.setItem("country", "Turkey");
localStorage.setItem("city", "kahramanmaraş");
localStorage.removeItem("basket");

//Egzersiz: Seviye 2

//1-)
const student = {
    name: "Alihan",
    surname: "Gümüşoluk",
    age: 14,
    skills: ["Html", "CSS", "JS"],
    country: "Turkey"
};

const studentJSON = JSON.stringify(student, null, 4);
localStorage.setItem("Student", studentJSON);

let storedStudent = JSON.parse(localStorage.getItem("Student"));

console.log("LocalStorage'dan alınan öğrenci nesnesi:", storedStudent);
