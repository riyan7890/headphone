document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 3000, // Auto-play every 3 seconds
        disableOnInteraction: false, // Continue autoplay even when user interacts with the slider
    },
    loop: true, // Enable infinite loop
});



// Newsletter Form Submission
document.getElementById('newsletter-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const message = document.getElementById('subscription-message');
  
    // Simulate a successful subscription
    message.textContent = `Thank you for subscribing, ${email}!`;
    message.style.color = '#4CAF50'; // Green color for success
    document.getElementById('email').value = ''; // Clear the input field
  
    setTimeout(() => {
      message.textContent = '';
    }, 5000); // Clear the message after 5 seconds
  });
  
  // Back to Top Button
  document.querySelector('.back-to-top').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });