const input = document.querySelector('#input-box');
const list = document.querySelector('#list-container');
const button = document.querySelector('button');
button.addEventListener('click',function(){
    if(input.value === ''){
        alert('you must write something')
    }else{
        let li = document.createElement('li');
        li.innerHTML = input.value
        list.append(li)
        let span = document.createElement('span');
        span.innerHTML = '\u00d7'
        li.appendChild(span)
        }
    input.value = ''
    saveData();
})
list.addEventListener('click',function(e){
if(e.target.tagName === 'LI' ){
e.target.classList.toggle('checked')
saveData();
}
else if(e.target.tagName === 'SPAN' ){
e.target.parentElement.remove()
saveData();
}
})
function saveData(){
    localStorage.setItem('data',list.innerHTML)
}
function showTask(){
list.innerHTML = localStorage.getItem('data')
}
showTask();

