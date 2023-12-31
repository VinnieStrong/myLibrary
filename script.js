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
    
    //Check name/author/pages values, if they are empty or only
    //white spaces(with trim()) and adjust bordercolor and placeolder

    
    if (name.value.trim() === '') {
        name.style.borderColor = 'red';
        name.style.opacity = 0.5; 
        name.placeholder = '* please insert a valid title';
        //when a key is press the color becomes green
        name.addEventListener('keypress', () => {
            name.style.borderColor = 'green';
            name.style.backgroundColor = 'green';
            name.style.opacity = 0.5;
            name.style.fontWeight = 900; 
        })
    }
    else if (author.value.trim() === '') {
        author.style.borderColor = 'red';
        author.style.opacity = 0.5;
        author.placeholder = '* please provide a valid author';
        author.addEventListener('keypress', () => {
            author.style.borderColor = 'green';
            author.style.backgroundColor = 'green';
            author.style.opacity = 0.5; 
        })
    }
    else if (pages.value.trim() === '' || pages.value < 2) {
        pages.style.borderColor = 'red';
        pages.style.backgroundColor = 'red';
        pages.style.opacity = 0.5; 
        pages.placeholder = '* please enter page number';
        pages.addEventListener('keypress', () => {
            pages.style.borderColor = 'green';
            pages.style.backgroundColor = 'green';
            pages.style.opacity = 0.5; 
        })
    }
    else {
    //Create new book object with the values of the elements
    const newBook = new Book(name.value, author.value, pages.value, readStatus.checked);
    addBookToLibrary(newBook);
    displayBooks(myLibrary);
    //Reset form values
    name.value = '';
    author.value = '';
    pages.value = '';
    readStatus.checked = false;
    myForm.style.display = 'none';


    
    }
});
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
        //Create change status button and class name 
        const changeBox = document.createElement('button');
        changeBox.className = "change-box";
        //Change color and text depending on read status
        if (array[i].read === true) {
            changeBox.textContent = 'READ';
            changeBox.style.backgroundColor = 'green';
        }
        else {
            changeBox.textContent = 'NOT READ';
            changeBox.style.backgroundColor = 'orange';
        }         
        //Add event listener
        changeBox.addEventListener('click', () => {
            //Call function on 'i' element of the array
            array[i].changeReadingStatus();
            console.log(array[i].read);
            displayBooks(myLibrary);
        });
       //Const bookList = document.createElement('li');
       const  bookList = document.createElement('div');
       bookList.className = "card";
       //Create readStatusText to help visualize if read or not 
       const readStatusText = array[i].read ? 'read' : 'not read';
       readStatusText.className = 'read-status-text';
       //Create remove button 
       const removeButton = document.createElement('button');
        removeButton.textContent = 'CANCEL BOOK';
        removeButton.className = 'remove-button';
        //Remove book from library
        removeButton.addEventListener('click', () => {
            myLibrary.splice(i, 1);
            displayBooks(myLibrary);
        });
        //Visualize Book name, author, pages and status
        bookList.textContent = `${array[i].name} by ${array[i].author}, ${array[i].pages} pages. \r\n status: ${readStatusText}.\r\n`;
        hanger.appendChild(bookList);
        bookList.appendChild(changeBox);
        bookList.appendChild(removeButton);
    }
}
displayBooks(myLibrary);

const showForm = document.querySelector('#show-form');
const myForm = document.querySelector('#my-form');

showForm.addEventListener('click', () => {
    myForm.style.display = 'block';
})
