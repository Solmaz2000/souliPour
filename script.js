const collapsibleS = document.querySelectorAll(".collapsible");

collapsibleS.forEach((item) =>
    item.addEventListener("click", function () {
        this.classList.toggle("collapsible--expanded");
    })
);
