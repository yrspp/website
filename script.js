document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("menu-toggle");

    toggleButton.addEventListener("click", function () {
        this.classList.toggle("open");
    });
});


document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.dropdown').forEach((detail) => {
        detail.addEventListener('toggle', function () {
            if (this.open) {
                document.querySelectorAll('.dropdown').forEach((other) => {
                    if (other !== this) other.open = false;
                });
            }
        });
    });
});
