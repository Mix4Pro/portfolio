const animate = document.querySelectorAll(".animate")
const menu = document.querySelector(".btn-menu")
const links = document.querySelector(".links")
const directors = document.querySelectorAll(".directors")

menu.addEventListener("click",(e)=>{
    e.preventDefault()
    links.classList.toggle('show-links')
    links.classList.toggle("hide")
    links.classList.remove("animate-v")
    links.classList.add("animate-h-l")
})
directors.forEach((val)=>{
    val.addEventListener('click',(e)=>{
        links.classList.add("hide")
        links.classList.remove("show-links")
    })
})
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            console.log("GOOO")
            entry.target.classList.add("show")
            entry.target.classList.remove("animate-v")
            entry.target.classList.remove("animate-h-l")
            entry.target.classList.remove("animate-h-r")
        }
    })
})
console.log(animate)
animate.forEach((val)=> observer.observe(val))

