let randomNum = (max) => {
    return Math.floor(Math.random() * (max + 1));
}

let randomColour = () => {
    let r = randomNum(255);
    let g = randomNum(255);
    let b = randomNum(255);
    return [r, g, b];
}

let randomHex = () => {
    let [r, g, b] = randomColour();

    let hr = r.toString(16).padStart(2, '0');
    let hg = g.toString(16).padStart(2, '0');
    let hb = b.toString(16).padStart(2, '0');

    return "#" + hr + hg + hb;
}

let changeColour = () => {
    let colour = randomHex();
    document.getElementById('container').style.backgroundColor = colour;
    document.getElementById('text').innerHTML = colour.toUpperCase();
}

let clickHandler = (event) => {
    changeColour();
    event.preventDefault();
}

document.addEventListener('click', clickHandler);
changeColour();
