//Menu/navigation on the website

//toggle between menu bar and menu button
//Inspiration https://polypane.app/blog/the-perfect-responsive-menu/
const menuToggle = document.querySelector('nav button');
const menu = document.querySelector('nav ul');
const button = document.querySelector('#menu-btn');

menuToggle.addEventListener('click', function () {
  const open = JSON.parse(menuToggle.getAttribute('aria-expanded'));
  menuToggle.setAttribute('aria-expanded', !open);
  menu.hidden = !menu.hidden;

  if (!menu.hidden) {
    button.innerHTML = "close";
  } else {
    button.innerHTML = "menu";
  }
});


// Dropdown inside a dropdown
const campaignsDropdown = document.querySelector("#campaigns-dropdown");
const campaignsDropdownLi = document.querySelector("#campaigns-dropdown li");
const campaignsLi = document.querySelector("#campaignsLI");

function changeNavContent(e) {
  // If the media query matches, it will display this javascript
  if (e.matches) { 
    campaignsLI.outerHTML = `
    <li id='campaignsLI' class='hidden' aria-label='List of campaigns' tabindex=0>Campaigns
      <ul id="campaigns-dropdown">    
          <li><a class="skip" href="#after-dropdown">Skip over the navigation list of the different campaigns</a></li>
          <li class="hidden"><a href="fashion_revolution_week.html" aria-label="Campaign Fashion Revolution Week">Fashion Revolution Week</a></li>
          <li class="hidden"><a href="good_clothes_fair_pay.html" aria-label="Campaign Good Clothes, Fair Pay">Good Clothes, Fair Pay</a></li>
          <li class="hidden"><a href="whomademyclothes.html" aria-label="Campaign Who Made My Clothes">Who Made My Clothes</a></li>
          <li class="hidden"><a href="small_but_perfectly_formed.html" aria-label="Campaign small but perfectly formed">Small but perfectly formed</a></li>
      </ul>
    </li>`;

  } else {
    campaignsLI.outerHTML = `
    <li id='campaignsLI'>
      <button id="campaigns__dropdown--desktop" aria-label="List of campaigns">Campaigns</button>
      <ul id="campaign-dropdown--content" class="dropdown-content">
        <li><a href="fashion_revolution_week.html" aria-label="Campaign Fashion Revolution Week">Fashion Revolution Week</a></li>
        <li><a href="good_clothes_fair_pay.html" aria-label="Campaign Good Clothes, Fair Pay">Good Clothes, Fair Pay</a></li>
        <li><a href="whomademyclothes.html" aria-label="Campaign Who Made My Clothes">Who Made My Clothes</a></li>
        <li class="hidden"><a href="small_but_perfectly_formed.html" aria-label="Campaign small but perfectly formed">Small but perfectly formed</a></li>
      </ul>
    </li>
    `;

    const campaignsDropdownDesktop = document.querySelector("#campaigns__dropdown--desktop");

    //on desktop it is a dropdown menu, this toggles with a button called campaign
    campaignsDropdownDesktop.addEventListener("click", function(){
      document.querySelector("#campaign-dropdown--content").classList.toggle("show")
      document.querySelector("#campaign-dropdown--content").querySelector('a').focus();
    });
  }
}

//checks the media query and calls on the function when the media query changes, and one time when the script runs. 
// Inspiration: https://www.w3schools.com/howto/howto_js_media_queries.asp
let mediaEvent = window.matchMedia("(max-width: 900px)");
changeNavContent(mediaEvent);
mediaEvent.addEventListener('change', changeNavContent);


// Close the dropdown menu if the user clicks outside of it
// Inspiration: https://www.w3schools.com/howto/howto_js_dropdown.asp
window.onclick = function(event) {
  if (!event.target.matches('#campaigns__dropdown--desktop')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}