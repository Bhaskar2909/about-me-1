
const  name = document.querySelector("#name");
const  email = document.querySelector("#email");
const  msg = document.querySelector("#msg");
formbtn.addEventListener("click", store);

function store(){
    localStorage.setItem("Name",name.value)
    localStorage.setItem("Email",email.value)
    localStorage.setItem("Message",msg.value)
    console.log(672878);
}