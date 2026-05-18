
//this changes first found h1 text content to "See you, Space Cowboy...onst means not changeable
const myImg = document.querySelector("img");
myImg.addEventListener("click", () => {
    const mySrc = myImg.getAttribute("src");
    if (mySrc === "images/new spike pic.jpg") {
        myImg.setAttribute("src", "images/jet-p99.jpg");
    }else{
        myImg.setAttribute("src", "images/new spike pic.jpg");
    }
});
let myHeading = document.querySelector("p");
let myButton = document.querySelector("button");
function setUserName(){
    const myName = prompt("Please enter your name");
    localStorage.setItem("name", myName); //local storage is for key value pairs, stores in browser, can use for user preferences
    myHeading.textContent = `See you, ${myName}...`;
}
if(!localStorage.getItem("name")){
    //null = false
    setUserName();
}else{
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `See you, ${storedName}...`;
}
myButton.addEventListener("click", setUserName);
//use ` for formatted strings, ${} for variables in string
//const and let are block scoped, avoid var
//const for unchanging variables, let for changing variables