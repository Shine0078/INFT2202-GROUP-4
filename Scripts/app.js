"use strict";

// IIFE - Immediately Invoked Function Expression
// means -> anonymous self-executing function
(function(){
    // IIFE Scope
    let h2;

      

    // Event Handlers
    let MouseOver = function()
    {
        // MouseOver Scope
        h2.style.color = "blue";
        h2.style.fontWeight = "bold";
        h2.textContent = "Mouse Over!!!";
    }

    function MouseOut()
    {
        h2.style.color = "black";
        h2.style.fontWeight = "normal";
        h2.textContent = "My Text Content";
    }

    function Start()
    {
        // Start Scope

        console.log("%c App Started", "color: blue; font-size: 20px;");
        let mainContent = document.getElementById("mainContent");

        // create a new h2 tag with a class of Display-2 and "My Text Content" as the text node
        h2 = document.createElement("h2");
        h2.setAttribute("class","Display-2");
        h2.textContent = "My Text Content";
        mainContent.appendChild(h2);

        // event Listeners
        h2.addEventListener("mouseover", MouseOver);

        h2.addEventListener("mouseout", MouseOut);

        let brand = document.getElementsByClassName("navbar-brand")[0];
        brand.textContent = "Client-Side Scripting";

    }


    window.addEventListener("load", Start);
})();