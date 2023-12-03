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

function addBookToLibrary(title, author, pages, read){
    myLibrary.push(new Book(title, author, pages, read))
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
            const title = toggleBtn.parentNode.children[0].textContent
            const author = toggleBtn.parentNode.children[1].textContent
            const index = myLibrary.findIndex(book => book.title === title & book.author === author)
            myLibrary[index].read = !myLibrary[index].read
            toggleBtn.innerHTML = myLibrary[index].read  ? 'read':'not read'
        })

        removeBtn.addEventListener('click', event =>{
            const title = removeBtn.parentNode.children[0].textContent
            const author = removeBtn.parentNode.children[1].textContent
            const index = myLibrary.findIndex(book => book.title === title & book.author === author)
            myLibrary.splice(index, 1)
            rerenderLibary()
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
    
    if(myLibrary.findIndex(book => 
        book.title === elements.get('title') & book.author === elements.get('author')) !== -1){
            alert('Book already exists')
            return
        }

    addBookToLibrary(
        elements.get('title'),
        elements.get('author'),
        elements.get('pages'),
        elements.get('read')
        )
    rerenderLibary()
    popup.className = 'popup hide'
})