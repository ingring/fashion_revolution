//Hello bar Pop up on all of the campaign sites

const popUpButton = document.querySelector("#popup--btn");
const popUpContainer = document.querySelector(".popup--container");
const popupExit = document.querySelector("#exitPopup");

//displays after two seconds
setTimeout(function () {

    popUpContainer.classList.toggle("show");
    popUpContainer.focus(); //to focus on the element

}, 2000);

//exit the pop up
popupExit.addEventListener("click", function(){
    popUpContainer.classList.toggle("show");
})

