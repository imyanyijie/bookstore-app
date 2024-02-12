const container = document.querySelector(".main-containter");
const addButton = document.querySelector(".add");
const popup = document.querySelector(".popup-form");
const titleChoice = document.querySelector("#title");
const authorChoice = document.querySelector("#author");
const checkRead = document.querySelector(".checkbox")
const library = []

let title;
let author;
let page;
let readStatus;

// hidePopup();
showPopup();

addBook("Author1", "Title1", "1", true);
addBook("Author2", "Title2", "2", false);
addBook("Author3", "Title3", "3", true);
addBook("Author4", "Title4", "4", false);

showBook();
showBook();
showBook();
showBook();



function addBook(title, author, page, readStatus){
    bookName = new Book(title, author, page, readStatus)
    library.push(bookName);
    console.log(library)
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
    h1.classList.add("title");
    // h1.textContent = title;
    h1.textContent = "test title"

    const div1 = document.createElement('p')
    div1.innerHTML = `<span>author:</span> ${author}`
    const div3 = document.createElement('p')
    div3.innerHTML = `<span>Current page:</span>${page}`
    const completeButton = document.createElement('button')
    completeButton.classList.add("completeButton")
    completeButton.textContent = "Mark Complete"
    const deleteButton = document.createElement('button');
    deleteButton.classList.add("delete");
    deleteButton.textContent = "Delete"

    div.appendChild(h1);
    div.appendChild(div1);
    div.appendChild(div3);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    container.appendChild(div);



    deleteButton.addEventListener("click", () =>{bookstore.removeChild(div)});
  
    completeButton.addEventListener("click", () =>{
      const completed = document.createElement('div')
      completed.innerHTML = `<span>Status: </span>Completed`
      div.insertBefore(completed, completeButton)
      div.removeChild(completeButton)
    })

  }

  function hidePopup(){
    popup.style.display = "none";
  }
  
  function showPopup(){
    popup.style.display = "block";
  }
  