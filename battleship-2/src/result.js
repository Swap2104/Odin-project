// import winner from './game.js'
let div = document.getElementById('body')
let storage=localStorage.getItem("winner")
console.log('hello world')
div.textContent=`${storage} Won`
