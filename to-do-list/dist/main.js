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

/***/ "./src/displayMain.js":
/*!****************************!*\
  !*** ./src/displayMain.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayMain: () => (/* binding */ displayMain)
/* harmony export */ });
function displayMain() {
    let main = document.getElementById('main')
    let task_div = document.getElementById('task_div')
    let tasks_list = JSON.parse(localStorage.getItem("projects"))[0].tasks
    console.log(tasks_list[3].desc)
    let btn = document.createElement('button')
    for (let i = 0; i < tasks_list.length; ++i) {
        let cards = document.createElement('div');
        cards.className = 'cards'
        btn.setAttribute("class", "btn")

        let title = document.createElement('h1')
        let desc = document.createElement('h1')
        title.textContent = tasks_list[i].title
        desc.textContent = tasks_list[i].desc
        task_div.append(cards)
        cards.appendChild(title);
        cards.appendChild(desc);

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
    // console.log(projects_list[2].name)
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
        // console.log(tasks_list[i].name)
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
/* harmony import */ var _task_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task-object */ "./src/task-object.js");
/* harmony import */ var _saveData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saveData */ "./src/saveData.js");


function main() {
    let content = document.getElementById('content')
    let main = document.createElement('div')
    let btn = document.createElement('button')
    let in_title = document.createElement('input')
    let in_name = document.createElement('input')
    let in_desc = document.createElement('input')
    let in_btn = document.createElement('button')
    let btn_div = document.createElement('div')
    let task_div = document.createElement('div')
    btn_div.id="btn_div"
    task_div.id="task_div"

    in_title.setAttribute("type", "Text")
    in_title.setAttribute('placeholder', "Title")
    in_name.setAttribute("type", "Text")
    in_name.setAttribute('placeholder', "Write a unique name")
    in_desc.setAttribute("type", "Text")
    in_desc.setAttribute('placeholder', "description")
    btn.setAttribute("class", "btn")
    in_btn.textContent = "Submit"
    in_btn.className = "btn"
    in_title.id= "title"
    in_name.id = "name"
    in_desc.id = "desc"
    btn.textContent = "Add Tasks"
    main.id = "main"
    content.appendChild(main)
    main.appendChild(btn_div)
    main.appendChild(task_div)
    btn_div.appendChild(btn)
    btn.addEventListener('click', () => {
        task_div.prepend(in_btn)
        task_div.prepend(in_desc)
        task_div.prepend(in_name)
        task_div.prepend(in_title)
    })

    in_btn.addEventListener('click', () => {
        let title_data=in_title.value
        let name_data=in_name.value
        let desc_data=in_desc.value
        console.log(title_data)
        console.log(name_data)
        console.log(desc_data)
        in_title.value=""
        in_name.value=""
        in_desc.value=""
        ;(0,_saveData__WEBPACK_IMPORTED_MODULE_1__.save)(title_data, name_data, desc_data)
        in_desc.remove()
        in_name.remove()
        in_title.remove()
        in_btn.remove()
        // let task = new Task("title", "name", "desc")
    })
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
    // console.log({projects})

    // project[project_name] = [1,2,3]
    localStorage.setItem("projects", JSON.stringify(projects))
    // console.log({projects})

    const storedProjects = JSON.parse(localStorage.getItem("projects"));
    // console.log(storedProjects[0]);
    // let obj = localStorage.getItem(task)
    // project.push(obj)
    // console.log(project)
}


/***/ }),

/***/ "./src/saveData.js":
/*!*************************!*\
  !*** ./src/saveData.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   save: () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _addTaskToProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTaskToProject */ "./src/addTaskToProject.js");
/* harmony import */ var _displayMain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayMain */ "./src/displayMain.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main */ "./src/main.js");
/* harmony import */ var _task_object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-object */ "./src/task-object.js");





function save(title, name, desc, projects="empty_project") {
    let main=document.getElementById("task_div")
    main.textContent=""
    let task = new _task_object__WEBPACK_IMPORTED_MODULE_3__.Task(title, name, desc)
    ;(0,_addTaskToProject__WEBPACK_IMPORTED_MODULE_0__.addTaskToProject)(projects, task)
    ;(0,_displayMain__WEBPACK_IMPORTED_MODULE_1__.displayMain)()
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
/* harmony import */ var _displayMain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./displayMain */ "./src/displayMain.js");







(0,_initialLoad__WEBPACK_IMPORTED_MODULE_3__.initialLoad)()

let task = new _task_object__WEBPACK_IMPORTED_MODULE_0__.Task("title", "name", "desc")
let task1 = new _task_object__WEBPACK_IMPORTED_MODULE_0__.Task("title", "name", "desc")
let task2 = new _task_object__WEBPACK_IMPORTED_MODULE_0__.Task("code", "code", "code everyday")
let task3 = new _task_object__WEBPACK_IMPORTED_MODULE_0__.Task("read", "read", "read everyday")
let task4 = new _task_object__WEBPACK_IMPORTED_MODULE_0__.Task("typing", "typing", "type everyday")
let task5 = new _task_object__WEBPACK_IMPORTED_MODULE_0__.Task("wake up", "wake up", "wake up on time")
;(0,_projects__WEBPACK_IMPORTED_MODULE_1__.createProject)("empty_project")
;(0,_projects__WEBPACK_IMPORTED_MODULE_1__.createProject)("work")
;(0,_projects__WEBPACK_IMPORTED_MODULE_1__.createProject)("gym")
;(0,_projects__WEBPACK_IMPORTED_MODULE_1__.createProject)("study")
;(0,_addTaskToProject__WEBPACK_IMPORTED_MODULE_2__.addTaskToProject)("empty_project", task)
;(0,_addTaskToProject__WEBPACK_IMPORTED_MODULE_2__.addTaskToProject)("empty_project", task1)
;(0,_addTaskToProject__WEBPACK_IMPORTED_MODULE_2__.addTaskToProject)("empty_project", task2)
;(0,_addTaskToProject__WEBPACK_IMPORTED_MODULE_2__.addTaskToProject)("study", task3)
;(0,_addTaskToProject__WEBPACK_IMPORTED_MODULE_2__.addTaskToProject)("work", task4)
;(0,_addTaskToProject__WEBPACK_IMPORTED_MODULE_2__.addTaskToProject)("empty_project", task5)
;(0,_displaySideBar__WEBPACK_IMPORTED_MODULE_4__.displaySideBar)()
;(0,_displayMain__WEBPACK_IMPORTED_MODULE_5__.displayMain)()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eURBQWE7QUFDYix5REFBYTtBQUNiLHlEQUFhO0FBQ2IseURBQWE7QUFDYixvRUFBZ0I7QUFDaEIsb0VBQWdCO0FBQ2hCLG9FQUFnQjtBQUNoQixvRUFBZ0I7QUFDaEIsb0VBQWdCO0FBQ2hCLG9FQUFnQjtBQUNoQixnRUFBYztBQUNkLDBEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hZGRUYXNrVG9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZGlzcGxheU1haW4uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kaXNwbGF5U2lkZUJhci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luaXRpYWxMb2FkLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2F2ZURhdGEuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFzay1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b3BiYXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xyXG5cclxuZnVuY3Rpb24gYWRkVGFza1RvUHJvamVjdChwcm9qZWN0TmFtZSwgdGFzaykge1xyXG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbmQocHJvaiA9PiBwcm9qLm5hbWUgPT09IHByb2plY3ROYW1lKTtcclxuXHJcbiAgICBpZiAocHJvamVjdCkge1xyXG4gICAgICAgIHByb2plY3QudGFza3MucHVzaCh0YXNrKTtcclxuXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGBQcm9qZWN0IFwiJHtwcm9qZWN0TmFtZX1cIiBub3QgZm91bmQuYCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IHthZGRUYXNrVG9Qcm9qZWN0fSIsImZ1bmN0aW9uIGRpc3BsYXlNYWluKCkge1xyXG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpXHJcbiAgICBsZXQgdGFza19kaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza19kaXYnKVxyXG4gICAgbGV0IHRhc2tzX2xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpWzBdLnRhc2tzXHJcbiAgICBjb25zb2xlLmxvZyh0YXNrc19saXN0WzNdLmRlc2MpXHJcbiAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3NfbGlzdC5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIGxldCBjYXJkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNhcmRzLmNsYXNzTmFtZSA9ICdjYXJkcydcclxuICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidG5cIilcclxuXHJcbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxyXG4gICAgICAgIGxldCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxyXG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGFza3NfbGlzdFtpXS50aXRsZVxyXG4gICAgICAgIGRlc2MudGV4dENvbnRlbnQgPSB0YXNrc19saXN0W2ldLmRlc2NcclxuICAgICAgICB0YXNrX2Rpdi5hcHBlbmQoY2FyZHMpXHJcbiAgICAgICAgY2FyZHMuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgICAgIGNhcmRzLmFwcGVuZENoaWxkKGRlc2MpO1xyXG5cclxuICAgIH1cclxufSBleHBvcnQgeyBkaXNwbGF5TWFpbiB9IiwiZnVuY3Rpb24gZGlzcGxheVNpZGVCYXIoKXtcclxuICAgIGxldCB0YXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tzJylcclxuICAgIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzJylcclxuICAgIGxldCB0YXNrc19saXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKVswXS50YXNrc1xyXG4gICAgbGV0IHByb2plY3RzX2xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpXHJcbiAgICBjb25zb2xlLmxvZyh0YXNrc19saXN0KVxyXG4gICAgLy8gY29uc29sZS5sb2cocHJvamVjdHNfbGlzdFsyXS5uYW1lKVxyXG4gICAgLy8gY29uc29sZS5sb2codGFza3NfbGlzdFswXS50aXRsZSlcclxuICAgIGxldCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3NfbGlzdC5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgbGkudGV4dENvbnRlbnQgPSB0YXNrc19saXN0W2ldLnRpdGxlO1xyXG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBsaXN0X3Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwcm9qZWN0c19saXN0Lmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBsaS50ZXh0Q29udGVudCA9IHByb2plY3RzX2xpc3RbaV0ubmFtZTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0YXNrc19saXN0W2ldLm5hbWUpXHJcbiAgICAgICAgbGlzdF9wcm9qZWN0LmFwcGVuZENoaWxkKGxpKTtcclxuICAgIH1cclxuXHJcbiAgICB0YXNrLmFwcGVuZENoaWxkKGxpc3QpXHJcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKGxpc3RfcHJvamVjdClcclxufVxyXG5leHBvcnQge2Rpc3BsYXlTaWRlQmFyfSIsImltcG9ydCB7IHRvcEJhciB9IGZyb20gXCIuL3RvcGJhclwiO1xyXG5pbXBvcnQgeyBzaWRlYmFyIH0gZnJvbSBcIi4vc2lkZWJhclwiO1xyXG5pbXBvcnQgeyBtYWluIH0gZnJvbSBcIi4vbWFpblwiO1xyXG5cclxuZnVuY3Rpb24gaW5pdGlhbExvYWQoKXtcclxuICAgIHRvcEJhcigpXHJcbiAgICBzaWRlYmFyKClcclxuICAgIG1haW4oKVxyXG59XHJcblxyXG5leHBvcnR7aW5pdGlhbExvYWR9IiwiaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3Rhc2stb2JqZWN0XCJcclxuaW1wb3J0IHsgc2F2ZSB9IGZyb20gXCIuL3NhdmVEYXRhXCJcclxuZnVuY3Rpb24gbWFpbigpIHtcclxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxyXG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICBsZXQgaW5fdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICBsZXQgaW5fbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgIGxldCBpbl9kZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgbGV0IGluX2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICBsZXQgYnRuX2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBsZXQgdGFza19kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgYnRuX2Rpdi5pZD1cImJ0bl9kaXZcIlxyXG4gICAgdGFza19kaXYuaWQ9XCJ0YXNrX2RpdlwiXHJcblxyXG4gICAgaW5fdGl0bGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcIlRleHRcIilcclxuICAgIGluX3RpdGxlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBcIlRpdGxlXCIpXHJcbiAgICBpbl9uYW1lLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJUZXh0XCIpXHJcbiAgICBpbl9uYW1lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBcIldyaXRlIGEgdW5pcXVlIG5hbWVcIilcclxuICAgIGluX2Rlc2Muc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcIlRleHRcIilcclxuICAgIGluX2Rlc2Muc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIFwiZGVzY3JpcHRpb25cIilcclxuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJ0blwiKVxyXG4gICAgaW5fYnRuLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIlxyXG4gICAgaW5fYnRuLmNsYXNzTmFtZSA9IFwiYnRuXCJcclxuICAgIGluX3RpdGxlLmlkPSBcInRpdGxlXCJcclxuICAgIGluX25hbWUuaWQgPSBcIm5hbWVcIlxyXG4gICAgaW5fZGVzYy5pZCA9IFwiZGVzY1wiXHJcbiAgICBidG4udGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrc1wiXHJcbiAgICBtYWluLmlkID0gXCJtYWluXCJcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbilcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoYnRuX2RpdilcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQodGFza19kaXYpXHJcbiAgICBidG5fZGl2LmFwcGVuZENoaWxkKGJ0bilcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICB0YXNrX2Rpdi5wcmVwZW5kKGluX2J0bilcclxuICAgICAgICB0YXNrX2Rpdi5wcmVwZW5kKGluX2Rlc2MpXHJcbiAgICAgICAgdGFza19kaXYucHJlcGVuZChpbl9uYW1lKVxyXG4gICAgICAgIHRhc2tfZGl2LnByZXBlbmQoaW5fdGl0bGUpXHJcbiAgICB9KVxyXG5cclxuICAgIGluX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBsZXQgdGl0bGVfZGF0YT1pbl90aXRsZS52YWx1ZVxyXG4gICAgICAgIGxldCBuYW1lX2RhdGE9aW5fbmFtZS52YWx1ZVxyXG4gICAgICAgIGxldCBkZXNjX2RhdGE9aW5fZGVzYy52YWx1ZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRpdGxlX2RhdGEpXHJcbiAgICAgICAgY29uc29sZS5sb2cobmFtZV9kYXRhKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRlc2NfZGF0YSlcclxuICAgICAgICBpbl90aXRsZS52YWx1ZT1cIlwiXHJcbiAgICAgICAgaW5fbmFtZS52YWx1ZT1cIlwiXHJcbiAgICAgICAgaW5fZGVzYy52YWx1ZT1cIlwiXHJcbiAgICAgICAgc2F2ZSh0aXRsZV9kYXRhLCBuYW1lX2RhdGEsIGRlc2NfZGF0YSlcclxuICAgICAgICBpbl9kZXNjLnJlbW92ZSgpXHJcbiAgICAgICAgaW5fbmFtZS5yZW1vdmUoKVxyXG4gICAgICAgIGluX3RpdGxlLnJlbW92ZSgpXHJcbiAgICAgICAgaW5fYnRuLnJlbW92ZSgpXHJcbiAgICAgICAgLy8gbGV0IHRhc2sgPSBuZXcgVGFzayhcInRpdGxlXCIsIFwibmFtZVwiLCBcImRlc2NcIilcclxuICAgIH0pXHJcbn1cclxuZXhwb3J0IHsgbWFpbiB9IiwibGV0IHByb2plY3RzPVtdXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHByb2plY3RfbmFtZSkge1xyXG4gICAgY29uc3QgbmV3UHJvamVjdHM9e1xyXG4gICAgICAgIG5hbWU6IHByb2plY3RfbmFtZSxcclxuICAgICAgICB0YXNrczogW11cclxuICAgIH1cclxuXHJcbiAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3RzKVxyXG4gICAgLy8gY29uc29sZS5sb2coe3Byb2plY3RzfSlcclxuXHJcbiAgICAvLyBwcm9qZWN0W3Byb2plY3RfbmFtZV0gPSBbMSwyLDNdXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSlcclxuICAgIC8vIGNvbnNvbGUubG9nKHtwcm9qZWN0c30pXHJcblxyXG4gICAgY29uc3Qgc3RvcmVkUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xyXG4gICAgLy8gY29uc29sZS5sb2coc3RvcmVkUHJvamVjdHNbMF0pO1xyXG4gICAgLy8gbGV0IG9iaiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRhc2spXHJcbiAgICAvLyBwcm9qZWN0LnB1c2gob2JqKVxyXG4gICAgLy8gY29uc29sZS5sb2cocHJvamVjdClcclxufVxyXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0LCBwcm9qZWN0cyB9IiwiaW1wb3J0IHsgYWRkVGFza1RvUHJvamVjdCB9IGZyb20gXCIuL2FkZFRhc2tUb1Byb2plY3RcIlxyXG5pbXBvcnQgeyBkaXNwbGF5TWFpbiB9IGZyb20gXCIuL2Rpc3BsYXlNYWluXCJcclxuaW1wb3J0IHsgbWFpbiB9IGZyb20gXCIuL21haW5cIlxyXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFzay1vYmplY3RcIlxyXG5cclxuZnVuY3Rpb24gc2F2ZSh0aXRsZSwgbmFtZSwgZGVzYywgcHJvamVjdHM9XCJlbXB0eV9wcm9qZWN0XCIpIHtcclxuICAgIGxldCBtYWluPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza19kaXZcIilcclxuICAgIG1haW4udGV4dENvbnRlbnQ9XCJcIlxyXG4gICAgbGV0IHRhc2sgPSBuZXcgVGFzayh0aXRsZSwgbmFtZSwgZGVzYylcclxuICAgIGFkZFRhc2tUb1Byb2plY3QocHJvamVjdHMsIHRhc2spXHJcbiAgICBkaXNwbGF5TWFpbigpXHJcbn1cclxuZXhwb3J0IHtzYXZlfSIsImZ1bmN0aW9uIHNpZGViYXIoKSB7XHJcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcclxuICAgIGxldCBzaWRlX2JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBsZXQgdGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgbGV0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIHRhc2tzLmlkID0gJ3Rhc2tzJ1xyXG4gICAgcHJvamVjdHMuaWQgPSAncHJvamVjdHMnXHJcbiAgICBzaWRlX2Jhci5pZCA9IFwic2lkZS1iYXJcIlxyXG4gICAgcHJvamVjdHMudGV4dENvbnRlbnQgPSAnUHJvamVjdHMnXHJcbiAgICB0YXNrcy50ZXh0Q29udGVudCA9ICdUYXNrcydcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2lkZV9iYXIpXHJcbiAgICBzaWRlX2Jhci5hcHBlbmRDaGlsZChwcm9qZWN0cylcclxuICAgIHNpZGVfYmFyLmFwcGVuZENoaWxkKHRhc2tzKVxyXG5cclxufVxyXG5leHBvcnQgeyBzaWRlYmFyIH0iLCJmdW5jdGlvbiBUYXNrKHRpdGxlLCBuYW1lLCBkZXNjKXtcclxuICAgIHRoaXMudGl0bGU9dGl0bGVcclxuICAgIHRoaXMubmFtZT1uYW1lXHJcbiAgICB0aGlzLmRlc2M9ZGVzY1xyXG59XHJcbmV4cG9ydCB7VGFza30iLCJmdW5jdGlvbiB0b3BCYXIoKXtcclxuICAgIGxldCBjb250ZW50PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcclxuICAgIGxldCB0b3BCYXIgPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBsZXQgdG9wQmFyX2hlYWRlciA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxyXG4gICAgdG9wQmFyX2hlYWRlci5jbGFzc05hbWU9XCJ0b3AtYmFyLWhlYWRcIlxyXG4gICAgdG9wQmFyX2hlYWRlci50ZXh0Q29udGVudD1cIlRvLURvIGxpc3RcIlxyXG4gICAgdG9wQmFyLmlkPVwidG9wLWJhclwiXHJcbiAgICB0b3BCYXIuYXBwZW5kQ2hpbGQodG9wQmFyX2hlYWRlcilcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodG9wQmFyKVxyXG59XHJcbmV4cG9ydCB7dG9wQmFyfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3Rhc2stb2JqZWN0XCJcclxuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCwgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiXHJcbmltcG9ydCB7IGFkZFRhc2tUb1Byb2plY3QgfSBmcm9tIFwiLi9hZGRUYXNrVG9Qcm9qZWN0XCJcclxuaW1wb3J0IHsgaW5pdGlhbExvYWQgfSBmcm9tIFwiLi9pbml0aWFsTG9hZFwiXHJcbmltcG9ydCB7IGRpc3BsYXlTaWRlQmFyIH0gZnJvbSBcIi4vZGlzcGxheVNpZGVCYXJcIlxyXG5pbXBvcnQgeyBkaXNwbGF5TWFpbiB9IGZyb20gXCIuL2Rpc3BsYXlNYWluXCJcclxuXHJcbmluaXRpYWxMb2FkKClcclxuXHJcbmxldCB0YXNrID0gbmV3IFRhc2soXCJ0aXRsZVwiLCBcIm5hbWVcIiwgXCJkZXNjXCIpXHJcbmxldCB0YXNrMSA9IG5ldyBUYXNrKFwidGl0bGVcIiwgXCJuYW1lXCIsIFwiZGVzY1wiKVxyXG5sZXQgdGFzazIgPSBuZXcgVGFzayhcImNvZGVcIiwgXCJjb2RlXCIsIFwiY29kZSBldmVyeWRheVwiKVxyXG5sZXQgdGFzazMgPSBuZXcgVGFzayhcInJlYWRcIiwgXCJyZWFkXCIsIFwicmVhZCBldmVyeWRheVwiKVxyXG5sZXQgdGFzazQgPSBuZXcgVGFzayhcInR5cGluZ1wiLCBcInR5cGluZ1wiLCBcInR5cGUgZXZlcnlkYXlcIilcclxubGV0IHRhc2s1ID0gbmV3IFRhc2soXCJ3YWtlIHVwXCIsIFwid2FrZSB1cFwiLCBcIndha2UgdXAgb24gdGltZVwiKVxyXG5jcmVhdGVQcm9qZWN0KFwiZW1wdHlfcHJvamVjdFwiKVxyXG5jcmVhdGVQcm9qZWN0KFwid29ya1wiKVxyXG5jcmVhdGVQcm9qZWN0KFwiZ3ltXCIpXHJcbmNyZWF0ZVByb2plY3QoXCJzdHVkeVwiKVxyXG5hZGRUYXNrVG9Qcm9qZWN0KFwiZW1wdHlfcHJvamVjdFwiLCB0YXNrKVxyXG5hZGRUYXNrVG9Qcm9qZWN0KFwiZW1wdHlfcHJvamVjdFwiLCB0YXNrMSlcclxuYWRkVGFza1RvUHJvamVjdChcImVtcHR5X3Byb2plY3RcIiwgdGFzazIpXHJcbmFkZFRhc2tUb1Byb2plY3QoXCJzdHVkeVwiLCB0YXNrMylcclxuYWRkVGFza1RvUHJvamVjdChcIndvcmtcIiwgdGFzazQpXHJcbmFkZFRhc2tUb1Byb2plY3QoXCJlbXB0eV9wcm9qZWN0XCIsIHRhc2s1KVxyXG5kaXNwbGF5U2lkZUJhcigpXHJcbmRpc3BsYXlNYWluKClcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9