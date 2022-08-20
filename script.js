var menu = document.getElementById("dropdown");
var hidden = document.getElementById("hidden");

let count = 1;
function Addmenu() {
    var material = document.querySelector(".material-symbols-outlined");
    var br = document.createElement("br")

    if (count === 1) {
        material.innerHTML = "close";
        var ul = document.createElement("ul")
        var div = document.createElement("div");
        hidden.append(div);
        div.classList.add("menu_div");
        div.appendChild(ul);
        ul.classList.add("menu_ul");
        for (let i = 0; i < 4; i++) {
            if (i === 0) {
                var anchor = document.createElement("a");
                anchor.href = "index.html";
                var li = document.createElement("li");
                li.append(anchor)
                li.classList.add("menu_li", "padd");
   
                anchor.append(document.createTextNode("Menu"));
                ul.appendChild(li)
            }
            if (i === 1) {
                var anchor = document.createElement("a");
                anchor.href = "about.html";
                var li = document.createElement("li");
                li.classList.add("menu_li");
                li.append(anchor)
                anchor.append(document.createTextNode("About Me"));
                ul.appendChild(li);
            }
            if (i === 2) {
                var anchor = document.createElement("a");
                anchor.href = "contact.html";
                var li = document.createElement("li");
                li.classList.add("menu_li");
                li.append(anchor);
                anchor.append(document.createTextNode("Contact Me"));
                ul.appendChild(li);
            }
            if (i === 3) {
                var anchor = document.createElement("a");
                anchor.href = "project.html";
                var li = document.createElement("li");
                li.classList.add("menu_li");
                li.append(anchor);
                anchor.append(document.createTextNode("Projects"));
                ul.appendChild(li);
            }
        }

    }
    if (count > 1) {
        material.innerHTML = "menu";
        hidden.innerHTML = "";
        count = 0;
    }
    count++;
}

