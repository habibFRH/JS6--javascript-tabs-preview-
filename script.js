const tabOne = document.querySelector(".react");
const tabTwo = document.querySelector(".vue");
const tabThree = document.querySelector(".angular");
const body = document.body;
const item = document.querySelectorAll(".item");
const icon = document.querySelector(".big-icon");
const active = document.querySelector(".active");

function setcolors(tab,bgcolor, iconclass,infocolor){
    body.style.backgroundColor = bgcolor;
    icon.innerHTML = `<i class="${iconclass}"></i>`;
    for(let i = 0; i < item.length; i++){
        item[i].style.color = infocolor;
    }
}

tabOne.addEventListener("click",()=>{
    setcolors(tabOne,"#00d8ff","fab fa-react","#00d8ff");
    tabOne.classList.add("tabOne");
    tabTwo.classList.remove("tabOne");
    tabThree.classList.remove("tabOne");
})

tabTwo.addEventListener("click",()=>{
    setcolors(tabOne,"#42b883","fab fa-vuejs","#42b883");
    tabTwo.classList.add("tabOne");
    tabOne.classList.remove("tabOne");
    tabThree.classList.remove("tabOne");
})

tabThree.addEventListener("click",()=>{
    setcolors(tabOne,"#b52e31","fab fa-angular","#b52e31");
    tabThree.classList.add("tabOne");
    tabTwo.classList.remove("tabOne");
    tabOne.classList.remove("tabOne");
})

setcolors(tabOne,"#00d8ff","fab fa-react","#00d8ff");
tabOne.classList.add("tabOne");

