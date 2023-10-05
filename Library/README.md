# Library
## About
This web page allows users to store information about all the books they have read and want to read.
## Image
![home page](https://github.com/Swapnilnaique/Odin-project/blob/master/Library/home.png)
## Working
The books added by the user are displayed on the home page with a button to add more books.

```javascript
button.addEventListener('click', () => {
  hideForm()
})

function hideForm() {
  if (form.style.display === "none") {
    form.style.display = "flex";
    para.className = "hidden"
  } else {
    form.style.display = "none";
    para.classList.remove("hidden")
  }
}
```
when the button is clicked the `hideForm()` is called which toggles the display of the form

```html
<div id="form" class="hidden">
    <form action="index.html" method="get">
        <input type="text" name="name" id="name" placeholder="Name">
        <input type="text" name="author" id="author" placeholder="Author">
        <input type="number" name="pages" id="pages" placeholder="Number of pages">
        <label > Have you read this book? </label>
        <div class="checkbox">
            <input type="radio" name="read" id="read" value="Yes">Yes
            <input type="radio" name="read"  value="No">No
        </div>
        <div id="btns">
            <button class="btn-style" type="submit" id="save">Save</button>
            <button class="btn-style" id="reset" type="reset">Reset</button>
        </div>
    </form>
</div>
```
The above html form allows the user to enter the details of the books they want to add.
The javascript file `data.js` targets the html form and saves the data into the `Book` object.
```javascript
// Selecting form elements
let book_name_input = document.getElementById('name')
let author_input = document.getElementById('author')
let pages_input = document.getElementById('pages')
let read_input = document.getElementsByName('read')
let save = document.getElementById('save')
```
```javascript
//Books object
function Books(book_name, author, pages, read) {
    this.book_name = book_name
    this.author = author
    this.pages = pages
    this.read = read
}
```
When the save button is clicked, the event listener executes the following code.
```javascript
//event listener for the save button
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
```
Here, the data entered in the form by the user is stored into objects and the objects are passed as arguments to the `display()` function. The object is also pushed in the `library` array which stores all the objects.

```javascript
// display function
function display(book) {
    let cards = document.createElement('div')// creating card elements 
    cards.className = 'cards' //assigning class cards to the card elements 

    carousel.appendChild(cards) //appending the card element inside the carousel div.

    // creating elements to display book info.
    h3 = document.createElement('h3'); 
    book_name = document.createElement('h4'); 
    author = document.createElement('h4'); 
    pages = document.createElement('h4'); 
    read = document.createElement('h4'); 
    btn1 = document.createElement("button"); 
    btn2 = document.createElement("button"); 
    flex = document.createElement("div"); 

    //appending the form element inside the card div.
    cards.appendChild(h3).textContent = "Books"
    cards.appendChild(book_name).textContent = `Name: ${book.book_name}`
    cards.appendChild(author).textContent = `Author: ${book.author}`
    cards.appendChild(pages).textContent = `Pages: ${book.pages}`
    cards.appendChild(read).textContent = `Read?: ${book.read}`.className="read"
    cards.appendChild(flex)// flex box to hold the delete button
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
```
The `display()` function creates the cards and displays the info entered by the user.
The display function also calls the `delete_event()` function which adds an event listener to the delete button.

```javascript
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
```
When the delete button is clicked the event listener find the closest element with the class `cards` and removes it from the DOM.
