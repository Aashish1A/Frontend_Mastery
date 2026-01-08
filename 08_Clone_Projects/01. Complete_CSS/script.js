const menuBtn = document.querySelector("#menu-btn");
const sideNav = document.querySelector(".nav-icon");

sideNav.style.right = "-250px";
menuBtn.addEventListener("click", ()=> {
    if(sideNav.style.right == "-250px"){
        sideNav.style.right = "0";
    }
    else{
        sideNav.style.right = "-250px";
    }
})