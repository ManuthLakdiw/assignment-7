console.log("case-2.js file is loaded");

let colors = ["red", "green", "blue", "yellow", "pink", "hotpink"];

let boxes = document.querySelectorAll(".box");

const btnStart = document.getElementById("btn-start");
const btnStop = document.getElementById("btn-stop");

let intervalId;

btnStart.addEventListener("click", function () {
    updateColors();

    intervalId = setInterval(updateColors,600);
});

function updateColors() {
    let index = 0;
    for (let box of boxes) {
        if (index < colors.length) {
            box.style.backgroundColor = colors[index];
            index++;
        }
    }

    // let last = colors.pop();
    // colors.unshift(last);

    let tempArray = [];

    let last = colors.pop();

    tempArray.push(last);

    tempArray.push(...colors);

    colors = tempArray;

    

}

btnStop.addEventListener("click", () => {
    clearInterval(intervalId);
});


