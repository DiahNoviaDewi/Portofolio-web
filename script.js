const aClick = document.querySelectorAll("nav .navbar a")
const current=document.querySelector(".active")

for(let i=0;i<aClick.length;i++){
    aClick[i].addEventListener("click",function(){
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    })
}