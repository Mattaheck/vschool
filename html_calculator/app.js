const form1 = document.forms["add"];
const form2 = document.forms["subtract"];
const form3 = document.forms["multiply"];


form1.addEventListener("submit", function (event) {
    event.preventDefault();

    const numAdd1 = parseFloat(form1.elements["numAdd1"].value);
    const numAdd2 = parseFloat(form1.elements["numAdd2"].value);

    // Function to add two numbers
    function add(num1, num2) {
        return num1 + num2;
    }
    
    let result;
    // Check if the input values are valid numbers
    if (!isNaN(numAdd1) && !isNaN(numAdd2)) {
        result = add(numAdd1, numAdd2);
        // console.log(result);
    } else {
        console.log("Please enter valid numbers.");
    }

    // Clear the input fields
    form1.elements["numAdd1"].value = "";
    form1.elements["numAdd2"].value = "";

    const container = document.getElementById('container')
    const h1 = document.createElement('h1')
    // 2. <h1>Harry Potter</h1>
    h1.textContent = result;
    h1.style.color = "teal";
    container.appendChild(h1);
    
});

form2.addEventListener("submit", function (event) {
    event.preventDefault();

    const numSub1 = parseFloat(form2.elements["numSub1"].value);
    const numSub2 = parseFloat(form2.elements["numSub2"].value);

    // Function to add two numbers
    function subtract(num1, num2) {
        return num1 - num2;
    }
    
    let result;
    // Check if the input values are valid numbers
    if (!isNaN(numSub1) && !isNaN(numSub2)) {
        result = subtract(numSub1, numSub2);
        // console.log(result);
    } else {
        console.log("Please enter valid numbers.");
    }

    // Clear the input fields
    form2.elements["numSub1"].value = "";
    form2.elements["numSub2"].value = "";

    const container = document.getElementById('container')
    const h1 = document.createElement('h1')
    // 2. <h1>Harry Potter</h1>
    h1.textContent = result;
    h1.style.color = "blanchedalmond";
    container.appendChild(h1);
});

form3.addEventListener("submit", function (event) {
    event.preventDefault();

    const multi1 = parseFloat(form3.elements["multi1"].value);
    const multi2 = parseFloat(form3.elements["multi2"].value);

    // Function to add two numbers
    function multiply(num1, num2) {
        return num1 * num2;
    }
    
    let result;
    // Check if the input values are valid numbers
    if (!isNaN(multi1) && !isNaN(multi2)) {
        result = multiply(multi1, multi2);
        // console.log(result);
    } else {
        console.log("Please enter valid numbers.");
    }

    // Clear the input fields
    form3.elements["multi1"].value = "";
    form3.elements["multi2"].value = "";

    const container = document.getElementById('container')
    const h1 = document.createElement('h1')
    // 2. <h1>Harry Potter</h1>
    h1.textContent = result;
    h1.style.color = "orchid";
    container.appendChild(h1);
});



