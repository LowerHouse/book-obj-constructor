const myLibrary = []
const libary = document.querySelector('.libary')
const addBook = document.querySelector('.addBook')
const popup = document.querySelector('.popup')
const bookForm = document.querySelector('.bookForm')

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

function rerenderLibary(){
    libary.innerHTML = ''
    for(i in myLibrary){
        let card = document.createElement('div')
        card.className = 'card'
        card.innerHTML = 
        `<p>${myLibrary[i].title}</p>
        <p>${myLibrary[i].author}</p>
        <p>${myLibrary[i].pages}</p>
        `
        let toggleBtn= document.createElement('button')
        toggleBtn.class = 'toggle'
        toggleBtn.innerHTML = myLibrary[i].read  ? 'read':'not read'

        let removeBtn = document.createElement('button')
        removeBtn.class = 'removeBook'
        removeBtn.innerHTML = 'Remove'

        toggleBtn.addEventListener('click', event =>{
            myLibrary[i].read = !myLibrary[i].read
            toggleBtn.innerHTML = myLibrary[i].read  ? 'read':'not read'
        })

        removeBtn.addEventListener('click', event =>{
            myLibrary.splice(i, 1)
            removeBtn.parentElement.remove()
        })
        card.appendChild(toggleBtn)
        card.appendChild(removeBtn)
        libary.appendChild(card)
}}

addBook.addEventListener('click', event =>{
    popup.className = 'popup'
})

bookForm.addEventListener('submit', event =>{
    event.preventDefault()
    const elements = new FormData(event.currentTarget)
    addBookToLibrary(
        elements.get('title'),
        elements.get('author'),
        elements.get('pages'),
        elements.get('read')
        )
    rerenderLibary()
    popup.className = 'popup hide'
})