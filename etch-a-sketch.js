const container = document.querySelector("#container");

currentGridSize = 16;

function createGrid(size) {
    const containerSize = 560;
    const cellSize = containerSize / size;
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for (let j = 0; j < size; j++) {
            const column = document.createElement("div");
            column.classList.add("column");
            column.style.width = `{cellSize}px`;
            column.style.height = `{cellSize}px`;
            row.appendChild(column);
            column.addEventListener("mouseover", (event) => {
                column.style.backgroundColor = "blue";
            });
        }
    }
    currentGridSize = size;
}


const button = document.querySelector("#button");
button.addEventListener("click", (event) => {
    let userinput = prompt("Number of squares per side: ")
    console.log(userinput);
    if (userinput > 100 || userinput <= 0 || isNaN(userinput) === true) {
        alert("Sorry, invalid number of sides")
    }
    else {
        removeGrid();
        createGrid(userinput);
    }
});

function removeGrid(){
    container.innerHTML = '';
}

const reset = document.querySelector("#reset");
reset.addEventListener("click", (event) => {
    removeGrid();
    createGrid(currentGridSize);
})

createGrid(16);
