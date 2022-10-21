let emmanuel = document.querySelector("#menu-btn");
let myBoss = document.querySelector(".navbar");

emmanuel.onclick = () => {
    emmanuel.classList.toggle("fa-times");
    myBoss.classList.toggle("active");
}

window.onscroll =()=> {
    emmanuel.classList.remove("fa-times");
    myBoss.classList.remove("active");
}
