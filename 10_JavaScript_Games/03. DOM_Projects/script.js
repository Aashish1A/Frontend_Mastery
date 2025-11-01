// Add Remove Friend
let isStatus = document.querySelector("h5");
const btn = document.getElementById("add");

let check = 0;

btn.addEventListener("click", ()=> {
    if(check==0){
        isStatus.innerHTML = "Friends";
        isStatus.style.color = "green";
        btn.innerHTML = "Add Friend";
        check = 1;
    }else{
        isStatus.innerHTML = "Stranger";
        isStatus.style.color = "red";
        btn.innerHTML = "Remove Friend";
        check = 0;
    }
})

// Love Shown
const container = document.getElementById("card");
let love = document.querySelector("i");

container.addEventListener("dblclick", ()=> {
    love.style.transform = "translate(-50%, -50%) scale(2)";
    love.style.opacity = "0.8";
    setTimeout(()=> {
        love.style.opacity = "0";  
    },1000);
    setTimeout(()=> {
        love.style.transform = "translate(-50%, -50%) scale(0)";
    },1500);
})

// Custom Cursor
const main = document.querySelector("#main");
let cursor = document.querySelector(".cursor");

main.addEventListener("mousemove", (e)=> {
    cursor.style.left = e.x+"px";
    cursor.style.top = e.y+"px";
})
