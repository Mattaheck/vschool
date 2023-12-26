let clickCount = parseInt(sessionStorage.getItem('clickCount')) || 0;

const clickButton = document.getElementById("click");
const clickCountDisplay = document.getElementById("clickAmount");

function handleButtonClick(){
    clickCount++;

    sessionStorage.setItem('clickCount', clickCount);

    clickCountDisplay.textContent=`Click Count: ${clickCount}`;
}


function stopCounting() {
    clickButton.removeEventListener('click', handleButtonClick);
}

// Add an event listener to stop counting after 10 seconds (10000 milliseconds)
setTimeout(stopCounting, 10000);

clickButton.addEventListener('click', handleButtonClick);
