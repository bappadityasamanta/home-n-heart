/*==================================================
 Home N Heart
 Main JavaScript
==================================================*/

// Initialize after page loads

document.addEventListener("DOMContentLoaded", () => {

    initNavbar();

    initBackToTop();

    initSmoothScroll();

    initMobileMenu();

    initRevealAnimation();

});



/*==================================================
 Sticky Navbar
==================================================*/

function initNavbar(){

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 80){

            navbar.classList.add("scrolled");

        }else{

            navbar.classList.remove("scrolled");

        }

    });

}



/*==================================================
 Back To Top
==================================================*/

function initBackToTop(){

    const button = document.getElementById("backToTop");

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 400){

            button.classList.add("show");

        }else{

            button.classList.remove("show");

        }

    });

    button.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}



/*==================================================
 Smooth Scroll
==================================================*/

function initSmoothScroll(){

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            const target=document.querySelector(this.getAttribute("href"));

            if(!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });

        });

    });

}



/*==================================================
 Mobile Menu Auto Close
==================================================*/

function initMobileMenu(){

    const navLinks=document.querySelectorAll(".nav-link");

    const menu=document.querySelector(".navbar-collapse");

    navLinks.forEach(link=>{

        link.addEventListener("click",()=>{

            if(menu.classList.contains("show")){

                bootstrap.Collapse.getInstance(menu).hide();

            }

        });

    });

}



/*==================================================
 Fade Animation
==================================================*/

function initRevealAnimation(){

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("fade-up");

            }

        });

    },{

        threshold:0.15

    });

    document.querySelectorAll(

        ".room-card,.feature-box,.amenity-box,.gallery-img,.testimonial-card,.attraction-card,.contact-card"

    ).forEach(item=>{

        observer.observe(item);

    });

}

const roomSwiper = new Swiper(".roomSwiper",{

    slidesPerView:1,

    spaceBetween:20,

    loop:true,

    autoplay:{

        delay:3000,

        disableOnInteraction:false

    },

    pagination:{
        el:".swiper-pagination",
        clickable:true
    },

    breakpoints:{

        768:{
            slidesPerView:2
        },

        1200:{
            slidesPerView:3
        }

    }

});
