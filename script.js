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

const animate = document.querySelectorAll(".animate")

console.log(animate)
animate.forEach((val)=> observer.observe(val))