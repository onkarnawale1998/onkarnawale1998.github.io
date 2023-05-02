const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

const myImage = document.querySelector("img");

// console.log(myImage)

// myImage.onclick = () => {
//     const mySrc = myImage.getAttribute("src")
//     if (mySrc === "/Firefox_logo,_2019.svg.png"){
//         myImage.setAttribute("src" , "download.png")
//     }
//     else{
//         myImage.setAttribute("src" , "Firefox_logo,_2019.svg.png")
//     }
// }


myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "/Firefox_logo,_2019.svg.png") {
        myImage.setAttribute("src", "download.png");
    } else {
        myImage.setAttribute("src", "Firefox_logo,_2019.svg.png");
    }
});

myImage.addEventListener("mouseover", () => {
    myImage.style.border = "1px solid black";
});

myImage.addEventListener("mouseout", () => {
    myImage.style.border = "none";
});

let myButton = document.querySelector("button");

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Hello, ${myName}`;
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome back, ${storedName}`;
  }

  myButton.onclick = () => {
    setUserName();
  };
      
