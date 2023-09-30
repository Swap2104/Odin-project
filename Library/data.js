let book_name_input = document.getElementById('name')
let author_input = document.getElementById('author')
let pages_input = document.getElementById('pages')
let read_input = document.getElementsByName('read')
let save = document.getElementById('save')
let delete_btn=document.getElementsByClassName('delete')
let card_divs=document.getElementsByClassName('cards')

let library = []
// let cards = document.getElementsByClassName('cards')
console.log("hello")

let book2 = new Books("Cant hurt me", "David Goggins", 301, "Yes")
let book3 = new Books("Clean Code", "Robert Cecil Martin", 400, "No")
// display(book2)
// display(book3)
// library.push(book2)
// library.push(book3)

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

function Books(book_name, author, pages, read) {
    this.book_name = book_name
    this.author = author
    this.pages = pages
    this.read = read
}

function display(book) {
    let cards = document.createElement('div')
    cards.className = 'cards' // is a node
    carousel.appendChild(cards)
    h3 = document.createElement('h3'); // is a node
    book_name = document.createElement('h4'); // is a node
    author = document.createElement('h4'); // is a node
    pages = document.createElement('h4'); // is a node
    read = document.createElement('h4'); // is a node
    btn1 = document.createElement("button"); // is a node
    btn2 = document.createElement("button"); // is a node
    flex = document.createElement("div"); // is a node
    cards.appendChild(h3).textContent = "Books"
    cards.appendChild(book_name).textContent = `Name: ${book.book_name}`
    cards.appendChild(author).textContent = `Author: ${book.author}`
    cards.appendChild(pages).textContent = `Pages: ${book.pages}`
    cards.appendChild(read).textContent = `Read?: ${book.read}`.className="read"
    cards.appendChild(flex)
    // flex.appendChild(btn1).className = "btn-style"
    flex.appendChild(btn2).className = "btn-style red delete"
    btn2.textContent = "Delete"
    // if (book.read === "No") {
    //     btn1.textContent = "Read"
    //     btn1.className = "btn-style green read"
    // } else {
    //     btn1.textContent = "Not Read"
    //     btn1.className = "btn-style red read"
    // }

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
            // Find the closest '.cards' div to the clicked button and remove it
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

// function set_read(book) {
//     const set_read = document.getElementsByClassName('read');

//     for (let i = 0; i < set_read.length; i++) {
//         set_read[i].addEventListener('click', (e)=>{
//             // Find the closest '.cards' div to the clicked button and remove it
//             const closest_read_div = e.target.closest('.read');
//             // book.read==
//         });
//     }
// }