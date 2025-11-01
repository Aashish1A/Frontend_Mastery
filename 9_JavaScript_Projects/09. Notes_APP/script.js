const inputContainer = document.querySelector(".note-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
    inputContainer.innerHTML = localStorage.getItem("notes");
}

showNotes();

function updateStorage(){
    localStorage.setItem("notes", inputContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("P");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    inputContainer.appendChild(inputBox).appendChild(img);
})

inputContainer.addEventListener("click", (e) => {
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", event => {
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
