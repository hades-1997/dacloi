
let mouseCursor= document.querySelector('.cursor');
let navLinks = document.querySelectorAll('.nav-links li, .box, .contactus,.contact-content,th,td');


window.addEventListener("mousemove", cursor);
function cursor(e){
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left= e.pageX+ "px";
}

navLinks.forEach(link=>{
    link.addEventListener("mouseleave", ()=>{
        mouseCursor.classList.remove("link-grow");
        link.classList.remove('hovered-link')
    });
    link.addEventListener('mouseover',()=>{
        mouseCursor.classList.add('link-grow');
        link.classList.add('hovered-link');
    });
});


// document.onmousemove = animateCircles;

// var colors = ['#ccc','#6cf','#eba13a'];

// function animateCircles (event) {
//     let circle = document.createElement("div");
//     circle.setAttribute("class", "circle");
//     document.body.appendChild(circle);

//     circle.style.left = event.clientX + 'px';
//     circle.style.top = event.clientY + 'px';

//     var color = colors[Math.floor(Math.random() * colors.length)];
//     circle.style.borderColor = color;

//     circle.style.transition = "all 0.5s linear 0s";

//     circle.style.left = circle.offsetLeft - 20 + 'px';
//     circle.style.top = circle.offsetTop - 20 + 'px';

//     circle.style.width = "50px";
//     circle.style.height = "50px";
//     circle.style.borderWidth = "5px";
//     circle.style.opacity = 0;
    
//     setTimeout(function() {
//         circle.remove();
//     }, 500);
// }