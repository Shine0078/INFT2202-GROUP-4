/*  Authors: Sandeep Kumar and Samuel Abraham
*   Student IDs: 100844683 and 100870571
*   Date Completed: 30 Jan 2024
*   Description: This javascript populates the webpages with information
*/

//              Global variables
var seconds = 0;
var currentNode;

//              Functions

// Ran when a page is loaded it populates the the page with the correct data
function checkPage()
{
    //Changes product link to projects using DOM
    currentNode = document.getElementById( "products" );
    currentNode.innerHTML =`<li id ="products"><a href="products.html">
    <i class="fa-solid fa-border-all"></i> Products</a></li>`;

    // Finds the nav and sets it to the current node
    currentNode = document.getElementById("nav");
   // Creates the humanresources link to append
    var newNavLink = document.createElement("li");
    var newA = document.createElement("a");
    var newI=document.createElement("i");
    newA.setAttribute("id", "humanresources");
    newA.setAttribute("href", "humanresources.html");
    newI.setAttribute("class", "fas fa-user-tie");
    newA.textContent =" Human Resources";
    newA.prepend(newI);
    newNavLink.appendChild(newA);

   // Adds new human resoursces link to nav bar
    currentNode.insertBefore(newNavLink, currentNode.childNodes[4]);
    

    // Gets current url pathname to determine current page
    var path = window.location.pathname;
    var page = path.split("/").pop();

    // Builds the index page if the index page was opened
    if (page == "index.html")
    {
        indexPage();
    }

    // Builds the products/ projects page if the products page was opened
    else if (page == "products.html")
    {
        productsPage();
    }

    // Builds the services page if the services page was opened
    else if (page == "services.html")
    {
        servicesPage();
    }

    // Builds the about page if the about page was opened
    else if (page == "about.html")
    {
        aboutPage();
    }

    //Builds the contact page if the contact page was opened
    else if (page == "contact.html")
    {
        contactPage();
    }
    
}

// Builds the index page
function indexPage()
{
    // Creates and outputs index message
    var indexMessage = document.getElementById( "indexMessage" );
    indexMessage.innerHTML = "Welcome to our home page for INFT2202 Lab 1. This page was created by Sandeep Kumar and Samuel Abraham." + 
    " Please use the nav bar to get to the other pages.";
}

//Builds the products / projects page
function productsPage()
{
    // Outputs the information for the page to the page by selecting each section
    // Product 1 img
     currentNode = document.getElementById("book1Img");
     var newNode = document.createElement("img")
     newNode.setAttribute("src", "./images/book1.jpg");
     newNode.setAttribute("width", "200px");
     newNode.setAttribute("height", "200px");
     currentNode.appendChild(newNode);
     // Product 1 text
     currentNode = document.getElementById("book1Text")
     newNode = document.createTextNode(" 'When the Body Says No' is an impressive contribution to research on the physiological connection between life's stresses and emotions and the body systems governing nerves, immune apparatus and hormones. It is a passionately argued thesis that stress has a major role in the onset of most chronic diseases. Warmly received by readers and published in eight languages on five continents, When The Body Says No combines the latest findings of modern science with the poignant and compelling stories of many patients, both ordinary and famous. The book has been greeted with both support and controversy in the medical community.  ")
     currentNode.appendChild(newNode);
    // Product 2 img
     currentNode = document.getElementById("book2Img");
     newNode = document.createElement("img")
     newNode.setAttribute("src", "./images/book2.jpg");
     newNode.setAttribute("width", "200px");
     newNode.setAttribute("height", "200px");
     currentNode.appendChild(newNode);
    // Product 2 text 
     currentNode = document.getElementById("book2Text")
     newNode = document.createTextNode("'Atomic Habits' by James Clear is a comprehensive, practical guide on how to change your habits and get 1% better every day. Using a framework called the Four Laws of Behavior Change, Atomic Habits teaches readers a simple set of rules for creating good habits and breaking bad ones.");
     currentNode.appendChild(newNode);
    // Product 3 img
     currentNode = document.getElementById("book3Img");
     newNode = document.createElement("img")
     newNode.setAttribute("src", "./images/book3.jpg");
     newNode.setAttribute("width", "200px");
     newNode.setAttribute("height", "200px");
     currentNode.appendChild(newNode);
    // Product 3 text
     currentNode = document.getElementById("book3Text");
     newNode = document.createTextNode("Rumaan Alam’s 'Leave the World Behind (2020)' is a work of apocalyptic fiction that examines the relationship between race and class during an unspecified disaster that cuts off all communication, forcing two families together. The book uses omniscient narration and interpersonal conflict to heighten the fear of disconnection in the Information Age, treating the apocalypse as an event that happens on a human scale. Published to great acclaim, it has been longlisted for the National Book Award.");
     currentNode.appendChild(newNode);
}

// Builds the services page
function servicesPage()
{
    // Outputs the information for the page to the page by selecting each section
    // and adding children
    // Service 1 img
    currentNode = document.getElementById("service1Img");
    var newNode = document.createElement("img")
    newNode.setAttribute("src", "./images/service1.png");
    newNode.setAttribute("width", "200px");
    newNode.setAttribute("height", "200px");
    currentNode.appendChild(newNode);
    // Service 1 text
    currentNode = document.getElementById("service1Text")
    newNode = document.createTextNode("A graphic designer is a professional within the graphic design and graphic arts industry who assembles together images, typography, or motion graphics to create a piece of design. Their job is to help businesses and organizations to effectively communicate their messages through visual content. They use various design software, such as Adobe Illustrator, Photoshop, and InDesign, to create visual concepts, using computer software or by hand, to communicate ideas that inspire, inform, or captivate consumers. Graphic designers work in a variety of industries, including advertising, publishing, packaging, and multimedia.");
    currentNode.appendChild(newNode);
   // Service 2 img
    currentNode = document.getElementById("service2Img");
    newNode = document.createElement("img")
    newNode.setAttribute("src", "./images/service2.png");
    newNode.setAttribute("width", "200px");
    newNode.setAttribute("height", "200px");
    currentNode.appendChild(newNode);
   // Services 2 text 
    currentNode = document.getElementById("service2Text")
    newNode = document.createTextNode("I am a skilled and dedicated coder with a passion for writing clean, efficient, and well-documented code. With a solid understanding of computer science principles, algorithms, and data structures, I have experience working on a variety of software development projects. I am proficient in several programming languages, including Python, Java, and C++, and have a strong understanding of software development methodologies, such as Agile and the software development life cycle. My attention to detail and ability to think logically have been key to my success in finding creative solutions to complex coding problems. I am confident in my ability to work independently or as part of a team and am always eager to learn new technologies and programming languages.");
    currentNode.appendChild(newNode);
   // Service 3 img
    currentNode = document.getElementById("service3Img");
    newNode = document.createElement("img")
    newNode.setAttribute("src", "./images/servie3.png");
    newNode.setAttribute("width", "200px");
    newNode.setAttribute("height", "200px");
    currentNode.appendChild(newNode);
   // Services 3 text 
    currentNode = document.getElementById("service3Text");
    newNode = document.createTextNode("I am an experienced software tester with a strong understanding of the software development life cycle and testing methodologies. I have hands-on experience testing both web and mobile applications, using a variety of testing tools and techniques. My attention to detail and ability to think critically have enabled me to identify and report defects and issues in a timely manner, and I have a track record of working closely with developers to ensure that defects are resolved quickly and efficiently. I am knowledgeable in both manual and automated testing, and I have experience creating and executing test cases, test plans, and test scripts. Overall, I am dedicated to ensuring that software products meet the highest standards of quality and functionality, and I am confident in my ability to deliver results in a fast-paced and dynamic testing environment.");
    currentNode.appendChild(newNode);
}

// Builds the about page
function aboutPage()
{
    // Creates message variable for Tyler Henry about section
    var aboutMeMessage = document.getElementById("aboutMeMessage");
    aboutMeMessage.innerHTML ="Our names are Sandeep Kumar and Samuel Abraham. We are currently enrolled in Computer programming second year. We have experience working in C++, python, sql and many more languages. We are also interested in web development and mobile development. We are looking forward to learn more and grow together. ";

}

// Builds the contact page when page open
function contactPage()
{
    // Create button event listener
    var button = document.getElementById( "submit" );
    button.addEventListener( "click", displayContact, false );

}
// Displays the contact in the console
function displayContact()
{
    // variables to contain value from input bozes
    var name = document.getElementById("name").value;
    var number = document.getElementById("contactNumber").value;
    var email = document.getElementById("emailAddress").value;
    var comments = document.getElementById("comments").value;

    // Messages variable to be outputed to console
    var consoleMessage = "Name: " + name + "\nContact Number: " + number
    + "\nEmail Address: " + email + "\nComments: " + comments;

    // Output message to console
    console.log(consoleMessage);

    // Start timer starting at 0 
    seconds = 0;
    window.setInterval( "updateTime()", 1000 );
}
// Updates the time
function updateTime()
{
    //Increment timer
    ++seconds; 

    //When timer hits 3 sec, redirect to home page
    if (seconds == 3) 
    {
        window.location.href = "./index.html"; 
    }
                  
} 

// On launch check which page is the current page
window.addEventListener( "load", checkPage, false );