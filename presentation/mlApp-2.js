
//create new neural network
const network = new brain.NeuralNetwork();

const input = $('input');
const body = $('body');
const ghost =$('.ghost');

//change bg color to match input color
input.on('change', (e)=>{
    const rgb = getRgb(e.target.value);
    console.log(rgb);
    network.train([
        { input: { r: 0.62, g: 0.72, b: 0.88 }, output: { light: 1 } },
        { input: { r: 0.1, g: 0.84, b: 0.72 }, output: { light: 1 } },
        { input: { r: 0.33, g: 0.24, b: 0.29 }, output: { dark: 1 } },
        { input: { r: 0.74, g: 0.78, b: 0.86 }, output: { light: 1 } },
        { input: { r: 0.31, g: 0.35, b: 0.41 }, output: { dark: 1 } },
        { input: { r: 1, g: 0.99, b: 0 }, output: { light: 1 } },
        { input: { r: 1, g: 0.42, b: 0.52 }, output: { dark: 1 } },
    ]);
    const result = brain.likely(rgb, network);
    console.log(result);
    body.css('background', e.target.value);
    body.css('color', result === "dark"? "white" : "black");

    if(result === "dark"){
        
        ghost.empty();
        ghost.append(`<img src="assets/cute-ghost-white.png" alt="cute ghost white colour">`);
    }else{
        ghost.empty();
        ghost.append(`<img src="assets/cute-ghost.png" alt="cute ghost">`)
    }

}); 

//get RGB from Hex 
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

//train the brain!
// network.train([
//     {input: {size:1}, output: {eat:0}},
//     {input: {size:2}, output: {eat:0}},
//     {input: {size:3}, output: {eat:0}},
//     {input: {size:4}, output: {eat:1}},
//     {input: {size:5}, output: {eat:0}},
//     {input: {size:6}, output: {eat:0}},
//     {input: {size:7}, output: {eat:0}},
//     {input: {size:8}, output: {eat:0}},
// ]);

//get your results!
// results = network.run();



