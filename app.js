const megaMenu = document.querySelector(".drop-btn")
const megaContent = document.querySelector(".grid-container");
const dropDown = document.querySelector(".fa-solid");

let isHovering = false ;


megaMenu.addEventListener("mouseover",()=>{
    isHovering = true;
    megaContent.classList.add("active");
    dropDown.classList.add("active")
    
   
});

megaMenu.addEventListener("mouseout", ()=>{
    isHovering = false ;
    setTimeout(()=>{
        if(!isHovering){
            megaContent.classList.remove("active")
            dropDown.classList.remove("active")
        }
    },500);
    
   
});

megaContent.addEventListener("mouseover" ,()=>{
    isHovering = true;
})

megaContent.addEventListener("mouseout" ,()=>{
    isHovering = false;
    setTimeout(() => {
        if(!isHovering){
            megaContent.classList.remove("active");
        }
    }, 500);
})