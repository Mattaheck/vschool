//make an array of colors
const colors = ["red", "blue", "green"];


//grab the button id, create variables for subitem and a variable to extract data from input field
//append to div called list
document.getElementById("add").addEventListener("click", function(){
    const subItemValue = document.getElementById("input").value;
    const subItem = createSubItem(subItemValue);
    document.getElementById("list").appendChild(subItem);
});

//creating the dropdown, iterate through color list, create option element and make it the value of the dropdown list.  add event listener to change color of dropdown div
function createDropDown(){
    const dropDown = document.createElement("select");
    for (let i = 0; i < colors.length; i++){
        const option = document.createElement("option"); 
        option.innerHTML = colors[i];
        option.value = colors[i];
        dropDown.append(option);
    }
    dropDown.addEventListener("change", function(e){
        e.target.parentElement.style.backgroundColor = e.target.value
    })
    return dropDown
}


//creating the subitem content from the input field 
function createSubItem(subItemText){
    const subItem = document.createElement("div")
    subItem.textContent = subItemText;
    const dropDown = createDropDown()
    subItem.appendChild(dropDown)
    subItem.setAttribute("class", "subItem")
    return subItem
}


