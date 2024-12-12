// const api_Url = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';
let imgbox = document.querySelector('#img-box')
let qrimg = document.querySelector('#qrImg')
let qrText = document.querySelector('#qrtext')
const button = document.querySelector('#btz')



button.addEventListener('click',function(){
    generateQR()
})

function generateQR(){
    if(qrText.value.length>0){
        qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgbox.classList.add('show-img')
    }else {
        qrText.classList.add('error');
        setTimeout(()=>{
            qrText.classList.remove('error');
        },1000)
    }
}
