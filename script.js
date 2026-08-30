const links = document.querySelectorAll(".link");

links.forEach(link => {
    link.addEventListener("click", () => {
        link.style.transform = "scale(0.97)";

        setTimeout(() => {
            link.style.transform = "";
        }, 150);
    });
});
