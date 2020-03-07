
const  name = document.querySelector("#name");
const  email = document.querySelector("#email");
const  msg = document.querySelector("#msg");
const  contact = document.querySelector("#contact");
formbtn.addEventListener("click", store);

function store(){
    localStorage.setItem("Name",name.value)
    localStorage.setItem("Email",email.value)
    localStorage.setItem("Message",msg.value)
    // console.log(672878);
    contact.innerHTML = `Hi, ${localStorage.getItem("Name")}. Thank for you Message. I'll contact you shortly by your Email ${localStorage.getItem("Email")}`;
}