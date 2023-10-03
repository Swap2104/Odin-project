let book_name_input = document.getElementById('name')
let author_input = document.getElementById('author')
let pages_input = document.getElementById('pages')
let read_input = document.getElementsByName('read')
let save = document.getElementById('save')
let delete_btn=document.getElementsByClassName('delete')
let card_divs=document.getElementsByClassName('cards')

let library = []

//* objects to test code 
// let book2 = new Books("Cant hurt me", "David Goggins", 301, "Yes")
// let book3 = new Books("Clean Code", "Robert Cecil Martin", 400, "No")

//* event listener for the save button
save.addEventListener('click', () => {
    event.preventDefault(); // Prevent the form from submitting
    book_name = book_name_input.value
    author = author_input.value
    pages = pages_input.value
    for (i = 0; i < read_input.length; i++) {
        if (read_input[i].checked) {
            console.log(read_input[i].value)
            read = read_input[i].value
        }
    }
    let book1 = new Books(book_name, author, pages, read)
    display(book1)
    library.push(book1)
    hideForm();
    () => {
        book_name.value = ""
        author.value = ""
        pages.value = ""
        read.value = ""
    }
    console.log(library)

})

//* Books object
function Books(book_name, author, pages, read) {
    this.book_name = book_name
    this.author = author
    this.pages = pages
    this.read = read
}

//* display function
function display(book) {
    let cards = document.createElement('div')//*  creating card elements 
    cards.className = 'cards' //* assigning class cards to the card elements 

    carousel.appendChild(cards)  //* appending the card element inside the carousel div.

    //*  creating elements to display book info.
    h3 = document.createElement('h3'); // is a node
    book_name = document.createElement('h4'); 
    author = document.createElement('h4'); 
    pages = document.createElement('h4'); 
    read = document.createElement('h4'); 
    btn1 = document.createElement("button"); 
    btn2 = document.createElement("button"); 
    flex = document.createElement("div"); 

    //* appending the form element inside the card div.
    cards.appendChild(h3).textContent = "Books"
    cards.appendChild(book_name).textContent = `Name: ${book.book_name}`
    cards.appendChild(author).textContent = `Author: ${book.author}`
    cards.appendChild(pages).textContent = `Pages: ${book.pages}`
    cards.appendChild(read).textContent = `Read?: ${book.read}`.className="read"
    cards.appendChild(flex)//*  flex box to hold the delete button
    flex.appendChild(btn2).className = "btn-style red delete"
    btn2.textContent = "Delete"
   
    if (cards.length < 1) {
        para.textContent = "No books entered yet!"
        carousel.className='para-style'
      } 
    else{
        para.style.display="none"
    }

    delete_event()
}

function delete_event(){
    const delete_btns = document.getElementsByClassName('delete');
    
    for (let i = 0; i < delete_btns.length; i++) {
        delete_btns[i].addEventListener('click', (e)=>{
            //* Find the closest '.cards' div to the clicked button and remove it
            const closest_div = e.target.closest('.cards');
            if (closest_div) {
                closest_div.remove();
            }
        });
    }

    if (cards.length < 1) {
        para.textContent = "No books entered yet!"
        carousel.className='para-style'
      } 
    else{
        para.style.display="none"
    }
}

