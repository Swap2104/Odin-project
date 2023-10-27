let div = document.getElementById('body') //? Selecting the div to display the winner.
let storage=localStorage.getItem("winner") //? The winner's name is stored in the local storage.
div.textContent=`${storage} Won`
localStorage.removeItem('winner') //?Removing the winner's name from local storage
