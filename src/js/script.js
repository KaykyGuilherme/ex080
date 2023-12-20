const hamburguer = document.querySelector(".hamburguer_container")

hamburguer.addEventListener('click', () =>{
    const navALL = document.querySelector(".navALL")

    navALL.classList.toggle("active")
})