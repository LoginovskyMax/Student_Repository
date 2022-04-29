let next = document.getElementById("next"),
Prev = document.getElementById("Prev"),
images = document.querySelectorAll(".images"),
dot = document.querySelector(".dot"),
circle = document.querySelector(".circle"),
check = false,
CurrentImg = 0

images[0].style.transform = "translateX(130px)"

next.addEventListener("click",function(){
    CurrentImg++
    for(let i= 0;i<images.length;i++){
        if(CurrentImg==i)images[i].style.transform = "translateX(130px)"
        if(CurrentImg-1==i){
            images[i].style.transform = "translateX(260px)"
            setTimeout(()=>{
                images[i].style.display = "none"
                images[i].style.transform = "translateX(0px)"},700)
            setTimeout(()=>{images[i].style.display = "block"},800)}
        if(CurrentImg-1==-1){
            images[images.length-1].style.transform = "translateX(260px)"
            setTimeout(()=>{
                images[images.length-1].style.display = "none"
                images[images.length-1].style.transform = "translateX(0px)"},700)
            setTimeout(()=>{images[i].style.display = "block"},800)}
        if(CurrentImg==images.length){images[0].style.transform = "translateX(130px)"}
        if(CurrentImg>=images.length)CurrentImg=0
    }
})

Prev.addEventListener("click",function(){
    CurrentImg--
    for(let i= 0;i<images.length;i++){
        if(CurrentImg==i){
            images[i].style.display = "none"
            images[i].style.transform = "translateX(260px)"
            setTimeout(()=>{images[i].style.transform = "translateX(130px)"},50)
            setTimeout(()=>{images[i].style.display = "block"},20)
        }
        if(CurrentImg+1==i)images[i].style.transform = "translateX(0px)"
        if(CurrentImg==-1){
            images[images.length-1].style.display = "none"
            images[images.length-1].style.transform = "translateX(260px)"
            setTimeout(()=>{images[images.length-1].style.transform = "translateX(130px)"},50)
            setTimeout(()=>{images[images.length-1].style.display = "block"},20)
           }
        if(CurrentImg<0)CurrentImg=images.length-1
    }
})

dot.addEventListener("mousedown",()=>{
    check=!check
        circle.addEventListener("mousemove",(event)=>{
            if(check){
                if(event.clientY<=170&&event.clientY>=0){
                    dot.style.top = (event.clientY-10) + "px"
                    dot.style.left = (event.clientX-100) + "px"}
                }
   
        })
    
})
circle.addEventListener("mouseup",()=>{
    check=!check})

