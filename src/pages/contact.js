import { createTitle } from "./functions";

function textContent() {
    let text = document.createElement("p");
    text.innerText = "You can join us via our ";
    let anchor = document.createElement("a");

    anchor.setAttribute("href","https://www.facebook.com/mydietmali/");
    anchor.setAttribute("target","_blank");
    anchor.innerText = "Facebook";
    text.appendChild(anchor);

    text.innerHTML += ", ";

    anchor.setAttribute("href","tel:+22379915016");
    anchor.setAttribute("target","_blank");
    anchor.innerText = "Telephone";
    text.appendChild(anchor);
    text.innerHTML += " or via this form:";

    return text;
}


function formContent() {
    let form = document.createElement("form");
    form.classList.add("form","flex");
    form.setAttribute("action","#");

    let textarea = document.createElement("textarea");
    textarea.setAttribute("cols","150");
    textarea.setAttribute("rows","15");

    let btn = document.createElement("button");
    btn.innerText = "Send";

    form.append(textarea,btn);

    return form;
}

function createContent() {
    let divContent = document.createElement("div");
    divContent.classList.add("content","flex");
    divContent.append( textContent(), formContent() );
    return divContent;
}

export default function(){
    document.querySelector(".main").append(
        createTitle("Contacts"),
        createContent(),
    )
}