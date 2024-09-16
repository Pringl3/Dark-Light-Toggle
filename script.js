// Links the body element from the html file as the toggle element exists only through the body element
const body = document.querySelector('body');
    let toggle = document.querySelector('.toggle');

// Sets the click function of the toggle so that if its clicked, it prints PRESSED in the console to verify it works and adds both active to the toggle aswell as dark to the body
toggle.addEventListener('click', () => {
    console.log("PRESSED");
    toggle.classList.toggle('active');
    body.classList.toggle('dark');
})