const btn1 = document.querySelector(".change");
const elem1 = document.querySelector("body");

btn1.addEventListener("click", () => {
    btn1.style.backgroundColor = "purple";
    elem1.style.backgroundImage = "url(5dee0379fd33ab32aa3c01e1.jpg)";
    elem1.style.backgroundPosition = "center";
    elem1.style.backgroundRepeat = "no-repeat";
    elem1.style.backgroundSize = "110%";
    elem1.style.backgroundPositionY = "100%";
    elem1.style.overflow = "hidden";
});

