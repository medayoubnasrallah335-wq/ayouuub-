const links = document.querySelectorAll(".link");

links.forEach(link => {
    link.addEventListener("click", () => {
        link.style.transform = "scale(0.97)";

        setTimeout(() => {
            link.style.transform = "";
        }, 150);
    });
});

// ⚡ تأثير البرق
setInterval(() => {
    document.body.classList.add("lightning");

    setTimeout(() => {
        document.body.classList.remove("lightning");
    }, 120);
}, 3500);
