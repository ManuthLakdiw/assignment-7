console.log("case-3.js file loaded");

const boxes = document.querySelectorAll("div > div");
let i = 0;
let intervalId; 

const audio = document.getElementById("myAudio"); 


function fillRightBoxes() {
    if (i < boxes.length) {
        boxes[i].style.cssText = "background-color: red; filter: blur(2px);";
        i++; 
        intervalId = setTimeout(fillRightBoxes, 100); 
    } else {
        i = 0;
        intervalId = setTimeout(clearRightBoxes, 100);
    }
}

function clearRightBoxes() {
    if (i < boxes.length) {
        boxes[i].style.backgroundColor = "white";
        i++;
        intervalId = setTimeout(clearRightBoxes, 100); 
    } else {
        i = boxes.length - 1; 
        intervalId = setTimeout(fillLeftBoxes, 100);
    }
}

function fillLeftBoxes() {
    if (i >= 0) {
        boxes[i].style.cssText = "background-color: red; filter: blur(1.5px);";
        i--;
        intervalId = setTimeout(fillLeftBoxes, 100); 
    } else {
        i = boxes.length - 1; 
        intervalId = setTimeout(clearLeftBoxes, 100);
    }
}

function clearLeftBoxes() {
    if (i >= 0) {
        boxes[i].style.backgroundColor = "white";
        i--;
        intervalId = setTimeout(clearLeftBoxes, 100); 
    } else {
        i = 0; 
        intervalId = setTimeout(fillRightBoxes, 100);
    }
}

var btnStart = document.querySelector("button:nth-of-type(1)");

btnStart.addEventListener("click", () => {
    fillRightBoxes(); 
    audio.play(); 
});

var btnStop = document.querySelector("button:nth-of-type(2)");

btnStop.addEventListener("click",()=> {
    clearTimeout(intervalId);
    i = 0;
    boxes.forEach((box) => {
        box.style.backgroundColor = "white"; 
    });
    audio.pause(); 
    audio.currentTime = 0;

});

