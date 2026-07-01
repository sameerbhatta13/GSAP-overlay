


function breakText() {
    var h1 = document.querySelector("h1")

    var h1text = h1.textContent.split("")

    var clutter = ""
    // console.log(h1text)

    // h1text.forEach((char) => {
    //     h1.innerHTML += `<span>${char}</span>`
    // })

    const halfText = Math.floor(h1text.length / 2)
    // console.log('halftext', halfText)

    h1text.forEach(function (char, idx) {
        if (idx < halfText) {
            clutter += `<span class="left">${char}</span>`
        } else {
            clutter += `<span class="right">${char}</span>`
        }
        //

        // clutter += `<span>${char}</span>`
    })
    h1.innerHTML = clutter
}

breakText();

gsap.from("h1 .left", {
    duration: 1,
    opacity: 0,
    y: 50,
    // stagger: 0.1,
    stagger: 0.1,
    ease: "back",
    repeat: -1,
    yoyo: true,
})
gsap.from("h1 .right", {
    duration: 1,
    opacity: 0,
    y: 80,
    // stagger: 0.1,
    stagger: 0.1,
    // delay: 0.5,
    ease: "back",
    repeat: -1,
    yoyo: true,
})

//if we give stagger a negative value, the animation will start from the last element and move to the first element.