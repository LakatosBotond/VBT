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
        
        document.body.appendChild(uzenet);

        setTimeout(() => {
            uzenet.remove();
        }, 1000);
    }

    let gombok = document.querySelectorAll(".felsobal, .felsojobb, .alsobal, .alsojobb");

    gombok.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            let cipoKep = button.querySelector("img");
            let ciponev = cipoKep ? cipoKep.id : "Nem található cipő";
            
            let KosarCuccok = JSON.parse(sessionStorage.getItem("kosar")) || [];
            KosarCuccok.push(ciponev);
            sessionStorage.setItem("kosar", JSON.stringify(KosarCuccok));

            kosarbarak(ciponev);
        });
    });

    if (window.location.pathname.includes("kosar.html")) {
        kosarmutat();

        document.getElementById("KosarUrit").addEventListener("click", function () {
            sessionStorage.removeItem("kosar");
            kosarmutat();
        });
    }

    function kosarmutat() {
        let KosarCuccok = JSON.parse(sessionStorage.getItem("kosar")) || [];
        let cartContainer = document.querySelector(".box");
        
        if (KosarCuccok.length === 0) {
            cartContainer.innerHTML = "<p>A kosarad üres.</p>";
        } else {
            cartContainer.innerHTML = "<ul>" + KosarCuccok.map(item => `<li>${item}</li>`).join("") + "</ul>";
        }
    }
});






//Ez alatt sus script(inspect element letiltása)
//document.onkeydown = (e) => {
//    if (e.key == 123) {
//        e.preventDefault();
//    }
//    if (e.ctrlKey && e.shiftKey && e.key == 'I') {
//        e.preventDefault();
//    }
//    if (e.ctrlKey && e.shiftKey && e.key == 'C') {
//        e.preventDefault();
//    }
//    if (e.ctrlKey && e.shiftKey && e.key == 'J') {
//        e.preventDefault();
//    }
//    if (e.ctrlKey && e.key == 'U') {
//        e.preventDefault();
//    }
//};

//document.addEventListener('contextmenu', function(e) {
//    e.preventDefault();
//  }); 
//