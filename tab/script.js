document.addEventListener("DOMContentLoaded", (_) => {
    const wd = document.querySelector("window");
    wd.querySelectorAll("tab-name").forEach((elem) => {
        function onclick_tabname(event) {
            event.target.setAttribute("selected", "true");
            document.querySelectorAll(`tab`).forEach((elem) => {
                if (
                    elem.getAttribute("id") ===
                    event.target.getAttribute("tab-id")
                ) {
                    elem.setAttribute("selected", true);
                } else {
                    elem.setAttribute("selected", false);
                }
            });
            wd.querySelectorAll("tab-name").forEach((elem) => {
                if (elem.innerHTML != event.target.innerHTML) {
                    elem.setAttribute("selected", "false");
                }
            });
        }

        elem.addEventListener("click", onclick_tabname);
    });
});
