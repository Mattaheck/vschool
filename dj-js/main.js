var square = document.querySelector(".square");

square.addEventListener("mouseover", function(){
    square.style.backgroundColor = "blue";
});

square.addEventListener("mousedown", function(){
    square.style.backgroundColor = "red";
});

square.addEventListener("mouseup", function(){
    square.style.backgroundColor = "yellow";
});

square.addEventListener("dblclick", function(){
    square.style.backgroundColor = "green";
});

function handleWheel(event) {
    square.style.backgroundColor = "orange";
}

document.addEventListener("wheel", handleWheel);

document.addEventListener("keydown", function(event){
    var key = event.key.toLowerCase();

    var colorMap = {
        "r": "red",
        "b": "blue",
        "g": "green",
        "y": "yellow",
        "o": "orange"
    };

    if (colorMap[key]) {
        square.style.backgroundColor = colorMap[key];
    }
});