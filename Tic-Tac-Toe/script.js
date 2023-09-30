let gameBoard=[]

gameBoard=["X", "O", "X", "O", "X", "O", "X", "O", "X"]

const game = (() => {

    const gameDisplayController = () =>{
        let squares=document.getElementsByClassName('squares')
        for (let i = 0; i < squares.length; i++) {
                // console.log(gameBoard[i], squares[i].textContent)
                squares[i].textContent=gameBoard[i]
                    squares[i].addEventListener('click', ()=>{
                        squares[i]
                    })
            }    
    } 
    return {
        gameDisplayController
    };
  })();





