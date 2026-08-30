const links = document.querySelectorAll(".link");

links.forEach(link => {
    link.addEventListener("click", () => {
        link.style.transform = "scale(0.97)";

        setTimeout(() => {
            link.style.transform = "";
        }, 150);
    });
});

// ⚡ البرق
setInterval(() => {
    const flash = document.createElement("div");

    flash.style.position = "fixed";
    flash.style.top = "0";
    flash.style.left = "0";
    flash.style.width = "100%";
    flash.style.height = "100%";
    flash.style.background = "white";
    flash.style.opacity = "0.8";
    flash.style.zIndex = "9999";
    flash.style.pointerEvents = "none";

    document.body.appendChild(flash);

    setTimeout(() => {
        flash.remove();
    }, 100);
}, 3500);
function copyFreeFireID() {
    const id = document.getElementById("freefire-id").textContent;

    navigator.clipboard.writeText(id).then(() => {
        alert("✅ تم نسخ Free Fire ID!");
    });
        }
