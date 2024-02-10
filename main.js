const container = document.querySelector(".main-container");
const addBook = document.querySelector(".add");

const library = []

let title;
let author;
let page;
let readStatus;

function addBook(){
    title = titleChoice.value;
    author = authorChoice.value;
    genre = genreChoice.value;
    page = pageChoice.value;
    bookName = new Book(title, author, genre, page)
    myLibrary.push(bookName);
    console.log(myLibrary)
    console.log(bookName.author)
    console.log(bookName)
}


function Book(title, author, page, readStatus){
    this.title =title;
    this.author = author;
    this.page = page;
    this.readStatus = readStatus;
}

function showBook(){
    const div =document.createElement('div');
    div.classList.add("card");
    const h1 = document.createElement('p')
    h1.textContent = title;
    const div1 = document.createElement('p')
    div1.innerHTML = `<span>author:</span> ${author}`
    const div3 = document.createElement('p')
    div3.innerHTML = `<span>Current page:</span><input class="pageinput" value="${page}"/>`
    const completeButton = document.createElement('button')
    completeButton.classList.add("completeButton")
    completeButton.textContent = "Mark Complete"

    div.appendChild(h1)
    div.appendChild(div1)
    div.appendChild(div3)
    div.appendChild(completeButton)
    
    container.appendChild(div)
  
    deleteButton.addEventListener("click", () =>{bookstore.removeChild(div)});
  
    completeButton.addEventListener("click", () =>{
      const completed = document.createElement('div')
      completed.innerHTML = `<span>Status: </span>Completed`
      div.insertBefore(completed, completeButton)
      div.removeChild(completeButton)
    })
  
  }
  