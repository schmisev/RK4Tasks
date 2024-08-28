const lengthInput = document.getElementById("length-input");
lengthInput.onchange = updateWorldTable;
const widthInput = document.getElementById("width-input");
widthInput.onchange = updateWorldTable;
const heightInput = document.getElementById("height-input");
const worldTable = document.getElementById("world-table");
const output = document.getElementById("output");

function updateWorldTable() {
    const l = lengthInput.value;
    const w = widthInput.value;

    console.log(l, w);

    let result = "";

    result += "<tr>";
    result += `<td>x</td>`
    for (let i = 0; i < l; i++) {
        result += `<td>${i}</td>`
    }
    result += "</tr>";

    for (let j = 0; j < w; j++) {
        result += "<tr>";
        result += `<td>${j}</td>`
        for (let i = 0; i < l; i++) {
            // get old value if there was one
            const li = document.getElementById(`l-${i}-${j}`)
            const ri = document.getElementById(`r-${i}-${j}`)

            const lval = li ? li.value : "_";
            const rval = ri ? ri.value : "_";

            result += "<td>";
            result += `<div class="cell">`
            result += `<input class="wi left" id="l-${i}-${j}" value="${lval}" onchange="updateCell(${i}, ${j})">`
            result += ":";
            result += `<input class="wi right" id="r-${i}-${j}" value="${rval}" onchange="updateCell(${i}, ${j}, "r")>`
            result += `</div>`
            result += "</td>";
        }
        result += "</tr>";
    }
    worldTable.innerHTML = result;
    updateAllCells();
}

function updateCell(i, j, lr = "l") {
    const el = document.getElementById(`${lr}-${i}-${j}`);
    console.log(el);

    if (el.value == "")
        el.classList.toggle("empty", true);
    else
        el.classList.toggle("empty", false);
    
    generateJSONText();
}

function updateAllCells() {
    const l = lengthInput.value;
    const w = widthInput.value;

    for (let j = 0; j < w; j++) {
        for (let i = 0; i < l; i++) {
            updateCell(i, j);
            updateCell(i, j, "r");
        }
    }
}

function generateJSONText() {
    const l = lengthInput.value;
    const w = widthInput.value;
    const h = heightInput.value;

    let result = `x;${l};${w};${h};\\n`;

    for (let j = 0; j < w; j++) {
        for (let i = 0; i < l; i++) {
            const li = document.getElementById(`l-${i}-${j}`)
            const ri = document.getElementById(`r-${i}-${j}`)

            const lval = li ? li.value : "_";
            const rval = ri ? ri.value : "";
            
            result += lval;
            if (rval && rval != "")
                result += ":" + rval;
            if (i != l-1)
                result += ";";
        }
        result += "\\n";
    }

    output.value = result;
}

// startup
updateWorldTable()
generateJSONText()