const container = document.querySelector("#container");

const square = document.createElement("div");
square.classList.add("content");
square.setAttribute("style", "border: solid, black");
square.style.height = "50px";
square.style.width = "50px";
container.appendChild(square);
