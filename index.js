const dropDown = document.querySelectorAll(".dropdown-menu")
const dropDownMenu = document.querySelectorAll(".sublist__container--items");
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const listContainer = document.querySelector(".list__container");
const main = document.querySelector("main")

dropDown.forEach(item => {
    item.addEventListener("click", e => {
        e.stopPropagation();       
        const [ target ] = e.target.children
        console.log(target)
        target.classList.add("active");
    })
}, false)

document.addEventListener("click", (e) => {
    if (!e.composedPath().includes(dropDown) && !e.composedPath().includes(dropDownMenu)) {
        dropDownMenu.forEach((el) => {
            el.classList.remove("active")
        })
    }
}, false)

openMenu.addEventListener("click", (e) => {
    listContainer.classList.add("active")
    main.classList.add("active")
})

closeMenu.addEventListener("click", () => {
    listContainer.classList.remove("active")
    main.classList.remove("active")
})

