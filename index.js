let butto=document.querySelectorAll(".blacko");
let btns=document.querySelectorAll('.product');
let btnso=document.querySelectorAll(".producto")
let awesome=document.querySelectorAll(".awesome");
let toggle=document.querySelector(".toggle");
let alberto=document.querySelector(".alberto");
let lifto=document.querySelector(".lefto");
let rigjto=document.querySelector(".righto");
let close=document.querySelector(".close");
let height=window.innerHeight;


btns.forEach((ele)=>{


   ele.addEventListener('click',(e)=>{

// e.target.nextElementSibling.classList.toggle("apper");

if(e.target===e.currentTarget){


    if(e.target.nextElementSibling.classList.contains('apper') )
    
    {
    
    e.target.nextElementSibling.classList.remove("apper");
    
    
e.target.childNodes[1].innerHTML='<i class="fas fa-angle-down"></i>';
    
    }
    
    else{
    

    e.target.nextElementSibling.classList.add("apper");
    

    

e.target.childNodes[1].innerHTML='<i class="fas fa-angle-up"></i>';

    }



}


else{


    if(e.target.parentElement.parentElement.nextElementSibling.classList.contains('apper') )
    
    {
    
    e.target.parentElement.parentElement.nextElementSibling.classList.remove("apper");
    
    
e.target.parentElement.parentElement.childNodes[1].innerHTML='<i class="fas fa-angle-down"></i>';
    
    }
    
    else{
    

    e.target.parentElement.parentElement.nextElementSibling.classList.add("apper");
    

    

e.target.parentElement.parentElement.childNodes[1].innerHTML='<i class="fas fa-angle-up"></i>';

    }


// console.log(e.target);






}


   })




})

btnso.forEach((ses)=>{

ses.addEventListener('click',(e)=>{


if(e.target===e.currentTarget){


    if(e.target.nextElementSibling.classList.contains('peero') )
    
    {
    
    e.target.nextElementSibling.classList.remove("peero");
    
    
e.target.childNodes[1].innerHTML='<i class="fas fa-angle-down"></i>';
    
    }
    
    else{
    

    e.target.nextElementSibling.classList.add("peero");
    

    

e.target.childNodes[1].innerHTML='<i class="fas fa-angle-up"></i>';

    }



}


else{


    if(e.target.parentElement.parentElement.nextElementSibling.classList.contains('peero') )
    
    {
    
    e.target.parentElement.parentElement.nextElementSibling.classList.remove("peero");
    
    
e.target.parentElement.parentElement.childNodes[1].innerHTML='<i class="fas fa-angle-down"></i>';
    
    }
    
    else{
    

    e.target.parentElement.parentElement.nextElementSibling.classList.add("peero");
    

    

e.target.parentElement.parentElement.childNodes[1].innerHTML='<i class="fas fa-angle-up"></i>';

    }


// console.log(e.target);






}









})

})


window.addEventListener('scroll',()=>{
let sssx=window.scrollY;

console.log(sssx);



})


close.addEventListener('click',()=>{
alberto.classList.remove("apper")
toggle.innerHTML='<i class="fas fa-bars"></i>';
})

toggle.addEventListener('click',()=>{


// alberto.classList.toggle('apper')

if(alberto.classList.contains("apper")){

alberto.classList.remove("apper")
toggle.innerHTML='<i class="fas fa-bars"></i>';

}

else{

alberto.classList.add("apper")

toggle.innerHTML='<i class="fas fa-times"></i>';


}


//<i class="fas fa-bars"></i>

})




window.addEventListener('resize',()=>{

let width=window.innerWidth;

if(width<=800){

lifto.src='illustration-editor-mobile.svg';

rigjto.src='illustration-laptop-mobile.svg';

}




})