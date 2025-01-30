const container = document.querySelector("#container");


for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for (let j = 0; j < 16; j++) {
        const column = document.createElement("div");
        column.classList.add("column");
        //column.setAttribute("style", "border: solid, black");
        //column.style.height = "10px";
        //column.style.width = "10px";
        row.appendChild(column);
        column.addEventListener("mouseover", (event) => {
            console.log("hello");
            column.style.backgroundColor = "blue";
        });
    }
}

const button = document.querySelector("button");
button.addEventListener("click", (event) => {
    prompt("Number of squares per side: ")
});

