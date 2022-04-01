let nav = document.querySelector('nav');
let toggle = document.querySelector('.theme-switch-wrapper');
let checkbox = document.querySelector('input');
let image = document.querySelectorAll('img');
let toggleText = document.querySelector('.toggle-text');
const currentTheme = localStorage.getItem("theme")

window.addEventListener('scroll', (args) => {
  let finalScroll = 170;

  if (scrollY > finalScroll) {
    nav.classList.add('hide');
    toggle.classList.add('hide');
  } else if (scrollY < finalScroll) {
    nav.classList.remove('hide');
    toggle.classList.remove('hide');
  }
});

window.onload = ()=>{
  // if the theme exist... noties here that the current theme is not a boolean but it work as a truthy falue if its not undifined (not null)
  if (currentTheme) {
    ChangeTheme(currentTheme)
    if (currentTheme ==="dark") {
      checkbox.checked = true;
    }
  }
  else if (currentTheme === null){
    localStorage.setItem("theme","light")
    currentTheme = "light"
  }
}


//this event is accured when the user changes the state of the input
checkbox.addEventListener('change', (event) => {
  if (event.target.checked) {
    ChangeTheme("dark");
  }
  else{
    ChangeTheme("light");
  }
});


function ChangeTheme(theme) {
  if(theme === "dark"){
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem("theme", "dark");
    toggleText.innerHTML = "Dark Mode";
    image[0].setAttribute('src', 'img/undraw_proud_coder_dark.svg');
    image[1].setAttribute('src', 'img/undraw_feeling_proud_dark.svg');
    image[2].setAttribute('src', 'img/undraw_conceptual_idea_dark.svg');
  } else if (theme === 'light'){
    localStorage.setItem("theme", "light");
    toggleText.innerHTML = "Light Mode";
    image[0].setAttribute('src', 'img/undraw_proud_coder_light.svg');
    image[1].setAttribute('src', 'img/undraw_feeling_proud_light.svg');
    image[2].setAttribute('src', 'img/undraw_conceptual_idea_light.svg');
    document.documentElement.setAttribute('data-theme', 'light');
  }
}