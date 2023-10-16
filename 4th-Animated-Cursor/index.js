const cursor = document.querySelector(".cursor");
const btn = document.querySelector("button");

window.addEventListener("mousemove", (e) =>{
    console.log(e);
cursor.style.top = `${e.pageY-4}Px`;
cursor.style.left = `${e.pageX-4}Px`;
});

btn.addEventListener("click", ()=> alert("clicked"));  