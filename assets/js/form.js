//Form 

const nameInput = document.querySelector("#name");
const errorName = document.querySelector("#error--name");
const emailInput = document.querySelector("#email");
const errorMail = document.querySelector("#error--mail");

nameInput.addEventListener("blur", function() {
  console.log(nameInput);
  if(nameInput.value.length == 0){
    errorName.textContent = "The name input can't be empty";
    errorName.style.color = "red";
    nameInput.style.border = "1px solid red";

  } else {
    errorName.textContent = "Valid input for name";
    errorName.style.color = "green";
    nameInput.style.border = "1px solid green";
  }
});

emailInput.addEventListener("blur", function() {
  if(emailInput.value.length == 0){
    errorMail.textContent = "The email input can't be empty";
    errorMail.style.color = "red";
    emailInput.style.border = "1px solid red";
  } 
  if (!(emailInput.value.includes('@'))){
    errorMail.textContent = "The email input must include an @";
    errorMail.style.color = "red";
    emailInput.style.border = "1px solid red";
  }
  else {
    errorMail.textContent = "Valid input";
    errorMail.style.color = "green";
    emailInput.style.border = "1px solid green";
  }
});