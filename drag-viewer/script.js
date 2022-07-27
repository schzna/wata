window.addEventListener("load", (_) => {
    const dv = document.querySelector("drag-viewer");
    const refleft = dv.getBoundingClientRect().left;
    const reftop = dv.getBoundingClientRect().top;
    Array.from(dv.children).forEach((elem) => {
        const x = Number(elem.getAttribute("x"));
        const y = Number(elem.getAttribute("y"));
        const absx = elem.getBoundingClientRect().left;
        const absy = elem.getBoundingClientRect().top;
        elem.setAttribute("absx", absx.toString());
        elem.setAttribute("absy", absy.toString());
        const relx = absx - refleft;
        const rely = absy - reftop;
        const adX = x - relx;
        const adY = y - rely;
        elem.style.left = adX + "px";
        elem.style.top = adY + "px";
    });

    dv.onmousedown = function (event) {
        if (dv.getAttribute("dragx") == null) {
            dv.setAttribute("dragx", "0");
        }
        if (dv.getAttribute("dragy") == null) {
            dv.setAttribute("dragy", "0");
        }

        const dragx = Number(dv.getAttribute("dragx"));
        const dragy = Number(dv.getAttribute("dragy"));

        const refleft = dv.getBoundingClientRect().left;
        const reftop = dv.getBoundingClientRect().top;

        let children = Array.from(dv.children);

        let shiftX = event.clientX - dragx;
        let shiftY = event.clientY - dragy;

        moveAt(event.pageX, event.pageY);

        function moveAt(pageX, pageY) {
            let X = pageX - shiftX;
            let Y = pageY - shiftY;
            children.forEach((elem) => {
                const x = Number(elem.getAttribute("x"));
                const y = Number(elem.getAttribute("y"));
                const absx = Number(elem.getAttribute("absx"));
                const absy = Number(elem.getAttribute("absy"));
                const relx = absx - refleft;
                const rely = absy - reftop;
                const adX = X + x - relx;
                const adY = Y + y - rely;
                elem.style.left = adX + "px";
                elem.style.top = adY + "px";
            });
            dv.setAttribute("dragx", X.toString());
            dv.setAttribute("dragy", Y.toString());
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        dv.addEventListener("mousemove", onMouseMove);

        window.onmouseup = function () {
            dv.removeEventListener("mousemove", onMouseMove);
            dv.onmouseup = null;
        };
    };

    dv.ondragstart = function () {
        return false;
    };
});
