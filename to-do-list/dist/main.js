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
    let side_bar=document.getElementById('side-bar')
    let tasks_list = JSON.parse(localStorage.getItem("projects"))[0].tasks
    console.log(tasks_list)
    // console.log(tasks_list[0].title)
    let list = document.createElement('ul');
    for (let i = 0; i < tasks_list.length; ++i) {
        let li = document.createElement('li');
        li.textContent = tasks_list[i].title;
        list.appendChild(li);
    }

    side_bar.appendChild(list)
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
    main.id="main"
    content.appendChild(main)
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
    let tasks = document.createElement('h1')
    let projects = document.createElement('h1')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDdEM7QUFDQTtBQUNBLG9CQUFvQiwrQ0FBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCwrQ0FBUTtBQUNoRSxNQUFNO0FBQ04sa0NBQWtDLFlBQVk7QUFDOUM7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYmtDO0FBQ0U7QUFDTjtBQUM5QjtBQUNBO0FBQ0EsSUFBSSwrQ0FBTTtBQUNWLElBQUksa0RBQU87QUFDWCxJQUFJLDRDQUFJO0FBQ1I7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDVEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOb0M7QUFDZ0I7QUFDQztBQUNWO0FBQ007QUFDakQ7QUFDQSx5REFBVztBQUNYO0FBQ0EsZUFBZSw4Q0FBSTtBQUNuQixnQkFBZ0IsOENBQUk7QUFDcEIsZ0JBQWdCLDhDQUFJO0FBQ3BCLGdCQUFnQiw4Q0FBSTtBQUNwQix5REFBYTtBQUNiLHlEQUFhO0FBQ2IseURBQWE7QUFDYix5REFBYTtBQUNiLG9FQUFnQjtBQUNoQixvRUFBZ0I7QUFDaEIsb0VBQWdCO0FBQ2hCLG9FQUFnQjtBQUNoQixnRUFBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2FkZFRhc2tUb1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kaXNwbGF5U2lkZUJhci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luaXRpYWxMb2FkLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Rhc2stb2JqZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9wYmFyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuXHJcbmZ1bmN0aW9uIGFkZFRhc2tUb1Byb2plY3QocHJvamVjdE5hbWUsIHRhc2spIHtcclxuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5maW5kKHByb2ogPT4gcHJvai5uYW1lID09PSBwcm9qZWN0TmFtZSk7XHJcblxyXG4gICAgaWYgKHByb2plY3QpIHtcclxuICAgICAgICBwcm9qZWN0LnRhc2tzLnB1c2godGFzayk7XHJcblxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihgUHJvamVjdCBcIiR7cHJvamVjdE5hbWV9XCIgbm90IGZvdW5kLmApO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCB7YWRkVGFza1RvUHJvamVjdH0iLCJmdW5jdGlvbiBkaXNwbGF5U2lkZUJhcigpe1xyXG4gICAgbGV0IHNpZGVfYmFyPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWRlLWJhcicpXHJcbiAgICBsZXQgdGFza3NfbGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSlbMF0udGFza3NcclxuICAgIGNvbnNvbGUubG9nKHRhc2tzX2xpc3QpXHJcbiAgICAvLyBjb25zb2xlLmxvZyh0YXNrc19saXN0WzBdLnRpdGxlKVxyXG4gICAgbGV0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrc19saXN0Lmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBsaS50ZXh0Q29udGVudCA9IHRhc2tzX2xpc3RbaV0udGl0bGU7XHJcbiAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2lkZV9iYXIuYXBwZW5kQ2hpbGQobGlzdClcclxufVxyXG5leHBvcnQge2Rpc3BsYXlTaWRlQmFyfSIsImltcG9ydCB7IHRvcEJhciB9IGZyb20gXCIuL3RvcGJhclwiO1xyXG5pbXBvcnQgeyBzaWRlYmFyIH0gZnJvbSBcIi4vc2lkZWJhclwiO1xyXG5pbXBvcnQgeyBtYWluIH0gZnJvbSBcIi4vbWFpblwiO1xyXG5cclxuZnVuY3Rpb24gaW5pdGlhbExvYWQoKXtcclxuICAgIHRvcEJhcigpXHJcbiAgICBzaWRlYmFyKClcclxuICAgIG1haW4oKVxyXG59XHJcblxyXG5leHBvcnR7aW5pdGlhbExvYWR9IiwiZnVuY3Rpb24gbWFpbigpe1xyXG4gICAgbGV0IGNvbnRlbnQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxyXG4gICAgbGV0IG1haW4gPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBtYWluLmlkPVwibWFpblwiXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pXHJcbn1cclxuZXhwb3J0IHttYWlufSIsImxldCBwcm9qZWN0cz1bXVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChwcm9qZWN0X25hbWUpIHtcclxuICAgIGNvbnN0IG5ld1Byb2plY3RzPXtcclxuICAgICAgICBuYW1lOiBwcm9qZWN0X25hbWUsXHJcbiAgICAgICAgdGFza3M6IFtdXHJcbiAgICB9XHJcblxyXG4gICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0cylcclxuICAgIGNvbnNvbGUubG9nKHtwcm9qZWN0c30pXHJcblxyXG4gICAgLy8gcHJvamVjdFtwcm9qZWN0X25hbWVdID0gWzEsMiwzXVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpXHJcbiAgICBjb25zb2xlLmxvZyh7cHJvamVjdHN9KVxyXG5cclxuICAgIGNvbnN0IHN0b3JlZFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcclxuICAgIGNvbnNvbGUubG9nKHN0b3JlZFByb2plY3RzWzBdKTtcclxuICAgIC8vIGxldCBvYmogPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0YXNrKVxyXG4gICAgLy8gcHJvamVjdC5wdXNoKG9iailcclxuICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3QpXHJcbn1cclxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdCwgcHJvamVjdHMgfSIsImZ1bmN0aW9uIHNpZGViYXIoKSB7XHJcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcclxuICAgIGxldCBzaWRlX2JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBsZXQgdGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbiAgICBsZXQgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbiAgICB0YXNrcy5pZCA9ICd0YXNrcydcclxuICAgIHByb2plY3RzLmlkID0gJ3Byb2plY3RzJ1xyXG4gICAgc2lkZV9iYXIuaWQgPSBcInNpZGUtYmFyXCJcclxuICAgIHByb2plY3RzLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJ1xyXG4gICAgdGFza3MudGV4dENvbnRlbnQgPSAnVGFza3MnXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHNpZGVfYmFyKVxyXG4gICAgc2lkZV9iYXIuYXBwZW5kQ2hpbGQocHJvamVjdHMpXHJcbiAgICBzaWRlX2Jhci5hcHBlbmRDaGlsZCh0YXNrcylcclxuXHJcbn1cclxuZXhwb3J0IHsgc2lkZWJhciB9IiwiZnVuY3Rpb24gVGFzayh0aXRsZSwgbmFtZSwgZGVzYyl7XHJcbiAgICB0aGlzLnRpdGxlPXRpdGxlXHJcbiAgICB0aGlzLm5hbWU9bmFtZVxyXG4gICAgdGhpcy5kZXNjPWRlc2NcclxufVxyXG5leHBvcnQge1Rhc2t9IiwiZnVuY3Rpb24gdG9wQmFyKCl7XHJcbiAgICBsZXQgY29udGVudD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXHJcbiAgICBsZXQgdG9wQmFyID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgbGV0IHRvcEJhcl9oZWFkZXIgPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcclxuICAgIHRvcEJhcl9oZWFkZXIuY2xhc3NOYW1lPVwidG9wLWJhci1oZWFkXCJcclxuICAgIHRvcEJhcl9oZWFkZXIudGV4dENvbnRlbnQ9XCJUby1EbyBsaXN0XCJcclxuICAgIHRvcEJhci5pZD1cInRvcC1iYXJcIlxyXG4gICAgdG9wQmFyLmFwcGVuZENoaWxkKHRvcEJhcl9oZWFkZXIpXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRvcEJhcilcclxufVxyXG5leHBvcnQge3RvcEJhcn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi90YXNrLW9iamVjdFwiXHJcbmltcG9ydCB7IGNyZWF0ZVByb2plY3QsIHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIlxyXG5pbXBvcnQgeyBhZGRUYXNrVG9Qcm9qZWN0IH0gZnJvbSBcIi4vYWRkVGFza1RvUHJvamVjdFwiXHJcbmltcG9ydCB7IGluaXRpYWxMb2FkIH0gZnJvbSBcIi4vaW5pdGlhbExvYWRcIlxyXG5pbXBvcnQgeyBkaXNwbGF5U2lkZUJhciB9IGZyb20gXCIuL2Rpc3BsYXlTaWRlQmFyXCJcclxuXHJcbmluaXRpYWxMb2FkKClcclxuXHJcbmxldCB0YXNrID0gbmV3IFRhc2soXCJ0aXRsZVwiLCBcIm5hbWVcIiwgXCJkZXNjXCIpXHJcbmxldCB0YXNrMSA9IG5ldyBUYXNrKFwidGl0bGVcIiwgXCJuYW1lXCIsIFwiZGVzY1wiKVxyXG5sZXQgdGFzazIgPSBuZXcgVGFzayhcImNvZGVcIiwgXCJjb2RlXCIsIFwiY29kZSBldmVyeWRheVwiKVxyXG5sZXQgdGFzazMgPSBuZXcgVGFzayhcInJlYWRcIiwgXCJyZWFkXCIsIFwicmVhZCBldmVyeWRheVwiKVxyXG5jcmVhdGVQcm9qZWN0KFwiZW1wdHlfcHJvamVjdFwiKVxyXG5jcmVhdGVQcm9qZWN0KFwid29ya1wiKVxyXG5jcmVhdGVQcm9qZWN0KFwiZ3ltXCIpXHJcbmNyZWF0ZVByb2plY3QoXCJzdHVkeVwiKVxyXG5hZGRUYXNrVG9Qcm9qZWN0KFwiZW1wdHlfcHJvamVjdFwiLCB0YXNrKVxyXG5hZGRUYXNrVG9Qcm9qZWN0KFwiZW1wdHlfcHJvamVjdFwiLCB0YXNrMSlcclxuYWRkVGFza1RvUHJvamVjdChcImVtcHR5X3Byb2plY3RcIiwgdGFzazIpXHJcbmFkZFRhc2tUb1Byb2plY3QoXCJlbXB0eV9wcm9qZWN0XCIsIHRhc2szKVxyXG5kaXNwbGF5U2lkZUJhcigpXHJcbi8vPyBjb25zb2xlLmxvZyhwcm9qZWN0cylcclxuLy8/IGNvbnNvbGUubG9nKHR5cGVvZihwcm9qZWN0cykpXHJcbi8vPyBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpKVxyXG4vLz8gbGV0IHA9SlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKVxyXG4vLz8gY29uc29sZS5sb2cocFswXS50YXNrcylcclxuXHJcbi8vIGNvbnNvbGUubG9nKHR5cGVvZihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpKSlcclxuLy8gY29uc29sZS5sb2codHlwZW9mKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpKVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=