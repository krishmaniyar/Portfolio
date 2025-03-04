const projectData = new Map([
    ["To Do List", {
        image: "./images/to-do-list.png",
        name: "To Do List",
        proLink: "https://krishmaniyar.github.io/To_Do_List/",
        gitLink: "https://github.com/krishmaniyar/To_Do_List",
        category: "Web App",
        projectInfo: "A simple and intuitive To-Do List app for task management, featuring add, edit, delete, and completion tracking for productivity."
    }],
    ["CV Builder", {
        image: "./images/cv-builder.png",
        name: "CV Builder",
        proLink: "https://krishmaniyar.github.io/cv-builder/",
        gitLink: "https://github.com/krishmaniyar/cv-builder",
        category: "Web App",
        projectInfo: "A dynamic CV Builder website to create, customize, and download professional resumes with an easy-to-use interface and modern templates."
    }],
    ["NetFlix Clone", {
        image: "./images/netflix-clone.png",
        name: "NetFlix Clone",
        proLink: "https://krishmaniyar.github.io/netflix-clone/",
        gitLink: "https://github.com/krishmaniyar/netflix-clone",
        category: "Web App",
        projectInfo: "A Netflix Clone built with React.js and Firebase Authentication, featuring user login, movie browsing, and a sleek, responsive UI."
    }],
    ["Book Library", {
        image: "./images/book-library.png",
        name: "Book Library",
        proLink: "https://krishmaniyar.github.io/Book_Library/",
        gitLink: "https://github.com/krishmaniyar/Book_Library",
        category: "Web App",
        projectInfo: "An organized book library website for browsing, managing, and discovering books with a user-friendly interface and efficient search features."
    }],
    ["Money Manager", {
        image: "./images/money-manager.png",
        name: "Money Manager",
        proLink: "",
        gitLink: "https://github.com/krishmaniyar/money-manager",
        category: "Mobile App",
        projectInfo: "Money Manager is a Flutter-based app for tracking expenses, managing budgets, and analyzing financial transactions with an intuitive user interface."
    }],
    ["EcoMind", {
        image: "./images/ecomind.png",
        name: "EcoMind",
        proLink: "",
        gitLink: "https://github.com/Mo-Kash/EcoMind",
        category: "Mobile App",
        projectInfo: "Scrap Classifier is a Flutter-based app that identifies and classifies waste materials using AI, promoting recycling and sustainable waste management."
    }],
    ["Weather", {
        image: "./images/weather.png",
        name: "Weather",
        proLink: "",
        gitLink: "https://github.com/krishmaniyar/weather_app",
        category: "Mobile App",
        projectInfo: "Weather App is a Flutter-based application providing real-time forecasts, temperature, humidity, wind speed, and detailed weather insights with a sleek UI."
    }],
    ["World Time App", {
        image: "./images/world-time.png",
        name: "World Time App",
        proLink: "",
        gitLink: "https://github.com/krishmaniyar/world_time_app",
        category: "Mobile App",
        projectInfo: "World Time App is a Flutter-based application displaying global time zones, sunrise/sunset details, and real-time clock with a beautiful UI."
    }],
    ["Tic Tac Toe", {
        image: "./images/tic-tac-toe.png",
        name: "Tic Tac Toe",
        proLink: "https://krishmaniyar.github.io/Tic-Tac-Toe/",
        gitLink: "https://github.com/krishmaniyar/Tic-Tac-Toe",
        category: "Web Game",
        projectInfo: "A fun and interactive Tic Tac Toe game with a sleek design, multiplayer mode, and smooth gameplay for endless entertainment."
    }],
    ["Rock Paper Scissors", {
        image: "./images/rock-paper-scissor.png",
        name: "Rock Paper Scissors",
        proLink: "https://krishmaniyar.github.io/Project_3/",
        gitLink: "https://github.com/krishmaniyar/Project_3",
        category: "Web Game",
        projectInfo: "Play Rock Paper Scissors online! Challenge friends, test strategy, and enjoy a fun, interactive game with instant results. Try now!"
    }],
    ["Calculator", {
        image: "./images/calculator.png",
        name: "Calculator",
        proLink: "https://krishmaniyar.github.io/Project_5/",
        gitLink: "https://github.com/krishmaniyar/Project_5",
        category: "Web App",
        projectInfo: "A simple and efficient calculator website for quick arithmetic operations, featuring a user-friendly interface and responsive design."
    }],
    ["Etch A Sketch", {
        image: "./images/etch-a-sketch.png",
        name: "Etch A Sketch",
        proLink: "https://krishmaniyar.github.io/Project_4/",
        gitLink: "https://github.com/krishmaniyar/Project_4",
        category: "Web Game",
        projectInfo: "A digital Etch A Sketch for creative drawing, featuring smooth controls, reset options, and an engaging, nostalgic experience."
    }],
    ["Restaurant Page", {
        image: "./images/lapinos-pizza.png",
        name: "Restaurant Page",
        proLink: "https://krishmaniyar.github.io/Restaurant_Page/",
        gitLink: "https://github.com/krishmaniyar/Restaurant_Page",
        category: "Web App",
        projectInfo: "Discover a delicious variety of pizzas, sides, and desserts at our restaurant. Enjoy fresh ingredients, bold flavors, and fast delivery!"
    }],
    ["Landing Page", {
        image: "./images/landing-page.png",
        name: "Landing Page",
        proLink: "https://krishmaniyar.github.io/Project_7/",
        gitLink: "https://github.com/krishmaniyar/Project_7",
        category: "Web App",
        projectInfo: "A basic landing page with a header, hero section, and a form. Ideal for practicing static layouts and form styling with CSS!"
    }],
    ["Forms", {
        image: "./images/form-page.png",
        name: "Forms",
        proLink: "https://krishmaniyar.github.io/Project_6/",
        gitLink: "https://github.com/krishmaniyar/Project_6",
        category: "Web App",
        projectInfo: "A simple forms practice page with input fields, checkboxes, radio buttons, dropdowns, and a submit button. Perfect for honing CSS skills!"
    }],
    ["Porsche Info", {
        image: "./images/car-info.png",
        name: "Porsche Info",
        proLink: "https://krishmaniyar.github.io/Project_2/",
        gitLink: "https://github.com/krishmaniyar/Project_2",
        category: "Web App",
        projectInfo: "A simple Porsche car info page featuring a sleek design, model details, specifications, and a contact form. Great for CSS practice!"
    }],
    // ["Recipes", {
    //     image: "./images/recipes.png",
    //     name: "Recipes",
    //     proLink: "https://krishmaniyar.github.io/Project_1/",
    //     gitLink: "https://github.com/krishmaniyar/Project_1",
    //     category: "Web App",
    //     projectInfo: "A basic recipes page with a list of dishes, ingredients, step-by-step instructions, and images. Perfect for practicing CSS styling!"
    // }]
]);

const skillData = new Map([
    ["HTML", { 
        link: "https://www.w3.org/html/", 
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg" 
    }],
    ["CSS", { 
        link: "https://www.w3schools.com/css/", 
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg" 
    }],
    ["JavaScript", { 
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", 
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" 
    }],
    ["ReactJs", { 
        link: "https://react.dev/", 
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" 
    }],
    ["Webpacks", { 
        link: "https://webpack.js.org/", 
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg" 
    }],
    ["Flutter", { 
        link: "https://flutter.dev/", 
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" 
    }],
    ["Firebase", { 
        link: "https://firebase.google.com/", 
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" 
    }],
    ["GitHub", { 
        link: "https://github.com/", 
        img: "./images/github.svg" 
    }],
    ["Matlab", { 
        link: "https://www.mathworks.com/", 
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg" 
    }],
    ["Dart", { 
        link: "https://dart.dev/", 
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg" 
    }],
    ["Linux", { 
        link: "https://www.linux.org/", 
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" 
    }],
    ["C", { 
        link: "https://www.cprogramming.com/", 
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" 
    }],
    ["C++", { 
        link: "https://www.w3schools.com/cpp/", 
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" 
    }],
    ["Python", { 
        link: "https://www.python.org/", 
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" 
    }],
    ["Java", { 
        link: "https://www.java.com/en/", 
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" 
    }],
    ["Android", { 
        link: "https://developer.android.com/", 
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg" 
    }]
]);


document.addEventListener("DOMContentLoaded", function () {
    const text = "HEY, I'M KRISH MANIYAR 👋";
    let i = 0;
    function typeEffect() {
        if (i < text.length) {
            document.getElementById("big-font").innerHTML = text.substring(0, i + 1) + '<span class="cursor" style="font-size: 1.2em; ">|</span>';
            i++;
            setTimeout(typeEffect, 120);
        }
    }
    typeEffect();
});

var DisplayWork = document.getElementById("display-work")
var SkillLink = document.getElementById("skill-link")
var Container = document.getElementById("container");
var ProContainer = document.getElementById("pro-container");

function displayCards() {
    projectData.forEach((project, name) => {

        let Card = document.createElement("button");
        DisplayWork.appendChild(Card).className = "card trans";
        Card.setAttribute("onclick", `displayProject('${name}')`);
        Card.href = "";

        let CardImg = document.createElement("div");
        Card.appendChild(CardImg).className = "card-img";
        CardImg.innerHTML = `<img src="${project.image}" alt="${name}">`;

        let CardText = document.createElement("div");
        Card.appendChild(CardText).className = "card-text";

        let ProjectName = document.createElement("div");
        CardText.appendChild(ProjectName).className = "project-name";
        ProjectName.innerHTML = `<p>${name}</p>`;
        ProjectName.innerHTML += `<p>${project.category}</p>`;
        
        let ProjectInfo = document.createElement("div");
        CardText.appendChild(ProjectInfo).className = "project-info";
        ProjectInfo.innerHTML = `${project.projectInfo}`;
    });
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

function displayLinks() {
    skillData.forEach((data, skill) => {
        let Link = document.createElement("a");
        SkillLink.appendChild(Link).className = "links trans";
        Link.href = data.link;
        Link.innerHTML = `<img src="${data.img}" alt="${skill}"></img>`;
        Link.innerHTML += `${skill}`;
    });
}

function displayProject(projectName) {
    Container.style.display = 'none';
    ProContainer.style.display = 'block';
    ProContainer.style.height = '79vh';
    
    ProContainer.innerHTML = `  
        <button id="back">   
            <img src="./images/arrow-left.svg" alt="">
            SEE ALL PROJECTS
        </button>
    `;

    const project = projectData.get(projectName);

    var ProjectDetails = document.createElement("div");
    ProContainer.appendChild(ProjectDetails).className = "project-details";

    var ProjectImg = document.createElement("div");
    ProjectDetails.appendChild(ProjectImg).className = "detail-img";
    ProjectDetails.appendChild(ProjectImg).id = "move-right";
    ProjectImg.innerHTML = `<img src="${project.image}" alt="${projectName}">`;

    var Details = document.createElement("div");
    ProjectDetails.appendChild(Details).className = "details";
    ProjectDetails.appendChild(Details).id = "move-left";
    Details.innerHTML = `<h1>${projectName}</h1>`;
    Details.innerHTML += `<p>${project.category}</p>`;
    Details.innerHTML += `<p>${project.projectInfo}</p>`;

    var DetailsButton = document.createElement("div");
    Details.appendChild(DetailsButton).className = "details-button";
    DetailsButton.innerHTML = ` 
        <a class="grey-button" href="${project.gitLink}" target="_blank">
            <img src="./images/github.svg" alt="">
            View Code
        </a>
    `;

    if (project.category !== "Mobile App") {
        DetailsButton.innerHTML += `<a class="green-button" href="${project.proLink}" target="_blank">
            View Project
            <img src="./images/open-in-new.svg" alt="">
        </a>`;
    }

    const elements = document.querySelectorAll('.header-link');
    elements.forEach(element => {
        element.style.display = "none";
    });
    
    document.getElementById("back").addEventListener("click", () => {
        Container.style.display = 'block';
        ProContainer.style.display = 'none';
        elements.forEach(element => {
            if (window.innerWidth >= 800) {
                element.style.display = "block";
            }
        });
    });
}

displayCards()
displayLinks()