let button1 = document.querySelector('.btn1');
let button2 = document.querySelector('.btn2');
let button3 = document.querySelector('.btn3');
let toastBox = document.querySelector('#toast-box');
let successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully Submitted'
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error!'
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid Input, Please check again'
 

function showToast(msg){
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg
    toastBox.appendChild(toast);

    if(msg.includes('error')){
        toast.classList.add('error')
    }
    if(msg.includes('Invalid')){
        toast.classList.add('invalid')
    }

    setTimeout(()=>{
        toast.remove();
    },6000)
}


button1.addEventListener('click',function(){
    showToast(successMsg);
})
button2.addEventListener('click',function(){
    showToast(errorMsg);
})
button3.addEventListener('click',function(){
    showToast(invalidMsg);
})



