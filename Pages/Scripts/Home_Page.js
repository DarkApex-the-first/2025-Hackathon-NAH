document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".content-Containers").forEach(container => {
        container.addEventListener("click", function () {
            this.classList.toggle("flipped");
        });
    });
});
