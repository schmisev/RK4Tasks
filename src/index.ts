import "../style.less";

const allWorldTables = document.getElementById("all-world-tables")!;
const allWorldIds: number[] = [];

function dimTableRow(wid: number, l:number, w: number, h: number) {
    return `<table id="dim-${wid}"><tr><td class="cell">
    L = <input class="dim" id="dim-l-${wid}" type="number" value="${l}" min="1" onchange="updateWorldTable(${wid}); showJSONText();">
    B = <input class="dim" id="dim-w-${wid}" type="number" value="${w}" min="1" onchange="updateWorldTable(${wid}); showJSONText();">
    H = <input class="dim" id="dim-h-${wid}" type="number" value="${h}" min="1" onchange="updateWorldTable(${wid}); showJSONText();">
    <button class="del" id="dim-del-${wid}" onclick="deleteWorldTable(${wid}); showJSONText();">LÖSCHEN</button>
    <span>(rnd id ${wid})</span>
    </td></tr></table>`;
}

function worldTable(wid: number, l: number, w: number) {
    let result = `<table class="world" id="world-${wid}">`;
    for (let j = 0; j < w; j++) {
        result += `<tr>`;
        for (let i = 0; i < l; i++) {
            result += tableCell(wid, i, j);
        }
        result += `</tr>`;
    }
    result += `</table>`;
    return result;
}

function tableCell(wid: number, i: number, j: number) {
    return `<td class="cell">
    <input id="l-${wid}-${i}-${j}" class="cell left" value="_" onchange="showJSONText();"><br>↓<br><input id="r-${wid}-${i}-${j}" class="cell right" value="_" onchange="showJSONText();">
    </td>`;
}

// callbacks
function updateWorldTable(wid: number) {
    const l = document.getElementById(`dim-l-${wid}`) as HTMLInputElement;
    const w = document.getElementById(`dim-w-${wid}`) as HTMLInputElement;
    const h = document.getElementById(`dim-h-${wid}`) as HTMLInputElement;

    replaceWorldTable(wid, worldTable(wid, l.valueAsNumber, w.valueAsNumber));
}

function replaceWorldTable(wid: number, replacement: string = null) {
    const world = document.getElementById(`world-${wid}`);
    const dim = document.getElementById(`dim-${wid}`);
    if (world) {
        if (replacement) {
            world.outerHTML = replacement;
        } else {
            
        }
    }
}

function createWorldTable() {
    if (allWorldIds.length >= 100) return;
    let wid: number = Math.floor(Math.random() * 100);
    while (allWorldIds.includes(wid)) wid = Math.floor(Math.random() * 100);
    allWorldIds.push(wid);
    allWorldTables.innerHTML += dimTableRow(wid, 4, 3, 6);
    allWorldTables.innerHTML += worldTable(wid, 4, 3);
}

function deleteWorldTable(wid: number) {
    const idx = allWorldIds.indexOf(wid);
    if (idx < 0) return;
    allWorldIds.splice(idx, 1);
    const world = document.getElementById(`world-${wid}`);
    const dim = document.getElementById(`dim-${wid}`);
    world.remove();
    dim.remove();
}

function generateJSONText() {
    const author = document.getElementById("task-author") as HTMLInputElement;
    const category = document.getElementById("task-category") as HTMLInputElement;
    const id = document.getElementById("task-id") as HTMLInputElement;
    const title = document.getElementById("task-title") as HTMLTextAreaElement;
    const description = document.getElementById("task-description") as HTMLTextAreaElement;
    const preload = document.getElementById("task-preload") as HTMLTextAreaElement;

    let filename = `${(author.value || "unbekannt")}_${(category.value || "Standard")}_${id.value}.json`;

    let worldResult = ``;
    
    for (const wid of allWorldIds) {
        const l = document.getElementById(`dim-l-${wid}`) as HTMLInputElement;
        const w = document.getElementById(`dim-w-${wid}`) as HTMLInputElement;
        const h = document.getElementById(`dim-h-${wid}`) as HTMLInputElement;

        worldResult += `x;${l.valueAsNumber};${w.valueAsNumber};${h.valueAsNumber};\\n`;
        
        for (let j = 0; j < w.valueAsNumber; j++) {
            for (let i = 0; i < l.valueAsNumber; i++) {
                const lc = document.getElementById(`l-${wid}-${i}-${j}`) as HTMLInputElement;
                const rc = document.getElementById(`r-${wid}-${i}-${j}`) as HTMLInputElement;
                if (lc.value != "") {
                    worldResult += lc.value;
                    if (rc.value) {
                        worldResult += ":";
                        worldResult += rc.value;
                    }
                }
                if (i < l.valueAsNumber - 1)
                    worldResult += ";";
            }
            worldResult += "\\n";
        }
    }

    let result = `{
    "title": "${title.value.replace(/\n/g, "\\n")}",
    "description": "${description.value.replace(/\n/g, "\\n")}",
    "preload": "${preload.value.replace(/\n/g, "\\n")}",
    "world": "${worldResult}"
}`;

    return { result, filename };
}

function showJSONText() {
    const currentText = generateJSONText(); 
    const area = document.getElementById("show-json") as HTMLTextAreaElement;
    area.value = currentText.result
    const filename = document.getElementById("filename-json") as HTMLTextAreaElement;
    filename.innerText = currentText.filename;
}

function downloadJSON() {
    
}

// globals
declare global {
    interface Window { 
        updateWorldTable: any; 
        replaceWorldTable: any;
        createWorldTable: any; 
        deleteWorldTable: any;
        showJSONText: any;
    }
}
window.updateWorldTable = updateWorldTable;
window.replaceWorldTable = replaceWorldTable;
window.deleteWorldTable = deleteWorldTable;
window.createWorldTable = createWorldTable;
window.showJSONText = showJSONText;

// initial setup
createWorldTable();
showJSONText();
