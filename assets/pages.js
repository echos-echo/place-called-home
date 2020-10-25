/* 
/ file: pages.js
/ author: Eve Cho, eec5213
/ description: javascript specifically for dark mode toggling on pages that are non-index.html
*/

function mode() {
    // vars assigned to reduce magic 'numbers'
    var page = document.getElementById("page");
    var main = document.body;
    var nav = document.getElementById("nav");
    
    page.classList.toggle("dark");
    main.classList.toggle("dark-main");
    nav.classList.toggle("dark-nav");
    // if statement allows dark mode to continue functioning properly even after navbar changes styles
    if (main.className == "dark-main") {
        // if in dark mode
        main.style.backgroundColor = "black";
        main.style.color = "white";
        document.getElementById("arrow").src = "../assets/images/up_arrow_white.png";
        document.getElementById("logo_nav").src = "../assets/images/title_white.png";
        document.getElementById("alt_logo").src = "../assets/images/title_white.png";
    } else {
        // if in light mode
        main.style.backgroundColor = "white";
        main.style.color = "darkslategrey";
        document.getElementById("arrow").src = "../assets/images/up_arrow.png";
        document.getElementById("logo_nav").src = "../assets/images/title.png";
        document.getElementById("alt_logo").src = "../assets/images/title.png";
    }
}