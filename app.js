const myLibrary = []
const libary = document.querySelector('.libary')
const addBook = document.querySelector('.addBook')
const popup = document.querySelector('.popup')

addBook.addEventListener('click', event =>{
    popup.className = 'popup'
})

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    }
}
function addBookToLibrary(title, author, pages ,read){
    myLibrary.push(new Book(title, author, pages ,read))
}

addBookToLibrary('The Hobbit', 'Tolkien', '798', 'not read yet')
addBookToLibrary('The Bobbit', 'Bolkien', '698', 'read')
addBookToLibrary('The Dobbit', 'Dolkien', '598', 'not read yet')


for(i in myLibrary){
    let card = document.createElement('div')
    card.className = 'card'
    card.innerHTML = 
    `<p>${myLibrary[i].title}</p>
    <p>${myLibrary[i].author}</p>
    <p>${myLibrary[i].pages}</p>
    <p>${myLibrary[i].read}</p>
    `
    let removeBtn = document.createElement('button')
    removeBtn.class = 'removeBook'
    removeBtn.innerHTML = 'Remove'

    removeBtn.addEventListener('click', e =>{
        removeBtn.parentElement.remove()
    })
    card.appendChild(removeBtn)
    libary.appendChild(card)
}

const removeBook = document.querySelectorAll('.removeBook')

