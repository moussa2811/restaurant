/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/pages/functions.js");


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

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    document.querySelector(".main").append(
        (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createTitle)("My Diet Mali by Tatou Solidarite"),
        createContent(),
    )
}

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/pages/functions.js");


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

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    document.querySelector(".main").append(
        (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createTitle)("Contacts"),
        createContent(),
    )
}

/***/ }),

/***/ "./src/pages/functions.js":
/*!********************************!*\
  !*** ./src/pages/functions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTitle": () => (/* binding */ createTitle),
/* harmony export */   "firstLoad": () => (/* binding */ firstLoad),
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "pageSelect": () => (/* binding */ pageSelect)
/* harmony export */ });
/* harmony import */ var _pageInit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageInit */ "./src/pages/pageInit.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ "./src/pages/about.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/pages/contact.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/pages/menu.js");





function createTitle(string) {
    let title = document.createElement("h2");
    title.classList.add("title");
    title.innerText = string;
    return title;
}

function init(){
    let main = document.querySelector(".main").innerHTML = "";
    if (main.childNodes) {
        for (const child of main.childNodes) {
            main.remove(child);
        }
    }
}

function pageSelect(page) {
    init();
    if (page=="about") {
        (0,_about__WEBPACK_IMPORTED_MODULE_1__["default"])();
    }else if (page=="contact") {
        (0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
    }else{
        (0,_menu__WEBPACK_IMPORTED_MODULE_3__["default"])();
    }
}

function firstLoad(){
    (0,_pageInit__WEBPACK_IMPORTED_MODULE_0__["default"])();
    pageSelect("about");
}

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/pages/functions.js");


const menus = [
    {
        name : "Zamin",
        link : "https://scontent.fbko4-1.fna.fbcdn.net/v/t39.30808-6/292378505_171889371996240_1324336053329073844_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=M4ztXyH_xdoAX9YE_dF&tn=HINv3FwEsRXc_7Bv&_nc_ht=scontent.fbko4-1.fna&oh=00_AT8HqvHM-fTHkjno5wT-KDeW0oDGqvj62fiX7e24jMHOkQ&oe=62F3F3D4"
    },
    {
        name : "Tchiep Poulet",
        link : "https://scontent.fbko4-2.fna.fbcdn.net/v/t39.30808-6/297480189_178428434675667_7615958816903077419_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=QiYopwYMtKgAX-xBfwn&_nc_ht=scontent.fbko4-2.fna&oh=00_AT-gO75pc5boa_kf_vb9QwRJc79tHosNDWVAd5gxQDiKOQ&oe=62F58182"
    },
    {
        name : "Tchiep Ananas",
        link : "https://scontent.fbko4-1.fna.fbcdn.net/v/t39.30808-6/272059944_127214009797110_1445570484786842594_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=IQiLVxor7MkAX-XoRHY&_nc_ht=scontent.fbko4-1.fna&oh=00_AT-ZT-ti1D8eZwmuuZWwWR4O4dwZfdqQG8dz_cYRz2zHKQ&oe=62F49D9D"
    },
    {
        name : "Attieke",
        link : "https://scontent.fbko4-2.fna.fbcdn.net/v/t39.30808-6/296586106_178213314697179_5628818894996567390_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=oeB4vBdt3xkAX8yZ7Ea&_nc_ht=scontent.fbko4-2.fna&oh=00_AT9twy-OVV3dGxpsudRe6_DsgRRRh3e2iJVcKIXFuszSzA&oe=62F4D644"
    },
    {
        name : "Salade de legumes",
        link : "https://scontent.fbko4-1.fna.fbcdn.net/v/t39.30808-6/271490247_124130983438746_9059170993344319916_n.jpg?stp=dst-jpg_s600x600&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=xfgL6SjcAF4AX8UTzO5&_nc_ht=scontent.fbko4-1.fna&oh=00_AT9Yj64vV9BYqe9YxvkIpK55w8TraROjM8yenpu8Dc711Q&oe=62F441D2"
    },
    {
        name : "Sauce legumes",
        link : "https://scontent.fbko4-2.fna.fbcdn.net/v/t39.30808-6/273207352_131634342688410_216272328655339041_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=gEMM96duFZgAX-BYY56&_nc_ht=scontent.fbko4-2.fna&oh=00_AT-4sKfK7DwtP9boWXY6qkYTU-L6hGEn1BA9QYKKmWDaYQ&oe=62F3E7B8"
    },
    {
        name : "Soupe Legumes",
        link : "https://scontent.fbko4-1.fna.fbcdn.net/v/t39.30808-6/295129149_175672901617887_4323055613426639661_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=saA3Q-80-uAAX8RqFF4&_nc_ht=scontent.fbko4-1.fna&oh=00_AT9AcPJutBIKYlZhnUtoh06wvoB29-ECeWsXyEWm1I5AHg&oe=62F400FA"
    },
    {
        name : "Sauces legumes",
        link : "https://scontent.fbko4-1.fna.fbcdn.net/v/t39.30808-6/271443256_123807976804380_8097191196205376320_n.jpg?stp=dst-jpg_p526x395&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=c5byNVfeWWIAX_v-PvE&_nc_ht=scontent.fbko4-1.fna&oh=00_AT_cQJxW_UeieXWyuh6S5TnhtkbCF5Ynmw_mrAdCcYnYzA&oe=62F52E50"
    }
]

function createContent() {
    let divContent = document.createElement("div");
    divContent.classList.add("menus");

    for (const menu of menus) {
        let div = document.createElement("div");
        div.classList.add("menu","flex");

        let name = document.createElement("h3");
        name.innerText = menu.name;
        let img = document.createElement("img");
        img.src = menu.link;
        div.append(name,img);
        divContent.appendChild(div)
    }

    let text = document.createElement("p");
    text.innerText = "For more click ";
    let anchor = document.createElement("a");
    anchor.innerText = "here"
    anchor.setAttribute("href","https://www.facebook.com/mydietmali/");
    anchor.setAttribute("target","_blank");
    text.appendChild(anchor);
    text.innerHTML += ".";

    divContent.appendChild( text );
    return divContent;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    document.querySelector(".main").append(
        (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createTitle)("Menu"),
        createContent(),
    )
}

/***/ }),

/***/ "./src/pages/pageInit.js":
/*!*******************************!*\
  !*** ./src/pages/pageInit.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    document.querySelector(".wrapper").append(
        headerDiv(),
        mainDiv(),
        footerDiv()
    )
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/functions */ "./src/pages/functions.js");


(0,_pages_functions__WEBPACK_IMPORTED_MODULE_0__.firstLoad)();

const logoBtn = document.querySelector("#logo");
logoBtn.addEventListener("click",
    ()=>{
        let activeTab = document.querySelector(".active");
        if (activeTab) {
            activeTab.classList.remove("active");
        }
        (0,_pages_functions__WEBPACK_IMPORTED_MODULE_0__.pageSelect)("about");
    }
)

const btnList = Array.from(document.querySelectorAll("nav li"));
btnList.forEach(
    (btn)=>{
        btn.addEventListener("click",
            ()=>{
                let activeTab = document.querySelector(".active");
                if (activeTab) {
                    if (activeTab.id !== btn.id) {
                        activeTab.classList.remove("active");
                        btn.classList.add("active");
                        (0,_pages_functions__WEBPACK_IMPORTED_MODULE_0__.pageSelect)(btn.id);
                    }
                }else{
                    btn.classList.add("active");
                    (0,_pages_functions__WEBPACK_IMPORTED_MODULE_0__.pageSelect)(btn.id);
                }
            }
        )
    }
)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNERBQVU7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw0REFBVTtBQUNsQztBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLG9CQUFvQiw0REFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3BhZ2VzL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvcGFnZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3BhZ2VzL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3BhZ2VzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9wYWdlcy9wYWdlSW5pdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVUaXRsZSB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuXG5jb25zdCBzZXJ2aWNlcyA9IFtcbiAgICBcIk51dHJpdGlvbmFsIGFzc2Vzc21lbnQsXCIsXG4gICAgXCJOdXRyaXRpb25hbCBtb25pdG9yaW5nLFwiLFxuICAgIFwiQWR2aWNlIGZvciBhbiBhZGFwdGVkIG51dHJpdGlvbmFsIHJlZ2ltZSBpbiBjYXNlIG9mIHNwZWNpZmljIGlsbG5lc3NlcyxcIixcbiAgICBcIlBlcnNvbmFsaXplZCBkaWV0YXJ5IGFkdmljZSxcIixcbiAgICBcIkNhdGVyaW5nIHNlcnZpY2UsXCIsXG4gICAgXCJTbGltbWluZyBwcm9ncmFtcyxcIixcbiAgICBcIlByZWduYW5jeSBhbmQgYnJlYXN0ZmVlZGluZyBwcm9ncmFtLFwiLFxuICAgIFwiU3BvcnRcIlxuXTtcblxuY29uc3QgdGVhbSA9IFtcbiAgICBcIlByIEFrb3J5IEFnIElrbmFuZSwgbnV0cml0aW9uYWwgZXhwZXJ0XCIsXG4gICAgXCJQaGQgWWFjb3ViYSBLb25lLCBudXRyaXRpb25hbCBleHBlcnRcIixcbiAgICBcIkxhc3NpbmEgS2FuZSwgbnV0cml0aW9uaXN0XCIsXG4gICAgXCJEaXBhIFRyYW9yZSwgc3BvcnRzIGNvYWNoXCJcbl07XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpc3QobGlzdCkge1xuICAgIGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgbGlzdCkge1xuICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIGxpLmlubmVyVGV4dCA9IGl0ZW07XG4gICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICB9XG4gICAgcmV0dXJuIHVsO1xufVxuXG5mdW5jdGlvbiBhYm91dENvbnRlbnQoKSB7XG4gICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0XCIpO1xuICAgIHRleHQuaW5uZXJUZXh0ID0gXCJXaXRoIGEgcXVhbGl0eSB0ZWFtLCBNeURpZXQgTWFsaSBoZWxwIHlvdSByZWdhaW4gY29udHJvbCBvZiB5b3VyIGhlYWx0aCB3aXRoIHF1YWxpdHkgc2VydmljZXMgbGlrZTpcIjtcbiAgICB0ZXh0LmFwcGVuZENoaWxkKCBjcmVhdGVMaXN0KHNlcnZpY2VzKSApO1xuICAgIHRleHQuaW5uZXJIVE1MICs9IFwiYWxsIHN1cGVydmlzZWQgYnkgb3VyIGdyZWF0IHRlYW06XCI7XG4gICAgdGV4dC5hcHBlbmRDaGlsZCggY3JlYXRlTGlzdCh0ZWFtKSApO1xuICAgIHJldHVybiB0ZXh0O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250ZW50KCkge1xuICAgIGxldCBkaXZDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xuICAgIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRDb250ZW50KCkpO1xuICAgIHJldHVybiBkaXZDb250ZW50O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKS5hcHBlbmQoXG4gICAgICAgIGNyZWF0ZVRpdGxlKFwiTXkgRGlldCBNYWxpIGJ5IFRhdG91IFNvbGlkYXJpdGVcIiksXG4gICAgICAgIGNyZWF0ZUNvbnRlbnQoKSxcbiAgICApXG59IiwiaW1wb3J0IHsgY3JlYXRlVGl0bGUgfSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcblxuZnVuY3Rpb24gdGV4dENvbnRlbnQoKSB7XG4gICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0ZXh0LmlubmVyVGV4dCA9IFwiWW91IGNhbiBqb2luIHVzIHZpYSBvdXIgXCI7XG4gICAgbGV0IGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXG4gICAgYW5jaG9yLnNldEF0dHJpYnV0ZShcImhyZWZcIixcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9teWRpZXRtYWxpL1wiKTtcbiAgICBhbmNob3Iuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsXCJfYmxhbmtcIik7XG4gICAgYW5jaG9yLmlubmVyVGV4dCA9IFwiRmFjZWJvb2tcIjtcbiAgICB0ZXh0LmFwcGVuZENoaWxkKGFuY2hvcik7XG5cbiAgICB0ZXh0LmlubmVySFRNTCArPSBcIiwgXCI7XG5cbiAgICBhbmNob3Iuc2V0QXR0cmlidXRlKFwiaHJlZlwiLFwidGVsOisyMjM3OTkxNTAxNlwiKTtcbiAgICBhbmNob3Iuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsXCJfYmxhbmtcIik7XG4gICAgYW5jaG9yLmlubmVyVGV4dCA9IFwiVGVsZXBob25lXCI7XG4gICAgdGV4dC5hcHBlbmRDaGlsZChhbmNob3IpO1xuICAgIHRleHQuaW5uZXJIVE1MICs9IFwiIG9yIHZpYSB0aGlzIGZvcm06XCI7XG5cbiAgICByZXR1cm4gdGV4dDtcbn1cblxuXG5mdW5jdGlvbiBmb3JtQ29udGVudCgpIHtcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcImZvcm1cIixcImZsZXhcIik7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIixcIiNcIik7XG5cbiAgICBsZXQgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgdGV4dGFyZWEuc2V0QXR0cmlidXRlKFwiY29sc1wiLFwiMTUwXCIpO1xuICAgIHRleHRhcmVhLnNldEF0dHJpYnV0ZShcInJvd3NcIixcIjE1XCIpO1xuXG4gICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnRuLmlubmVyVGV4dCA9IFwiU2VuZFwiO1xuXG4gICAgZm9ybS5hcHBlbmQodGV4dGFyZWEsYnRuKTtcblxuICAgIHJldHVybiBmb3JtO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250ZW50KCkge1xuICAgIGxldCBkaXZDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIsXCJmbGV4XCIpO1xuICAgIGRpdkNvbnRlbnQuYXBwZW5kKCB0ZXh0Q29udGVudCgpLCBmb3JtQ29udGVudCgpICk7XG4gICAgcmV0dXJuIGRpdkNvbnRlbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpLmFwcGVuZChcbiAgICAgICAgY3JlYXRlVGl0bGUoXCJDb250YWN0c1wiKSxcbiAgICAgICAgY3JlYXRlQ29udGVudCgpLFxuICAgIClcbn0iLCJpbXBvcnQgcGFnZUluaXQgZnJvbSBcIi4vcGFnZUluaXRcIjtcbmltcG9ydCBhYm91dCBmcm9tIFwiLi9hYm91dFwiO1xuaW1wb3J0IGNvbnRhY3QgZnJvbSBcIi4vY29udGFjdFwiO1xuaW1wb3J0IG1lbnUgZnJvbSBcIi4vbWVudVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGl0bGUoc3RyaW5nKSB7XG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICB0aXRsZS5pbm5lclRleHQgPSBzdHJpbmc7XG4gICAgcmV0dXJuIHRpdGxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdCgpe1xuICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpLmlubmVySFRNTCA9IFwiXCI7XG4gICAgaWYgKG1haW4uY2hpbGROb2Rlcykge1xuICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIG1haW4uY2hpbGROb2Rlcykge1xuICAgICAgICAgICAgbWFpbi5yZW1vdmUoY2hpbGQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFnZVNlbGVjdChwYWdlKSB7XG4gICAgaW5pdCgpO1xuICAgIGlmIChwYWdlPT1cImFib3V0XCIpIHtcbiAgICAgICAgYWJvdXQoKTtcbiAgICB9ZWxzZSBpZiAocGFnZT09XCJjb250YWN0XCIpIHtcbiAgICAgICAgY29udGFjdCgpO1xuICAgIH1lbHNle1xuICAgICAgICBtZW51KCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlyc3RMb2FkKCl7XG4gICAgcGFnZUluaXQoKTtcbiAgICBwYWdlU2VsZWN0KFwiYWJvdXRcIik7XG59IiwiaW1wb3J0IHsgY3JlYXRlVGl0bGUgfSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcblxuY29uc3QgbWVudXMgPSBbXG4gICAge1xuICAgICAgICBuYW1lIDogXCJaYW1pblwiLFxuICAgICAgICBsaW5rIDogXCJodHRwczovL3Njb250ZW50LmZia280LTEuZm5hLmZiY2RuLm5ldC92L3QzOS4zMDgwOC02LzI5MjM3ODUwNV8xNzE4ODkzNzE5OTYyNDBfMTMyNDMzNjA1MzMyOTA3Mzg0NF9uLmpwZz9fbmNfY2F0PTExMSZjY2I9MS03Jl9uY19zaWQ9OGJmZWI5Jl9uY19vaGM9TTR6dFh5SF94ZG9BWDlZRV9kRiZ0bj1ISU52M0Z3RXNSWGNfN0J2Jl9uY19odD1zY29udGVudC5mYmtvNC0xLmZuYSZvaD0wMF9BVDhIcXZITS1mVEhram5vNXdULUtEZVcwb0RHcXZqNjJmaVg3ZTI0ak1IT2tRJm9lPTYyRjNGM0Q0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZSA6IFwiVGNoaWVwIFBvdWxldFwiLFxuICAgICAgICBsaW5rIDogXCJodHRwczovL3Njb250ZW50LmZia280LTIuZm5hLmZiY2RuLm5ldC92L3QzOS4zMDgwOC02LzI5NzQ4MDE4OV8xNzg0Mjg0MzQ2NzU2NjdfNzYxNTk1ODgxNjkwMzA3NzQxOV9uLmpwZz9fbmNfY2F0PTEwOSZjY2I9MS03Jl9uY19zaWQ9OGJmZWI5Jl9uY19vaGM9UWlZb3B3WU10S2dBWC14QmZ3biZfbmNfaHQ9c2NvbnRlbnQuZmJrbzQtMi5mbmEmb2g9MDBfQVQtZ083NXBjNWJvYV9rZl92YjlRd1JKYzc5dEhvc05EV1ZBZDVneFFEaUtPUSZvZT02MkY1ODE4MlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWUgOiBcIlRjaGllcCBBbmFuYXNcIixcbiAgICAgICAgbGluayA6IFwiaHR0cHM6Ly9zY29udGVudC5mYmtvNC0xLmZuYS5mYmNkbi5uZXQvdi90MzkuMzA4MDgtNi8yNzIwNTk5NDRfMTI3MjE0MDA5Nzk3MTEwXzE0NDU1NzA0ODQ3ODY4NDI1OTRfbi5qcGc/X25jX2NhdD0xMTAmY2NiPTEtNyZfbmNfc2lkPThiZmViOSZfbmNfb2hjPUlRaUxWeG9yN01rQVgtWG9SSFkmX25jX2h0PXNjb250ZW50LmZia280LTEuZm5hJm9oPTAwX0FULVpULXRpMUQ4ZVp3bXV1Wld3V1I0TzRkd1pmZHFRRzhkel9jWVJ6MnpIS1Emb2U9NjJGNDlEOURcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lIDogXCJBdHRpZWtlXCIsXG4gICAgICAgIGxpbmsgOiBcImh0dHBzOi8vc2NvbnRlbnQuZmJrbzQtMi5mbmEuZmJjZG4ubmV0L3YvdDM5LjMwODA4LTYvMjk2NTg2MTA2XzE3ODIxMzMxNDY5NzE3OV81NjI4ODE4ODk0OTk2NTY3MzkwX24uanBnP19uY19jYXQ9MTAyJmNjYj0xLTcmX25jX3NpZD04YmZlYjkmX25jX29oYz1vZUI0dkJkdDN4a0FYOHlaN0VhJl9uY19odD1zY29udGVudC5mYmtvNC0yLmZuYSZvaD0wMF9BVDl0d3ktT1ZWM2RHeHBzdWRSZTZfRHNnUlJSaDNlMmlKVmNLSVhGdXN6U3pBJm9lPTYyRjRENjQ0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZSA6IFwiU2FsYWRlIGRlIGxlZ3VtZXNcIixcbiAgICAgICAgbGluayA6IFwiaHR0cHM6Ly9zY29udGVudC5mYmtvNC0xLmZuYS5mYmNkbi5uZXQvdi90MzkuMzA4MDgtNi8yNzE0OTAyNDdfMTI0MTMwOTgzNDM4NzQ2XzkwNTkxNzA5OTMzNDQzMTk5MTZfbi5qcGc/c3RwPWRzdC1qcGdfczYwMHg2MDAmX25jX2NhdD0xMDgmY2NiPTEtNyZfbmNfc2lkPThiZmViOSZfbmNfb2hjPXhmZ0w2U2pjQUY0QVg4VVR6TzUmX25jX2h0PXNjb250ZW50LmZia280LTEuZm5hJm9oPTAwX0FUOVlqNjR2VjlCWXFlOVl4dmtJcEs1NXc4VHJhUk9qTTh5ZW5wdThEYzcxMVEmb2U9NjJGNDQxRDJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lIDogXCJTYXVjZSBsZWd1bWVzXCIsXG4gICAgICAgIGxpbmsgOiBcImh0dHBzOi8vc2NvbnRlbnQuZmJrbzQtMi5mbmEuZmJjZG4ubmV0L3YvdDM5LjMwODA4LTYvMjczMjA3MzUyXzEzMTYzNDM0MjY4ODQxMF8yMTYyNzIzMjg2NTUzMzkwNDFfbi5qcGc/X25jX2NhdD0xMDcmY2NiPTEtNyZfbmNfc2lkPThiZmViOSZfbmNfb2hjPWdFTU05NmR1RlpnQVgtQllZNTYmX25jX2h0PXNjb250ZW50LmZia280LTIuZm5hJm9oPTAwX0FULTRzS2ZLN0R3dFA5Ym9XWFk2cWtZVFUtTDZoR0VuMUJBOVFZS0ttV0RhWVEmb2U9NjJGM0U3QjhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lIDogXCJTb3VwZSBMZWd1bWVzXCIsXG4gICAgICAgIGxpbmsgOiBcImh0dHBzOi8vc2NvbnRlbnQuZmJrbzQtMS5mbmEuZmJjZG4ubmV0L3YvdDM5LjMwODA4LTYvMjk1MTI5MTQ5XzE3NTY3MjkwMTYxNzg4N180MzIzMDU1NjEzNDI2NjM5NjYxX24uanBnP19uY19jYXQ9MTEwJmNjYj0xLTcmX25jX3NpZD04YmZlYjkmX25jX29oYz1zYUEzUS04MC11QUFYOFJxRkY0Jl9uY19odD1zY29udGVudC5mYmtvNC0xLmZuYSZvaD0wMF9BVDlBY1BKdXRCSUtZbFpoblV0b2gwNnd2b0IyOS1FQ2VXc1h5RVdtMUk1QUhnJm9lPTYyRjQwMEZBXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZSA6IFwiU2F1Y2VzIGxlZ3VtZXNcIixcbiAgICAgICAgbGluayA6IFwiaHR0cHM6Ly9zY29udGVudC5mYmtvNC0xLmZuYS5mYmNkbi5uZXQvdi90MzkuMzA4MDgtNi8yNzE0NDMyNTZfMTIzODA3OTc2ODA0MzgwXzgwOTcxOTExOTYyMDUzNzYzMjBfbi5qcGc/c3RwPWRzdC1qcGdfcDUyNngzOTUmX25jX2NhdD0xMTEmY2NiPTEtNyZfbmNfc2lkPThiZmViOSZfbmNfb2hjPWM1YnlOVmZlV1dJQVhfdi1QdkUmX25jX2h0PXNjb250ZW50LmZia280LTEuZm5hJm9oPTAwX0FUX2NRSnhXX1VlaWVYV3l1aDZTNVRuaHRrYkNGNVlubXdfbXJBZENjWW5ZekEmb2U9NjJGNTJFNTBcIlxuICAgIH1cbl1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGVudCgpIHtcbiAgICBsZXQgZGl2Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2Q29udGVudC5jbGFzc0xpc3QuYWRkKFwibWVudXNcIik7XG5cbiAgICBmb3IgKGNvbnN0IG1lbnUgb2YgbWVudXMpIHtcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwibWVudVwiLFwiZmxleFwiKTtcblxuICAgICAgICBsZXQgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICAgbmFtZS5pbm5lclRleHQgPSBtZW51Lm5hbWU7XG4gICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBpbWcuc3JjID0gbWVudS5saW5rO1xuICAgICAgICBkaXYuYXBwZW5kKG5hbWUsaW1nKTtcbiAgICAgICAgZGl2Q29udGVudC5hcHBlbmRDaGlsZChkaXYpXG4gICAgfVxuXG4gICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0ZXh0LmlubmVyVGV4dCA9IFwiRm9yIG1vcmUgY2xpY2sgXCI7XG4gICAgbGV0IGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGFuY2hvci5pbm5lclRleHQgPSBcImhlcmVcIlxuICAgIGFuY2hvci5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsXCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vbXlkaWV0bWFsaS9cIik7XG4gICAgYW5jaG9yLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLFwiX2JsYW5rXCIpO1xuICAgIHRleHQuYXBwZW5kQ2hpbGQoYW5jaG9yKTtcbiAgICB0ZXh0LmlubmVySFRNTCArPSBcIi5cIjtcblxuICAgIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQoIHRleHQgKTtcbiAgICByZXR1cm4gZGl2Q29udGVudDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIikuYXBwZW5kKFxuICAgICAgICBjcmVhdGVUaXRsZShcIk1lbnVcIiksXG4gICAgICAgIGNyZWF0ZUNvbnRlbnQoKSxcbiAgICApXG59IiwiZnVuY3Rpb24gY3JlYXRlTG9nbygpIHtcbiAgICBsZXQgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBsb2dvLnNldEF0dHJpYnV0ZShcImlkXCIsXCJsb2dvXCIpO1xuICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgc3Bhbi5pbm5lclRleHQ9XCJNeVwiO1xuICAgIGxvZ28uYXBwZW5kKHNwYW4sXCJEaWV0IE1hbGlcIik7XG4gICAgcmV0dXJuIGxvZ287XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdigpIHtcbiAgICBsZXQgbmF2VWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgbmF2VWwuY2xhc3NMaXN0LmFkZChcIm5hdlwiLFwiZmxleFwiKTtcblxuICAgIGxldCBtZW51TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbWVudUxpLnNldEF0dHJpYnV0ZShcImlkXCIsXCJtZW51XCIpO1xuICAgIG1lbnVMaS5pbm5lclRleHQ9IFwiTWVudVwiO1xuXG4gICAgbGV0IGFib3V0TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgYWJvdXRMaS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiYWJvdXRcIik7XG4gICAgYWJvdXRMaS5pbm5lclRleHQ9IFwiQWJvdXRcIjtcblxuICAgIGxldCBjb250YWN0TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29udGFjdExpLnNldEF0dHJpYnV0ZShcImlkXCIsXCJjb250YWN0XCIpO1xuICAgIGNvbnRhY3RMaS5pbm5lclRleHQ9IFwiQ29udGFjdFwiO1xuICAgIFxuICAgIG5hdlVsLmFwcGVuZChcbiAgICAgICAgbWVudUxpLGFib3V0TGksY29udGFjdExpXG4gICAgKTtcbiAgICByZXR1cm4gbmF2VWw7XG59XG5cbmZ1bmN0aW9uIGhlYWRlckRpdigpIHtcblxuICAgIGxldCBoZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlckRpdi5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIsXCJmbGV4XCIpO1xuICAgIGhlYWRlckRpdi5hcHBlbmQoY3JlYXRlTG9nbygpLGNyZWF0ZU5hdigpKTtcbiAgICByZXR1cm4gaGVhZGVyRGl2O1xufVxuXG5mdW5jdGlvbiBtYWluRGl2KCkge1xuICAgIGxldCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluRGl2LmNsYXNzTGlzdC5hZGQoXCJtYWluXCIsXCJmbGV4XCIpO1xuICAgIHJldHVybiBtYWluRGl2O1xufVxuXG5mdW5jdGlvbiBmb290ZXJEaXYoKSB7XG4gICAgbGV0IGZvb3RlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9vdGVyRGl2LmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIixcImZsZXhcIik7XG4gICAgZm9vdGVyRGl2LmlubmVyVGV4dD1cIk15RGlldCBNYWxpIDIwMjJcIjtcbiAgICByZXR1cm4gZm9vdGVyRGl2O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndyYXBwZXJcIikuYXBwZW5kKFxuICAgICAgICBoZWFkZXJEaXYoKSxcbiAgICAgICAgbWFpbkRpdigpLFxuICAgICAgICBmb290ZXJEaXYoKVxuICAgIClcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7Zmlyc3RMb2FkLHBhZ2VTZWxlY3R9IGZyb20gXCIuL3BhZ2VzL2Z1bmN0aW9uc1wiXG5cbmZpcnN0TG9hZCgpO1xuXG5jb25zdCBsb2dvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2dvXCIpO1xubG9nb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixcbiAgICAoKT0+e1xuICAgICAgICBsZXQgYWN0aXZlVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVcIik7XG4gICAgICAgIGlmIChhY3RpdmVUYWIpIHtcbiAgICAgICAgICAgIGFjdGl2ZVRhYi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhZ2VTZWxlY3QoXCJhYm91dFwiKTtcbiAgICB9XG4pXG5cbmNvbnN0IGJ0bkxpc3QgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJuYXYgbGlcIikpO1xuYnRuTGlzdC5mb3JFYWNoKFxuICAgIChidG4pPT57XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixcbiAgICAgICAgICAgICgpPT57XG4gICAgICAgICAgICAgICAgbGV0IGFjdGl2ZVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgIGlmIChhY3RpdmVUYWIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGl2ZVRhYi5pZCAhPT0gYnRuLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVUYWIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVNlbGVjdChidG4uaWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgICAgICBwYWdlU2VsZWN0KGJ0bi5pZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==