let settings = document.getElementsByClassName("prof-desc")[0]

settings.addEventListener('click', ()=>{
    if(settings.style.backgroundColor === "white")
    {
        settings.style.backgroundColor = "black";
    }
})

