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
/* harmony export */   displaySideBar: () => (/* binding */ displaySideBar)
/* harmony export */ });
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
            console.log(tasks_list.length)
            // console.log(e.target.textContent)
            // console.log(i)

            for (let i = 0; i < tasks_list.length; ++i) {
                let task_div = document.getElementById('task_div')
                let btn = document.createElement('button')
                let cards = document.createElement('div');
                cards.className = 'cards'
                btn.setAttribute("class", "btn")
                let title = document.createElement('h1')
                let desc = document.createElement('h1')
                title.textContent = tasks_list[i].title
                desc.textContent = tasks_list[i].desc
                task_div.textContent=""
                task_div.append(cards)
                cards.appendChild(title);
                cards.appendChild(desc);
            }
        })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1g7QUFDQSxlQUFlLDhDQUFJO0FBQ25CLGdCQUFnQiw4Q0FBSTtBQUNwQixnQkFBZ0IsOENBQUk7QUFDcEIsZ0JBQWdCLDhDQUFJO0FBQ3BCLGdCQUFnQiw4Q0FBSTtBQUNwQixnQkFBZ0IsOENBQUk7QUFDcEIseURBQWE7QUFDYix5REFBYTtBQUNiLHlEQUFhO0FBQ2IseURBQWE7QUFDYixvRUFBZ0I7QUFDaEIsb0VBQWdCO0FBQ2hCLG9FQUFnQjtBQUNoQixvRUFBZ0I7QUFDaEIsb0VBQWdCO0FBQ2hCLG9FQUFnQjtBQUNoQixnRUFBYztBQUNkLDBEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hZGRUYXNrVG9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZGlzcGxheU1haW4uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kaXNwbGF5U2lkZUJhci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luaXRpYWxMb2FkLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2F2ZURhdGEuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFzay1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b3BiYXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xyXG5cclxuZnVuY3Rpb24gYWRkVGFza1RvUHJvamVjdChwcm9qZWN0TmFtZSwgdGFzaykge1xyXG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbmQocHJvaiA9PiBwcm9qLm5hbWUgPT09IHByb2plY3ROYW1lKTtcclxuXHJcbiAgICBpZiAocHJvamVjdCkge1xyXG4gICAgICAgIHByb2plY3QudGFza3MucHVzaCh0YXNrKTtcclxuXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGBQcm9qZWN0IFwiJHtwcm9qZWN0TmFtZX1cIiBub3QgZm91bmQuYCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IHthZGRUYXNrVG9Qcm9qZWN0fSIsImZ1bmN0aW9uIGRpc3BsYXlNYWluKCkge1xyXG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpXHJcbiAgICBsZXQgdGFza19kaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza19kaXYnKVxyXG4gICAgbGV0IHRhc2tzX2xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpWzBdLnRhc2tzXHJcbiAgICAvLyBjb25zb2xlLmxvZyh0YXNrc19saXN0WzNdLmRlc2MpXHJcbiAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3NfbGlzdC5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIGxldCBjYXJkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNhcmRzLmNsYXNzTmFtZSA9ICdjYXJkcydcclxuICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidG5cIilcclxuXHJcbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxyXG4gICAgICAgIGxldCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxyXG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGFza3NfbGlzdFtpXS50aXRsZVxyXG4gICAgICAgIGRlc2MudGV4dENvbnRlbnQgPSB0YXNrc19saXN0W2ldLmRlc2NcclxuICAgICAgICB0YXNrX2Rpdi5hcHBlbmQoY2FyZHMpXHJcbiAgICAgICAgY2FyZHMuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgICAgIGNhcmRzLmFwcGVuZENoaWxkKGRlc2MpO1xyXG4gICAgfVxyXG59IGV4cG9ydCB7IGRpc3BsYXlNYWluIH0iLCJmdW5jdGlvbiBkaXNwbGF5U2lkZUJhcigpIHtcclxuICAgIGxldCB0YXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tzJylcclxuICAgIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzJylcclxuICAgIGxldCB0YXNrc19saXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKVswXS50YXNrc1xyXG4gICAgbGV0IHByb2plY3RzX2xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpXHJcbiAgICBjb25zb2xlLmxvZyh0YXNrc19saXN0KVxyXG4gICAgbGV0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrc19saXN0Lmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBsaS50ZXh0Q29udGVudCA9IHRhc2tzX2xpc3RbaV0udGl0bGU7XHJcbiAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGxpc3RfcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHByb2plY3RzX2xpc3QubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIGxpLnRleHRDb250ZW50ID0gcHJvamVjdHNfbGlzdFtpXS5uYW1lO1xyXG4gICAgICAgIGxpc3RfcHJvamVjdC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICAgICAgbGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdGFza3NfbGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSlbaV0udGFza3NcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGFza3NfbGlzdC5sZW5ndGgpXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LnRleHRDb250ZW50KVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpKVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrc19saXN0Lmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGFza19kaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza19kaXYnKVxyXG4gICAgICAgICAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgICAgICAgICBsZXQgY2FyZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIGNhcmRzLmNsYXNzTmFtZSA9ICdjYXJkcydcclxuICAgICAgICAgICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJ0blwiKVxyXG4gICAgICAgICAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxyXG4gICAgICAgICAgICAgICAgbGV0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbiAgICAgICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2tzX2xpc3RbaV0udGl0bGVcclxuICAgICAgICAgICAgICAgIGRlc2MudGV4dENvbnRlbnQgPSB0YXNrc19saXN0W2ldLmRlc2NcclxuICAgICAgICAgICAgICAgIHRhc2tfZGl2LnRleHRDb250ZW50PVwiXCJcclxuICAgICAgICAgICAgICAgIHRhc2tfZGl2LmFwcGVuZChjYXJkcylcclxuICAgICAgICAgICAgICAgIGNhcmRzLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgICAgICAgICAgICAgIGNhcmRzLmFwcGVuZENoaWxkKGRlc2MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHRhc2suYXBwZW5kQ2hpbGQobGlzdClcclxuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQobGlzdF9wcm9qZWN0KVxyXG59XHJcbmV4cG9ydCB7IGRpc3BsYXlTaWRlQmFyIH0iLCJpbXBvcnQgeyB0b3BCYXIgfSBmcm9tIFwiLi90b3BiYXJcIjtcclxuaW1wb3J0IHsgc2lkZWJhciB9IGZyb20gXCIuL3NpZGViYXJcIjtcclxuaW1wb3J0IHsgbWFpbiB9IGZyb20gXCIuL21haW5cIjtcclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxMb2FkKCl7XHJcbiAgICB0b3BCYXIoKVxyXG4gICAgc2lkZWJhcigpXHJcbiAgICBtYWluKClcclxufVxyXG5cclxuZXhwb3J0e2luaXRpYWxMb2FkfSIsImltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi90YXNrLW9iamVjdFwiXHJcbmltcG9ydCB7IHNhdmUgfSBmcm9tIFwiLi9zYXZlRGF0YVwiXHJcbmZ1bmN0aW9uIG1haW4oKSB7XHJcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcclxuICAgIGxldCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgbGV0IGluX3RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgbGV0IGluX25hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICBsZXQgaW5fZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgIGxldCBpbl9idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgbGV0IGJ0bl9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgbGV0IHRhc2tfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGJ0bl9kaXYuaWQ9XCJidG5fZGl2XCJcclxuICAgIHRhc2tfZGl2LmlkPVwidGFza19kaXZcIlxyXG5cclxuICAgIGluX3RpdGxlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJUZXh0XCIpXHJcbiAgICBpbl90aXRsZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgXCJUaXRsZVwiKVxyXG4gICAgaW5fbmFtZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiVGV4dFwiKVxyXG4gICAgaW5fbmFtZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgXCJXcml0ZSBhIHVuaXF1ZSBuYW1lXCIpXHJcbiAgICBpbl9kZXNjLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJUZXh0XCIpXHJcbiAgICBpbl9kZXNjLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBcImRlc2NyaXB0aW9uXCIpXHJcbiAgICBidG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidG5cIilcclxuICAgIGluX2J0bi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCJcclxuICAgIGluX2J0bi5jbGFzc05hbWUgPSBcImJ0blwiXHJcbiAgICBpbl90aXRsZS5pZD0gXCJ0aXRsZVwiXHJcbiAgICBpbl9uYW1lLmlkID0gXCJuYW1lXCJcclxuICAgIGluX2Rlc2MuaWQgPSBcImRlc2NcIlxyXG4gICAgYnRuLnRleHRDb250ZW50ID0gXCJBZGQgVGFza3NcIlxyXG4gICAgbWFpbi5pZCA9IFwibWFpblwiXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pXHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGJ0bl9kaXYpXHJcbiAgICBtYWluLmFwcGVuZENoaWxkKHRhc2tfZGl2KVxyXG4gICAgYnRuX2Rpdi5hcHBlbmRDaGlsZChidG4pXHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgdGFza19kaXYucHJlcGVuZChpbl9idG4pXHJcbiAgICAgICAgdGFza19kaXYucHJlcGVuZChpbl9kZXNjKVxyXG4gICAgICAgIHRhc2tfZGl2LnByZXBlbmQoaW5fbmFtZSlcclxuICAgICAgICB0YXNrX2Rpdi5wcmVwZW5kKGluX3RpdGxlKVxyXG4gICAgfSlcclxuXHJcbiAgICBpbl9idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHRpdGxlX2RhdGE9aW5fdGl0bGUudmFsdWVcclxuICAgICAgICBsZXQgbmFtZV9kYXRhPWluX25hbWUudmFsdWVcclxuICAgICAgICBsZXQgZGVzY19kYXRhPWluX2Rlc2MudmFsdWVcclxuICAgICAgICBjb25zb2xlLmxvZyh0aXRsZV9kYXRhKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKG5hbWVfZGF0YSlcclxuICAgICAgICBjb25zb2xlLmxvZyhkZXNjX2RhdGEpXHJcbiAgICAgICAgaW5fdGl0bGUudmFsdWU9XCJcIlxyXG4gICAgICAgIGluX25hbWUudmFsdWU9XCJcIlxyXG4gICAgICAgIGluX2Rlc2MudmFsdWU9XCJcIlxyXG4gICAgICAgIHNhdmUodGl0bGVfZGF0YSwgbmFtZV9kYXRhLCBkZXNjX2RhdGEpXHJcbiAgICAgICAgaW5fZGVzYy5yZW1vdmUoKVxyXG4gICAgICAgIGluX25hbWUucmVtb3ZlKClcclxuICAgICAgICBpbl90aXRsZS5yZW1vdmUoKVxyXG4gICAgICAgIGluX2J0bi5yZW1vdmUoKVxyXG4gICAgICAgIC8vIGxldCB0YXNrID0gbmV3IFRhc2soXCJ0aXRsZVwiLCBcIm5hbWVcIiwgXCJkZXNjXCIpXHJcbiAgICB9KVxyXG59XHJcbmV4cG9ydCB7IG1haW4gfSIsImxldCBwcm9qZWN0cz1bXVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChwcm9qZWN0X25hbWUpIHtcclxuICAgIGNvbnN0IG5ld1Byb2plY3RzPXtcclxuICAgICAgICBuYW1lOiBwcm9qZWN0X25hbWUsXHJcbiAgICAgICAgdGFza3M6IFtdXHJcbiAgICB9XHJcblxyXG4gICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0cylcclxuICAgIC8vIGNvbnNvbGUubG9nKHtwcm9qZWN0c30pXHJcblxyXG4gICAgLy8gcHJvamVjdFtwcm9qZWN0X25hbWVdID0gWzEsMiwzXVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpXHJcbiAgICAvLyBjb25zb2xlLmxvZyh7cHJvamVjdHN9KVxyXG5cclxuICAgIGNvbnN0IHN0b3JlZFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHN0b3JlZFByb2plY3RzWzBdKTtcclxuICAgIC8vIGxldCBvYmogPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0YXNrKVxyXG4gICAgLy8gcHJvamVjdC5wdXNoKG9iailcclxuICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3QpXHJcbn1cclxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdCwgcHJvamVjdHMgfSIsImltcG9ydCB7IGFkZFRhc2tUb1Byb2plY3QgfSBmcm9tIFwiLi9hZGRUYXNrVG9Qcm9qZWN0XCJcclxuaW1wb3J0IHsgZGlzcGxheU1haW4gfSBmcm9tIFwiLi9kaXNwbGF5TWFpblwiXHJcbmltcG9ydCB7IG1haW4gfSBmcm9tIFwiLi9tYWluXCJcclxuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3Rhc2stb2JqZWN0XCJcclxuXHJcbmZ1bmN0aW9uIHNhdmUodGl0bGUsIG5hbWUsIGRlc2MsIHByb2plY3RzPVwiZW1wdHlfcHJvamVjdFwiKSB7XHJcbiAgICBsZXQgbWFpbj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tfZGl2XCIpXHJcbiAgICBtYWluLnRleHRDb250ZW50PVwiXCJcclxuICAgIGxldCB0YXNrID0gbmV3IFRhc2sodGl0bGUsIG5hbWUsIGRlc2MpXHJcbiAgICBhZGRUYXNrVG9Qcm9qZWN0KHByb2plY3RzLCB0YXNrKVxyXG4gICAgZGlzcGxheU1haW4oKVxyXG59XHJcbmV4cG9ydCB7c2F2ZX0iLCJmdW5jdGlvbiBzaWRlYmFyKCkge1xyXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXHJcbiAgICBsZXQgc2lkZV9iYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgbGV0IHRhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGxldCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICB0YXNrcy5pZCA9ICd0YXNrcydcclxuICAgIHByb2plY3RzLmlkID0gJ3Byb2plY3RzJ1xyXG4gICAgc2lkZV9iYXIuaWQgPSBcInNpZGUtYmFyXCJcclxuICAgIHByb2plY3RzLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJ1xyXG4gICAgdGFza3MudGV4dENvbnRlbnQgPSAnVGFza3MnXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHNpZGVfYmFyKVxyXG4gICAgc2lkZV9iYXIuYXBwZW5kQ2hpbGQocHJvamVjdHMpXHJcbiAgICBzaWRlX2Jhci5hcHBlbmRDaGlsZCh0YXNrcylcclxuXHJcbn1cclxuZXhwb3J0IHsgc2lkZWJhciB9IiwiZnVuY3Rpb24gVGFzayh0aXRsZSwgbmFtZSwgZGVzYyl7XHJcbiAgICB0aGlzLnRpdGxlPXRpdGxlXHJcbiAgICB0aGlzLm5hbWU9bmFtZVxyXG4gICAgdGhpcy5kZXNjPWRlc2NcclxufVxyXG5leHBvcnQge1Rhc2t9IiwiZnVuY3Rpb24gdG9wQmFyKCl7XHJcbiAgICBsZXQgY29udGVudD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXHJcbiAgICBsZXQgdG9wQmFyID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgbGV0IHRvcEJhcl9oZWFkZXIgPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcclxuICAgIHRvcEJhcl9oZWFkZXIuY2xhc3NOYW1lPVwidG9wLWJhci1oZWFkXCJcclxuICAgIHRvcEJhcl9oZWFkZXIudGV4dENvbnRlbnQ9XCJUby1EbyBsaXN0XCJcclxuICAgIHRvcEJhci5pZD1cInRvcC1iYXJcIlxyXG4gICAgdG9wQmFyLmFwcGVuZENoaWxkKHRvcEJhcl9oZWFkZXIpXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRvcEJhcilcclxufVxyXG5leHBvcnQge3RvcEJhcn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi90YXNrLW9iamVjdFwiXHJcbmltcG9ydCB7IGNyZWF0ZVByb2plY3QsIHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIlxyXG5pbXBvcnQgeyBhZGRUYXNrVG9Qcm9qZWN0IH0gZnJvbSBcIi4vYWRkVGFza1RvUHJvamVjdFwiXHJcbmltcG9ydCB7IGluaXRpYWxMb2FkIH0gZnJvbSBcIi4vaW5pdGlhbExvYWRcIlxyXG5pbXBvcnQgeyBkaXNwbGF5U2lkZUJhciB9IGZyb20gXCIuL2Rpc3BsYXlTaWRlQmFyXCJcclxuaW1wb3J0IHsgZGlzcGxheU1haW4gfSBmcm9tIFwiLi9kaXNwbGF5TWFpblwiXHJcblxyXG5pbml0aWFsTG9hZCgpXHJcblxyXG5sZXQgdGFzayA9IG5ldyBUYXNrKFwidGl0bGVcIiwgXCJuYW1lXCIsIFwiZGVzY1wiKVxyXG5sZXQgdGFzazEgPSBuZXcgVGFzayhcInRpdGxlXCIsIFwibmFtZVwiLCBcImRlc2NcIilcclxubGV0IHRhc2syID0gbmV3IFRhc2soXCJjb2RlXCIsIFwiY29kZVwiLCBcImNvZGUgZXZlcnlkYXlcIilcclxubGV0IHRhc2szID0gbmV3IFRhc2soXCJyZWFkXCIsIFwicmVhZFwiLCBcInJlYWQgZXZlcnlkYXlcIilcclxubGV0IHRhc2s0ID0gbmV3IFRhc2soXCJ0eXBpbmdcIiwgXCJ0eXBpbmdcIiwgXCJ0eXBlIGV2ZXJ5ZGF5XCIpXHJcbmxldCB0YXNrNSA9IG5ldyBUYXNrKFwid2FrZSB1cFwiLCBcIndha2UgdXBcIiwgXCJ3YWtlIHVwIG9uIHRpbWVcIilcclxuY3JlYXRlUHJvamVjdChcImVtcHR5X3Byb2plY3RcIilcclxuY3JlYXRlUHJvamVjdChcIndvcmtcIilcclxuY3JlYXRlUHJvamVjdChcImd5bVwiKVxyXG5jcmVhdGVQcm9qZWN0KFwic3R1ZHlcIilcclxuYWRkVGFza1RvUHJvamVjdChcImVtcHR5X3Byb2plY3RcIiwgdGFzaylcclxuYWRkVGFza1RvUHJvamVjdChcImVtcHR5X3Byb2plY3RcIiwgdGFzazEpXHJcbmFkZFRhc2tUb1Byb2plY3QoXCJlbXB0eV9wcm9qZWN0XCIsIHRhc2syKVxyXG5hZGRUYXNrVG9Qcm9qZWN0KFwic3R1ZHlcIiwgdGFzazMpXHJcbmFkZFRhc2tUb1Byb2plY3QoXCJ3b3JrXCIsIHRhc2s0KVxyXG5hZGRUYXNrVG9Qcm9qZWN0KFwiZW1wdHlfcHJvamVjdFwiLCB0YXNrNSlcclxuZGlzcGxheVNpZGVCYXIoKVxyXG5kaXNwbGF5TWFpbigpXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==