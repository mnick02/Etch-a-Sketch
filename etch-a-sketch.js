const container = document.querySelector("#container");

const square = document.createElement("div");
square.classList.add("content");
square.setAttribute("style", "border: thick, solid, black; background: pink");
square.style.height = "200px";
square.style.width = "200px";
container.appendChild(square);
