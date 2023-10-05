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
    let content = document.getElementById('content')
    content.innerHTML = ""
    ;(0,_initial_load__WEBPACK_IMPORTED_MODULE_0__.initialLoad)()

    let home_nav = document.getElementById('home')

    setTimeout(() => {
        let contact = document.getElementById('contact')
        contact.className = "nav-bar-items-active"
    }, 1)

    home_nav.addEventListener('click', () => {
        ;(0,_home__WEBPACK_IMPORTED_MODULE_1__.home)()
    })

    let menu_nav = document.getElementById('menu')
    menu_nav.addEventListener('click', () => {
        ;(0,_menu__WEBPACK_IMPORTED_MODULE_2__.menu)()
    })

    let contact_main = document.getElementById("main")
    contact_main.className = "contact-main"
    let contactCard = document.createElement('div')
    contactCard.id = "contact-card"
    contact_main.appendChild(contactCard)
    let card_email = document.createElement('p')
    let card_phone = document.createElement('p')
    let card_address = document.createElement('p')
    let card_img = document.createElement('div')
    card_img.id="contact-card-img"
    card_email.textContent = "Email:  flora2023@webpack.com"
    card_phone.textContent = "Phone Number:  (555) 123-4567"
    card_address.textContent = `Address:  Flora 123 Gourmet Street Foodville, CA 98765 United States`
    contactCard.appendChild(card_phone)
    contactCard.appendChild(card_email)
    contactCard.appendChild(card_address)
    contactCard.appendChild(card_img)

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
    content.innerHTML = ""
    ;(0,_initial_load__WEBPACK_IMPORTED_MODULE_0__.initialLoad)()

    let menu_nav = document.getElementById('menu')
    menu_nav.addEventListener('click', ()=>{
        ;(0,_menu__WEBPACK_IMPORTED_MODULE_2__.menu)()
    })

    let contact_nav = document.getElementById('contact')
    contact_nav.addEventListener('click', () => {
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
    let content = document.getElementById('content')
    content.innerHTML = ""
    ;(0,_initial_load__WEBPACK_IMPORTED_MODULE_0__.initialLoad)()

    let home_nav = document.getElementById('home')
    let contact_nav = document.getElementById('contact')

    setTimeout(() => {
        let menu_nav = document.getElementById('menu')
        menu_nav.className = "nav-bar-items-active"
    }, 1)

    home_nav.addEventListener('click', () => {
        ;(0,_home__WEBPACK_IMPORTED_MODULE_1__.home)()
    })

    contact_nav.addEventListener('click', () => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksMkRBQVc7QUFDZixJQUFJLGtEQUFPO0FBQ1gsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJwYWNrLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJwYWNrLy4vc3JjL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay8uL3NyYy9pbml0aWFsLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJwYWNrLy4vc3JjL21haW4tZGl2LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay8uL3NyYy9uYXYtYmFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0aWFsTG9hZCB9IGZyb20gXCIuL2luaXRpYWwtbG9hZFwiO1xyXG5pbXBvcnQgeyBob21lIH0gZnJvbSBcIi4vaG9tZVwiO1xyXG5pbXBvcnQgeyBtZW51IH0gZnJvbSBcIi4vbWVudVwiO1xyXG5mdW5jdGlvbiBjb250YWN0KCkge1xyXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXHJcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCJcclxuICAgIGluaXRpYWxMb2FkKClcclxuXHJcbiAgICBsZXQgaG9tZV9uYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpXHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGNvbnRhY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdCcpXHJcbiAgICAgICAgY29udGFjdC5jbGFzc05hbWUgPSBcIm5hdi1iYXItaXRlbXMtYWN0aXZlXCJcclxuICAgIH0sIDEpXHJcblxyXG4gICAgaG9tZV9uYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgaG9tZSgpXHJcbiAgICB9KVxyXG5cclxuICAgIGxldCBtZW51X25hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51JylcclxuICAgIG1lbnVfbmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIG1lbnUoKVxyXG4gICAgfSlcclxuXHJcbiAgICBsZXQgY29udGFjdF9tYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpXHJcbiAgICBjb250YWN0X21haW4uY2xhc3NOYW1lID0gXCJjb250YWN0LW1haW5cIlxyXG4gICAgbGV0IGNvbnRhY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnRhY3RDYXJkLmlkID0gXCJjb250YWN0LWNhcmRcIlxyXG4gICAgY29udGFjdF9tYWluLmFwcGVuZENoaWxkKGNvbnRhY3RDYXJkKVxyXG4gICAgbGV0IGNhcmRfZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIGxldCBjYXJkX3Bob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICBsZXQgY2FyZF9hZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICBsZXQgY2FyZF9pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY2FyZF9pbWcuaWQ9XCJjb250YWN0LWNhcmQtaW1nXCJcclxuICAgIGNhcmRfZW1haWwudGV4dENvbnRlbnQgPSBcIkVtYWlsOiAgZmxvcmEyMDIzQHdlYnBhY2suY29tXCJcclxuICAgIGNhcmRfcGhvbmUudGV4dENvbnRlbnQgPSBcIlBob25lIE51bWJlcjogICg1NTUpIDEyMy00NTY3XCJcclxuICAgIGNhcmRfYWRkcmVzcy50ZXh0Q29udGVudCA9IGBBZGRyZXNzOiAgRmxvcmEgMTIzIEdvdXJtZXQgU3RyZWV0IEZvb2R2aWxsZSwgQ0EgOTg3NjUgVW5pdGVkIFN0YXRlc2BcclxuICAgIGNvbnRhY3RDYXJkLmFwcGVuZENoaWxkKGNhcmRfcGhvbmUpXHJcbiAgICBjb250YWN0Q2FyZC5hcHBlbmRDaGlsZChjYXJkX2VtYWlsKVxyXG4gICAgY29udGFjdENhcmQuYXBwZW5kQ2hpbGQoY2FyZF9hZGRyZXNzKVxyXG4gICAgY29udGFjdENhcmQuYXBwZW5kQ2hpbGQoY2FyZF9pbWcpXHJcblxyXG59XHJcbmV4cG9ydCB7IGNvbnRhY3QgfSIsImZ1bmN0aW9uIGNyZWF0ZUZvb3RlcihzdHJpbmcpeyAgIFxyXG4gICAgbGV0IG1haW49ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxyXG4gICAgbGV0IGZvb3RlckRpdj0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgbGV0IHBhcmE9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgZm9vdGVyRGl2LmlkPVwiZm9vdGVyXCJcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoZm9vdGVyRGl2KVxyXG4gICAgZm9vdGVyRGl2LmFwcGVuZENoaWxkKHBhcmEpXHJcbiAgICBwYXJhLnRleHRDb250ZW50PXN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVGb290ZXIgfSIsImZ1bmN0aW9uIGNyZWF0ZUhlYWRlcihoZWFkZXIpeyAgIFxyXG4gICAgbGV0IG1haW49ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxyXG4gICAgbGV0IGhlYWREaXY9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGxldCBoZWFkPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbiAgICBoZWFkLmlkPVwiaGVhZGVyLXRleHRcIlxyXG4gICAgaGVhZERpdi5jbGFzc05hbWU9XCJoZWFkXCJcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoaGVhZERpdilcclxuICAgIGhlYWREaXYuYXBwZW5kQ2hpbGQoaGVhZClcclxuICAgIGhlYWQudGV4dENvbnRlbnQ9aGVhZGVyXHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUhlYWRlciB9IiwiaW1wb3J0IHsgaW5pdGlhbExvYWQgfSBmcm9tIFwiLi9pbml0aWFsLWxvYWRcIlxyXG5pbXBvcnQgeyBjb250YWN0IH0gZnJvbSBcIi4vY29udGFjdFwiXHJcbmltcG9ydCB7IG1lbnUgfSBmcm9tIFwiLi9tZW51XCJcclxuZnVuY3Rpb24gaG9tZSgpIHtcclxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxyXG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICBpbml0aWFsTG9hZCgpXHJcblxyXG4gICAgbGV0IG1lbnVfbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKVxyXG4gICAgbWVudV9uYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgIG1lbnUoKVxyXG4gICAgfSlcclxuXHJcbiAgICBsZXQgY29udGFjdF9uYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdCcpXHJcbiAgICBjb250YWN0X25hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb250YWN0KClcclxuICAgIH0pXHJcblxyXG4gICAgbGV0IGhvbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpXHJcbiAgICBob21lLmNsYXNzTmFtZSA9IFwibmF2LWJhci1pdGVtcy1hY3RpdmVcIlxyXG5cclxuICAgIGxldCBob21lX21haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIilcclxuICAgIGhvbWVfbWFpbi5jbGFzc05hbWUgPSBcImhvbWUtbWFpblwiXHJcblxyXG4gICAgbGV0IGluZm9fZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgaW5mb19kaXYuY2xhc3NOYW1lID0gXCJpbmZvLWRpdnNcIlxyXG4gICAgbGV0IGluZm9fZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGluZm9fZGl2Mi5jbGFzc05hbWUgPSBcImluZm8tZGl2c1wiXHJcblxyXG4gICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBpbWcuY2xhc3NOYW1lID0gXCJjYXJkLWltZ1wiXHJcbiAgICBsZXQgaW1nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBpbWcyLmNsYXNzTmFtZSA9IFwiY2FyZC1pbWcyXCJcclxuXHJcbiAgICBsZXQgcGFyYTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIHBhcmExLmlkID0gXCJpbmZvLXBhcmFcIlxyXG4gICAgbGV0IHBhcmEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICBwYXJhMi5pZCA9IFwiaW5mby1wYXJhMlwiXHJcblxyXG4gICAgaG9tZV9tYWluLmFwcGVuZENoaWxkKGluZm9fZGl2KVxyXG4gICAgaG9tZV9tYWluLmFwcGVuZENoaWxkKGluZm9fZGl2MilcclxuXHJcblxyXG4gICAgaW5mb19kaXYyLmFwcGVuZENoaWxkKGltZylcclxuICAgIGluZm9fZGl2Mi5hcHBlbmRDaGlsZChwYXJhMSlcclxuXHJcbiAgICBpbmZvX2Rpdi5hcHBlbmRDaGlsZChwYXJhMilcclxuICAgIGluZm9fZGl2LmFwcGVuZENoaWxkKGltZzIpXHJcblxyXG5cclxuICAgIHBhcmExLnRleHRDb250ZW50ID0gXCJXZWxjb21lIHRvIEZsb3JhLCB3aGVyZSBjdWxpbmFyeSBleGNlbGxlbmNlIG1lZXRzIGEgd2FybSBhbmQgaW52aXRpbmcgYXRtb3NwaGVyZS4gT3VyIHBhc3Npb24gZm9yIGZvb2QgaXMgcmVmbGVjdGVkIGluIGV2ZXJ5IGRpc2ggd2Ugc2VydmUuIFdpdGggYSBkaXZlcnNlIG1lbnUgaW5zcGlyZWQgYnkgYm90aCBsb2NhbCBmbGF2b3JzIGFuZCBpbnRlcm5hdGlvbmFsIGN1aXNpbmUsIHdlIGFpbSB0byB0YW50YWxpemUgeW91ciB0YXN0ZSBidWRzIHdpdGggYSBzeW1waG9ueSBvZiBmbGF2b3JzLiBXaGV0aGVyIHlvdSdyZSBqb2luaW5nIHVzIGZvciBhIHJvbWFudGljIGRpbm5lciwgYSBmYW1pbHkgY2VsZWJyYXRpb24sIG9yIGEgY2FzdWFsIGx1bmNoIHdpdGggZnJpZW5kcywgb3VyIGRlZGljYXRlZCB0ZWFtIG9mIGNoZWZzIGFuZCBzdGFmZiBhcmUgY29tbWl0dGVkIHRvIHByb3ZpZGluZyB5b3Ugd2l0aCBhbiB1bmZvcmdldHRhYmxlIGRpbmluZyBleHBlcmllbmNlLiBDb21lIHNhdm9yIHRoZSBhcnRpc3RyeSBvZiBvdXIgY2hlZnMsIHBhaXJlZCB3aXRoIGFuIGV4dGVuc2l2ZSBzZWxlY3Rpb24gb2Ygd2luZXMgYW5kIGNvY2t0YWlscywgYWxsIHdoaWxlIGVuam95aW5nIHRoZSBjb3p5IGFtYmlhbmNlIHRoYXQgbWFrZXMgRmxvcmEgdGhlIHBlcmZlY3QgZGVzdGluYXRpb24gZm9yIGZvb2QgbG92ZXJzIGFuZCBjb25ub2lzc2V1cnMgYWxpa2UuIEJvbiBhcHDDqXRpdCFcIlxyXG5cclxuICAgIHBhcmEyLnRleHRDb250ZW50ID0gXCJBdCBGbG9yYSwgd2UgYmVsaWV2ZSBpbiBtb3JlIHRoYW4ganVzdCBncmVhdCBmb29kOyB3ZSdyZSBjb21taXR0ZWQgdG8gcHJvdmlkaW5nIGEgd2FybSBhbmQgaW52aXRpbmcgYXRtb3NwaGVyZSB0aGF0IG1ha2VzIGV2ZXJ5IHZpc2l0IG1lbW9yYWJsZS4gT3VyIGNvenkgc2VhdGluZyBhcnJhbmdlbWVudHMsIHRhc3RlZnVsIGRlY29yLCBhbmQgYXR0ZW50aXZlIHN0YWZmIGVuc3VyZSB0aGF0IHlvdSBmZWVsIHJpZ2h0IGF0IGhvbWUgZnJvbSB0aGUgbW9tZW50IHlvdSBzdGVwIHRocm91Z2ggb3VyIGRvb3JzLiBXaGV0aGVyIHlvdSdyZSBjZWxlYnJhdGluZyBhIHNwZWNpYWwgb2NjYXNpb24gb3Igc2ltcGx5IHNlZWtpbmcgYSBkZWxpZ2h0ZnVsIG1lYWwsIG91ciBkZWRpY2F0ZWQgdGVhbSBpcyBoZXJlIHRvIG1ha2UgeW91ciBleHBlcmllbmNlIGV4Y2VwdGlvbmFsLiBFeHBsb3JlIG91ciBleHRlbnNpdmUgd2luZSBhbmQgY29ja3RhaWwgc2VsZWN0aW9uIHRvIGNvbXBsZW1lbnQgeW91ciBtZWFsLCBhbmQgZG9uJ3QgZm9yZ2V0IHRvIHNhdmUgcm9vbSBmb3Igb3VyIGRlbGVjdGFibGUgZGVzc2VydHMuIEpvaW4gdXMgdG9kYXkgYW5kIGRpc2NvdmVyIHdoeSBGbG9yYSBpcyB0aGUgcGVyZmVjdCBkZXN0aW5hdGlvbiBmb3IgZm9vZCBlbnRodXNpYXN0cyBhbmQgY29ubm9pc3NldXJzIGFsaWtlLlwiXHJcbn1cclxuZXhwb3J0IHsgaG9tZSB9IiwiaW1wb3J0IHsgY3JlYXRlSGVhZGVyIH0gZnJvbSBcIi4vaGVhZGVyXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUZvb3RlciB9IGZyb20gXCIuL2Zvb3RlclwiO1xyXG5pbXBvcnQgeyBjcmVhdGVOYXZCYXIgfSBmcm9tIFwiLi9uYXYtYmFyXCI7XHJcbmltcG9ydCB7IGNyZWF0ZU1haW5EaXYgfSBmcm9tIFwiLi9tYWluLWRpdlwiO1xyXG5mdW5jdGlvbiBpbml0aWFsTG9hZCgpeyAgIFxyXG4gICAgY3JlYXRlSGVhZGVyKFwiRmxvcmFcIilcclxuICAgIGNyZWF0ZU5hdkJhcigpXHJcbiAgICBjcmVhdGVNYWluRGl2KClcclxuICAgIGNyZWF0ZUZvb3RlcihcIkZsb3JhIENvcHlyaWdodCAyMDIzXCIpXHJcbn1cclxuICAgIFxyXG5leHBvcnQge2luaXRpYWxMb2FkfSIsImZ1bmN0aW9uIGNyZWF0ZU1haW5EaXYoKXsgICBcclxuICAgIGxldCBtYWluPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcclxuICAgIGxldCBtYWluRGl2PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBtYWluRGl2LmlkPVwibWFpblwiXHJcbiAgICBtYWluLmFwcGVuZENoaWxkKG1haW5EaXYpXHJcbn1cclxuZXhwb3J0IGxldCBtYWluRGl2XHJcbmV4cG9ydCB7Y3JlYXRlTWFpbkRpdiB9IiwiaW1wb3J0IHsgaW5pdGlhbExvYWQgfSBmcm9tIFwiLi9pbml0aWFsLWxvYWRcIjtcclxuaW1wb3J0IHsgaG9tZSB9IGZyb20gXCIuL2hvbWVcIjtcclxuaW1wb3J0IHsgY29udGFjdCB9IGZyb20gXCIuL2NvbnRhY3RcIjtcclxuZnVuY3Rpb24gbWVudSgpIHtcclxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxyXG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICBpbml0aWFsTG9hZCgpXHJcblxyXG4gICAgbGV0IGhvbWVfbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKVxyXG4gICAgbGV0IGNvbnRhY3RfbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QnKVxyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGxldCBtZW51X25hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51JylcclxuICAgICAgICBtZW51X25hdi5jbGFzc05hbWUgPSBcIm5hdi1iYXItaXRlbXMtYWN0aXZlXCJcclxuICAgIH0sIDEpXHJcblxyXG4gICAgaG9tZV9uYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgaG9tZSgpXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnRhY3RfbmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnRhY3QoKVxyXG4gICAgfSlcclxufVxyXG5leHBvcnQgeyBtZW51IH0iLCJmdW5jdGlvbiBjcmVhdGVOYXZCYXIoKXsgICBcclxuICAgIGxldCBtYWluPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcclxuICAgIGxldCBuYXZCYXI9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGxldCBob21lICA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGxldCBtZW51ID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgbGV0IGNvbnRhY3QgPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBob21lLmlkPVwiaG9tZVwiXHJcbiAgICBtZW51LmlkPVwibWVudVwiXHJcbiAgICBjb250YWN0LmlkPVwiY29udGFjdFwiXHJcbiAgICBsZXQgaG9tZV9wYXJhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgbGV0IG1lbnVfcGFyYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIGxldCBjb250YWN0X3BhcmEgPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgaG9tZV9wYXJhLnRleHRDb250ZW50PVwiSG9tZVwiXHJcbiAgICBtZW51X3BhcmEudGV4dENvbnRlbnQ9XCJNZW51XCJcclxuICAgIGNvbnRhY3RfcGFyYS50ZXh0Q29udGVudD1cIkNvbnRhY3RcIlxyXG4gICAgLy8gaG9tZV9wYXJhLmlkPVwiSG9tZVwiXHJcbiAgICAvLyBtZW51X3BhcmEuaWQ9XCJNZW51XCJcclxuICAgIC8vIGNvbnRhY3RfcGFyYS5pZD1cIkNvbnRhY3RcIlxyXG4gICAgbmF2QmFyLmlkPVwibmF2YmFyXCJcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQobmF2QmFyKVxyXG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKGhvbWUpXHJcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobWVudSlcclxuICAgIG5hdkJhci5hcHBlbmRDaGlsZChjb250YWN0KVxyXG4gICAgaG9tZS5hcHBlbmRDaGlsZChob21lX3BhcmEpXHJcbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVfcGFyYSlcclxuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdF9wYXJhKVxyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVOYXZCYXIgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaW5pdGlhbExvYWQgfSBmcm9tIFwiLi9pbml0aWFsLWxvYWRcIjtcclxuaW1wb3J0IHsgaG9tZSB9IGZyb20gXCIuL2hvbWVcIjtcclxuaW1wb3J0IHsgY29udGFjdCB9IGZyb20gXCIuL2NvbnRhY3RcIjtcclxuaW1wb3J0IHsgbWVudSB9IGZyb20gXCIuL21lbnVcIjtcclxuXHJcbmhvbWUoKVxyXG5cclxubGV0IGNvbnRlbnQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxyXG5sZXQgaG9tZV9uYXY9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKVxyXG5sZXQgbWVudV9uYXY9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKVxyXG5sZXQgY29udGFjdF9uYXY9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QnKVxyXG5ob21lX25hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICBjb25zb2xlLmxvZyhjb250ZW50LmlubmVySFRNTClcclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIlxyXG4gICAgY29uc29sZS5sb2coXCJoZWxsb1wiKVxyXG4gICAgaW5pdGlhbExvYWQoKVxyXG4gICAgaG9tZSgpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhjb250ZW50LmlubmVySFRNTClcclxufSlcclxuXHJcbm1lbnVfbmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgIGNvbnNvbGUubG9nKGNvbnRlbnQuaW5uZXJIVE1MKVxyXG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICBjb25zb2xlLmxvZyhcImhlbGxvXCIpXHJcbiAgICBpbml0aWFsTG9hZCgpXHJcbiAgICBtZW51KClcclxufSlcclxuXHJcbmNvbnRhY3RfbmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgIGNvbnNvbGUubG9nKGNvbnRlbnQuaW5uZXJIVE1MKVxyXG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICBjb25zb2xlLmxvZyhcImhlbGxvXCIpXHJcbiAgICBpbml0aWFsTG9hZCgpXHJcbiAgICBjb250YWN0KClcclxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=