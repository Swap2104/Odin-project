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
    // console.log(tasks_list[3].desc)
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
/* harmony export */   displaySideBar: () => (/* binding */ displaySideBar),
/* harmony export */   target: () => (/* binding */ target)
/* harmony export */ });
let target 
    function displaySideBar() {
        let task = document.getElementById('tasks')
        let project = document.getElementById('projects')
        let tasks_list = JSON.parse(localStorage.getItem("projects"))[0].tasks
        let projects_list = JSON.parse(localStorage.getItem("projects"))
        console.log(tasks_list)
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
            list_project.appendChild(li);
            li.addEventListener('click', (e) => {
                let tasks_list = JSON.parse(localStorage.getItem("projects"))[i].tasks
                // let pro_list = JSON.parse(localStorage.getItem("projects"))[]
                // console.log(pro_list)
                console.log(tasks_list[1])
                target = e.target.textContent
                // console.log(i)

                task_div.textContent = ""
                for (let i = 0; i < tasks_list.length; i++) {
                    let task_div = document.getElementById('task_div')
                    let btn = document.createElement('button')
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
            })
        }



        task.appendChild(list)
        project.appendChild(list_project)
    }
    
    // export default target

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
/* harmony import */ var _saveData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saveData */ "./src/saveData.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _displaySideBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displaySideBar */ "./src/displaySideBar.js");



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
        console.log(_displaySideBar__WEBPACK_IMPORTED_MODULE_2__.target)
        ;(0,_saveData__WEBPACK_IMPORTED_MODULE_0__.save)(title_data, name_data, desc_data, _displaySideBar__WEBPACK_IMPORTED_MODULE_2__.target)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzdEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05vQztBQUNnQjtBQUNDO0FBQ1Y7QUFDTTtBQUNOO0FBQzNDO0FBQ0EseURBQVc7QUFDWDtBQUNBLGVBQWUsOENBQUk7QUFDbkIsZ0JBQWdCLDhDQUFJO0FBQ3BCLGdCQUFnQiw4Q0FBSTtBQUNwQixnQkFBZ0IsOENBQUk7QUFDcEIsZ0JBQWdCLDhDQUFJO0FBQ3BCLGdCQUFnQiw4Q0FBSTtBQUNwQix5REFBYTtBQUNiLHlEQUFhO0FBQ2IseURBQWE7QUFDYix5REFBYTtBQUNiLG9FQUFnQjtBQUNoQixvRUFBZ0I7QUFDaEIsb0VBQWdCO0FBQ2hCLG9FQUFnQjtBQUNoQixvRUFBZ0I7QUFDaEIsb0VBQWdCO0FBQ2hCLGdFQUFjO0FBQ2QsMERBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2FkZFRhc2tUb1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kaXNwbGF5TWFpbi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Rpc3BsYXlTaWRlQmFyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5pdGlhbExvYWQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tYWluLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zYXZlRGF0YS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrLW9iamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvcGJhci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcblxyXG5mdW5jdGlvbiBhZGRUYXNrVG9Qcm9qZWN0KHByb2plY3ROYW1lLCB0YXNrKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHMuZmluZChwcm9qID0+IHByb2oubmFtZSA9PT0gcHJvamVjdE5hbWUpO1xyXG5cclxuICAgIGlmIChwcm9qZWN0KSB7XHJcbiAgICAgICAgcHJvamVjdC50YXNrcy5wdXNoKHRhc2spO1xyXG5cclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFByb2plY3QgXCIke3Byb2plY3ROYW1lfVwiIG5vdCBmb3VuZC5gKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQge2FkZFRhc2tUb1Byb2plY3R9IiwiZnVuY3Rpb24gZGlzcGxheU1haW4oKSB7XHJcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJylcclxuICAgIGxldCB0YXNrX2RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrX2RpdicpXHJcbiAgICBsZXQgdGFza3NfbGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSlbMF0udGFza3NcclxuICAgIC8vIGNvbnNvbGUubG9nKHRhc2tzX2xpc3RbM10uZGVzYylcclxuICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrc19saXN0Lmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgbGV0IGNhcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY2FyZHMuY2xhc3NOYW1lID0gJ2NhcmRzJ1xyXG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJ0blwiKVxyXG5cclxuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbiAgICAgICAgbGV0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrc19saXN0W2ldLnRpdGxlXHJcbiAgICAgICAgZGVzYy50ZXh0Q29udGVudCA9IHRhc2tzX2xpc3RbaV0uZGVzY1xyXG4gICAgICAgIHRhc2tfZGl2LmFwcGVuZChjYXJkcylcclxuICAgICAgICBjYXJkcy5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICAgICAgY2FyZHMuYXBwZW5kQ2hpbGQoZGVzYyk7XHJcbiAgICB9XHJcbn0gZXhwb3J0IHsgZGlzcGxheU1haW4gfSIsImxldCB0YXJnZXQgXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5U2lkZUJhcigpIHtcclxuICAgICAgICBsZXQgdGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrcycpXHJcbiAgICAgICAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKVxyXG4gICAgICAgIGxldCB0YXNrc19saXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKVswXS50YXNrc1xyXG4gICAgICAgIGxldCBwcm9qZWN0c19saXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tzX2xpc3QpXHJcbiAgICAgICAgbGV0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3NfbGlzdC5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgICBsaS50ZXh0Q29udGVudCA9IHRhc2tzX2xpc3RbaV0udGl0bGU7XHJcbiAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGxpc3RfcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwcm9qZWN0c19saXN0Lmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgIGxpLnRleHRDb250ZW50ID0gcHJvamVjdHNfbGlzdFtpXS5uYW1lO1xyXG4gICAgICAgICAgICBsaXN0X3Byb2plY3QuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgICAgICAgICBsaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGFza3NfbGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSlbaV0udGFza3NcclxuICAgICAgICAgICAgICAgIC8vIGxldCBwcm9fbGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSlbXVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocHJvX2xpc3QpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrc19saXN0WzFdKVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gZS50YXJnZXQudGV4dENvbnRlbnRcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGkpXHJcblxyXG4gICAgICAgICAgICAgICAgdGFza19kaXYudGV4dENvbnRlbnQgPSBcIlwiXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzX2xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGFza19kaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza19kaXYnKVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjYXJkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcmRzLmNsYXNzTmFtZSA9ICdjYXJkcydcclxuICAgICAgICAgICAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidG5cIilcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrc19saXN0W2ldLnRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzYy50ZXh0Q29udGVudCA9IHRhc2tzX2xpc3RbaV0uZGVzY1xyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tfZGl2LmFwcGVuZChjYXJkcylcclxuICAgICAgICAgICAgICAgICAgICBjYXJkcy5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZHMuYXBwZW5kQ2hpbGQoZGVzYyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIHRhc2suYXBwZW5kQ2hpbGQobGlzdClcclxuICAgICAgICBwcm9qZWN0LmFwcGVuZENoaWxkKGxpc3RfcHJvamVjdClcclxuICAgIH1cclxuICAgIGV4cG9ydCB7IGRpc3BsYXlTaWRlQmFyICwgdGFyZ2V0fVxyXG4gICAgLy8gZXhwb3J0IGRlZmF1bHQgdGFyZ2V0IiwiaW1wb3J0IHsgdG9wQmFyIH0gZnJvbSBcIi4vdG9wYmFyXCI7XHJcbmltcG9ydCB7IHNpZGViYXIgfSBmcm9tIFwiLi9zaWRlYmFyXCI7XHJcbmltcG9ydCB7IG1haW4gfSBmcm9tIFwiLi9tYWluXCI7XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsTG9hZCgpe1xyXG4gICAgdG9wQmFyKClcclxuICAgIHNpZGViYXIoKVxyXG4gICAgbWFpbigpXHJcbn1cclxuXHJcbmV4cG9ydHtpbml0aWFsTG9hZH0iLCJpbXBvcnQgeyBzYXZlIH0gZnJvbSBcIi4vc2F2ZURhdGFcIlxyXG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCJcclxuaW1wb3J0IHsgdGFyZ2V0IH0gZnJvbSBcIi4vZGlzcGxheVNpZGVCYXJcIlxyXG5mdW5jdGlvbiBtYWluKCkge1xyXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXHJcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgIGxldCBpbl90aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgIGxldCBpbl9uYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgbGV0IGluX2Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICBsZXQgaW5fYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgIGxldCBidG5fZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGxldCB0YXNrX2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBidG5fZGl2LmlkPVwiYnRuX2RpdlwiXHJcbiAgICB0YXNrX2Rpdi5pZD1cInRhc2tfZGl2XCJcclxuXHJcbiAgICBpbl90aXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiVGV4dFwiKVxyXG4gICAgaW5fdGl0bGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIFwiVGl0bGVcIilcclxuICAgIGluX25hbWUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcIlRleHRcIilcclxuICAgIGluX25hbWUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIFwiV3JpdGUgYSB1bmlxdWUgbmFtZVwiKVxyXG4gICAgaW5fZGVzYy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiVGV4dFwiKVxyXG4gICAgaW5fZGVzYy5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgXCJkZXNjcmlwdGlvblwiKVxyXG4gICAgYnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYnRuXCIpXHJcbiAgICBpbl9idG4udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiXHJcbiAgICBpbl9idG4uY2xhc3NOYW1lID0gXCJidG5cIlxyXG4gICAgaW5fdGl0bGUuaWQ9IFwidGl0bGVcIlxyXG4gICAgaW5fbmFtZS5pZCA9IFwibmFtZVwiXHJcbiAgICBpbl9kZXNjLmlkID0gXCJkZXNjXCJcclxuICAgIGJ0bi50ZXh0Q29udGVudCA9IFwiQWRkIFRhc2tzXCJcclxuICAgIG1haW4uaWQgPSBcIm1haW5cIlxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKVxyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChidG5fZGl2KVxyXG4gICAgbWFpbi5hcHBlbmRDaGlsZCh0YXNrX2RpdilcclxuICAgIGJ0bl9kaXYuYXBwZW5kQ2hpbGQoYnRuKVxyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHRhc2tfZGl2LnByZXBlbmQoaW5fYnRuKVxyXG4gICAgICAgIHRhc2tfZGl2LnByZXBlbmQoaW5fZGVzYylcclxuICAgICAgICB0YXNrX2Rpdi5wcmVwZW5kKGluX25hbWUpXHJcbiAgICAgICAgdGFza19kaXYucHJlcGVuZChpbl90aXRsZSlcclxuICAgIH0pXHJcblxyXG4gICAgaW5fYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGxldCB0aXRsZV9kYXRhPWluX3RpdGxlLnZhbHVlXHJcbiAgICAgICAgbGV0IG5hbWVfZGF0YT1pbl9uYW1lLnZhbHVlXHJcbiAgICAgICAgbGV0IGRlc2NfZGF0YT1pbl9kZXNjLnZhbHVlXHJcbiAgICAgICAgY29uc29sZS5sb2codGl0bGVfZGF0YSlcclxuICAgICAgICBjb25zb2xlLmxvZyhuYW1lX2RhdGEpXHJcbiAgICAgICAgY29uc29sZS5sb2coZGVzY19kYXRhKVxyXG4gICAgICAgIGluX3RpdGxlLnZhbHVlPVwiXCJcclxuICAgICAgICBpbl9uYW1lLnZhbHVlPVwiXCJcclxuICAgICAgICBpbl9kZXNjLnZhbHVlPVwiXCJcclxuICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXQpXHJcbiAgICAgICAgc2F2ZSh0aXRsZV9kYXRhLCBuYW1lX2RhdGEsIGRlc2NfZGF0YSwgdGFyZ2V0KVxyXG4gICAgICAgIGluX2Rlc2MucmVtb3ZlKClcclxuICAgICAgICBpbl9uYW1lLnJlbW92ZSgpXHJcbiAgICAgICAgaW5fdGl0bGUucmVtb3ZlKClcclxuICAgICAgICBpbl9idG4ucmVtb3ZlKClcclxuICAgICAgICAvLyBsZXQgdGFzayA9IG5ldyBUYXNrKFwidGl0bGVcIiwgXCJuYW1lXCIsIFwiZGVzY1wiKVxyXG4gICAgfSlcclxufVxyXG5leHBvcnQgeyBtYWluIH0iLCJsZXQgcHJvamVjdHM9W11cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QocHJvamVjdF9uYW1lKSB7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0cz17XHJcbiAgICAgICAgbmFtZTogcHJvamVjdF9uYW1lLFxyXG4gICAgICAgIHRhc2tzOiBbXVxyXG4gICAgfVxyXG5cclxuICAgIHByb2plY3RzLnB1c2gobmV3UHJvamVjdHMpXHJcbiAgICAvLyBjb25zb2xlLmxvZyh7cHJvamVjdHN9KVxyXG5cclxuICAgIC8vIHByb2plY3RbcHJvamVjdF9uYW1lXSA9IFsxLDIsM11cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKVxyXG4gICAgLy8gY29uc29sZS5sb2coe3Byb2plY3RzfSlcclxuXHJcbiAgICBjb25zdCBzdG9yZWRQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhzdG9yZWRQcm9qZWN0c1swXSk7XHJcbiAgICAvLyBsZXQgb2JqID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGFzaylcclxuICAgIC8vIHByb2plY3QucHVzaChvYmopXHJcbiAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0KVxyXG59XHJcbmV4cG9ydCB7IGNyZWF0ZVByb2plY3QsIHByb2plY3RzIH0iLCJpbXBvcnQgeyBhZGRUYXNrVG9Qcm9qZWN0IH0gZnJvbSBcIi4vYWRkVGFza1RvUHJvamVjdFwiXHJcbmltcG9ydCB7IGRpc3BsYXlNYWluIH0gZnJvbSBcIi4vZGlzcGxheU1haW5cIlxyXG5pbXBvcnQgeyBtYWluIH0gZnJvbSBcIi4vbWFpblwiXHJcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi90YXNrLW9iamVjdFwiXHJcblxyXG5mdW5jdGlvbiBzYXZlKHRpdGxlLCBuYW1lLCBkZXNjLCBwcm9qZWN0cz1cImVtcHR5X3Byb2plY3RcIikge1xyXG4gICAgbGV0IG1haW49ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrX2RpdlwiKVxyXG4gICAgbWFpbi50ZXh0Q29udGVudD1cIlwiXHJcbiAgICBsZXQgdGFzayA9IG5ldyBUYXNrKHRpdGxlLCBuYW1lLCBkZXNjKVxyXG4gICAgYWRkVGFza1RvUHJvamVjdChwcm9qZWN0cywgdGFzaylcclxuICAgIGRpc3BsYXlNYWluKClcclxufVxyXG5leHBvcnQge3NhdmV9IiwiZnVuY3Rpb24gc2lkZWJhcigpIHtcclxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxyXG4gICAgbGV0IHNpZGVfYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGxldCB0YXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBsZXQgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgdGFza3MuaWQgPSAndGFza3MnXHJcbiAgICBwcm9qZWN0cy5pZCA9ICdwcm9qZWN0cydcclxuICAgIHNpZGVfYmFyLmlkID0gXCJzaWRlLWJhclwiXHJcbiAgICBwcm9qZWN0cy50ZXh0Q29udGVudCA9ICdQcm9qZWN0cydcclxuICAgIHRhc2tzLnRleHRDb250ZW50ID0gJ1Rhc2tzJ1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChzaWRlX2JhcilcclxuICAgIHNpZGVfYmFyLmFwcGVuZENoaWxkKHByb2plY3RzKVxyXG4gICAgc2lkZV9iYXIuYXBwZW5kQ2hpbGQodGFza3MpXHJcblxyXG59XHJcbmV4cG9ydCB7IHNpZGViYXIgfSIsImZ1bmN0aW9uIFRhc2sodGl0bGUsIG5hbWUsIGRlc2Mpe1xyXG4gICAgdGhpcy50aXRsZT10aXRsZVxyXG4gICAgdGhpcy5uYW1lPW5hbWVcclxuICAgIHRoaXMuZGVzYz1kZXNjXHJcbn1cclxuZXhwb3J0IHtUYXNrfSIsImZ1bmN0aW9uIHRvcEJhcigpe1xyXG4gICAgbGV0IGNvbnRlbnQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxyXG4gICAgbGV0IHRvcEJhciA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGxldCB0b3BCYXJfaGVhZGVyID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbiAgICB0b3BCYXJfaGVhZGVyLmNsYXNzTmFtZT1cInRvcC1iYXItaGVhZFwiXHJcbiAgICB0b3BCYXJfaGVhZGVyLnRleHRDb250ZW50PVwiVG8tRG8gbGlzdFwiXHJcbiAgICB0b3BCYXIuaWQ9XCJ0b3AtYmFyXCJcclxuICAgIHRvcEJhci5hcHBlbmRDaGlsZCh0b3BCYXJfaGVhZGVyKVxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0b3BCYXIpXHJcbn1cclxuZXhwb3J0IHt0b3BCYXJ9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFzay1vYmplY3RcIlxyXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0LCBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCJcclxuaW1wb3J0IHsgYWRkVGFza1RvUHJvamVjdCB9IGZyb20gXCIuL2FkZFRhc2tUb1Byb2plY3RcIlxyXG5pbXBvcnQgeyBpbml0aWFsTG9hZCB9IGZyb20gXCIuL2luaXRpYWxMb2FkXCJcclxuaW1wb3J0IHsgZGlzcGxheVNpZGVCYXIgfSBmcm9tIFwiLi9kaXNwbGF5U2lkZUJhclwiXHJcbmltcG9ydCB7IGRpc3BsYXlNYWluIH0gZnJvbSBcIi4vZGlzcGxheU1haW5cIlxyXG5cclxuaW5pdGlhbExvYWQoKVxyXG5cclxubGV0IHRhc2sgPSBuZXcgVGFzayhcInRpdGxlXCIsIFwibmFtZVwiLCBcImRlc2NcIilcclxubGV0IHRhc2sxID0gbmV3IFRhc2soXCJ0aXRsZVwiLCBcIm5hbWVcIiwgXCJkZXNjXCIpXHJcbmxldCB0YXNrMiA9IG5ldyBUYXNrKFwiY29kZVwiLCBcImNvZGVcIiwgXCJjb2RlIGV2ZXJ5ZGF5XCIpXHJcbmxldCB0YXNrMyA9IG5ldyBUYXNrKFwicmVhZFwiLCBcInJlYWRcIiwgXCJyZWFkIGV2ZXJ5ZGF5XCIpXHJcbmxldCB0YXNrNCA9IG5ldyBUYXNrKFwidHlwaW5nXCIsIFwidHlwaW5nXCIsIFwidHlwZSBldmVyeWRheVwiKVxyXG5sZXQgdGFzazUgPSBuZXcgVGFzayhcIndha2UgdXBcIiwgXCJ3YWtlIHVwXCIsIFwid2FrZSB1cCBvbiB0aW1lXCIpXHJcbmNyZWF0ZVByb2plY3QoXCJlbXB0eV9wcm9qZWN0XCIpXHJcbmNyZWF0ZVByb2plY3QoXCJ3b3JrXCIpXHJcbmNyZWF0ZVByb2plY3QoXCJneW1cIilcclxuY3JlYXRlUHJvamVjdChcInN0dWR5XCIpXHJcbmFkZFRhc2tUb1Byb2plY3QoXCJlbXB0eV9wcm9qZWN0XCIsIHRhc2spXHJcbmFkZFRhc2tUb1Byb2plY3QoXCJlbXB0eV9wcm9qZWN0XCIsIHRhc2sxKVxyXG5hZGRUYXNrVG9Qcm9qZWN0KFwiZW1wdHlfcHJvamVjdFwiLCB0YXNrMilcclxuYWRkVGFza1RvUHJvamVjdChcInN0dWR5XCIsIHRhc2szKVxyXG5hZGRUYXNrVG9Qcm9qZWN0KFwid29ya1wiLCB0YXNrNClcclxuYWRkVGFza1RvUHJvamVjdChcImVtcHR5X3Byb2plY3RcIiwgdGFzazUpXHJcbmRpc3BsYXlTaWRlQmFyKClcclxuZGlzcGxheU1haW4oKVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=