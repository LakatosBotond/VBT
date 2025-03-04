document.addEventListener("DOMContentLoaded", function () {
    function kosarba(shoeName) {
        let message = document.createElement("div");
        message.textContent = `Kosárba rakva: ${shoeName}`;
        message.style.position = "fixed";
        message.style.top = "10px";
        message.style.right = "10px";
        message.style.backgroundColor = "white";
        message.style.color = "black";
        message.style.padding = "10px 20px";
        message.style.borderRadius = "5px";
        message.style.fontSize = "16px";
                
        document.body.appendChild(message);

        setTimeout(() => {
            message.remove();
        }, 1000);
    }

    let buttons = document.querySelectorAll(".felsobal, .felsojobb, .alsobal, .alsojobb");

    buttons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            
            
            let shoeImage = button.querySelector("img");
            let shoeName = shoeImage ? shoeImage.id : "Unknown Shoe"; 
            
            kosarba(shoeName);
        });
    });
});
