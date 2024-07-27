const nav_open = document.querySelector('.nav_toggle');
const nav_menu = document.querySelector('.nav_menu');

nav_open.onclick = () =>{
    nav_menu.classList.toggle('show_menu');
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home_content, .about_img, .skills_subtitle, .skills_text',{}); 
sr.reveal('.home_img, .about_title, .about_description, .skills_img',{delay: 400}); 
sr.reveal('.home_social_icon',{ interval: 200}); 
sr.reveal('.skills_data, .work_card, .input_field',{interval: 200}); 