const notesContainer = document.querySelector('.notes-container');
const createButton = document.querySelector('button');
let notes = document.querySelectorAll('.input-box');


function showNotes(){
    notesContainer.innerHTML = localStorage.getItem('notes');
}

showNotes()

function updateStorage(){
    localStorage.setItem('notes', notesContainer.innerHTML)
}

createButton.addEventListener('click',function(){
    let inputbox = document.createElement('p');
    let img = document.createElement('img');
    inputbox.className = 'input-box'
    inputbox.setAttribute('contenteditable', 'true');
    img.src = 'https://cdn-icons-png.flaticon.com/128/3221/3221897.png';
    notesContainer.appendChild(inputbox).appendChild(img)
})

notesContainer.addEventListener('click',function(e){
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove()
        updateStorage()
    }else if(e.target.tagName === 'P'){
         notes = document.querySelectorAll('.input-box');
         notes.forEach((nt)=>{
            nt.onkeyup = function(){
                updateStorage()
            }
         })
    }
})
document.addEventListener('keydown', function(event){
if(event.key === 'Enter'){
document.execCommand('insertLineBreak')
event.preventDefault()
}
})
