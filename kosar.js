document.addEventListener("DOMContentLoaded", function () {
    function kosarbarak(ciponev) {
        let uzenet = document.createElement("div");
        uzenet.textContent = `Kosárba helyezve:: ${ciponev}`;
        uzenet.style.position = "fixed";
        uzenet.style.top = "10px";
        uzenet.style.right = "10px";
        uzenet.style.backgroundColor = "black";
        uzenet.style.color = "white";
        uzenet.style.padding = "10px 20px";
        uzenet.style.borderRadius = "5px";
        uzenet.style.fontSize = "16px";
        uzenet.style.zIndex = "1000";
        
        document.body.appendChild(uzenet);

        setTimeout(() => {
            uzenet.remove();
        }, 1000);
    }

    let buttons = document.querySelectorAll(".felsobal, .felsojobb, .alsobal, .alsojobb");

    buttons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            let shoeImage = button.querySelector("img");
            let ciponev = shoeImage ? shoeImage.id : "Unknown Shoe";
            
            let cartItems = JSON.parse(sessionStorage.getItem("kosar")) || [];
            cartItems.push(ciponev);
            sessionStorage.setItem("kosar", JSON.stringify(cartItems));

            kosarbarak(ciponev);
        });
    });

    if (window.location.pathname.includes("kosar.html")) {
        displayCart();

        document.getElementById("clearCart").addEventListener("click", function () {
            sessionStorage.removeItem("kosar");
            displayCart();
        });
    }

    function displayCart() {
        let cartItems = JSON.parse(sessionStorage.getItem("kosar")) || [];
        let cartContainer = document.querySelector(".box");
        
        if (cartItems.length === 0) {
            cartContainer.innerHTML = "<p>A kosarad üres.</p>";
        } else {
            cartContainer.innerHTML = "<ul>" + cartItems.map(item => `<li>${item}</li>`).join("") + "</ul>";
        }
    }
});
