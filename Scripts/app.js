// IIFE - Immediately Invoked Function Expression
// anonymous self-executing function
(function(){

    function Start()
    {
        console.log("App Started...");

        let firstHeading = document.getElementById("firstHeading");

        firstHeading.textContent = "Goodbye cruel world!";

        //document.getElementById("firstHeading").textContent = "Goodbye cruel world!";
    
        firstHeading.style.fontWeight = "bold";

        let main = document.getElementsByTagName("main")[0];

        // configuring my new element
        let newH2 = document.createElement("h2");
        newH2.setAttribute("class", "Display-5");
        newH2.textContent = "secondary heading";

        main.appendChild(newH2);
    
    }

    window.addEventListener("load", Start);
})();