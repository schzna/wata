document.addEventListener("DOMContentLoaded", (_) => {
    const wd = document.querySelector("window");
    wd.querySelectorAll("*").forEach((elem) => {});
    wd.querySelectorAll("tab-name").forEach((elem) => {
        function onclick_tabname(event) {
            event.target.setAttribute("selected", "true");
            wd.querySelectorAll("tab-name").forEach((elem) => {
                if (elem.innerHTML != event.target.innerHTML) {
                    elem.setAttribute("selected", "false");
                }
            });
        }
        elem.addEventListener("click", onclick_tabname);
    });
});
