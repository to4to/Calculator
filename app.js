window.onload=()=>{
const buttons=document.querySelectorAll(".numbers");
const screen=document.querySelector(".screen");
const equals=document.querySelector("#btn-equals")

buttons.forEach(button=>{
button.addEventListener('click',(e)=>{


    //console.log(e.target.innerHTML);

screen.value+=e.target.innerHTML;


})

equals.addEventListener('click',(e)=>{

})

})
}