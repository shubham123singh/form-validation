

let formData = document.querySelector(".form");
let submitButton = document.querySelector(".button");
let error = document.querySelectorAll(".error-message"); // this will select all the span with class error-message
let empty  = document.querySelectorAll(".empty-field");  // this will select all the span with class empty-field
let showPasswordBtn = document.querySelector(".btn");  // this will select the button icon in password
let firstName , lastName, email, password; // using this varibale to store the value of event.target.value
let fnTarget, lnTarget, emailTarget, passTarget;
let fnFlag, lnFlag, eFlag, pFlag;
let set;

let nameRegex = /^[a-z]+$/i;
let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
let pwdRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;


for(let errorMessage of error){
    errorMessage.classList.add("d-none");
}

for(let hidden of empty){
    hidden.classList.add("d-none");
}


formData.addEventListener("keyup", (event) =>{
    event.preventDefault();
    set = event.target.dataset.key;
    switch(set){
        case "firstName":
            firstName = event.target.value;
            fnTarget = event.target;
            break;
        case "lastName":
            lastName = event.target.value;
            lnTarget = event.target;
            break;
        case "email" :
            email = event.target.value;
            emailTarget = event.target;
            break;  
        case "password":
            password = event.target.value; 
            passTarget = event.target   
            break;
        default:
            firstName = lastName = email = password = "";
            break;              
    }
})

submitButton.addEventListener("click", (event) =>{
    event.preventDefault();
    console.log(firstName,lastName,email,password);
    if(firstName){
        empty[0].classList.add("d-none");
        if(!nameRegex.test(firstName)){
            fnTarget.classList.add("error");
            error[0].classList.remove("d-none");
            fnFlag = false;
        }else{
            fnTarget.classList.remove("error");
            error[0].classList.add("d-none");
            fnFlag = true;
        }
    }else{
        empty[0].classList.remove("d-none");
        console.log("please fill this field");
    }
    // similiar condition for last name
    if(lastName){
        empty[1].classList.add("d-none");
        if(!nameRegex.test(lastName)){
            lnTarget.classList.add("error");
            error[1].classList.remove("d-none");
            lnFlag = false;
        }else{
            lnTarget.classList.remove("error");
            error[1].classList.add("d-none");
            console.log("Good to go");
            lnFlag = true;
        }
    }else{
        empty[1].classList.remove("d-none");
        console.log("please fill this field");
    }

    // validation condition for email
    if(email){
        empty[2].classList.add("d-none");
        if(!emailRegex.test(email)){
            emailTarget.classList.add("error");
            error[2].classList.remove("d-none");
            eFlag = false;
            console.log("Invalid email id");
        }else{
            emailTarget.classList.remove("error");
            error[2].classList.add("d-none");
            eFlag = true;
            console.log("Good to go");
        }
    }else{
        empty[2].classList.remove("d-none");
        console.log("please fill this field");
    }
    // validation for checking password
    if(password){
        empty[3].classList.add("d-none");
        if(!pwdRegex.test(password)){
            passTarget.classList.add("error");
            error[3].classList.remove("d-none");
            pFlag = false;
            console.log("Invalid password");
        }else{
            passTarget.classList.remove("error");
            error[3].classList.add("d-none");
            pFlag = true;
        }
    }else{
        empty[3].classList.remove("d-none");
        console.log("please fill this field");
    }
    if (fnFlag && lnFlag && eFlag && pFlag) {
        fnTarget.value = lnTarget.value = emailTarget.value = passTarget.value = "";
        window.location.href = "index.html";
      }
    
})

showPasswordBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (passTarget.getAttribute("type") === "text") {
      passTarget.setAttribute("type", "password");
    } else {
      passTarget.setAttribute("type", "text");
    }
  });