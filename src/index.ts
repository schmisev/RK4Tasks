import "../style.less";

import * as ace from "ace-builds";
import "ace-builds/esm-resolver";
const aceLangTools = require("ace-builds/src-noconflict/ext-language_tools");

const title = document.getElementById("title-input")! as HTMLInputElement;
const author = document.getElementById("author-input")! as HTMLInputElement;
const category = document.getElementById("category-input")! as HTMLInputElement;
const id = document.getElementById("id-input")! as HTMLInputElement;
const descr = ace.edit("descr-editor");
const preload = ace.edit("preload-editor");
const output = ace.edit("output-editor");

interface Field {
    from: string;
    to: string;
}

interface WorldMap {
    l: number;
    w: number;
    h: number;
    fields: Field[][];
}

function addMap(l: number, w: number, h:number) {
    const map = {
        l, w, h, fields: initFields(l, w),
    }
    map.fields[0][0].from = "S";
    allWorlds.push(map);
}

// helper
function initFields(l: number, w: number) {
    const fields: Field[][] = [];
    for (let j = 0; j < w; j++) {
        const line: Field[] = [];
        for (let i = 0; i < l; i++) {
            line.push(
                {
                    from: "_",
                    to: "_",
                }
            )
        }
        fields.push(line);
    }
    return fields;
}

function removeItem<T>(arr: Array<T>, index: number): Array<T> { 
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}

// rendering
function tagField(str: string) {
    let classes = new Set<string>();
    if (str == "") classes.add("is-void");
    if (str == "_") classes.add("is-empty");
    for (let char of str) {
        if ("ESWN".includes(char)) {
            classes.add("has-bot");
        }
        if ("rygb.+*".includes(char)) {
            classes.add("has-block");
        }
        if ("RGBY?!".includes(char)) {
            classes.add("has-marker");
        }
        if (char == "#") classes.add("is-wall");
    }
    return classes;
}

function renderField(f: Field, idx: number, x: number, y: number) {
    let fromClasses = tagField(f.from);
    let toClasses = tagField(f.to);
    
    return `
    <div class="world-field">
    <div class="${[...fromClasses].join(" ")}"><input class="from-input" id="from${idx}-${x}-${y}" onchange="changeValue(${idx}, ${x}, ${y}, 'from')" value="${f.from}"></div>
    <div class="${[...toClasses].join(" ")}"><input class="to-input" id="to${idx}-${x}-${y}" onchange="changeValue(${idx}, ${x}, ${y}, 'to')" value="${f.to}"></div>
    </div>
    `
}

function renderWorldMap(m: WorldMap, idx: number) {
    let html = `
    <div class="world">
    <div class="world-edit">
        <div>
            <button class="emoji" onclick="shiftTask(${idx}, -1)">⏫</button>
            <button class="emoji" onclick="shiftTask(${idx}, 1)">⏬</button>
            <button class="emoji" onclick="deleteTask(${idx})">❌</button>
            <button class="emoji" onclick="addTaskBelow(${idx})">➕</button>
        </div>
        <div><b>Aufg. ${idx+1}</b></div>
        <div>➡️ <input class="dim" id="l${idx}" type="number"
        value="${m.l}" min="1" onchange="adjustSize(${idx}, 'l')"></div>
        <div>⬇️ <input class="dim" id="w${idx}" type="number" 
        value="${m.w}" min="1" onchange="adjustSize(${idx}, 'w')"></div>
        <div>🔼 <input class="dim" id="h${idx}" type="number" 
        value="${m.h}" min="1" onchange="adjustSize(${idx}, 'h')"></div>
    </div>
    <div class="world-container" style="grid-template-columns: repeat(${m.l}, 1fr);">
    `
    
    for (const [j, line] of m.fields.entries()) {
        for (const [i, field] of line.entries()) {
            html += renderField(field, idx, i, j);
        }
    }

    html += `
    </div>
    </div>
    `
    return html;
}

function generateJSONText() {
    let filename = `${(author.value || "unbekannt")}_${(category.value || "Standard")}_${id.value}`;

    let worldResult = ``;
    
    for (const map of allWorlds) {
        const l = map.l;
        const w = map.w;
        const h = map.h;

        worldResult += `x;${l};${w};${h};\\n`;
        
        for (let j = 0; j < w; j++) {
            for (let i = 0; i < l; i++) {
                const from = map.fields[j][i].from;
                const to = map.fields[j][i].to;
                if (from != "") {
                    worldResult += from;
                    if (to) {
                        worldResult += ":";
                        worldResult += to;
                    }
                }
                if (i < l - 1)
                    worldResult += ";";
            }
            worldResult += "\\n";
        }
    }

    let result =
`{
    "title": "${title.value.replace(/\n/g, "\\n")}",
    "description": "${descr.getValue().replace(/\n/g, "\\n")}",
    "preload": "${preload.getValue().replace(/\n/g, "\\n")}",
    "world": "${worldResult}"
}`;

    return { result, filename };
}

// OUT
function updateUI() {
    document.querySelector("#world-layout")!.innerHTML = 
        allWorlds.map(renderWorldMap).join("\n");
    const json = generateJSONText();
    output.setValue(`"${json.filename}": ${json.result}`);
}

// globals
declare global {
    interface Window {
        updateUI: any;
        shiftTask: any;
        adjustSize: any;
        changeValue: any;
        deleteTask: any;
        addTaskBelow: any;
    }
}

// IN
window.shiftTask = function(idx: number, diff: number) {
    const nw = allWorlds.length;
    const realIdx = (idx + nw) % nw;
    const swapIdx = (idx + diff + nw) % nw;
    const [el, swapEl] = [allWorlds[realIdx], allWorlds[swapIdx]];
    allWorlds[realIdx] = swapEl;
    allWorlds[swapIdx] = el;

    updateUI();
}

window.deleteTask = function(idx: number) {
    const nw = allWorlds.length;
    if (nw <= 1) return;
    const realIdx = (idx + nw) % nw;

    removeItem(allWorlds, realIdx);

    updateUI();
}

window.addTaskBelow = function(idx: number) {
    const nw = allWorlds.length;
    const realIdx = (idx + nw) % nw;
    allWorlds = [
        ...allWorlds.slice(0, realIdx),
        {
            l: 4, w: 3, h: 6, fields: initFields(4, 3),
        },
        ...allWorlds.slice(realIdx)
    ];

    updateUI();
}

window.adjustSize = function(idx: number, type: "l" | "w" | "h") {
    const map = allWorlds[idx];
    const key = type + idx;
    const value = parseInt((document.getElementById(key) as any).value as string);
    if (value <= 0) {
        (document.getElementById(key) as any).value = '1';
        return;
    }

    switch (type) {
        case "l":
            for (let i = 0; i < (value - map.l); i++) {
                for (const line of map.fields) {
                    line.push({from: "_", to: "_"});
                }
            }
            for (let i = 0; i < (map.l - value); i++) {
                for (const line of map.fields) {
                    line.pop();
                }
            }
            map.l = value;
            break;
        case "w":
            for (let i = 0; i < (value - map.w); i++) {
                map.fields.push(...initFields(map.l, 1))
            }
            for (let i = 0; i < (map.w - value); i++) {
                map.fields.pop();
            }
            map.w = value;
            break;
        case "h":
            map.h = value;
            break;
    }

    updateUI();
}

window.changeValue = function(idx: number, x: number, y: number, type: "from" | "to") {
    const key = type + idx + "-" + x + "-" + y;
    const value = (document.getElementById(key) as any).value as string;
    allWorlds[idx].fields[y][x][type] = value;

    updateUI();
}

window.updateUI = updateUI;

// app
let allWorlds: WorldMap[] = [];
addMap(4, 3, 6);
updateUI();