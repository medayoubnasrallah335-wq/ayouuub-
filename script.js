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

// 📋 نسخ Free Fire ID
function copyFreeFireID() {
    navigator.clipboard.writeText("1728107709");
    alert("✅ تم نسخ Free Fire ID!");
}

// 🎵 تشغيل وإيقاف الأغنية
function toggleMusic() {
    const music = document.getElementById("music");
    const button = document.querySelector(".music-button");

    if (music.paused) {
        music.play();
        button.textContent = "⏸️";
    } else {
        music.pause();
        button.textContent = "🎵";
    }
}
