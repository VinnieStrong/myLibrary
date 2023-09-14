//Initiate books array
const myLibrary = [];

//Create constructor function the library that creates Books objects
function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
//Add a function to the Book prototype that changes the read status
Book.prototype.changeReadingStatus = function() {
    this.read = !this.read;
};

//Add a book to the library
function addBookToLibrary(book) {
    myLibrary.push(book);
}

//Create few books
const book1 = new Book('Principles', 'Ray Dalio', 150);
const book2 = new Book('How to win friend &', 'Dave Carniage', 152);
const book3 = new Book('A new earth', 'Etchar Tolle', 153);
const book4 = new Book('Il fu Mattia Pascal', 'Luigi Pirandello', 154);
const book5 = new Book('The Bitcoin standard', 'Saifedean Ammous', 155);

//Add them to the library
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);
addBookToLibrary(book5);

//Select the add-book button and create constant
const addBook = document.querySelector('.add-book');

//Add event listener to it
addBook.addEventListener('click', () => {

    //Create constants associated with their form elements  
    const name = document.getElementById('name');
    const author = document.getElementById('author');
    const pages = document.getElementById('pages');
    const readStatus = document.getElementById('read-status');

    //Create new book object with the values of the elements
    const newBook = new Book(name.value, author.value, pages.value, readStatus.checked);
    addBookToLibrary(newBook);
    displayBooks(myLibrary);
    //Reset form values
    name.value = '';
    author.value = '';
    pages.value = '';
    readStatus.checked = false;
})
//Create hanger book-list
//const hanger = document.getElementById('books-list');
  const hanger = document.querySelector('.books-container');

//Displays the array of books
function displayBooks(array) {
    //Resets display
    hanger.innerHTML = '';
    //tableRaw.innerHTML = '';

    //Loops trough the array
    for (let i = 0; i < array.length; i++) {
        //Create change status button 
        const changeBox = document.createElement('button');
        changeBox.textContent = 'CHANGE STATUS';

        //Add event listener
        changeBox.addEventListener('click', () => {
            //Call function on 'i' element of the array
            array[i].changeReadingStatus();
            console.log(array[i].read);
            displayBooks(myLibrary);
        });
       //const bookList = document.createElement('li');
       const  bookList = document.createElement('div');
       
       const readStatusText = array[i].read ? 'read' : 'not read';
        const removeButton = document.createElement('button');
        removeButton.textContent = 'clear';
        removeButton.className = 'remove-button';
        removeButton.addEventListener('click', () => {
            myLibrary.splice(i, 1);
            displayBooks(myLibrary);
        });
        
        bookList.textContent = `${array[i].name} by ${array[i].author}. ${array[i].pages} pages, status: ${readStatusText}`;
        hanger.appendChild(bookList);
        bookList.appendChild(removeButton);
        bookList.appendChild(changeBox);
    }
}
displayBooks(myLibrary);

const showForm = document.querySelector('#show-form');
const myForm = document.querySelector('#my-form');

showForm.addEventListener('click', () => {
    myForm.style.display = 'block';
})
