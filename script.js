window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    const aboutSection = document.querySelector('.about-section');
    const myWorkSection = document.querySelector('.work-section');
    const favQuote = document.querySelector('.about-section'); // Selecting the Fav Quote section

    let scrollPosition = window.scrollY;

    // Fade out the header as you scroll down
    if (scrollPosition > 0) {
        header.style.opacity = 1 - scrollPosition / 500;
        header.style.transform = `translateY(${-scrollPosition / 4}px)`;
    } else {
        header.style.opacity = 1;
        header.style.transform = `translateY(0)`;
    }

    // Animate the About and My Work sections as they enter the viewport
    if (scrollPosition > 300) {
        aboutSection.classList.add('fade-in');
    }
    if (scrollPosition > 700) {
        myWorkSection.classList.add('fade-in');
    }

    // Hide Fav Quote (About Section) when scrolling to My Work Section
    const myWorkPosition = myWorkSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (myWorkPosition <= windowHeight / 2) {
        favQuote.style.opacity = '0'; // Hide fav quote section
        favQuote.style.transition = 'opacity 0.5s ease-out'; // Smooth fade out
    } else {
        favQuote.style.opacity = '1'; // Show fav quote section again when scrolling back
        favQuote.style.transition = 'opacity 0.5s ease-in'; // Smooth fade in
    }
}); 

