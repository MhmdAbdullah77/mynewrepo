let result = document.querySelector('#result');
const button = document.querySelector('button');
let userInput = document.querySelector('#date');
userInput.max = new Date().toISOString().split('T')[0];

function calculateAge(){
    let birthDate = new Date(userInput.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let today = new Date()

    let t_d = today.getDate();
    let t_m = today.getMonth() + 1;
    let t_y = today.getFullYear();

    let d_now,m_now,y_now;

    y_now = t_y - y1;
     
    if(t_m >= m1){
        m_now = t_m - m1
    }else {
        y_now--;
        m_now = 12 + t_m - m1
    }

    if(t_d >= d1){
        d_now = t_d - d1
    }else {
       m_now--;
       d_now = getDaysinMonth(y1,m1) + t_d - d1
    }
    if(m_now < 0){
        m_now = 11
        y_now--
    }
    result.innerHTML = `You are ${y_now} years , ${m_now} months and ${d_now} days old.`
}
function getDaysinMonth(){
    return new Date(year,month,0).getDate()
}

button.addEventListener('click',function(){
    calculateAge();
})

