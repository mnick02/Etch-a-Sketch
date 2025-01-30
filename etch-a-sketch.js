const container = document.querySelector("#container");

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for (let j = 0; j < size; j++) {
            const column = document.createElement("div");
            column.classList.add("column");
            row.appendChild(column);
            column.addEventListener("mouseover", (event) => {
                //console.log("hello");
                column.style.backgroundColor = "blue";
            });
        }
    }
}

//FIND OUT HOW TO REMOVE DIVS FIRST


const button = document.querySelector("button");
button.addEventListener("click", (event) => {
    let userinput = prompt("Number of squares per side: ")
    console.log(userinput);
    if (userinput > 100 || userinput <= 0 || isNaN(userinput) === true) {
        alert("Sorry, invalid number of sides")
    }
    else {
        console.log("here");
        //divs = document.querySelectorAll("column").remove();
        removeGrid();
        createGrid(userinput);
        console.log("below");
        /*for (let i = 0; i < userinput; i++) {
            const row = document.createElement("div");
            row.classList.add("row");
            container.appendChild(row);
            for (let j = 0; j < userinput; j++) {
                const column = document.createElement("div");
                column.classList.add("column");
                row.appendChild(column);
                column.addEventListener("mouseover", (event) => {
                    //console.log("hello");
                    column.style.backgroundColor = "blue";
                });
            }
        }*/

    }
});

function removeGrid(){
    container.innerHTML = '';
}

createGrid(16);
