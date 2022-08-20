// function toggle()
// {
// var txt = document.querySelector("h2");
// txt.classList.toggle("lts");

// }
// setInterval("toggle()",500);


let count = 0 ;

let txt = document.querySelector(".text");
let first = document.querySelector(".first");
let btn = document.querySelector(".button")

function switch_toggle()
{
    //    count = 1; 
       if(count === 0)
       {
           btn.innerHTML = "toggle_on";
           btn.style.color = "green";
           count = 1;        
       }
       else{
        btn.innerHTML="toggle_off";
        btn.style.color = "red";
        count = 0;
       }
       
       txt.classList.toggle("darktxt");
       first.classList.toggle("darkfirst");

    //    count = 0;
       
    
}
btn.innerHTML = "toggle_off"
btn.addEventListener("click",switch_toggle);
