import { createTitle } from "./functions";

const services = [
    "Nutritional assessment,",
    "Nutritional monitoring,",
    "Advice for an adapted nutritional regime in case of specific illnesses,",
    "Personalized dietary advice,",
    "Catering service,",
    "Slimming programs,",
    "Pregnancy and breastfeeding program,",
    "Sport"
];

const team = [
    "Pr Akory Ag Iknane, nutritional expert",
    "Phd Yacouba Kone, nutritional expert",
    "Lassina Kane, nutritionist",
    "Dipa Traore, sports coach"
];

function createList(list) {
    let ul = document.createElement("ul");
    for (const item of list) {
        let li = document.createElement("li");
        li.innerText = item;
        ul.appendChild(li);
    }
    return ul;
}

function aboutContent() {
    let text = document.createElement("p");
    text.classList.add("text");
    text.innerText = "With a quality team, MyDiet Mali help you regain control of your health with quality services like:";
    text.appendChild( createList(services) );
    text.innerHTML += "all supervised by our great team:";
    text.appendChild( createList(team) );
    return text;
}

function createContent() {
    let divContent = document.createElement("div");
    divContent.classList.add("content");
    divContent.appendChild(aboutContent());
    return divContent;
}

export default function(){
    document.querySelector(".main").append(
        createTitle("My Diet Mali by Tatou Solidarite"),
        createContent(),
    )
}