/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/addTaskToProject.js":
/*!*********************************!*\
  !*** ./src/addTaskToProject.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTaskToProject: () => (/* binding */ addTaskToProject)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");


function addTaskToProject(projectName, task) {
    const project = _projects__WEBPACK_IMPORTED_MODULE_0__.projects.find(proj => proj.name === projectName);

    if (project) {
        project.tasks.push(task);

        localStorage.setItem("projects", JSON.stringify(_projects__WEBPACK_IMPORTED_MODULE_0__.projects));
    } else {
        console.error(`Project "${projectName}" not found.`);
    }
}


/***/ }),

/***/ "./src/displaySideBar.js":
/*!*******************************!*\
  !*** ./src/displaySideBar.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displaySideBar: () => (/* binding */ displaySideBar)
/* harmony export */ });
function displaySideBar(){
    let task = document.getElementById('tasks')
    let project = document.getElementById('projects')
    let tasks_list = JSON.parse(localStorage.getItem("projects"))[0].tasks
    let projects_list = JSON.parse(localStorage.getItem("projects"))
    console.log(tasks_list)
    console.log(projects_list[2].name)
    // console.log(tasks_list[0].title)
    let list = document.createElement('ul');
    for (let i = 0; i < tasks_list.length; ++i) {
        let li = document.createElement('li');
        li.textContent = tasks_list[i].title;
        list.appendChild(li);
    }

    let list_project = document.createElement('ul');
    for (let i = 1; i < projects_list.length; ++i) {
        let li = document.createElement('li');
        li.textContent = projects_list[i].name;
        console.log(tasks_list[i].name)
        list_project.appendChild(li);
    }

    task.appendChild(list)
    project.appendChild(list_project)
}


/***/ }),

/***/ "./src/initialLoad.js":
/*!****************************!*\
  !*** ./src/initialLoad.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialLoad: () => (/* binding */ initialLoad)
/* harmony export */ });
/* harmony import */ var _topbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topbar */ "./src/topbar.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main */ "./src/main.js");




function initialLoad(){
    (0,_topbar__WEBPACK_IMPORTED_MODULE_0__.topBar)()
    ;(0,_sidebar__WEBPACK_IMPORTED_MODULE_1__.sidebar)()
    ;(0,_main__WEBPACK_IMPORTED_MODULE_2__.main)()
}



/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   main: () => (/* binding */ main)
/* harmony export */ });
function main(){
    let content=document.getElementById('content')
    let main =document.createElement('div')
    let btn =document.createElement('button')
    btn.className="btn"
    btn.textContent="Add Tasks"
    main.id="main"
    content.appendChild(main)
    main.appendChild(btn)
}


/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   projects: () => (/* binding */ projects)
/* harmony export */ });
let projects=[]

function createProject(project_name) {
    const newProjects={
        name: project_name,
        tasks: []
    }

    projects.push(newProjects)
    console.log({projects})

    // project[project_name] = [1,2,3]
    localStorage.setItem("projects", JSON.stringify(projects))
    console.log({projects})

    const storedProjects = JSON.parse(localStorage.getItem("projects"));
    console.log(storedProjects[0]);
    // let obj = localStorage.getItem(task)
    // project.push(obj)
    // console.log(project)
}


/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sidebar: () => (/* binding */ sidebar)
/* harmony export */ });
function sidebar() {
    let content = document.getElementById('content')
    let side_bar = document.createElement('div')
    let tasks = document.createElement('div')
    let projects = document.createElement('div')
    tasks.id = 'tasks'
    projects.id = 'projects'
    side_bar.id = "side-bar"
    projects.textContent = 'Projects'
    tasks.textContent = 'Tasks'
    content.appendChild(side_bar)
    side_bar.appendChild(projects)
    side_bar.appendChild(tasks)

}


/***/ }),

/***/ "./src/task-object.js":
/*!****************************!*\
  !*** ./src/task-object.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task)
/* harmony export */ });
function Task(title, name, desc){
    this.title=title
    this.name=name
    this.desc=desc
}


/***/ }),

/***/ "./src/topbar.js":
/*!***********************!*\
  !*** ./src/topbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   topBar: () => (/* binding */ topBar)
/* harmony export */ });
function topBar(){
    let content=document.getElementById('content')
    let topBar =document.createElement('div')
    let topBar_header =document.createElement('h1')
    topBar_header.className="top-bar-head"
    topBar_header.textContent="To-Do list"
    topBar.id="top-bar"
    topBar.appendChild(topBar_header)
    content.appendChild(topBar)
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
/* harmony import */ var _task_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task-object */ "./src/task-object.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _addTaskToProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addTaskToProject */ "./src/addTaskToProject.js");
/* harmony import */ var _initialLoad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./initialLoad */ "./src/initialLoad.js");
/* harmony import */ var _displaySideBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./displaySideBar */ "./src/displaySideBar.js");






(0,_initialLoad__WEBPACK_IMPORTED_MODULE_3__.initialLoad)()

let task = new _task_object__WEBPACK_IMPORTED_MODULE_0__.Task("title", "name", "desc")
let task1 = new _task_object__WEBPACK_IMPORTED_MODULE_0__.Task("title", "name", "desc")
let task2 = new _task_object__WEBPACK_IMPORTED_MODULE_0__.Task("code", "code", "code everyday")
let task3 = new _task_object__WEBPACK_IMPORTED_MODULE_0__.Task("read", "read", "read everyday")
;(0,_projects__WEBPACK_IMPORTED_MODULE_1__.createProject)("empty_project")
;(0,_projects__WEBPACK_IMPORTED_MODULE_1__.createProject)("work")
;(0,_projects__WEBPACK_IMPORTED_MODULE_1__.createProject)("gym")
;(0,_projects__WEBPACK_IMPORTED_MODULE_1__.createProject)("study")
;(0,_addTaskToProject__WEBPACK_IMPORTED_MODULE_2__.addTaskToProject)("empty_project", task)
;(0,_addTaskToProject__WEBPACK_IMPORTED_MODULE_2__.addTaskToProject)("empty_project", task1)
;(0,_addTaskToProject__WEBPACK_IMPORTED_MODULE_2__.addTaskToProject)("empty_project", task2)
;(0,_addTaskToProject__WEBPACK_IMPORTED_MODULE_2__.addTaskToProject)("empty_project", task3)
;(0,_displaySideBar__WEBPACK_IMPORTED_MODULE_4__.displaySideBar)()
//? console.log(projects)
//? console.log(typeof(projects))
//? console.log(JSON.parse(localStorage.getItem("projects")))
//? let p=JSON.parse(localStorage.getItem("projects"))
//? console.log(p[0].tasks)

// console.log(typeof(JSON.parse(localStorage.getItem("projects"))))
// console.log(typeof(localStorage.getItem("projects")))

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDdEM7QUFDQTtBQUNBLG9CQUFvQiwrQ0FBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCwrQ0FBUTtBQUNoRSxNQUFNO0FBQ04sa0NBQWtDLFlBQVk7QUFDOUM7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMEJBQTBCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJrQztBQUNFO0FBQ047QUFDOUI7QUFDQTtBQUNBLElBQUksK0NBQU07QUFDVixJQUFJLGtEQUFPO0FBQ1gsSUFBSSw0Q0FBSTtBQUNSO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDVEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOb0M7QUFDZ0I7QUFDQztBQUNWO0FBQ007QUFDakQ7QUFDQSx5REFBVztBQUNYO0FBQ0EsZUFBZSw4Q0FBSTtBQUNuQixnQkFBZ0IsOENBQUk7QUFDcEIsZ0JBQWdCLDhDQUFJO0FBQ3BCLGdCQUFnQiw4Q0FBSTtBQUNwQix5REFBYTtBQUNiLHlEQUFhO0FBQ2IseURBQWE7QUFDYix5REFBYTtBQUNiLG9FQUFnQjtBQUNoQixvRUFBZ0I7QUFDaEIsb0VBQWdCO0FBQ2hCLG9FQUFnQjtBQUNoQixnRUFBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2FkZFRhc2tUb1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kaXNwbGF5U2lkZUJhci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luaXRpYWxMb2FkLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Rhc2stb2JqZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9wYmFyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuXHJcbmZ1bmN0aW9uIGFkZFRhc2tUb1Byb2plY3QocHJvamVjdE5hbWUsIHRhc2spIHtcclxuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5maW5kKHByb2ogPT4gcHJvai5uYW1lID09PSBwcm9qZWN0TmFtZSk7XHJcblxyXG4gICAgaWYgKHByb2plY3QpIHtcclxuICAgICAgICBwcm9qZWN0LnRhc2tzLnB1c2godGFzayk7XHJcblxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihgUHJvamVjdCBcIiR7cHJvamVjdE5hbWV9XCIgbm90IGZvdW5kLmApO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCB7YWRkVGFza1RvUHJvamVjdH0iLCJmdW5jdGlvbiBkaXNwbGF5U2lkZUJhcigpe1xyXG4gICAgbGV0IHRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza3MnKVxyXG4gICAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKVxyXG4gICAgbGV0IHRhc2tzX2xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpWzBdLnRhc2tzXHJcbiAgICBsZXQgcHJvamVjdHNfbGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSlcclxuICAgIGNvbnNvbGUubG9nKHRhc2tzX2xpc3QpXHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0c19saXN0WzJdLm5hbWUpXHJcbiAgICAvLyBjb25zb2xlLmxvZyh0YXNrc19saXN0WzBdLnRpdGxlKVxyXG4gICAgbGV0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrc19saXN0Lmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBsaS50ZXh0Q29udGVudCA9IHRhc2tzX2xpc3RbaV0udGl0bGU7XHJcbiAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGxpc3RfcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHByb2plY3RzX2xpc3QubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIGxpLnRleHRDb250ZW50ID0gcHJvamVjdHNfbGlzdFtpXS5uYW1lO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tzX2xpc3RbaV0ubmFtZSlcclxuICAgICAgICBsaXN0X3Byb2plY3QuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgfVxyXG5cclxuICAgIHRhc2suYXBwZW5kQ2hpbGQobGlzdClcclxuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQobGlzdF9wcm9qZWN0KVxyXG59XHJcbmV4cG9ydCB7ZGlzcGxheVNpZGVCYXJ9IiwiaW1wb3J0IHsgdG9wQmFyIH0gZnJvbSBcIi4vdG9wYmFyXCI7XHJcbmltcG9ydCB7IHNpZGViYXIgfSBmcm9tIFwiLi9zaWRlYmFyXCI7XHJcbmltcG9ydCB7IG1haW4gfSBmcm9tIFwiLi9tYWluXCI7XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsTG9hZCgpe1xyXG4gICAgdG9wQmFyKClcclxuICAgIHNpZGViYXIoKVxyXG4gICAgbWFpbigpXHJcbn1cclxuXHJcbmV4cG9ydHtpbml0aWFsTG9hZH0iLCJmdW5jdGlvbiBtYWluKCl7XHJcbiAgICBsZXQgY29udGVudD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXHJcbiAgICBsZXQgbWFpbiA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGxldCBidG4gPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICBidG4uY2xhc3NOYW1lPVwiYnRuXCJcclxuICAgIGJ0bi50ZXh0Q29udGVudD1cIkFkZCBUYXNrc1wiXHJcbiAgICBtYWluLmlkPVwibWFpblwiXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pXHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGJ0bilcclxufVxyXG5leHBvcnQge21haW59IiwibGV0IHByb2plY3RzPVtdXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHByb2plY3RfbmFtZSkge1xyXG4gICAgY29uc3QgbmV3UHJvamVjdHM9e1xyXG4gICAgICAgIG5hbWU6IHByb2plY3RfbmFtZSxcclxuICAgICAgICB0YXNrczogW11cclxuICAgIH1cclxuXHJcbiAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3RzKVxyXG4gICAgY29uc29sZS5sb2coe3Byb2plY3RzfSlcclxuXHJcbiAgICAvLyBwcm9qZWN0W3Byb2plY3RfbmFtZV0gPSBbMSwyLDNdXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSlcclxuICAgIGNvbnNvbGUubG9nKHtwcm9qZWN0c30pXHJcblxyXG4gICAgY29uc3Qgc3RvcmVkUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xyXG4gICAgY29uc29sZS5sb2coc3RvcmVkUHJvamVjdHNbMF0pO1xyXG4gICAgLy8gbGV0IG9iaiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRhc2spXHJcbiAgICAvLyBwcm9qZWN0LnB1c2gob2JqKVxyXG4gICAgLy8gY29uc29sZS5sb2cocHJvamVjdClcclxufVxyXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0LCBwcm9qZWN0cyB9IiwiZnVuY3Rpb24gc2lkZWJhcigpIHtcclxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxyXG4gICAgbGV0IHNpZGVfYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGxldCB0YXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBsZXQgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgdGFza3MuaWQgPSAndGFza3MnXHJcbiAgICBwcm9qZWN0cy5pZCA9ICdwcm9qZWN0cydcclxuICAgIHNpZGVfYmFyLmlkID0gXCJzaWRlLWJhclwiXHJcbiAgICBwcm9qZWN0cy50ZXh0Q29udGVudCA9ICdQcm9qZWN0cydcclxuICAgIHRhc2tzLnRleHRDb250ZW50ID0gJ1Rhc2tzJ1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChzaWRlX2JhcilcclxuICAgIHNpZGVfYmFyLmFwcGVuZENoaWxkKHByb2plY3RzKVxyXG4gICAgc2lkZV9iYXIuYXBwZW5kQ2hpbGQodGFza3MpXHJcblxyXG59XHJcbmV4cG9ydCB7IHNpZGViYXIgfSIsImZ1bmN0aW9uIFRhc2sodGl0bGUsIG5hbWUsIGRlc2Mpe1xyXG4gICAgdGhpcy50aXRsZT10aXRsZVxyXG4gICAgdGhpcy5uYW1lPW5hbWVcclxuICAgIHRoaXMuZGVzYz1kZXNjXHJcbn1cclxuZXhwb3J0IHtUYXNrfSIsImZ1bmN0aW9uIHRvcEJhcigpe1xyXG4gICAgbGV0IGNvbnRlbnQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxyXG4gICAgbGV0IHRvcEJhciA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGxldCB0b3BCYXJfaGVhZGVyID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbiAgICB0b3BCYXJfaGVhZGVyLmNsYXNzTmFtZT1cInRvcC1iYXItaGVhZFwiXHJcbiAgICB0b3BCYXJfaGVhZGVyLnRleHRDb250ZW50PVwiVG8tRG8gbGlzdFwiXHJcbiAgICB0b3BCYXIuaWQ9XCJ0b3AtYmFyXCJcclxuICAgIHRvcEJhci5hcHBlbmRDaGlsZCh0b3BCYXJfaGVhZGVyKVxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0b3BCYXIpXHJcbn1cclxuZXhwb3J0IHt0b3BCYXJ9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFzay1vYmplY3RcIlxyXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0LCBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCJcclxuaW1wb3J0IHsgYWRkVGFza1RvUHJvamVjdCB9IGZyb20gXCIuL2FkZFRhc2tUb1Byb2plY3RcIlxyXG5pbXBvcnQgeyBpbml0aWFsTG9hZCB9IGZyb20gXCIuL2luaXRpYWxMb2FkXCJcclxuaW1wb3J0IHsgZGlzcGxheVNpZGVCYXIgfSBmcm9tIFwiLi9kaXNwbGF5U2lkZUJhclwiXHJcblxyXG5pbml0aWFsTG9hZCgpXHJcblxyXG5sZXQgdGFzayA9IG5ldyBUYXNrKFwidGl0bGVcIiwgXCJuYW1lXCIsIFwiZGVzY1wiKVxyXG5sZXQgdGFzazEgPSBuZXcgVGFzayhcInRpdGxlXCIsIFwibmFtZVwiLCBcImRlc2NcIilcclxubGV0IHRhc2syID0gbmV3IFRhc2soXCJjb2RlXCIsIFwiY29kZVwiLCBcImNvZGUgZXZlcnlkYXlcIilcclxubGV0IHRhc2szID0gbmV3IFRhc2soXCJyZWFkXCIsIFwicmVhZFwiLCBcInJlYWQgZXZlcnlkYXlcIilcclxuY3JlYXRlUHJvamVjdChcImVtcHR5X3Byb2plY3RcIilcclxuY3JlYXRlUHJvamVjdChcIndvcmtcIilcclxuY3JlYXRlUHJvamVjdChcImd5bVwiKVxyXG5jcmVhdGVQcm9qZWN0KFwic3R1ZHlcIilcclxuYWRkVGFza1RvUHJvamVjdChcImVtcHR5X3Byb2plY3RcIiwgdGFzaylcclxuYWRkVGFza1RvUHJvamVjdChcImVtcHR5X3Byb2plY3RcIiwgdGFzazEpXHJcbmFkZFRhc2tUb1Byb2plY3QoXCJlbXB0eV9wcm9qZWN0XCIsIHRhc2syKVxyXG5hZGRUYXNrVG9Qcm9qZWN0KFwiZW1wdHlfcHJvamVjdFwiLCB0YXNrMylcclxuZGlzcGxheVNpZGVCYXIoKVxyXG4vLz8gY29uc29sZS5sb2cocHJvamVjdHMpXHJcbi8vPyBjb25zb2xlLmxvZyh0eXBlb2YocHJvamVjdHMpKVxyXG4vLz8gY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSlcclxuLy8/IGxldCBwPUpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSlcclxuLy8/IGNvbnNvbGUubG9nKHBbMF0udGFza3MpXHJcblxyXG4vLyBjb25zb2xlLmxvZyh0eXBlb2YoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSkpXHJcbi8vIGNvbnNvbGUubG9nKHR5cGVvZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSlcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9