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
    info_div2.appendChild(para2)

    info_div.appendChild(para1)
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

    let menu_main = document.getElementById("main")
    menu_main.className = "menu-main"
    let cards=document.createElement('div')
    cards.className="menu-cards"
    let cards1=document.createElement('div')
    cards1.className="menu-cards"
    let cards2=document.createElement('div')
    cards2.className="menu-cards"
    let cards3=document.createElement('div')
    cards3.className="menu-cards"
    let cards4=document.createElement('div')
    cards4.className="menu-cards"
    let cards5=document.createElement('div')
    cards5.className="menu-cards"
    let cards6=document.createElement('div')
    cards6.className="menu-cards"
    let cards7=document.createElement('div')
    cards7.className="menu-cards"
    let cards8=document.createElement('div')
    cards8.className="menu-cards"
    menu_main.appendChild(cards)
    menu_main.appendChild(cards1)
    menu_main.appendChild(cards2)
    menu_main.appendChild(cards3)
    menu_main.appendChild(cards4)
    menu_main.appendChild(cards5)
    menu_main.appendChild(cards6)
    menu_main.appendChild(cards7)
    menu_main.appendChild(cards8)
    let name=document.createElement('h2')
    let name1=document.createElement('h2')
    let name2=document.createElement('h2')
    let name3=document.createElement('h2')
    let name4=document.createElement('h2')
    let name5=document.createElement('h2')
    let name6=document.createElement('h2')
    let name7=document.createElement('h2')
    let name8=document.createElement('h2')
    name.textContent="Flora's Garden Delight Salad"
    name1.textContent="Rosemary Roasted Chicken"
    name2.textContent="Grilled Atlantic Salmon"
    name3.textContent="Spicy Chipotle Tacos"
    name4.textContent="Tangy BBQ Pulled Pork"
    name5.textContent="Classic Beef Burger"
    name6.textContent="Teriyaki Glazed Tofu Stir-Fry"
    name7.textContent="Forest Mushroom Risotto"
    name8.textContent="Azalea Almond Croissant"
    cards.appendChild(name)
    cards1.appendChild(name1)
    cards2.appendChild(name2)
    cards3.appendChild(name3)
    cards4.appendChild(name4)
    cards5.appendChild(name5)
    cards6.appendChild(name6)
    cards7.appendChild(name7)
    cards8.appendChild(name8)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ042QztBQUNmO0FBQ007QUFDTjtBQUM5QjtBQUNBLDJDQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwyREFBVztBQUNmLElBQUksNENBQUk7QUFDUjtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwyREFBVztBQUNmLElBQUksNENBQUk7QUFDUixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMkRBQVc7QUFDZixJQUFJLGtEQUFPO0FBQ1gsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJwYWNrLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJwYWNrLy4vc3JjL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay8uL3NyYy9pbml0aWFsLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJwYWNrLy4vc3JjL21haW4tZGl2LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay8uL3NyYy9uYXYtYmFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0aWFsTG9hZCB9IGZyb20gXCIuL2luaXRpYWwtbG9hZFwiO1xyXG5pbXBvcnQgeyBob21lIH0gZnJvbSBcIi4vaG9tZVwiO1xyXG5pbXBvcnQgeyBtZW51IH0gZnJvbSBcIi4vbWVudVwiO1xyXG5mdW5jdGlvbiBjb250YWN0KCkge1xyXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXHJcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCJcclxuICAgIGluaXRpYWxMb2FkKClcclxuXHJcbiAgICBsZXQgaG9tZV9uYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpXHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGNvbnRhY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdCcpXHJcbiAgICAgICAgY29udGFjdC5jbGFzc05hbWUgPSBcIm5hdi1iYXItaXRlbXMtYWN0aXZlXCJcclxuICAgIH0sIDEpXHJcblxyXG4gICAgaG9tZV9uYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgaG9tZSgpXHJcbiAgICB9KVxyXG5cclxuICAgIGxldCBtZW51X25hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51JylcclxuICAgIG1lbnVfbmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIG1lbnUoKVxyXG4gICAgfSlcclxuXHJcbiAgICBsZXQgY29udGFjdF9tYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpXHJcbiAgICBjb250YWN0X21haW4uY2xhc3NOYW1lID0gXCJjb250YWN0LW1haW5cIlxyXG4gICAgbGV0IGNvbnRhY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnRhY3RDYXJkLmlkID0gXCJjb250YWN0LWNhcmRcIlxyXG4gICAgY29udGFjdF9tYWluLmFwcGVuZENoaWxkKGNvbnRhY3RDYXJkKVxyXG4gICAgbGV0IGNhcmRfZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIGxldCBjYXJkX3Bob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICBsZXQgY2FyZF9hZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICBsZXQgY2FyZF9pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY2FyZF9pbWcuaWQ9XCJjb250YWN0LWNhcmQtaW1nXCJcclxuICAgIGNhcmRfZW1haWwudGV4dENvbnRlbnQgPSBcIkVtYWlsOiAgZmxvcmEyMDIzQHdlYnBhY2suY29tXCJcclxuICAgIGNhcmRfcGhvbmUudGV4dENvbnRlbnQgPSBcIlBob25lIE51bWJlcjogICg1NTUpIDEyMy00NTY3XCJcclxuICAgIGNhcmRfYWRkcmVzcy50ZXh0Q29udGVudCA9IGBBZGRyZXNzOiAgRmxvcmEgMTIzIEdvdXJtZXQgU3RyZWV0IEZvb2R2aWxsZSwgQ0EgOTg3NjUgVW5pdGVkIFN0YXRlc2BcclxuICAgIGNvbnRhY3RDYXJkLmFwcGVuZENoaWxkKGNhcmRfcGhvbmUpXHJcbiAgICBjb250YWN0Q2FyZC5hcHBlbmRDaGlsZChjYXJkX2VtYWlsKVxyXG4gICAgY29udGFjdENhcmQuYXBwZW5kQ2hpbGQoY2FyZF9hZGRyZXNzKVxyXG4gICAgY29udGFjdENhcmQuYXBwZW5kQ2hpbGQoY2FyZF9pbWcpXHJcblxyXG59XHJcbmV4cG9ydCB7IGNvbnRhY3QgfSIsImZ1bmN0aW9uIGNyZWF0ZUZvb3RlcihzdHJpbmcpeyAgIFxyXG4gICAgbGV0IG1haW49ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxyXG4gICAgbGV0IGZvb3RlckRpdj0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgbGV0IHBhcmE9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgZm9vdGVyRGl2LmlkPVwiZm9vdGVyXCJcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoZm9vdGVyRGl2KVxyXG4gICAgZm9vdGVyRGl2LmFwcGVuZENoaWxkKHBhcmEpXHJcbiAgICBwYXJhLnRleHRDb250ZW50PXN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVGb290ZXIgfSIsImZ1bmN0aW9uIGNyZWF0ZUhlYWRlcihoZWFkZXIpeyAgIFxyXG4gICAgbGV0IG1haW49ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxyXG4gICAgbGV0IGhlYWREaXY9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGxldCBoZWFkPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbiAgICBoZWFkLmlkPVwiaGVhZGVyLXRleHRcIlxyXG4gICAgaGVhZERpdi5jbGFzc05hbWU9XCJoZWFkXCJcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoaGVhZERpdilcclxuICAgIGhlYWREaXYuYXBwZW5kQ2hpbGQoaGVhZClcclxuICAgIGhlYWQudGV4dENvbnRlbnQ9aGVhZGVyXHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUhlYWRlciB9IiwiaW1wb3J0IHsgaW5pdGlhbExvYWQgfSBmcm9tIFwiLi9pbml0aWFsLWxvYWRcIlxyXG5pbXBvcnQgeyBjb250YWN0IH0gZnJvbSBcIi4vY29udGFjdFwiXHJcbmltcG9ydCB7IG1lbnUgfSBmcm9tIFwiLi9tZW51XCJcclxuZnVuY3Rpb24gaG9tZSgpIHtcclxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxyXG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICBpbml0aWFsTG9hZCgpXHJcblxyXG4gICAgbGV0IG1lbnVfbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKVxyXG4gICAgbWVudV9uYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgIG1lbnUoKVxyXG4gICAgfSlcclxuXHJcbiAgICBsZXQgY29udGFjdF9uYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdCcpXHJcbiAgICBjb250YWN0X25hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb250YWN0KClcclxuICAgIH0pXHJcblxyXG4gICAgbGV0IGhvbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpXHJcbiAgICBob21lLmNsYXNzTmFtZSA9IFwibmF2LWJhci1pdGVtcy1hY3RpdmVcIlxyXG5cclxuICAgIGxldCBob21lX21haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIilcclxuICAgIGhvbWVfbWFpbi5jbGFzc05hbWUgPSBcImhvbWUtbWFpblwiXHJcblxyXG4gICAgbGV0IGluZm9fZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgaW5mb19kaXYuY2xhc3NOYW1lID0gXCJpbmZvLWRpdnNcIlxyXG4gICAgbGV0IGluZm9fZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGluZm9fZGl2Mi5jbGFzc05hbWUgPSBcImluZm8tZGl2c1wiXHJcblxyXG4gICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBpbWcuY2xhc3NOYW1lID0gXCJjYXJkLWltZ1wiXHJcbiAgICBsZXQgaW1nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBpbWcyLmNsYXNzTmFtZSA9IFwiY2FyZC1pbWcyXCJcclxuXHJcbiAgICBsZXQgcGFyYTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIHBhcmExLmlkID0gXCJpbmZvLXBhcmFcIlxyXG4gICAgbGV0IHBhcmEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICBwYXJhMi5pZCA9IFwiaW5mby1wYXJhMlwiXHJcblxyXG4gICAgaG9tZV9tYWluLmFwcGVuZENoaWxkKGluZm9fZGl2KVxyXG4gICAgaG9tZV9tYWluLmFwcGVuZENoaWxkKGluZm9fZGl2MilcclxuXHJcblxyXG4gICAgaW5mb19kaXYyLmFwcGVuZENoaWxkKGltZylcclxuICAgIGluZm9fZGl2Mi5hcHBlbmRDaGlsZChwYXJhMilcclxuXHJcbiAgICBpbmZvX2Rpdi5hcHBlbmRDaGlsZChwYXJhMSlcclxuICAgIGluZm9fZGl2LmFwcGVuZENoaWxkKGltZzIpXHJcblxyXG5cclxuICAgIHBhcmExLnRleHRDb250ZW50ID0gXCJXZWxjb21lIHRvIEZsb3JhLCB3aGVyZSBjdWxpbmFyeSBleGNlbGxlbmNlIG1lZXRzIGEgd2FybSBhbmQgaW52aXRpbmcgYXRtb3NwaGVyZS4gT3VyIHBhc3Npb24gZm9yIGZvb2QgaXMgcmVmbGVjdGVkIGluIGV2ZXJ5IGRpc2ggd2Ugc2VydmUuIFdpdGggYSBkaXZlcnNlIG1lbnUgaW5zcGlyZWQgYnkgYm90aCBsb2NhbCBmbGF2b3JzIGFuZCBpbnRlcm5hdGlvbmFsIGN1aXNpbmUsIHdlIGFpbSB0byB0YW50YWxpemUgeW91ciB0YXN0ZSBidWRzIHdpdGggYSBzeW1waG9ueSBvZiBmbGF2b3JzLiBXaGV0aGVyIHlvdSdyZSBqb2luaW5nIHVzIGZvciBhIHJvbWFudGljIGRpbm5lciwgYSBmYW1pbHkgY2VsZWJyYXRpb24sIG9yIGEgY2FzdWFsIGx1bmNoIHdpdGggZnJpZW5kcywgb3VyIGRlZGljYXRlZCB0ZWFtIG9mIGNoZWZzIGFuZCBzdGFmZiBhcmUgY29tbWl0dGVkIHRvIHByb3ZpZGluZyB5b3Ugd2l0aCBhbiB1bmZvcmdldHRhYmxlIGRpbmluZyBleHBlcmllbmNlLiBDb21lIHNhdm9yIHRoZSBhcnRpc3RyeSBvZiBvdXIgY2hlZnMsIHBhaXJlZCB3aXRoIGFuIGV4dGVuc2l2ZSBzZWxlY3Rpb24gb2Ygd2luZXMgYW5kIGNvY2t0YWlscywgYWxsIHdoaWxlIGVuam95aW5nIHRoZSBjb3p5IGFtYmlhbmNlIHRoYXQgbWFrZXMgRmxvcmEgdGhlIHBlcmZlY3QgZGVzdGluYXRpb24gZm9yIGZvb2QgbG92ZXJzIGFuZCBjb25ub2lzc2V1cnMgYWxpa2UuIEJvbiBhcHDDqXRpdCFcIlxyXG5cclxuICAgIHBhcmEyLnRleHRDb250ZW50ID0gXCJBdCBGbG9yYSwgd2UgYmVsaWV2ZSBpbiBtb3JlIHRoYW4ganVzdCBncmVhdCBmb29kOyB3ZSdyZSBjb21taXR0ZWQgdG8gcHJvdmlkaW5nIGEgd2FybSBhbmQgaW52aXRpbmcgYXRtb3NwaGVyZSB0aGF0IG1ha2VzIGV2ZXJ5IHZpc2l0IG1lbW9yYWJsZS4gT3VyIGNvenkgc2VhdGluZyBhcnJhbmdlbWVudHMsIHRhc3RlZnVsIGRlY29yLCBhbmQgYXR0ZW50aXZlIHN0YWZmIGVuc3VyZSB0aGF0IHlvdSBmZWVsIHJpZ2h0IGF0IGhvbWUgZnJvbSB0aGUgbW9tZW50IHlvdSBzdGVwIHRocm91Z2ggb3VyIGRvb3JzLiBXaGV0aGVyIHlvdSdyZSBjZWxlYnJhdGluZyBhIHNwZWNpYWwgb2NjYXNpb24gb3Igc2ltcGx5IHNlZWtpbmcgYSBkZWxpZ2h0ZnVsIG1lYWwsIG91ciBkZWRpY2F0ZWQgdGVhbSBpcyBoZXJlIHRvIG1ha2UgeW91ciBleHBlcmllbmNlIGV4Y2VwdGlvbmFsLiBFeHBsb3JlIG91ciBleHRlbnNpdmUgd2luZSBhbmQgY29ja3RhaWwgc2VsZWN0aW9uIHRvIGNvbXBsZW1lbnQgeW91ciBtZWFsLCBhbmQgZG9uJ3QgZm9yZ2V0IHRvIHNhdmUgcm9vbSBmb3Igb3VyIGRlbGVjdGFibGUgZGVzc2VydHMuIEpvaW4gdXMgdG9kYXkgYW5kIGRpc2NvdmVyIHdoeSBGbG9yYSBpcyB0aGUgcGVyZmVjdCBkZXN0aW5hdGlvbiBmb3IgZm9vZCBlbnRodXNpYXN0cyBhbmQgY29ubm9pc3NldXJzIGFsaWtlLlwiXHJcbn1cclxuZXhwb3J0IHsgaG9tZSB9IiwiaW1wb3J0IHsgY3JlYXRlSGVhZGVyIH0gZnJvbSBcIi4vaGVhZGVyXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUZvb3RlciB9IGZyb20gXCIuL2Zvb3RlclwiO1xyXG5pbXBvcnQgeyBjcmVhdGVOYXZCYXIgfSBmcm9tIFwiLi9uYXYtYmFyXCI7XHJcbmltcG9ydCB7IGNyZWF0ZU1haW5EaXYgfSBmcm9tIFwiLi9tYWluLWRpdlwiO1xyXG5mdW5jdGlvbiBpbml0aWFsTG9hZCgpeyAgIFxyXG4gICAgY3JlYXRlSGVhZGVyKFwiRmxvcmFcIilcclxuICAgIGNyZWF0ZU5hdkJhcigpXHJcbiAgICBjcmVhdGVNYWluRGl2KClcclxuICAgIGNyZWF0ZUZvb3RlcihcIkZsb3JhIENvcHlyaWdodCAyMDIzXCIpXHJcbn1cclxuICAgIFxyXG5leHBvcnQge2luaXRpYWxMb2FkfSIsImZ1bmN0aW9uIGNyZWF0ZU1haW5EaXYoKXsgICBcclxuICAgIGxldCBtYWluPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcclxuICAgIGxldCBtYWluRGl2PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBtYWluRGl2LmlkPVwibWFpblwiXHJcbiAgICBtYWluLmFwcGVuZENoaWxkKG1haW5EaXYpXHJcbn1cclxuZXhwb3J0IGxldCBtYWluRGl2XHJcbmV4cG9ydCB7Y3JlYXRlTWFpbkRpdiB9IiwiaW1wb3J0IHsgaW5pdGlhbExvYWQgfSBmcm9tIFwiLi9pbml0aWFsLWxvYWRcIjtcclxuaW1wb3J0IHsgaG9tZSB9IGZyb20gXCIuL2hvbWVcIjtcclxuaW1wb3J0IHsgY29udGFjdCB9IGZyb20gXCIuL2NvbnRhY3RcIjtcclxuZnVuY3Rpb24gbWVudSgpIHtcclxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxyXG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICBpbml0aWFsTG9hZCgpXHJcblxyXG4gICAgbGV0IGhvbWVfbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKVxyXG4gICAgbGV0IGNvbnRhY3RfbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QnKVxyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGxldCBtZW51X25hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51JylcclxuICAgICAgICBtZW51X25hdi5jbGFzc05hbWUgPSBcIm5hdi1iYXItaXRlbXMtYWN0aXZlXCJcclxuICAgIH0sIDEpXHJcblxyXG4gICAgaG9tZV9uYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgaG9tZSgpXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnRhY3RfbmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnRhY3QoKVxyXG4gICAgfSlcclxuXHJcbiAgICBsZXQgbWVudV9tYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpXHJcbiAgICBtZW51X21haW4uY2xhc3NOYW1lID0gXCJtZW51LW1haW5cIlxyXG4gICAgbGV0IGNhcmRzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjYXJkcy5jbGFzc05hbWU9XCJtZW51LWNhcmRzXCJcclxuICAgIGxldCBjYXJkczE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNhcmRzMS5jbGFzc05hbWU9XCJtZW51LWNhcmRzXCJcclxuICAgIGxldCBjYXJkczI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNhcmRzMi5jbGFzc05hbWU9XCJtZW51LWNhcmRzXCJcclxuICAgIGxldCBjYXJkczM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNhcmRzMy5jbGFzc05hbWU9XCJtZW51LWNhcmRzXCJcclxuICAgIGxldCBjYXJkczQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNhcmRzNC5jbGFzc05hbWU9XCJtZW51LWNhcmRzXCJcclxuICAgIGxldCBjYXJkczU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNhcmRzNS5jbGFzc05hbWU9XCJtZW51LWNhcmRzXCJcclxuICAgIGxldCBjYXJkczY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNhcmRzNi5jbGFzc05hbWU9XCJtZW51LWNhcmRzXCJcclxuICAgIGxldCBjYXJkczc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNhcmRzNy5jbGFzc05hbWU9XCJtZW51LWNhcmRzXCJcclxuICAgIGxldCBjYXJkczg9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNhcmRzOC5jbGFzc05hbWU9XCJtZW51LWNhcmRzXCJcclxuICAgIG1lbnVfbWFpbi5hcHBlbmRDaGlsZChjYXJkcylcclxuICAgIG1lbnVfbWFpbi5hcHBlbmRDaGlsZChjYXJkczEpXHJcbiAgICBtZW51X21haW4uYXBwZW5kQ2hpbGQoY2FyZHMyKVxyXG4gICAgbWVudV9tYWluLmFwcGVuZENoaWxkKGNhcmRzMylcclxuICAgIG1lbnVfbWFpbi5hcHBlbmRDaGlsZChjYXJkczQpXHJcbiAgICBtZW51X21haW4uYXBwZW5kQ2hpbGQoY2FyZHM1KVxyXG4gICAgbWVudV9tYWluLmFwcGVuZENoaWxkKGNhcmRzNilcclxuICAgIG1lbnVfbWFpbi5hcHBlbmRDaGlsZChjYXJkczcpXHJcbiAgICBtZW51X21haW4uYXBwZW5kQ2hpbGQoY2FyZHM4KVxyXG4gICAgbGV0IG5hbWU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxyXG4gICAgbGV0IG5hbWUxPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcclxuICAgIGxldCBuYW1lMj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXHJcbiAgICBsZXQgbmFtZTM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxyXG4gICAgbGV0IG5hbWU0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcclxuICAgIGxldCBuYW1lNT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXHJcbiAgICBsZXQgbmFtZTY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxyXG4gICAgbGV0IG5hbWU3PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcclxuICAgIGxldCBuYW1lOD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXHJcbiAgICBuYW1lLnRleHRDb250ZW50PVwiRmxvcmEncyBHYXJkZW4gRGVsaWdodCBTYWxhZFwiXHJcbiAgICBuYW1lMS50ZXh0Q29udGVudD1cIlJvc2VtYXJ5IFJvYXN0ZWQgQ2hpY2tlblwiXHJcbiAgICBuYW1lMi50ZXh0Q29udGVudD1cIkdyaWxsZWQgQXRsYW50aWMgU2FsbW9uXCJcclxuICAgIG5hbWUzLnRleHRDb250ZW50PVwiU3BpY3kgQ2hpcG90bGUgVGFjb3NcIlxyXG4gICAgbmFtZTQudGV4dENvbnRlbnQ9XCJUYW5neSBCQlEgUHVsbGVkIFBvcmtcIlxyXG4gICAgbmFtZTUudGV4dENvbnRlbnQ9XCJDbGFzc2ljIEJlZWYgQnVyZ2VyXCJcclxuICAgIG5hbWU2LnRleHRDb250ZW50PVwiVGVyaXlha2kgR2xhemVkIFRvZnUgU3Rpci1GcnlcIlxyXG4gICAgbmFtZTcudGV4dENvbnRlbnQ9XCJGb3Jlc3QgTXVzaHJvb20gUmlzb3R0b1wiXHJcbiAgICBuYW1lOC50ZXh0Q29udGVudD1cIkF6YWxlYSBBbG1vbmQgQ3JvaXNzYW50XCJcclxuICAgIGNhcmRzLmFwcGVuZENoaWxkKG5hbWUpXHJcbiAgICBjYXJkczEuYXBwZW5kQ2hpbGQobmFtZTEpXHJcbiAgICBjYXJkczIuYXBwZW5kQ2hpbGQobmFtZTIpXHJcbiAgICBjYXJkczMuYXBwZW5kQ2hpbGQobmFtZTMpXHJcbiAgICBjYXJkczQuYXBwZW5kQ2hpbGQobmFtZTQpXHJcbiAgICBjYXJkczUuYXBwZW5kQ2hpbGQobmFtZTUpXHJcbiAgICBjYXJkczYuYXBwZW5kQ2hpbGQobmFtZTYpXHJcbiAgICBjYXJkczcuYXBwZW5kQ2hpbGQobmFtZTcpXHJcbiAgICBjYXJkczguYXBwZW5kQ2hpbGQobmFtZTgpXHJcbn1cclxuZXhwb3J0IHsgbWVudSB9IiwiZnVuY3Rpb24gY3JlYXRlTmF2QmFyKCl7ICAgXHJcbiAgICBsZXQgbWFpbj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXHJcbiAgICBsZXQgbmF2QmFyPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBsZXQgaG9tZSAgPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBsZXQgbWVudSA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGxldCBjb250YWN0ID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgaG9tZS5pZD1cImhvbWVcIlxyXG4gICAgbWVudS5pZD1cIm1lbnVcIlxyXG4gICAgY29udGFjdC5pZD1cImNvbnRhY3RcIlxyXG4gICAgbGV0IGhvbWVfcGFyYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIGxldCBtZW51X3BhcmE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICBsZXQgY29udGFjdF9wYXJhID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIGhvbWVfcGFyYS50ZXh0Q29udGVudD1cIkhvbWVcIlxyXG4gICAgbWVudV9wYXJhLnRleHRDb250ZW50PVwiTWVudVwiXHJcbiAgICBjb250YWN0X3BhcmEudGV4dENvbnRlbnQ9XCJDb250YWN0XCJcclxuICAgIC8vIGhvbWVfcGFyYS5pZD1cIkhvbWVcIlxyXG4gICAgLy8gbWVudV9wYXJhLmlkPVwiTWVudVwiXHJcbiAgICAvLyBjb250YWN0X3BhcmEuaWQ9XCJDb250YWN0XCJcclxuICAgIG5hdkJhci5pZD1cIm5hdmJhclwiXHJcbiAgICBtYWluLmFwcGVuZENoaWxkKG5hdkJhcilcclxuICAgIG5hdkJhci5hcHBlbmRDaGlsZChob21lKVxyXG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKG1lbnUpXHJcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoY29udGFjdClcclxuICAgIGhvbWUuYXBwZW5kQ2hpbGQoaG9tZV9wYXJhKVxyXG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51X3BhcmEpXHJcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RfcGFyYSlcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlTmF2QmFyIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGluaXRpYWxMb2FkIH0gZnJvbSBcIi4vaW5pdGlhbC1sb2FkXCI7XHJcbmltcG9ydCB7IGhvbWUgfSBmcm9tIFwiLi9ob21lXCI7XHJcbmltcG9ydCB7IGNvbnRhY3QgfSBmcm9tIFwiLi9jb250YWN0XCI7XHJcbmltcG9ydCB7IG1lbnUgfSBmcm9tIFwiLi9tZW51XCI7XHJcblxyXG5ob21lKClcclxuXHJcbmxldCBjb250ZW50PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcclxubGV0IGhvbWVfbmF2PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJylcclxubGV0IG1lbnVfbmF2PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51JylcclxubGV0IGNvbnRhY3RfbmF2PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0JylcclxuaG9tZV9uYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgY29uc29sZS5sb2coY29udGVudC5pbm5lckhUTUwpXHJcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCJcclxuICAgIGNvbnNvbGUubG9nKFwiaGVsbG9cIilcclxuICAgIGluaXRpYWxMb2FkKClcclxuICAgIGhvbWUoKVxyXG4gICAgLy8gY29uc29sZS5sb2coY29udGVudC5pbm5lckhUTUwpXHJcbn0pXHJcblxyXG5tZW51X25hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICBjb25zb2xlLmxvZyhjb250ZW50LmlubmVySFRNTClcclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIlxyXG4gICAgY29uc29sZS5sb2coXCJoZWxsb1wiKVxyXG4gICAgaW5pdGlhbExvYWQoKVxyXG4gICAgbWVudSgpXHJcbn0pXHJcblxyXG5jb250YWN0X25hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICBjb25zb2xlLmxvZyhjb250ZW50LmlubmVySFRNTClcclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIlxyXG4gICAgY29uc29sZS5sb2coXCJoZWxsb1wiKVxyXG4gICAgaW5pdGlhbExvYWQoKVxyXG4gICAgY29udGFjdCgpXHJcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9