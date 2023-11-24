var newHeader = document.getElementById("header");

newHeader.textContent = "JavaScript Made This!!";
newHeader.style.fontSize = "40px";
newHeader.style.textAlign = "center";

var subHeader = document.createElement("h2");
subHeader.textContent = " wrote this JavaScript";
var newHeader = document.getElementById("header");
newHeader.append(subHeader);
subHeader.style.fontSize = "30px";

var newSpan = document.createElement("span");
newSpan.textContent = "Matt Heck";
subHeader.prepend(newSpan);
newSpan.style.color = "yellow";
newSpan.style.fontSize = "30px";

//changing messages to happy text
const messages = document.getElementsByClassName("message");

messages[0].textContent = "you're great";
messages[1].textContent = "thanks!";
messages[2].textContent = "you're welcome";
messages[3].textContent = "you're great";

//clearing the content
var clearButton = document.getElementById("clear-button");

clearButton.addEventListener("click", function(){
    for (var i = 0; i < messages.length; i++){
        messages[i].innerHTML = " ";
    }
})

//changing the theme
var themeSelector = document.getElementById("theme-drop-down");
var contentDiv = document.getElementById("main");

function changeTheme(){
    var selectedTheme = themeSelector.value;
    contentDiv.classList.remove("light-theme", "dark-theme");
    contentDiv.classList.add(selectedTheme + "-theme");
   
}

themeSelector.addEventListener("change", changeTheme);



changeTheme();












































// var newMessages = document.getElementsByClassName("messages");
// var messageInput = document.getElementById("input");
// var sendButton = document.getElementById("sendButton");
// var clearButton = document.getElementById("clear-button");

// var positiveMessage = 
// ["what a happy day", "I feel great about today" , "you're doing great", "I believe in you"];
// function sendNewMessage() {
// var newMessages = document.getElementsByClassName("messages");
// var messageInput = document.getElementById("input");
// var sendButton = document.getElementById("sendButton");
// var clearButton = document.getElementById("clear-button");
// var positiveMessage = 
// ["what a happy day", "I feel great about today" , "you're doing great", "I believe in you"];
// var newText = messageInput.value;

//     for (var i = 0; i < positiveMessage.length; i++){
//         if (newText !== 0){
//             newMessages.appendChild(positiveMessage)
//         } else {
//             messageInput.textContent = "type something";
//         }
//     }
//     }
 

// sendButton.addEventListener("click", sendNewMessage);
























// var newMessage = document.querySelector(".messages");
// var messageInput = document.getElementById("input");
// var sendButton = document.getElementById("sendButton");


// function sendNewMessage() {
//     var newText = messageInput.value;

//     if(newText !== " ") {
//         var positiveMessage = document.createElement("div");
//         positiveMessage.textContent = newText;

//         if (newMessage.children.length % 2 === 0) {
//             positiveMessage.className = "message left";
//         } else {
//             positiveMessage.className = "message right";
//         }
//         newMessage.appendChild(positiveMessage);
//         // messageInput.textContent=;
//     }
// } 

// sendButton.addEventListener("click", sendNewMessage);












































// var happyText = document.querySelectorAll("div.messages > div")
//     // console.log(Array.from(happyText))

//     for (var i = 0; i < happyText.length; i++){
//         happyText[i].textContent = "this is some new positive and happy text";
//     }
// var btn = document.getElementById("clear-button");
// btn.addEventListener('click', function handleClick(){
//     var removeText = document.querySelector("div.messages")
//     removeText.parentNode.removeChild(removeText);
// });

// function userText(event){
//     event.preventDefault()
//     var userMessage = document.getElementById("input").value;
//     if (i % 2 === 0){
//         document.querySelector(".messages").innerHTML += "<div class = 'message left'>" + userMessage + "</div>";
//     } else {document.querySelector(".messages").innerHTML += "<div class = 'message right'>" + userMessage + "</div>"};
//     themeChange()
//     document.getElementById("input").value = ""
//     }

// var form = document.message
// form.addEventListener("submit", userText)

// var submitButton = document.getElementById("send");

// // var colorRight = document.getElementsByClassName("message right")
// //     console.log(Array.from(colorRight));

// // var colorLeft = document.getElementsByClassName("message left")
// //     console.log(Array.from(colorLeft));

// // // var colorSwitch = document.querySelectorAll("option")
// // //     console.log(Array.from(colorSwitch))   
    
// // var value = selector.options[selector.selectedIndex].value;
// //     console.log(value); 

// var messages = document.querySelector(".messages");
// var messageText = messages.querySelectorAll("div.message");
// var dropdown = document.getElementById("theme-drop-down");
// dropdown.addEventListener("change", themeChange)

// function themeChange (){
//     var messageText = messages.querySelectorAll("div.message")
//     console.log(messageText.length);

//     if (dropdown.value == "theme-one") {
//     for (var i = 0; i < messageText.length; i++){
//         if (i % 2 === 0){
//         messageText[i].style.backgroundColor = "blue"; 
//         } else if (i % 2 === 1)
        
//         messageText[i].style.backgroundColor = "burlywood";
        
//     }
//     } else if (dropdown.value == "theme-two") {
//         for (var i = 0; i < messageText.length; i++){
//         if (i % 2 === 0){
//             messageText[i].style.backgroundColor = "red";
//         } else if (i % 2 === 1)
//             messageText[i].style.backgroundColor = "black";
//             messageText[i].style.color = "white";
           
    

//     }
// }
// }



