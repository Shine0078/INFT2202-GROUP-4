/*  Authors: Gursimar singh
*   Student IDs: 100840785
*   Date Completed: 3 Feb 2023
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
    else if(page=="login.html"){
        loginpage();

    }
    else if(page="register.html"){
        RegisterPage();
    }
}

// Builds the index page
function indexPage()
{
    // Creates and outputs index message
    var indexMessage = document.getElementById( "indexMessage" );
    indexMessage.innerHTML = "Welcome to our home page for WEBD-4202 Lab 1. This page was created by Gursimar Singh." + 
    " Please use the nav bar to get to the other pages.";
}

//Builds the products / projects page
function productsPage()
{
    // Outputs the information for the page to the page by selecting each section
    // Product 1 img
     currentNode = document.getElementById("book1Img");
     var newNode = document.createElement("img")
     newNode.setAttribute("src", "../images/book1.png");
     newNode.setAttribute("width", "200px");
     newNode.setAttribute("height", "200px");
     currentNode.appendChild(newNode);
     // Product 1 text
     currentNode = document.getElementById("book1Text")
     newNode = document.createTextNode("'Rich Dad Poor Dad' is a personal finance book written by Robert Kiyosaki. It advocates for financial literacy and provides unconventional advice on how to build wealth. The book is written in a narrative form, sharing the experiences of the author and his two dads – his biological father (the 'poor dad') and his friend's father (the 'rich dad'). The book explains the differences in the financial education and mindset of the two fathers and how these differences have affected their financial success.");
     currentNode.appendChild(newNode);
    // Product 2 img
     currentNode = document.getElementById("book2Img");
     newNode = document.createElement("img")
     newNode.setAttribute("src", "../images/Mindset-–-The-New-Psychology-of-Success-.png");
     newNode.setAttribute("width", "200px");
     newNode.setAttribute("height", "200px");
     currentNode.appendChild(newNode);
    // Product 2 text 
     currentNode = document.getElementById("book2Text")
     newNode = document.createTextNode("'Mindset: The New Psychology of Success' by Carol S. Dweck is considered a good book because it provides insights into the power of a growth mindset, and how it can impact personal and professional success. The book presents extensive research on how a person's mindset can affect their motivation, resilience, and ability to achieve their goals. It argues that by shifting from a fixed mindset, where abilities are seen as innate and unchanging, to a growth mindset, where abilities can be developed through hard work and learning, individuals can lead more fulfilling and successful lives. The book provides practical strategies and exercises to help readers develop a growth mindset and achieve their full potential.");
     currentNode.appendChild(newNode);
    // Product 3 img
     currentNode = document.getElementById("book3Img");
     newNode = document.createElement("img")
     newNode.setAttribute("src", "../images/book3.png");
     newNode.setAttribute("width", "200px");
     newNode.setAttribute("height", "200px");
     currentNode.appendChild(newNode);
    // Product 3 text
     currentNode = document.getElementById("book3Text");
     newNode = document.createTextNode("'Invisible Man' is a novel by Ralph Ellison, first published in 1952. It tells the story of an unnamed narrator, a young African American man, who is searching for his identity and place in a racist and oppressive society. The narrator's journey of self-discovery and growth is marked by numerous incidents of racism and betrayal, leading him to question the values and beliefs of both himself and those around him. Through the narrator's experiences, the novel critiques the social and political conditions of mid-20th century America and explores themes of invisibility, identity, and the search for meaning in life. The book is considered a classic of American literature and is widely studied in schools and universities.");
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
    newNode.setAttribute("src", "../images/graphic-design-mis.png");
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
    newNode.setAttribute("src", "../images/service2.png");
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
    newNode.setAttribute("src", "../images/servie3.png");
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
    aboutMeMessage.innerHTML ="My name is Gursimar Singh and I am currently a second year student in the Computer Programming Course. My back home is in India. I did HighSchool From There,I also have experience in many programming languages such as C++, python and C#. \n"+"You can also check My linkdin profile for better understanding";

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
   document.title = "WEBD6201 - Contact Us";
        function clearForm()
        {
            //document.getElementById("contactForm").reset();
            $("#contactForm")[0].reset();
            $("#errorMessage").hide();
        }

        function validateInput(selector, condition, errorMessage)
        {
            if(condition)
            {
                $("#errorMessage").show();
                $("#errorMessage").text(errorMessage);
                $(selector).select();
                $(selector).css("border", "2px solid red");
            }
            else
            {
                $("#errorMessage").hide();
                $(selector).css("border", "1px solid #ced4da");
            }
        }

        $("#errorMessage").hide();
        $("#contactName").select();

        // Contact Name Events
        $("#contactName").blur((e)=>
        {
            validateInput("#contactName",( $("#contactName").val().length < 2),"Contact Name is Too Short");
        });

        $("#contactName").focus((e)=>
        {
            $("#contactName").select();
        });

        // Email Events
        $("#emailAddress").blur((e)=>
        {
            validateInput("#emailAddress",($("#emailAddress").val().length < 8) || (!$("#emailAddress").val().includes("@")),"Invalid Email Address");
        });

        $("#emailAddress").focus((e)=>
        {
            $("#emailAddress").select();
        });

        // Contact Number Events
        $("#contactNumber").blur((e)=>
        {
            let phonePattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/
            let phoneNumber = $("#contactNumber").val();

            validateInput("#contactNumber",( !phonePattern.test(phoneNumber)),"Invalid Contact Number");
        });

        $("#contactNumber").focus((e)=>
        {
            $("#contactNumber").select();
        });

        // Contact Message Events
        $("#contactMessage").blur((e)=>
        {
            validateInput("#contactMessage",( $("#contactMessage").val().length < 2 ),"Contact Message Too Short");
        });

        $("#contactMessage").focus((e)=>
        {
            $("#contactMessage").select();
        });


        $("#contactForm").submit  ((e)=>
        {
            if(document.getElementById("contactForm").checkValidity() == false)
            {
                e.preventDefault();
                e.stopPropagation();
                console.log("form not valid");
            }

            
            let contactName = $("#name").val();
            let emailAddress = $("#emailAddress").val();
            let contactNumber = $("#contactNumber").val();
            let contactMessage = $("#comments").val();

            console.log(`Contact Name: ${contactName}`);
            console.log(`Email Address: ${emailAddress}`);
            console.log(`Contact Number: ${contactNumber}`);
            console.log(`Contact Message: ${contactMessage}`);

            contactObject.contactName = contactName;
            contactObject.emailAddress = emailAddress;
            contactObject.contactNumber = contactNumber;
            contactObject.contactMessage = contactMessage;

            console.log(contactObject);

            clearForm();
        });

        $("#resetButton").click((e)=>
        {
            e.preventDefault();
            if(confirm("Are You Sure?"))
            {
                clearForm();
            }

            
        });
}

function loginpage(){
    document.title = "WEBD6201 - Login";

    $("#loginForm").submit  ((e)=>
    {
        e.preventDefault();
        e.stopPropagation();

        
        let userName = $("#contactName").val();
        let li = document.createElement("li");
        li.setAttribute("id", "userName");
        li.setAttribute("class", "navbar-text");
        li.textContent = userName;
        let links = document.getElementById("nav-links");
        links.insertBefore(li, links.lastElementChild);

        $("#loginForm")[0].reset();
        $("#login").hide();
        $("#logout").show();

            
            //
            //let li = document.createElement("li");            
    });

}
function RegisterPage()
{
    document.title = "WEBD6201 - Register";

    //Function for clearing the form
    function clearForm()
    {
        //document.getElementById("contactForm").reset();
        $("#registerForm")[0].reset();
        $("#errorMessage").hide();
    }

    //Function for validating field inputs
    function validateInput(selector, condition, errorMessage)
    {
        if(condition)
        {
            $("#errorMessage").show();
            $("#errorMessage").text(errorMessage);
            $(selector).select();
            $(selector).css("border", "2px solid red");
        }
        else
        {
            $("#errorMessage").hide();
            $(selector).css("border", "1px solid #ced4da");
        }
    }

    //create a new div element to be used for error messages
    let div = document.createElement("div");
    //Assign the new div elementand id of errorMessage
    div.setAttribute("id", "errorMessage");
    //assign the new div element a class of alert alert-danger
    div.setAttribute("class", "alert alert-danger");
    //Assign the registration page form to a variable calle registerForm
    let registerForm = document.getElementById("registerForm");
    //Get each of the div tags with a class name of form-group in an array
    let formDivs = document.getElementsByClassName("form-group");
    //Inserts the new div element before the first div element in the form
    registerForm.insertBefore(div, formDivs[0]);
    //Hides the newly added div element on the register page
    $("#errorMessage").hide();

    //When focus is removed from the first name field
    $("#FirstName").blur((e)=>
    {
        //Checks that the first name is at least 2 characters in length when the user attempts to move off of the text box
        validateInput("#FirstName",( $("#FirstName").val().length < 2),"First Name must be at least 2 characters");
    });

    //When focus is removed from the last name field
    $("#lastName").blur((e)=>
    {
        //Checks that the last name is at least 2 characters in length when the user attempts to move off the text box
        validateInput("#lastName",( $("#lastName").val().length < 2),"Last Name must be at least 2 characters");
    });

    //When focus is removed from the emailAddress field
    $("#emailAddress").blur((e)=>
    {
        //Checks that the email address entered by the user is at least 8 characters in lenght and contains an @ symbol
        validateInput("#emailAddress",($("#emailAddress").val().length < 8) || (!$("#emailAddress").val().includes("@")),"Invalid Email Address");
    });

    //When focus is removed from the password field
    $("#password").blur((e)=>
    {
        //Checks that the password is at least 6 characters
        validateInput("#password", ($("#password").val().length < 6), "Password must be at least 6 characters");
    });

    //When focus is removed from the confirm password field
    $("#confirmPassword").blur((e)=>
    {
        //Checks that the confirm password is at least 6 characters
        validateInput("#confirmPassword", ($("#confirmPassword").val().length < 6), "Password must be at least 6 characters");
    });

    //When the form is submitted
    $("#registerForm").submit((e)=>
    {
        //Prevents default behaviour when the form is submitted
        e.preventDefault();
        //Checks that the password and confirm password match
        validateInput("#confirmPassword", ($("#confirmPassword").val() != $("#password").val()), "Passwords must match");

        //
        if($("#errorMessage").val() == "")
        {
            let FirstName = $("#FirstName").val();
            let lastName = $("#lastName").val();
            let emailAddress = $("#emailAddress").val();
            let password = $("#password").val();
            let confirmPassword = $("#confirmPassword").val();

            userObject.FirstName = FirstName;
            userObject.lastName = lastName;
            userObject.emailAddress = emailAddress;
            userObject.password = password;
            userObject.confirmPassword = confirmPassword;

            console.log(userObject);

            clearForm();
        }
    });
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