const network = new brain.NeuralNetwork();

const input = document.querySelector("input");
const example = document.querySelector("body");
const ghost = $('.ghost');
const discoBall = $('.disco-ball');
const eyeBrows = $('.eyebrows');
const eyeBrowLeft =$('.eyebrow-left');
const eyeBrowRight =$('.eyebrow-right');
const speech = $('.speech-container');
const ghostContainer = $('.ghost-container');

input.addEventListener("change", (e) => {
    const rgb = getRgb(e.target.value);
    console.log(rgb);
    network.train([
        //white
        { input: { r: 1, g: 1, b: 1 }, output: { light: 1 } },
        //red
        { input: { r: 1, g: 0, b: 0 }, output: { light: 1 } },
        //green
        { input: { r: 0, g: 1, b: 0 }, output: { light: 1 } },
        //blue
        { input: { r: 0, g: 0, b: 1 }, output: { light: 1 } },
        
        //black
        { input: { r: 0, g: 0, b: 0}, output: { dark: 1 } },
    ])

    let result = brain.likely(rgb, network);

    console.log(result);
    example.style.background = e.target.value
    example.style.color = result === "dark" ? "white" : "black";

    if (result === "dark") {
        discoBall.fadeOut();
        ghost.empty();
        ghost.append(`<img src="assets/cute-ghost-white.png" alt="cute ghost white colour">`);
        eyeBrows.css('background', 'white');
        eyeBrowLeft.css('transform', 'rotate(15deg)');
        eyeBrowRight.css('transform', 'rotate(-15deg)');
        speech.css('visibility', 'visible');
        ghostContainer.removeClass('animated');
    } else {
        discoBall.fadeIn();
        ghost.empty();
        ghost.append(`<img src="assets/cute-ghost.png" alt="cute ghost">`);
        speech.css('visibility', 'hidden');
        eyeBrows.css('background', 'black');
        eyeBrowLeft.css('transform', 'rotate(-15deg)');
        eyeBrowRight.css('transform', 'rotate(15deg)');
        ghostContainer.addClass('animated');
    }
})

function getRgb(hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: Math.round(parseInt(result[1], 16) / 2.55) / 100,
        g: Math.round(parseInt(result[2], 16) / 2.55) / 100,
        b: Math.round(parseInt(result[3], 16) / 2.55) / 100,
    } : null;
}

// { input: { r: 1, g: 0, b: 0.24 }, output: { light: 1 } },
// { input: { r: 1, g: 0.91, b: 0.65 }, output: { light: 1 } },
// { input: { r: 1, g: 0.72, b: 0 }, output: { light: 1 } },
// { input: { r: 0.67, g: 1, b: 0 }, output: { light: 1 } },
// { input: { r: 0.43, g: 1, b: 0.05 }, output: { light: 1 } },
// { input: { r: 0.68, g: 0, b: 0.15 }, output: { light: 1 } },
// { input: { r: 0, g: 0.03, b: 0.69 }, output: { light: 1 } },
// { input: { r: 0.02, g: 0.45, b: 0.4 }, output: { light: 1 } },
// { input: { r: 0, g: 0.33, b: 0.61 }, output: { light: 1 } },
// { input: { r: 0.09, g: 0, b: 0.61 }, output: { light: 1 } },
// { input: { r: 0.61, g: 0, b: 0.06 }, output: { light: 1 } },
// { input: { r: 0.44, g: 0.04, b: 0 }, output: { light: 1 } },
// { input: { r: 0, g: 0.06, b: 0.38 }, output: { light: 1 } },
// { input: { r: 0, g: 0.13, b: 0.36 }, output: { light: 1 } },
// { input: { r: 0.16, g: 0.28, b: 0.29 }, output: { light: 1 } },
// { input: { r: 0, g: 0, b: 0 }, output: { dark: 1 } },
// { input: { r: 0.22, g: 0.22, b: 0.22 }, output: { dark: 1 } },
// { input: { r: 0, g: 0.12, b: 0.02 }, output: { dark: 1 } },
// { input: { r: 0.02, g: 0.12, b: 0 }, output: { dark: 1 } },