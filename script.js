const hamit = document.getElementById("hamit");
const ham = document.getElementById("ham");
const cross = document.getElementById("cross");
const mobilebar = document.getElementById("mobilebar");

window.addEventListener("load", () => {
  document.getElementById("body").classList.remove("opacity-0","scale-0");
});

let isTrue = false;
hamit.addEventListener("click", ()=>{
    isTrue = !isTrue;
    mobilebar.classList.toggle("hidden");
    if(isTrue){
        ham.classList.add("opacity-0");
        cross.classList.remove("opacity-0");
    }else{
        cross.classList.add("opacity-0");
        ham.classList.remove("opacity-0");
    }
});