/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contact: () => (/* binding */ contact)
/* harmony export */ });
/* harmony import */ var _initial_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial-load */ "./src/initial-load.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");



function contact() {
    // let content = document.getElementById('content')
    // content.innerHTML = ""
    // console.log("hello")
    // initialLoad()

    let home_nav = document.getElementById('home')
    setTimeout(() => {
        let contact = document.getElementById('contact')
        contact.className = "nav-bar-items-active"
        console.log(contact.className)
    }, 1)

    home_nav.addEventListener('click', () => {
        console.log(content.innerHTML)
        content.innerHTML = ""
        console.log("hello")
        ;(0,_initial_load__WEBPACK_IMPORTED_MODULE_0__.initialLoad)()
        ;(0,_home__WEBPACK_IMPORTED_MODULE_1__.home)()
    })

    let menu_nav = document.getElementById('menu')
    menu_nav.addEventListener('click', ()=>{
        console.log(content.innerHTML)
        content.innerHTML = ""
        console.log("hello")
        ;(0,_initial_load__WEBPACK_IMPORTED_MODULE_0__.initialLoad)()
        ;(0,_menu__WEBPACK_IMPORTED_MODULE_2__.menu)()
    })


}


/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFooter: () => (/* binding */ createFooter)
/* harmony export */ });
function createFooter(string){   
    let main=document.getElementById('content')
    let footerDiv= document.createElement("div")
    let para= document.createElement('p')
    footerDiv.id="footer"
    main.appendChild(footerDiv)
    footerDiv.appendChild(para)
    para.textContent=string
}



/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHeader: () => (/* binding */ createHeader)
/* harmony export */ });
function createHeader(header){   
    let main=document.getElementById('content')
    let headDiv= document.createElement("div")
    let head= document.createElement('h1')
    head.id="header-text"
    headDiv.className="head"
    main.appendChild(headDiv)
    headDiv.appendChild(head)
    head.textContent=header
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   home: () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _initial_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial-load */ "./src/initial-load.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");



function home() {
    let content = document.getElementById('content')
    // content.innerHTML = ""
    ;(0,_initial_load__WEBPACK_IMPORTED_MODULE_0__.initialLoad)()

    let menu_nav = document.getElementById('menu')
    menu_nav.addEventListener('click', ()=>{
        console.log(content.innerHTML)
        content.innerHTML = ""
        console.log("hello")
        ;(0,_initial_load__WEBPACK_IMPORTED_MODULE_0__.initialLoad)()
        ;(0,_menu__WEBPACK_IMPORTED_MODULE_2__.menu)()
    })

    let contact_nav = document.getElementById('contact')
    contact_nav.addEventListener('click', () => {
        console.log(content.innerHTML)
        content.innerHTML = ""
        console.log("hello")
        ;(0,_initial_load__WEBPACK_IMPORTED_MODULE_0__.initialLoad)()
        ;(0,_contact__WEBPACK_IMPORTED_MODULE_1__.contact)()
    })

    let home = document.getElementById('home')
    home.className = "nav-bar-items-active"

    let home_main = document.getElementById("main")
    home_main.className = "home-main"

    let info_div = document.createElement("div")
    info_div.className = "info-divs"
    let info_div2 = document.createElement("div")
    info_div2.className = "info-divs"

    let img = document.createElement('div')
    img.className = "card-img"
    let img2 = document.createElement('div')
    img2.className = "card-img2"

    let para1 = document.createElement('p')
    para1.id = "info-para"
    let para2 = document.createElement('p')
    para2.id = "info-para2"

    home_main.appendChild(info_div)
    home_main.appendChild(info_div2)


    info_div2.appendChild(img)
    info_div2.appendChild(para1)

    info_div.appendChild(para2)
    info_div.appendChild(img2)


    para1.textContent = "Welcome to Flora, where culinary excellence meets a warm and inviting atmosphere. Our passion for food is reflected in every dish we serve. With a diverse menu inspired by both local flavors and international cuisine, we aim to tantalize your taste buds with a symphony of flavors. Whether you're joining us for a romantic dinner, a family celebration, or a casual lunch with friends, our dedicated team of chefs and staff are committed to providing you with an unforgettable dining experience. Come savor the artistry of our chefs, paired with an extensive selection of wines and cocktails, all while enjoying the cozy ambiance that makes Flora the perfect destination for food lovers and connoisseurs alike. Bon appétit!"

    para2.textContent = "At Flora, we believe in more than just great food; we're committed to providing a warm and inviting atmosphere that makes every visit memorable. Our cozy seating arrangements, tasteful decor, and attentive staff ensure that you feel right at home from the moment you step through our doors. Whether you're celebrating a special occasion or simply seeking a delightful meal, our dedicated team is here to make your experience exceptional. Explore our extensive wine and cocktail selection to complement your meal, and don't forget to save room for our delectable desserts. Join us today and discover why Flora is the perfect destination for food enthusiasts and connoisseurs alike."
}


/***/ }),

/***/ "./src/initial-load.js":
/*!*****************************!*\
  !*** ./src/initial-load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialLoad: () => (/* binding */ initialLoad)
/* harmony export */ });
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _nav_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-bar */ "./src/nav-bar.js");
/* harmony import */ var _main_div__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-div */ "./src/main-div.js");




function initialLoad(){   
    (0,_header__WEBPACK_IMPORTED_MODULE_0__.createHeader)("Flora")
    ;(0,_nav_bar__WEBPACK_IMPORTED_MODULE_2__.createNavBar)()
    ;(0,_main_div__WEBPACK_IMPORTED_MODULE_3__.createMainDiv)()
    ;(0,_footer__WEBPACK_IMPORTED_MODULE_1__.createFooter)("Flora Copyright 2023")
}
    


/***/ }),

/***/ "./src/main-div.js":
/*!*************************!*\
  !*** ./src/main-div.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMainDiv: () => (/* binding */ createMainDiv),
/* harmony export */   mainDiv: () => (/* binding */ mainDiv)
/* harmony export */ });
function createMainDiv(){   
    let main=document.getElementById('content')
    let mainDiv= document.createElement("div")
    mainDiv.id="main"
    main.appendChild(mainDiv)
}
let mainDiv


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menu: () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _initial_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial-load */ "./src/initial-load.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");



function menu() {


    let home_nav = document.getElementById('home')
    let contact_nav = document.getElementById('contact')
    
    
    setTimeout(() => {
        let menu_nav = document.getElementById('menu')
        menu_nav.className = "nav-bar-items-active"
        console.log(menu_nav.className)
    }, 1)

    home_nav.addEventListener('click', () => {
        console.log(content.innerHTML)
        content.innerHTML = ""
        console.log("hello")
        ;(0,_initial_load__WEBPACK_IMPORTED_MODULE_0__.initialLoad)()
        ;(0,_home__WEBPACK_IMPORTED_MODULE_1__.home)()
    })
    
    contact_nav.addEventListener('click', () => {
        console.log(content.innerHTML)
        content.innerHTML = ""
        console.log("hello")
        ;(0,_initial_load__WEBPACK_IMPORTED_MODULE_0__.initialLoad)()
        ;(0,_contact__WEBPACK_IMPORTED_MODULE_2__.contact)()
    })
}


/***/ }),

/***/ "./src/nav-bar.js":
/*!************************!*\
  !*** ./src/nav-bar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNavBar: () => (/* binding */ createNavBar)
/* harmony export */ });
function createNavBar(){   
    let main=document.getElementById('content')
    let navBar= document.createElement("div")
    let home  =document.createElement('div')
    let menu =document.createElement('div')
    let contact =document.createElement('div')
    home.id="home"
    menu.id="menu"
    contact.id="contact"
    let home_para=document.createElement('p')
    let menu_para=document.createElement('p')
    let contact_para =document.createElement('p')
    home_para.textContent="Home"
    menu_para.textContent="Menu"
    contact_para.textContent="Contact"
    // home_para.id="Home"
    // menu_para.id="Menu"
    // contact_para.id="Contact"
    navBar.id="navbar"
    main.appendChild(navBar)
    navBar.appendChild(home)
    navBar.appendChild(menu)
    navBar.appendChild(contact)
    home.appendChild(home_para)
    menu.appendChild(menu_para)
    contact.appendChild(contact_para)
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
/* harmony import */ var _initial_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial-load */ "./src/initial-load.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");





(0,_home__WEBPACK_IMPORTED_MODULE_1__.home)()

let content=document.getElementById('content')
let home_nav=document.getElementById('home')
let menu_nav=document.getElementById('menu')
let contact_nav=document.getElementById('contact')
home_nav.addEventListener('click', ()=>{
    console.log(content.innerHTML)
    content.innerHTML = ""
    console.log("hello")
    ;(0,_initial_load__WEBPACK_IMPORTED_MODULE_0__.initialLoad)()
    ;(0,_home__WEBPACK_IMPORTED_MODULE_1__.home)()
    // console.log(content.innerHTML)
})

menu_nav.addEventListener('click', ()=>{
    console.log(content.innerHTML)
    content.innerHTML = ""
    console.log("hello")
    ;(0,_initial_load__WEBPACK_IMPORTED_MODULE_0__.initialLoad)()
    ;(0,_menu__WEBPACK_IMPORTED_MODULE_3__.menu)()
})

contact_nav.addEventListener('click', ()=>{
    console.log(content.innerHTML)
    content.innerHTML = ""
    console.log("hello")
    ;(0,_initial_load__WEBPACK_IMPORTED_MODULE_0__.initialLoad)()
    ;(0,_contact__WEBPACK_IMPORTED_MODULE_2__.contact)()
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwyREFBVztBQUNmLElBQUksNENBQUk7QUFDUixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMkRBQVc7QUFDZixJQUFJLGtEQUFPO0FBQ1gsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJwYWNrLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJwYWNrLy4vc3JjL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay8uL3NyYy9pbml0aWFsLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJwYWNrLy4vc3JjL21haW4tZGl2LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay8uL3NyYy9uYXYtYmFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0aWFsTG9hZCB9IGZyb20gXCIuL2luaXRpYWwtbG9hZFwiO1xyXG5pbXBvcnQgeyBob21lIH0gZnJvbSBcIi4vaG9tZVwiO1xyXG5pbXBvcnQgeyBtZW51IH0gZnJvbSBcIi4vbWVudVwiO1xyXG5mdW5jdGlvbiBjb250YWN0KCkge1xyXG4gICAgLy8gbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXHJcbiAgICAvLyBjb250ZW50LmlubmVySFRNTCA9IFwiXCJcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiaGVsbG9cIilcclxuICAgIC8vIGluaXRpYWxMb2FkKClcclxuXHJcbiAgICBsZXQgaG9tZV9uYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBsZXQgY29udGFjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0JylcclxuICAgICAgICBjb250YWN0LmNsYXNzTmFtZSA9IFwibmF2LWJhci1pdGVtcy1hY3RpdmVcIlxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvbnRhY3QuY2xhc3NOYW1lKVxyXG4gICAgfSwgMSlcclxuXHJcbiAgICBob21lX25hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhjb250ZW50LmlubmVySFRNTClcclxuICAgICAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCJcclxuICAgICAgICBjb25zb2xlLmxvZyhcImhlbGxvXCIpXHJcbiAgICAgICAgaW5pdGlhbExvYWQoKVxyXG4gICAgICAgIGhvbWUoKVxyXG4gICAgfSlcclxuXHJcbiAgICBsZXQgbWVudV9uYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpXHJcbiAgICBtZW51X25hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coY29udGVudC5pbm5lckhUTUwpXHJcbiAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJoZWxsb1wiKVxyXG4gICAgICAgIGluaXRpYWxMb2FkKClcclxuICAgICAgICBtZW51KClcclxuICAgIH0pXHJcblxyXG5cclxufVxyXG5leHBvcnQgeyBjb250YWN0IH0iLCJmdW5jdGlvbiBjcmVhdGVGb290ZXIoc3RyaW5nKXsgICBcclxuICAgIGxldCBtYWluPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcclxuICAgIGxldCBmb290ZXJEaXY9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGxldCBwYXJhPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIGZvb3RlckRpdi5pZD1cImZvb3RlclwiXHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGZvb3RlckRpdilcclxuICAgIGZvb3RlckRpdi5hcHBlbmRDaGlsZChwYXJhKVxyXG4gICAgcGFyYS50ZXh0Q29udGVudD1zdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlRm9vdGVyIH0iLCJmdW5jdGlvbiBjcmVhdGVIZWFkZXIoaGVhZGVyKXsgICBcclxuICAgIGxldCBtYWluPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcclxuICAgIGxldCBoZWFkRGl2PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBsZXQgaGVhZD0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxyXG4gICAgaGVhZC5pZD1cImhlYWRlci10ZXh0XCJcclxuICAgIGhlYWREaXYuY2xhc3NOYW1lPVwiaGVhZFwiXHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGhlYWREaXYpXHJcbiAgICBoZWFkRGl2LmFwcGVuZENoaWxkKGhlYWQpXHJcbiAgICBoZWFkLnRleHRDb250ZW50PWhlYWRlclxyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVIZWFkZXIgfSIsImltcG9ydCB7IGluaXRpYWxMb2FkIH0gZnJvbSBcIi4vaW5pdGlhbC1sb2FkXCJcclxuaW1wb3J0IHsgY29udGFjdCB9IGZyb20gXCIuL2NvbnRhY3RcIlxyXG5pbXBvcnQgeyBtZW51IH0gZnJvbSBcIi4vbWVudVwiXHJcbmZ1bmN0aW9uIGhvbWUoKSB7XHJcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcclxuICAgIC8vIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIlxyXG4gICAgaW5pdGlhbExvYWQoKVxyXG5cclxuICAgIGxldCBtZW51X25hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51JylcclxuICAgIG1lbnVfbmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICBjb25zb2xlLmxvZyhjb250ZW50LmlubmVySFRNTClcclxuICAgICAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCJcclxuICAgICAgICBjb25zb2xlLmxvZyhcImhlbGxvXCIpXHJcbiAgICAgICAgaW5pdGlhbExvYWQoKVxyXG4gICAgICAgIG1lbnUoKVxyXG4gICAgfSlcclxuXHJcbiAgICBsZXQgY29udGFjdF9uYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdCcpXHJcbiAgICBjb250YWN0X25hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhjb250ZW50LmlubmVySFRNTClcclxuICAgICAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCJcclxuICAgICAgICBjb25zb2xlLmxvZyhcImhlbGxvXCIpXHJcbiAgICAgICAgaW5pdGlhbExvYWQoKVxyXG4gICAgICAgIGNvbnRhY3QoKVxyXG4gICAgfSlcclxuXHJcbiAgICBsZXQgaG9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJylcclxuICAgIGhvbWUuY2xhc3NOYW1lID0gXCJuYXYtYmFyLWl0ZW1zLWFjdGl2ZVwiXHJcblxyXG4gICAgbGV0IGhvbWVfbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKVxyXG4gICAgaG9tZV9tYWluLmNsYXNzTmFtZSA9IFwiaG9tZS1tYWluXCJcclxuXHJcbiAgICBsZXQgaW5mb19kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBpbmZvX2Rpdi5jbGFzc05hbWUgPSBcImluZm8tZGl2c1wiXHJcbiAgICBsZXQgaW5mb19kaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgaW5mb19kaXYyLmNsYXNzTmFtZSA9IFwiaW5mby1kaXZzXCJcclxuXHJcbiAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGltZy5jbGFzc05hbWUgPSBcImNhcmQtaW1nXCJcclxuICAgIGxldCBpbWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGltZzIuY2xhc3NOYW1lID0gXCJjYXJkLWltZzJcIlxyXG5cclxuICAgIGxldCBwYXJhMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgcGFyYTEuaWQgPSBcImluZm8tcGFyYVwiXHJcbiAgICBsZXQgcGFyYTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIHBhcmEyLmlkID0gXCJpbmZvLXBhcmEyXCJcclxuXHJcbiAgICBob21lX21haW4uYXBwZW5kQ2hpbGQoaW5mb19kaXYpXHJcbiAgICBob21lX21haW4uYXBwZW5kQ2hpbGQoaW5mb19kaXYyKVxyXG5cclxuXHJcbiAgICBpbmZvX2RpdjIuYXBwZW5kQ2hpbGQoaW1nKVxyXG4gICAgaW5mb19kaXYyLmFwcGVuZENoaWxkKHBhcmExKVxyXG5cclxuICAgIGluZm9fZGl2LmFwcGVuZENoaWxkKHBhcmEyKVxyXG4gICAgaW5mb19kaXYuYXBwZW5kQ2hpbGQoaW1nMilcclxuXHJcblxyXG4gICAgcGFyYTEudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG8gRmxvcmEsIHdoZXJlIGN1bGluYXJ5IGV4Y2VsbGVuY2UgbWVldHMgYSB3YXJtIGFuZCBpbnZpdGluZyBhdG1vc3BoZXJlLiBPdXIgcGFzc2lvbiBmb3IgZm9vZCBpcyByZWZsZWN0ZWQgaW4gZXZlcnkgZGlzaCB3ZSBzZXJ2ZS4gV2l0aCBhIGRpdmVyc2UgbWVudSBpbnNwaXJlZCBieSBib3RoIGxvY2FsIGZsYXZvcnMgYW5kIGludGVybmF0aW9uYWwgY3Vpc2luZSwgd2UgYWltIHRvIHRhbnRhbGl6ZSB5b3VyIHRhc3RlIGJ1ZHMgd2l0aCBhIHN5bXBob255IG9mIGZsYXZvcnMuIFdoZXRoZXIgeW91J3JlIGpvaW5pbmcgdXMgZm9yIGEgcm9tYW50aWMgZGlubmVyLCBhIGZhbWlseSBjZWxlYnJhdGlvbiwgb3IgYSBjYXN1YWwgbHVuY2ggd2l0aCBmcmllbmRzLCBvdXIgZGVkaWNhdGVkIHRlYW0gb2YgY2hlZnMgYW5kIHN0YWZmIGFyZSBjb21taXR0ZWQgdG8gcHJvdmlkaW5nIHlvdSB3aXRoIGFuIHVuZm9yZ2V0dGFibGUgZGluaW5nIGV4cGVyaWVuY2UuIENvbWUgc2F2b3IgdGhlIGFydGlzdHJ5IG9mIG91ciBjaGVmcywgcGFpcmVkIHdpdGggYW4gZXh0ZW5zaXZlIHNlbGVjdGlvbiBvZiB3aW5lcyBhbmQgY29ja3RhaWxzLCBhbGwgd2hpbGUgZW5qb3lpbmcgdGhlIGNvenkgYW1iaWFuY2UgdGhhdCBtYWtlcyBGbG9yYSB0aGUgcGVyZmVjdCBkZXN0aW5hdGlvbiBmb3IgZm9vZCBsb3ZlcnMgYW5kIGNvbm5vaXNzZXVycyBhbGlrZS4gQm9uIGFwcMOpdGl0IVwiXHJcblxyXG4gICAgcGFyYTIudGV4dENvbnRlbnQgPSBcIkF0IEZsb3JhLCB3ZSBiZWxpZXZlIGluIG1vcmUgdGhhbiBqdXN0IGdyZWF0IGZvb2Q7IHdlJ3JlIGNvbW1pdHRlZCB0byBwcm92aWRpbmcgYSB3YXJtIGFuZCBpbnZpdGluZyBhdG1vc3BoZXJlIHRoYXQgbWFrZXMgZXZlcnkgdmlzaXQgbWVtb3JhYmxlLiBPdXIgY296eSBzZWF0aW5nIGFycmFuZ2VtZW50cywgdGFzdGVmdWwgZGVjb3IsIGFuZCBhdHRlbnRpdmUgc3RhZmYgZW5zdXJlIHRoYXQgeW91IGZlZWwgcmlnaHQgYXQgaG9tZSBmcm9tIHRoZSBtb21lbnQgeW91IHN0ZXAgdGhyb3VnaCBvdXIgZG9vcnMuIFdoZXRoZXIgeW91J3JlIGNlbGVicmF0aW5nIGEgc3BlY2lhbCBvY2Nhc2lvbiBvciBzaW1wbHkgc2Vla2luZyBhIGRlbGlnaHRmdWwgbWVhbCwgb3VyIGRlZGljYXRlZCB0ZWFtIGlzIGhlcmUgdG8gbWFrZSB5b3VyIGV4cGVyaWVuY2UgZXhjZXB0aW9uYWwuIEV4cGxvcmUgb3VyIGV4dGVuc2l2ZSB3aW5lIGFuZCBjb2NrdGFpbCBzZWxlY3Rpb24gdG8gY29tcGxlbWVudCB5b3VyIG1lYWwsIGFuZCBkb24ndCBmb3JnZXQgdG8gc2F2ZSByb29tIGZvciBvdXIgZGVsZWN0YWJsZSBkZXNzZXJ0cy4gSm9pbiB1cyB0b2RheSBhbmQgZGlzY292ZXIgd2h5IEZsb3JhIGlzIHRoZSBwZXJmZWN0IGRlc3RpbmF0aW9uIGZvciBmb29kIGVudGh1c2lhc3RzIGFuZCBjb25ub2lzc2V1cnMgYWxpa2UuXCJcclxufVxyXG5leHBvcnQgeyBob21lIH0iLCJpbXBvcnQgeyBjcmVhdGVIZWFkZXIgfSBmcm9tIFwiLi9oZWFkZXJcIjtcclxuaW1wb3J0IHsgY3JlYXRlRm9vdGVyIH0gZnJvbSBcIi4vZm9vdGVyXCI7XHJcbmltcG9ydCB7IGNyZWF0ZU5hdkJhciB9IGZyb20gXCIuL25hdi1iYXJcIjtcclxuaW1wb3J0IHsgY3JlYXRlTWFpbkRpdiB9IGZyb20gXCIuL21haW4tZGl2XCI7XHJcbmZ1bmN0aW9uIGluaXRpYWxMb2FkKCl7ICAgXHJcbiAgICBjcmVhdGVIZWFkZXIoXCJGbG9yYVwiKVxyXG4gICAgY3JlYXRlTmF2QmFyKClcclxuICAgIGNyZWF0ZU1haW5EaXYoKVxyXG4gICAgY3JlYXRlRm9vdGVyKFwiRmxvcmEgQ29weXJpZ2h0IDIwMjNcIilcclxufVxyXG4gICAgXHJcbmV4cG9ydCB7aW5pdGlhbExvYWR9IiwiZnVuY3Rpb24gY3JlYXRlTWFpbkRpdigpeyAgIFxyXG4gICAgbGV0IG1haW49ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxyXG4gICAgbGV0IG1haW5EaXY9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIG1haW5EaXYuaWQ9XCJtYWluXCJcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQobWFpbkRpdilcclxufVxyXG5leHBvcnQgbGV0IG1haW5EaXZcclxuZXhwb3J0IHtjcmVhdGVNYWluRGl2IH0iLCJpbXBvcnQgeyBpbml0aWFsTG9hZCB9IGZyb20gXCIuL2luaXRpYWwtbG9hZFwiO1xyXG5pbXBvcnQgeyBob21lIH0gZnJvbSBcIi4vaG9tZVwiO1xyXG5pbXBvcnQgeyBjb250YWN0IH0gZnJvbSBcIi4vY29udGFjdFwiO1xyXG5mdW5jdGlvbiBtZW51KCkge1xyXG5cclxuXHJcbiAgICBsZXQgaG9tZV9uYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpXHJcbiAgICBsZXQgY29udGFjdF9uYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdCcpXHJcbiAgICBcclxuICAgIFxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IG1lbnVfbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKVxyXG4gICAgICAgIG1lbnVfbmF2LmNsYXNzTmFtZSA9IFwibmF2LWJhci1pdGVtcy1hY3RpdmVcIlxyXG4gICAgICAgIGNvbnNvbGUubG9nKG1lbnVfbmF2LmNsYXNzTmFtZSlcclxuICAgIH0sIDEpXHJcblxyXG4gICAgaG9tZV9uYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coY29udGVudC5pbm5lckhUTUwpXHJcbiAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJoZWxsb1wiKVxyXG4gICAgICAgIGluaXRpYWxMb2FkKClcclxuICAgICAgICBob21lKClcclxuICAgIH0pXHJcbiAgICBcclxuICAgIGNvbnRhY3RfbmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvbnRlbnQuaW5uZXJIVE1MKVxyXG4gICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIlxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaGVsbG9cIilcclxuICAgICAgICBpbml0aWFsTG9hZCgpXHJcbiAgICAgICAgY29udGFjdCgpXHJcbiAgICB9KVxyXG59XHJcbmV4cG9ydCB7IG1lbnUgfSIsImZ1bmN0aW9uIGNyZWF0ZU5hdkJhcigpeyAgIFxyXG4gICAgbGV0IG1haW49ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxyXG4gICAgbGV0IG5hdkJhcj0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgbGV0IGhvbWUgID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgbGV0IG1lbnUgPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBsZXQgY29udGFjdCA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGhvbWUuaWQ9XCJob21lXCJcclxuICAgIG1lbnUuaWQ9XCJtZW51XCJcclxuICAgIGNvbnRhY3QuaWQ9XCJjb250YWN0XCJcclxuICAgIGxldCBob21lX3BhcmE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICBsZXQgbWVudV9wYXJhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgbGV0IGNvbnRhY3RfcGFyYSA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICBob21lX3BhcmEudGV4dENvbnRlbnQ9XCJIb21lXCJcclxuICAgIG1lbnVfcGFyYS50ZXh0Q29udGVudD1cIk1lbnVcIlxyXG4gICAgY29udGFjdF9wYXJhLnRleHRDb250ZW50PVwiQ29udGFjdFwiXHJcbiAgICAvLyBob21lX3BhcmEuaWQ9XCJIb21lXCJcclxuICAgIC8vIG1lbnVfcGFyYS5pZD1cIk1lbnVcIlxyXG4gICAgLy8gY29udGFjdF9wYXJhLmlkPVwiQ29udGFjdFwiXHJcbiAgICBuYXZCYXIuaWQ9XCJuYXZiYXJcIlxyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChuYXZCYXIpXHJcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoaG9tZSlcclxuICAgIG5hdkJhci5hcHBlbmRDaGlsZChtZW51KVxyXG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKGNvbnRhY3QpXHJcbiAgICBob21lLmFwcGVuZENoaWxkKGhvbWVfcGFyYSlcclxuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudV9wYXJhKVxyXG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0X3BhcmEpXHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZU5hdkJhciB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBpbml0aWFsTG9hZCB9IGZyb20gXCIuL2luaXRpYWwtbG9hZFwiO1xyXG5pbXBvcnQgeyBob21lIH0gZnJvbSBcIi4vaG9tZVwiO1xyXG5pbXBvcnQgeyBjb250YWN0IH0gZnJvbSBcIi4vY29udGFjdFwiO1xyXG5pbXBvcnQgeyBtZW51IH0gZnJvbSBcIi4vbWVudVwiO1xyXG5cclxuaG9tZSgpXHJcblxyXG5sZXQgY29udGVudD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXHJcbmxldCBob21lX25hdj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpXHJcbmxldCBtZW51X25hdj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpXHJcbmxldCBjb250YWN0X25hdj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdCcpXHJcbmhvbWVfbmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgIGNvbnNvbGUubG9nKGNvbnRlbnQuaW5uZXJIVE1MKVxyXG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICBjb25zb2xlLmxvZyhcImhlbGxvXCIpXHJcbiAgICBpbml0aWFsTG9hZCgpXHJcbiAgICBob21lKClcclxuICAgIC8vIGNvbnNvbGUubG9nKGNvbnRlbnQuaW5uZXJIVE1MKVxyXG59KVxyXG5cclxubWVudV9uYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgY29uc29sZS5sb2coY29udGVudC5pbm5lckhUTUwpXHJcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCJcclxuICAgIGNvbnNvbGUubG9nKFwiaGVsbG9cIilcclxuICAgIGluaXRpYWxMb2FkKClcclxuICAgIG1lbnUoKVxyXG59KVxyXG5cclxuY29udGFjdF9uYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgY29uc29sZS5sb2coY29udGVudC5pbm5lckhUTUwpXHJcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCJcclxuICAgIGNvbnNvbGUubG9nKFwiaGVsbG9cIilcclxuICAgIGluaXRpYWxMb2FkKClcclxuICAgIGNvbnRhY3QoKVxyXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==