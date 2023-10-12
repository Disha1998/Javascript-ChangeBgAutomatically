

function randomColor() {
    const hex = "0123456789ABCDEF";
    let color = "#"

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
        // console.log(color,'----');
    }
    return color;
}


let intervelColor;

function StartChangingBg() {
    intervelColor = setInterval(changecolor, 1000);

    function changecolor() {
        document.body.style.backgroundColor = randomColor();

    }
}

document.getElementById("start").addEventListener("click", StartChangingBg)


function StopChangingBg() {
    clearInterval(intervelColor)
}

document.getElementById("stop").addEventListener("click", StopChangingBg)