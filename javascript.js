
var photos = [  
    "./images/tic-tac-toe.png", 
    "./images/rock-paper-scissor.png", 
    "./images/calculator.png", 
    "./images/etch-a-sketch.png", 
    "./images/book-library.png", 
    "./images/to-do-list.png", 
    "./images/cv-builder.png", 
    "./images/netflix-clone.png"
]

var projectName = [
    "Tic Tac Toe",
    "Rock Paper Scissor",
    "Calculator",
    "Etch A Sketch",
    "Book Library",
    "To Do List",
    "CV Builder",
    "NetFlix Clone"
]

var category = [
    "Web Game",
    "Web Game",
    "Web App",
    "Web Game",
    "Web App",
    "Web App",
    "Web App",
    "Web App",
]

var projectInfo = [
    "A fun and interactive Tic Tac Toe game with a sleek design, multiplayer mode, and smooth gameplay for endless entertainment.",
    "Play Rock Paper Scissors online! Challenge friends, test strategy, and enjoy a fun, interactive game with instant results. Try now!",
    "A simple and efficient calculator website for quick arithmetic operations, featuring a user-friendly interface and responsive design.",
    "A digital Etch A Sketch for creative drawing, featuring smooth controls, reset options, and an engaging, nostalgic experience.",
    "An organized book library website for browsing, managing, and discovering books with a user-friendly interface and efficient search features.",
    "A simple and intuitive To-Do List app for task management, featuring add, edit, delete, and completion tracking for productivity.",
    "A dynamic CV Builder website to create, customize, and download professional resumes with an easy-to-use interface and modern templates.",
    "A Netflix Clone built with React.js and Firebase Authentication, featuring user login, movie browsing, and a sleek, responsive UI.",
]

var DisplayWork = document.getElementById("display-work")

function displayCards() {
    console.log("Hi");
    for(var i=0;i<projectName.length;i++) {
        let Card = document.createElement("a");
        DisplayWork.appendChild(Card).className = "card";
        if(i % 2 ==0) {
            Card.id = "move-right";
        }
        else {
            Card.id = "move-left";
        }
        Card.href = "";
        let CardImg = document.createElement("div");
        Card.appendChild(CardImg).className = "card-img";
        CardImg.innerHTML = `<img src="${photos[i]}" alt="${projectName[i]}">`;
        let CardText = document.createElement("div");
        Card.appendChild(CardText).className = "card-text";
        let ProjectName = document.createElement("div");
        CardText.appendChild(ProjectName).className = "project-name";
        ProjectName.innerHTML = `<p>${projectName[i]}<p>`;
        ProjectName.innerHTML += `<p>${category[i]}<p>`;
        let ProjectInfo = document.createElement("div");
        CardText.appendChild(ProjectInfo).className = "project-info";
        ProjectInfo.innerHTML = `${projectInfo[i]}`;
    }
}

function copyEmail() {
    const email = "krishmaniyar27@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        let popup = document.getElementById("popup");
        popup.classList.add("show");

        setTimeout(() => {
            popup.classList.remove("show");
        }, 2000);
    });
}

displayCards();