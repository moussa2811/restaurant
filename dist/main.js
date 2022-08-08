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
    
    const btnList = Array.from(document.querySelectorAll(".nav li"));
    
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
    //# sourceMappingURL=data:application/json;charset=utf-8;base64,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VDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNERBQVU7QUFDbEI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNERBQVU7QUFDbEM7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxvQkFBb0IsNERBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9wYWdlcy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3BhZ2VzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9wYWdlcy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9wYWdlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvcGFnZXMvcGFnZUluaXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlVGl0bGUgfSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcblxuY29uc3Qgc2VydmljZXMgPSBbXG4gICAgXCJOdXRyaXRpb25hbCBhc3Nlc3NtZW50LFwiLFxuICAgIFwiTnV0cml0aW9uYWwgbW9uaXRvcmluZyxcIixcbiAgICBcIkFkdmljZSBmb3IgYW4gYWRhcHRlZCBudXRyaXRpb25hbCByZWdpbWUgaW4gY2FzZSBvZiBzcGVjaWZpYyBpbGxuZXNzZXMsXCIsXG4gICAgXCJQZXJzb25hbGl6ZWQgZGlldGFyeSBhZHZpY2UsXCIsXG4gICAgXCJDYXRlcmluZyBzZXJ2aWNlLFwiLFxuICAgIFwiU2xpbW1pbmcgcHJvZ3JhbXMsXCIsXG4gICAgXCJQcmVnbmFuY3kgYW5kIGJyZWFzdGZlZWRpbmcgcHJvZ3JhbSxcIixcbiAgICBcIlNwb3J0XCJcbl07XG5cbmNvbnN0IHRlYW0gPSBbXG4gICAgXCJQciBBa29yeSBBZyBJa25hbmUsIG51dHJpdGlvbmFsIGV4cGVydFwiLFxuICAgIFwiUGhkIFlhY291YmEgS29uZSwgbnV0cml0aW9uYWwgZXhwZXJ0XCIsXG4gICAgXCJMYXNzaW5hIEthbmUsIG51dHJpdGlvbmlzdFwiLFxuICAgIFwiRGlwYSBUcmFvcmUsIHNwb3J0cyBjb2FjaFwiXG5dO1xuXG5mdW5jdGlvbiBjcmVhdGVMaXN0KGxpc3QpIHtcbiAgICBsZXQgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGxpc3QpIHtcbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBsaS5pbm5lclRleHQgPSBpdGVtO1xuICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgfVxuICAgIHJldHVybiB1bDtcbn1cblxuZnVuY3Rpb24gYWJvdXRDb250ZW50KCkge1xuICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGV4dC5jbGFzc0xpc3QuYWRkKFwidGV4dFwiKTtcbiAgICB0ZXh0LmlubmVyVGV4dCA9IFwiV2l0aCBhIHF1YWxpdHkgdGVhbSwgTXlEaWV0IE1hbGkgaGVscCB5b3UgcmVnYWluIGNvbnRyb2wgb2YgeW91ciBoZWFsdGggd2l0aCBxdWFsaXR5IHNlcnZpY2VzIGxpa2U6XCI7XG4gICAgdGV4dC5hcHBlbmRDaGlsZCggY3JlYXRlTGlzdChzZXJ2aWNlcykgKTtcbiAgICB0ZXh0LmlubmVySFRNTCArPSBcImFsbCBzdXBlcnZpc2VkIGJ5IG91ciBncmVhdCB0ZWFtOlwiO1xuICAgIHRleHQuYXBwZW5kQ2hpbGQoIGNyZWF0ZUxpc3QodGVhbSkgKTtcbiAgICByZXR1cm4gdGV4dDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGVudCgpIHtcbiAgICBsZXQgZGl2Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2Q29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKTtcbiAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKGFib3V0Q29udGVudCgpKTtcbiAgICByZXR1cm4gZGl2Q29udGVudDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIikuYXBwZW5kKFxuICAgICAgICBjcmVhdGVUaXRsZShcIk15IERpZXQgTWFsaSBieSBUYXRvdSBTb2xpZGFyaXRlXCIpLFxuICAgICAgICBjcmVhdGVDb250ZW50KCksXG4gICAgKVxufSIsImltcG9ydCB7IGNyZWF0ZVRpdGxlIH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5cbmZ1bmN0aW9uIHRleHRDb250ZW50KCkge1xuICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGV4dC5pbm5lclRleHQgPSBcIllvdSBjYW4gam9pbiB1cyB2aWEgb3VyIFwiO1xuICAgIGxldCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblxuICAgIGFuY2hvci5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsXCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vbXlkaWV0bWFsaS9cIik7XG4gICAgYW5jaG9yLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLFwiX2JsYW5rXCIpO1xuICAgIGFuY2hvci5pbm5lclRleHQgPSBcIkZhY2Vib29rXCI7XG4gICAgdGV4dC5hcHBlbmRDaGlsZChhbmNob3IpO1xuXG4gICAgdGV4dC5pbm5lckhUTUwgKz0gXCIsIFwiO1xuXG4gICAgYW5jaG9yLnNldEF0dHJpYnV0ZShcImhyZWZcIixcInRlbDorMjIzNzk5MTUwMTZcIik7XG4gICAgYW5jaG9yLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLFwiX2JsYW5rXCIpO1xuICAgIGFuY2hvci5pbm5lclRleHQgPSBcIlRlbGVwaG9uZVwiO1xuICAgIHRleHQuYXBwZW5kQ2hpbGQoYW5jaG9yKTtcbiAgICB0ZXh0LmlubmVySFRNTCArPSBcIiBvciB2aWEgdGhpcyBmb3JtOlwiO1xuXG4gICAgcmV0dXJuIHRleHQ7XG59XG5cblxuZnVuY3Rpb24gZm9ybUNvbnRlbnQoKSB7XG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJmb3JtXCIsXCJmbGV4XCIpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKFwiYWN0aW9uXCIsXCIjXCIpO1xuXG4gICAgbGV0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgIHRleHRhcmVhLnNldEF0dHJpYnV0ZShcImNvbHNcIixcIjE1MFwiKTtcbiAgICB0ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoXCJyb3dzXCIsXCIxNVwiKTtcblxuICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ0bi5pbm5lclRleHQgPSBcIlNlbmRcIjtcblxuICAgIGZvcm0uYXBwZW5kKHRleHRhcmVhLGJ0bik7XG5cbiAgICByZXR1cm4gZm9ybTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGVudCgpIHtcbiAgICBsZXQgZGl2Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2Q29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiLFwiZmxleFwiKTtcbiAgICBkaXZDb250ZW50LmFwcGVuZCggdGV4dENvbnRlbnQoKSwgZm9ybUNvbnRlbnQoKSApO1xuICAgIHJldHVybiBkaXZDb250ZW50O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKS5hcHBlbmQoXG4gICAgICAgIGNyZWF0ZVRpdGxlKFwiQ29udGFjdHNcIiksXG4gICAgICAgIGNyZWF0ZUNvbnRlbnQoKSxcbiAgICApXG59IiwiaW1wb3J0IHBhZ2VJbml0IGZyb20gXCIuL3BhZ2VJbml0XCI7XG5pbXBvcnQgYWJvdXQgZnJvbSBcIi4vYWJvdXRcIjtcbmltcG9ydCBjb250YWN0IGZyb20gXCIuL2NvbnRhY3RcIjtcbmltcG9ydCBtZW51IGZyb20gXCIuL21lbnVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRpdGxlKHN0cmluZykge1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gc3RyaW5nO1xuICAgIHJldHVybiB0aXRsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKXtcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGlmIChtYWluLmNoaWxkTm9kZXMpIHtcbiAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBtYWluLmNoaWxkTm9kZXMpIHtcbiAgICAgICAgICAgIG1haW4ucmVtb3ZlKGNoaWxkKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhZ2VTZWxlY3QocGFnZSkge1xuICAgIGluaXQoKTtcbiAgICBpZiAocGFnZT09XCJhYm91dFwiKSB7XG4gICAgICAgIGFib3V0KCk7XG4gICAgfWVsc2UgaWYgKHBhZ2U9PVwiY29udGFjdFwiKSB7XG4gICAgICAgIGNvbnRhY3QoKTtcbiAgICB9ZWxzZXtcbiAgICAgICAgbWVudSgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpcnN0TG9hZCgpe1xuICAgIHBhZ2VJbml0KCk7XG4gICAgcGFnZVNlbGVjdChcImFib3V0XCIpO1xufSIsImltcG9ydCB7IGNyZWF0ZVRpdGxlIH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5cbmNvbnN0IG1lbnVzID0gW1xuICAgIHtcbiAgICAgICAgbmFtZSA6IFwiWmFtaW5cIixcbiAgICAgICAgbGluayA6IFwiaHR0cHM6Ly9zY29udGVudC5mYmtvNC0xLmZuYS5mYmNkbi5uZXQvdi90MzkuMzA4MDgtNi8yOTIzNzg1MDVfMTcxODg5MzcxOTk2MjQwXzEzMjQzMzYwNTMzMjkwNzM4NDRfbi5qcGc/X25jX2NhdD0xMTEmY2NiPTEtNyZfbmNfc2lkPThiZmViOSZfbmNfb2hjPU00enRYeUhfeGRvQVg5WUVfZEYmdG49SElOdjNGd0VzUlhjXzdCdiZfbmNfaHQ9c2NvbnRlbnQuZmJrbzQtMS5mbmEmb2g9MDBfQVQ4SHF2SE0tZlRIa2pubzV3VC1LRGVXMG9ER3F2ajYyZmlYN2UyNGpNSE9rUSZvZT02MkYzRjNENFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWUgOiBcIlRjaGllcCBQb3VsZXRcIixcbiAgICAgICAgbGluayA6IFwiaHR0cHM6Ly9zY29udGVudC5mYmtvNC0yLmZuYS5mYmNkbi5uZXQvdi90MzkuMzA4MDgtNi8yOTc0ODAxODlfMTc4NDI4NDM0Njc1NjY3Xzc2MTU5NTg4MTY5MDMwNzc0MTlfbi5qcGc/X25jX2NhdD0xMDkmY2NiPTEtNyZfbmNfc2lkPThiZmViOSZfbmNfb2hjPVFpWW9wd1lNdEtnQVgteEJmd24mX25jX2h0PXNjb250ZW50LmZia280LTIuZm5hJm9oPTAwX0FULWdPNzVwYzVib2Ffa2ZfdmI5UXdSSmM3OXRIb3NORFdWQWQ1Z3hRRGlLT1Emb2U9NjJGNTgxODJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lIDogXCJUY2hpZXAgQW5hbmFzXCIsXG4gICAgICAgIGxpbmsgOiBcImh0dHBzOi8vc2NvbnRlbnQuZmJrbzQtMS5mbmEuZmJjZG4ubmV0L3YvdDM5LjMwODA4LTYvMjcyMDU5OTQ0XzEyNzIxNDAwOTc5NzExMF8xNDQ1NTcwNDg0Nzg2ODQyNTk0X24uanBnP19uY19jYXQ9MTEwJmNjYj0xLTcmX25jX3NpZD04YmZlYjkmX25jX29oYz1JUWlMVnhvcjdNa0FYLVhvUkhZJl9uY19odD1zY29udGVudC5mYmtvNC0xLmZuYSZvaD0wMF9BVC1aVC10aTFEOGVad211dVpXd1dSNE80ZHdaZmRxUUc4ZHpfY1lSejJ6SEtRJm9lPTYyRjQ5RDlEXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZSA6IFwiQXR0aWVrZVwiLFxuICAgICAgICBsaW5rIDogXCJodHRwczovL3Njb250ZW50LmZia280LTIuZm5hLmZiY2RuLm5ldC92L3QzOS4zMDgwOC02LzI5NjU4NjEwNl8xNzgyMTMzMTQ2OTcxNzlfNTYyODgxODg5NDk5NjU2NzM5MF9uLmpwZz9fbmNfY2F0PTEwMiZjY2I9MS03Jl9uY19zaWQ9OGJmZWI5Jl9uY19vaGM9b2VCNHZCZHQzeGtBWDh5WjdFYSZfbmNfaHQ9c2NvbnRlbnQuZmJrbzQtMi5mbmEmb2g9MDBfQVQ5dHd5LU9WVjNkR3hwc3VkUmU2X0RzZ1JSUmgzZTJpSlZjS0lYRnVzelN6QSZvZT02MkY0RDY0NFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWUgOiBcIlNhbGFkZSBkZSBsZWd1bWVzXCIsXG4gICAgICAgIGxpbmsgOiBcImh0dHBzOi8vc2NvbnRlbnQuZmJrbzQtMS5mbmEuZmJjZG4ubmV0L3YvdDM5LjMwODA4LTYvMjcxNDkwMjQ3XzEyNDEzMDk4MzQzODc0Nl85MDU5MTcwOTkzMzQ0MzE5OTE2X24uanBnP3N0cD1kc3QtanBnX3M2MDB4NjAwJl9uY19jYXQ9MTA4JmNjYj0xLTcmX25jX3NpZD04YmZlYjkmX25jX29oYz14ZmdMNlNqY0FGNEFYOFVUek81Jl9uY19odD1zY29udGVudC5mYmtvNC0xLmZuYSZvaD0wMF9BVDlZajY0dlY5QllxZTlZeHZrSXBLNTV3OFRyYVJPak04eWVucHU4RGM3MTFRJm9lPTYyRjQ0MUQyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZSA6IFwiU2F1Y2UgbGVndW1lc1wiLFxuICAgICAgICBsaW5rIDogXCJodHRwczovL3Njb250ZW50LmZia280LTIuZm5hLmZiY2RuLm5ldC92L3QzOS4zMDgwOC02LzI3MzIwNzM1Ml8xMzE2MzQzNDI2ODg0MTBfMjE2MjcyMzI4NjU1MzM5MDQxX24uanBnP19uY19jYXQ9MTA3JmNjYj0xLTcmX25jX3NpZD04YmZlYjkmX25jX29oYz1nRU1NOTZkdUZaZ0FYLUJZWTU2Jl9uY19odD1zY29udGVudC5mYmtvNC0yLmZuYSZvaD0wMF9BVC00c0tmSzdEd3RQOWJvV1hZNnFrWVRVLUw2aEdFbjFCQTlRWUtLbVdEYVlRJm9lPTYyRjNFN0I4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZSA6IFwiU291cGUgTGVndW1lc1wiLFxuICAgICAgICBsaW5rIDogXCJodHRwczovL3Njb250ZW50LmZia280LTEuZm5hLmZiY2RuLm5ldC92L3QzOS4zMDgwOC02LzI5NTEyOTE0OV8xNzU2NzI5MDE2MTc4ODdfNDMyMzA1NTYxMzQyNjYzOTY2MV9uLmpwZz9fbmNfY2F0PTExMCZjY2I9MS03Jl9uY19zaWQ9OGJmZWI5Jl9uY19vaGM9c2FBM1EtODAtdUFBWDhScUZGNCZfbmNfaHQ9c2NvbnRlbnQuZmJrbzQtMS5mbmEmb2g9MDBfQVQ5QWNQSnV0QklLWWxaaG5VdG9oMDZ3dm9CMjktRUNlV3NYeUVXbTFJNUFIZyZvZT02MkY0MDBGQVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWUgOiBcIlNhdWNlcyBsZWd1bWVzXCIsXG4gICAgICAgIGxpbmsgOiBcImh0dHBzOi8vc2NvbnRlbnQuZmJrbzQtMS5mbmEuZmJjZG4ubmV0L3YvdDM5LjMwODA4LTYvMjcxNDQzMjU2XzEyMzgwNzk3NjgwNDM4MF84MDk3MTkxMTk2MjA1Mzc2MzIwX24uanBnP3N0cD1kc3QtanBnX3A1MjZ4Mzk1Jl9uY19jYXQ9MTExJmNjYj0xLTcmX25jX3NpZD04YmZlYjkmX25jX29oYz1jNWJ5TlZmZVdXSUFYX3YtUHZFJl9uY19odD1zY29udGVudC5mYmtvNC0xLmZuYSZvaD0wMF9BVF9jUUp4V19VZWllWFd5dWg2UzVUbmh0a2JDRjVZbm13X21yQWRDY1luWXpBJm9lPTYyRjUyRTUwXCJcbiAgICB9XG5dXG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRlbnQoKSB7XG4gICAgbGV0IGRpdkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdkNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1lbnVzXCIpO1xuXG4gICAgZm9yIChjb25zdCBtZW51IG9mIG1lbnVzKSB7XG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcIm1lbnVcIixcImZsZXhcIik7XG5cbiAgICAgICAgbGV0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIG5hbWUuaW5uZXJUZXh0ID0gbWVudS5uYW1lO1xuICAgICAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgaW1nLnNyYyA9IG1lbnUubGluaztcbiAgICAgICAgZGl2LmFwcGVuZChuYW1lLGltZyk7XG4gICAgICAgIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2KVxuICAgIH1cblxuICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGV4dC5pbm5lclRleHQgPSBcIkZvciBtb3JlIGNsaWNrIFwiO1xuICAgIGxldCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBhbmNob3IuaW5uZXJUZXh0ID0gXCJoZXJlXCJcbiAgICBhbmNob3Iuc2V0QXR0cmlidXRlKFwiaHJlZlwiLFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL215ZGlldG1hbGkvXCIpO1xuICAgIGFuY2hvci5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIixcIl9ibGFua1wiKTtcbiAgICB0ZXh0LmFwcGVuZENoaWxkKGFuY2hvcik7XG4gICAgdGV4dC5pbm5lckhUTUwgKz0gXCIuXCI7XG5cbiAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKCB0ZXh0ICk7XG4gICAgcmV0dXJuIGRpdkNvbnRlbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpLmFwcGVuZChcbiAgICAgICAgY3JlYXRlVGl0bGUoXCJNZW51XCIpLFxuICAgICAgICBjcmVhdGVDb250ZW50KCksXG4gICAgKVxufSIsImZ1bmN0aW9uIGNyZWF0ZUxvZ28oKSB7XG4gICAgbGV0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgbG9nby5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwibG9nb1wiKTtcbiAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHNwYW4uaW5uZXJUZXh0PVwiTXlcIjtcbiAgICBsb2dvLmFwcGVuZChzcGFuLFwiRGlldCBNYWxpXCIpO1xuICAgIHJldHVybiBsb2dvO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOYXYoKSB7XG4gICAgbGV0IG5hdlVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIG5hdlVsLmNsYXNzTGlzdC5hZGQoXCJuYXZcIixcImZsZXhcIik7XG5cbiAgICBsZXQgbWVudUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIG1lbnVMaS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwibWVudVwiKTtcbiAgICBtZW51TGkuaW5uZXJUZXh0PSBcIk1lbnVcIjtcblxuICAgIGxldCBhYm91dExpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGFib3V0TGkuc2V0QXR0cmlidXRlKFwiaWRcIixcImFib3V0XCIpO1xuICAgIGFib3V0TGkuaW5uZXJUZXh0PSBcIkFib3V0XCI7XG5cbiAgICBsZXQgY29udGFjdExpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnRhY3RMaS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiY29udGFjdFwiKTtcbiAgICBjb250YWN0TGkuaW5uZXJUZXh0PSBcIkNvbnRhY3RcIjtcbiAgICBcbiAgICBuYXZVbC5hcHBlbmQoXG4gICAgICAgIG1lbnVMaSxhYm91dExpLGNvbnRhY3RMaVxuICAgICk7XG4gICAgcmV0dXJuIG5hdlVsO1xufVxuXG5mdW5jdGlvbiBoZWFkZXJEaXYoKSB7XG5cbiAgICBsZXQgaGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXJEaXYuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiLFwiZmxleFwiKTtcbiAgICBoZWFkZXJEaXYuYXBwZW5kKGNyZWF0ZUxvZ28oKSxjcmVhdGVOYXYoKSk7XG4gICAgcmV0dXJuIGhlYWRlckRpdjtcbn1cblxuZnVuY3Rpb24gbWFpbkRpdigpIHtcbiAgICBsZXQgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbkRpdi5jbGFzc0xpc3QuYWRkKFwibWFpblwiLFwiZmxleFwiKTtcbiAgICByZXR1cm4gbWFpbkRpdjtcbn1cblxuZnVuY3Rpb24gZm9vdGVyRGl2KCkge1xuICAgIGxldCBmb290ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvb3RlckRpdi5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIsXCJmbGV4XCIpO1xuICAgIGZvb3RlckRpdi5pbm5lclRleHQ9XCJNeURpZXQgTWFsaSAyMDIyXCI7XG4gICAgcmV0dXJuIGZvb3RlckRpdjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53cmFwcGVyXCIpLmFwcGVuZChcbiAgICAgICAgaGVhZGVyRGl2KCksXG4gICAgICAgIG1haW5EaXYoKSxcbiAgICAgICAgZm9vdGVyRGl2KClcbiAgICApXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge2ZpcnN0TG9hZCxwYWdlU2VsZWN0fSBmcm9tIFwiLi9wYWdlcy9mdW5jdGlvbnNcIlxuXG5maXJzdExvYWQoKTtcblxuY29uc3QgbG9nb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9nb1wiKTtcbmxvZ29CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsXG4gICAgKCk9PntcbiAgICAgICAgbGV0IGFjdGl2ZVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlXCIpO1xuICAgICAgICBpZiAoYWN0aXZlVGFiKSB7XG4gICAgICAgICAgICBhY3RpdmVUYWIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYWdlU2VsZWN0KFwiYWJvdXRcIik7XG4gICAgfVxuKVxuXG5jb25zdCBidG5MaXN0ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdiBsaVwiKSk7XG5cbmJ0bkxpc3QuZm9yRWFjaChcbiAgICAoYnRuKT0+e1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsXG4gICAgICAgICAgICAoKT0+e1xuICAgICAgICAgICAgICAgIGxldCBhY3RpdmVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICBpZiAoYWN0aXZlVGFiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhY3RpdmVUYWIuaWQgIT09IGJ0bi5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlVGFiLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTZWxlY3QoYnRuLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgcGFnZVNlbGVjdChidG4uaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cbikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=