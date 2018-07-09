const current = document.querySelector("#current-img");
const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.4;

// Set first img opacity
img[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener("click", imgClick));

function imgClick(e) {
    // Reset opacity
    img.forEach(img => (img.style.opacity = 1));

    // Change current img to src of clicked img
    current.src = e.target.src;

    // Add fade-in class
    current.classList.add("fade-in");

    // Remove fade-in class
    setTimeout(() => current.classList.remove("fade-in"), 500);

    // Change opacity to opacity var
    e.target.style.opacity = opacity;
};

