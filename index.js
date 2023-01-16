const dropDown = document.querySelectorAll(".dropdown-menu")
const dropDownMenu = document.querySelectorAll(".sublist__container--items");

dropDown.forEach(item => {
    item.addEventListener("click", e => {
        e.stopPropagation();       
        dropDownMenu.forEach((el) => {
            el.classList.remove("active")
        })
        const [, target] = e.target.children
        target?.classList?.add("active");
    })
}, false)

document.addEventListener("click", (e) => {
    if (!e.composedPath().includes(dropDown) && !e.composedPath().includes(dropDownMenu)) {
        dropDownMenu.forEach((el) => {
            el.classList.remove("active")
        })
    }
}, false)

