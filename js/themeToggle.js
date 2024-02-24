const body = document.body;

const jsThemeBtn = document.querySelector("#js-theme");

const themes = {
    "t-dark": {
        theme: "t-light",
        name: "<i class='bx bxs-sun' ></i>"
    },
    "t-light": {
        theme: "t-dark",
        name: "<i class='bx bxs-moon' ></i>"
    },
}

jsThemeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const currentTheme = body.dataset.theme
    body.setAttribute("data-theme", themes[currentTheme].theme || "t-light")
    jsThemeBtn.innerHTML = themes[currentTheme].name || "t-light";
})