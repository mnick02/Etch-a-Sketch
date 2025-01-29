const container = document.querySelector("#container");

//Used 256 since 16 * 16 = 256
for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.classList.add("content");
    square.setAttribute("style", "border: solid, black");
    square.style.height = "10px";
    square.style.width = "10px";
    container.appendChild(square);
}