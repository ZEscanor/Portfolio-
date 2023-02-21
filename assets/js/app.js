
const inserver = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting){
            entry.target.classList.add("reveal");
        }
        

    })
})

const hiddenLeafs = document.querySelectorAll(".hidden"
);

hiddenLeafs.forEach((element) => inserver.observe(element));