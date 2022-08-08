import pageInit from "./pageInit";
import about from "./about";
import contact from "./contact";
import menu from "./menu";

export function createTitle(string) {
    let title = document.createElement("h2");
    title.classList.add("title");
    title.innerText = string;
    return title;
}

export function init(){
    let main = document.querySelector(".main").innerHTML = "";
    if (main.childNodes) {
        for (const child of main.childNodes) {
            main.remove(child);
        }
    }
}

export function pageSelect(page) {
    init();
    if (page=="about") {
        about();
    }else if (page=="contact") {
        contact();
    }else{
        menu();
    }
}

export function firstLoad(){
    pageInit();
    pageSelect("about");
}