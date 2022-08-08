function createLogo() {
    let logo = document.createElement("h1");
    logo.setAttribute("id","logo");
    let span = document.createElement("span");
    span.innerText="My";
    logo.append(span,"Diet Mali");
    return logo;
}

function createNav() {
    let navUl = document.createElement("ul");
    navUl.classList.add("nav","flex");

    let menuLi = document.createElement("li");
    menuLi.setAttribute("id","menu");
    menuLi.innerText= "Menu";

    let aboutLi = document.createElement("li");
    aboutLi.setAttribute("id","about");
    aboutLi.innerText= "About";

    let contactLi = document.createElement("li");
    contactLi.setAttribute("id","contact");
    contactLi.innerText= "Contact";
    
    navUl.append(
        menuLi,aboutLi,contactLi
    );
    return navUl;
}

function headerDiv() {

    let headerDiv = document.createElement("div");
    headerDiv.classList.add("header","flex");
    headerDiv.append(createLogo(),createNav());
    return headerDiv;
}

function mainDiv() {
    let mainDiv = document.createElement("div");
    mainDiv.classList.add("main","flex");
    return mainDiv;
}

function footerDiv() {
    let footerDiv = document.createElement("div");
    footerDiv.classList.add("footer","flex");
    footerDiv.innerText="MyDiet Mali 2022";
    return footerDiv;
}

export default function (){
    document.querySelector(".wrapper").append(
        headerDiv(),
        mainDiv(),
        footerDiv()
    )
}