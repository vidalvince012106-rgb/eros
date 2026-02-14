onload = () => {
    document.body.classList.remove("container");
    // Resume animations on flowers after removing container class
    const flowers = document.querySelector('.flowers');
    if (flowers) {
        flowers.style.animationPlayState = 'running';
    }
};

const wrapper = document.querySelector(".wrapper");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener("click", () => {
    wrapper.classList.add("open");
    openBtn.style.display = "none";
    closeBtn.style.display = "inline-block";
});

closeBtn.addEventListener("click", () => {
    wrapper.classList.remove("open");
    closeBtn.style.display = "none";
    openBtn.style.display = "inline-block";
});