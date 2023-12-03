const myLibrary = []
const libary = document.querySelector('.libary')

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

addBookToLibrary('The hobbit', 'Tolkien', '798', 'not read yet')
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
    libary.appendChild(card)
}