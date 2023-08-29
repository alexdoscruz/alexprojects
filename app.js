var typed = new Typed (".text",{
    strings:["Website Developer", "Youtuber" , "Content-Creator"],
    typeSpeed: 50,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
    
})

const circle=document.querySelector('.circle')
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent")
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360/dots;

    for(let i = 0;i<dots;i++){
        points +=`<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`
    }
    elem.innerHTML = points;
})