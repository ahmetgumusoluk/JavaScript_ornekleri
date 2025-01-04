//Egzersiz 1.Seviye

//1-)
const firstParagraph = document.querySelector('p');

//2-)
const secondParagraph = document.querySelector('#id2');
const thirdParagraph = document.querySelector('#id3');
const fourthParagraph = document.querySelector('#id4');

//3-)
const allParagraph = document.querySelectorAll('p');

//4-)
for (let i = 0; i < allParagraph.length; i++) {
    console.log(allParagraph[i].textContent);;
}

//5-)
fourthParagraph.textContent = "Fourth Paragraph";

//6-)
allParagraph.forEach((paragraph, index) => {
    paragraph.setAttribute("id", `newId${index + 1}`);
    paragraph.setAttribute("class", `newClass${index + 1}`);
});

//Egzersiz 2.Seviye

//1-)
allParagraph.forEach((paragraph, index) => {
    if (index % 2 == 0) {
        paragraph.style.backgroundColor = "red";
        paragraph.style.fontSize = "30px";
        paragraph.style.color = "yellow";
    }
    else {
        paragraph.style.backgroundColor = "yellow";
        paragraph.style.fontSize = "50px";
        paragraph.style.color = "red";
    }

});

//3-)
allParagraph.forEach((paragraph, i) => {
    paragraph.textContent = `new text ${i + 1}`;
    paragraph.setAttribute("id", `UPİD${i + 1}`);
});

