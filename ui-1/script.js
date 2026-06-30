var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");

console.log("script loaded");

var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var image = document.querySelector("#image");



main.addEventListener("mousemove", function (dets) {
    // console.log(dets)
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 0.8,
        ease: "elastic.out(1,0.3)",

        // stagger: 0.01
    })
})

image.addEventListener("mouseenter", function () {
    cursor.innerHTML = "Explore";
    gsap.to(cursor, {
        scale: 4,
        // backgroundColor: "transparent",
        borderWidth: "1px",
        duration: 0.5,
        backgroundColor: "ffffff87",
    })
})
image.addEventListener("mouseleave", function () {
    cursor.innerHTML = "";
    gsap.to(cursor, {
        scale: 1,
        // backgroundColor: "transparent",
        borderWidth: "1px",
        duration: 0.5,
        backgroundColor: "#fff",
    })
})