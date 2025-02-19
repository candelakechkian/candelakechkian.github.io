document.addEventListener("DOMContentLoaded", function() {
    const filters = document.querySelectorAll(".filters button");
    filters.forEach(button => {
        button.addEventListener("click", function() {
            filters.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
