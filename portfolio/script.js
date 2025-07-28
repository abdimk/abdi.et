// updated at 

// document.getElementsByClassName("time")[0].textContent = "June 28 2025";


const timeElement = document.getElementsByClassName("time")[0];
timeElement.textContent = "June 29 2025";


function animateCountUp(elementId, endValue, duration = 1200) {
    const el = document.getElementById(elementId);
    const startValue = 7000;
    const frameRate = 15;
    const totalFrames = Math.round((duration / 1000) * frameRate);
    let currentFrame = 0;

    const counter = setInterval(() => {
        currentFrame++;
        const progress = currentFrame / totalFrames;
        const currentValue = Math.floor(progress * (endValue - startValue) + startValue);
        el.textContent = currentValue.toLocaleString(); // adds commas

        if (currentFrame === totalFrames) {
            clearInterval(counter);
            el.textContent = endValue.toLocaleString();
        }
    }, 1000 / frameRate);
}

document.addEventListener('DOMContentLoaded', () => {
    animateCountUp('visits-count', 2703, 1000);
    animateCountUp('hours-count', 8750, 1200);
});
