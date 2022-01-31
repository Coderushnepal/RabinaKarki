const password=document.getElementById('password');
const toggle=document.getElementById('toggle');

const element = document.getElementById("toggle");
element.addEventListener("click", showHide);


function showHide(){
    if(password.type === 'password'){
        password.setAttribute('type','text');
        toggle.classList.add('hide')
    }
    else{
        password.setAttribute('type','password');
        toggle.classList.remove('hide')
    }

}

const btn = document.querySelector('.next');
btn.addEventListener("click", pop);

function pop(){
    alert("Successful 😁 ");
}
