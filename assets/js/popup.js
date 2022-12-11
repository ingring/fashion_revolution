//Hello bar Pop up on all of the campaign sites

const popUpButton = document.querySelector("#popup--btn");
const popUpContainer = document.querySelector(".popup--container");
const popUpFocus = document.querySelector("#popup--focus");
const popupClose = document.querySelector("#exitPopup");

setTimeout(function () {

    popUpContainer.classList.toggle("show");
    // popUpFocus.focus(); //to focus on the element

}, 2000);

popupClose.addEventListener("click", function(){
    popUpContainer.classList.toggle("show");
})