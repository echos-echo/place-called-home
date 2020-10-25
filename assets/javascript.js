/*
/ file: javascript.js
/ author: Eve Cho, eec5213
/ description: contains all javascript required for the pages of
/ project1 to act/respond accordingly
*/

/* functions for nav bar */
function openNav() {
    // if statement checks which media query the nav bar is opening for
    if(window.matchMedia("(max-width: 520px)").matches) {
        document.getElementById("nav").style.width = "100%";
    } else {
        document.getElementById("nav").style.width = "200px";
    }
    
    // changes styles to open nav bar
    document.getElementById("main").style.marginLeft = "210px";
    document.getElementById("main").style.opacity = "40%"; document.getElementById("main").style.marginLeft;
}


function closeNav() {
    // change styles back to collapse nav bar
    document.getElementById("nav").style.width = "0";
    document.getElementById("main").style.marginLeft= "30px";
    document.getElementById("main").style.opacity = "100%";
    // checking if dark mode is implemented or not and changes style to the appropriate mode color
    if(document.getElementById("page").className == "dark") {
        document.body.style.backgroundColor = "black";
    } else {
        document.body.style.backgroundColor = "ghostwhite";
    }
}
/* functions specifically for opening/closing nav on index.html due to the overlay text */
function navIndex() {
    document.getElementById("overlay-text").style.opacity = "0%";
}
function navIndexC() {
    document.getElementById("overlay-text").style.opacity = "60%";
}
/* end of nav bar functions */

/* for dark/light mode toggling */
function mode() {
    var page = document.getElementById("page");
    var main = document.body;
    var nav = document.getElementById("nav");
    
    page.classList.toggle("dark");
    main.classList.toggle("dark-main");
    nav.classList.toggle("dark-nav");
    // if statement allows dark mode to continue functioning properly even after navbar changes styles
    if (main.className == "dark-main") {
        // if in dark mode
        main.style.backgroundColor = "#5E518A";
        main.style.color = "#BBA9CE";
    } else {
        // if in light mode
        main.style.backgroundColor = "white";
        main.style.color = "darkslategrey";
    }
}
/* function that specifically handles darkmode on index.html */
function indexMode() {
    var main = document.body;
    if (main.className == "dark-main") {
        document.getElementById("overlay-text").style.backgroundColor = "#5E518A";
        document.getElementById("overlay-text").style.color = "white";
    } else {
        document.getElementById("overlay-text").style.backgroundColor = "white";
        document.getElementById("overlay-text").style.color = "black";
    }
    // toggle boolean used to check for darkmode and change header image
    var toggle = true;
    if (main.className == "dark-main") {
        toggle = false;
    } 
    // checking value of toggle and changing images accordingly
    if (toggle === true) {
        // light mode toggle
        document.getElementById("home").src  = "assets/images/skyline_day.jpg"; 
        document.getElementById("home_citation").innerHTML = "Photo by Lukas Kloeppel";
    } else {
        // dark mode toggle
        document.getElementById("home").src = 
        "assets/images/skyline_night.jpg";
        document.getElementById("home_citation").innerHTML = "Photo by Reynaldo";
    }
}

/* functions for button to return to top */
window.onscroll = function() {scroll()};
function scroll() {
    var to_top = document.getElementById("toTop");
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        to_top.style.display = "block";
    } else {
        to_top.style.display = "none";
    }
}
function top() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
