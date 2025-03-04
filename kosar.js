document.addEventListener("DOMContentLoaded", function () {
    function kosarba() {
        let message = document.createElement("div");
        message.textContent = "Kosárba rakva";
        message.style.position = "fixed";
        message.style.top = "10px";
        message.style.right = "10px";
        message.style.backgroundColor = "black";
        message.style.color = "white";
        message.style.padding = "10px 20px";
        message.style.borderRadius = "5px";
        message.style.fontSize = "16px";
        message.style.zIndex = "1000";
        
        document.body.appendChild(message);

        setTimeout(() => {
            message.remove();
        }, 1000);
    }


    let buttons = document.querySelectorAll(".felsobal, .felsojobb, .alsobal, .alsojobb");


    buttons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault(); 
            kosarba();
        });
    });
});
