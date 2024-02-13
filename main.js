//TODO: add comment for the code and finish the read me documents
const container = document.querySelector(".main-containter");
const addButton = document.querySelector(".add");
const popup = document.querySelector(".popup-form");
const titleChoice = document.querySelector("#title");
const authorChoice = document.querySelector("#author");
const pageChoice = document.querySelector("#page");
const checkRead = document.querySelector(".checkbox");
const submitButton = document.querySelector("#submit-btn");
const cancelButton = document.querySelector(".js-delete-btn");

const library = []

let title;
let author;
let page;
let readStatus;

addBook("Author1", "Title1", "1", true);
addBook("Author2", "Title2", "2", false);
addBook("Author3", "Title3", "3", true);
addBook("Author4", "Title4", "4", false);



function addBook(){
  title = titleChoice.value;
  author = authorChoice.value;
  page = pageChoice.value;
  readStatus = checkRead.checked;
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
    h1.textContent = title;
    // h1.textContent = "test title"

    const div1 = document.createElement('p');
    div1.innerHTML = `<span>author:</span> ${author}`;
    const div3 = document.createElement('p');
    div3.innerHTML = `<span>Current page:</span>${page}`;
    div.appendChild(h1);
    div.appendChild(div1);
    div.appendChild(div3);

    if(!readStatus){
      const completeButton = document.createElement('button')
      completeButton.classList.add("completeButton")
      completeButton.textContent = "Mark Complete"
      completeButton.addEventListener("click", () =>{
        const completed = document.createElement('div')
        completed.innerHTML = `<span>Status: </span>Completed`
        div.insertBefore(completed, completeButton)
        div.removeChild(completeButton)
      });
      div.appendChild(completeButton);
    }
    else{
      const completed = document.createElement('div');
      completed.innerHTML = `<span>Status: </span>Completed`;
      div.appendChild(completed);
    }

    const deleteButton = document.createElement('button');
    deleteButton.classList.add("delete");
    deleteButton.textContent = "Delete"


    div.appendChild(deleteButton);
    container.appendChild(div);



    deleteButton.addEventListener("click", () =>{container.removeChild(div)});
  

  }

  function hidePopup(){
    popup.style.display = 'none';
  }
  function showPopup(){
    popup.style.display = 'block';
  }
  
  cancelButton.addEventListener("click",hidePopup);

  addButton.addEventListener("click",function(e){
    showPopup();
  });

  submitButton.addEventListener("click", function(e){
    
    addBook();
    showBook();
    hidePopup();
  });
