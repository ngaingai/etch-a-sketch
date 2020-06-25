const container = document.querySelector('#container');
let containerSize = 480;    // Set container size
container.style.width = containerSize + 'px';

function createColumns (row, size) {
    let oneSquare = containerSize/size;
    for (c = 1; c <= size; c++) {
            let col = document.createElement('div');
            col.style.display = 'inline-block';
            col.style.width = oneSquare + 'px';
            col.style.height = oneSquare + 'px';
            col.style.backgroundColor = 'white';
            col.setAttribute("id", "grid");
            row.appendChild(col);
        }

}

function createRows (size) {
    for (r = 1; r <= size; r++) {
        let row = document.createElement('div');
        row.style.display = 'block';
        row.style.fontSize = '0pt'; // Removes whitespace (vertical) from inline-block

        createColumns(row, size);         // Create columns
        container.appendChild(row);       // Create rows
    }
    coloring();
}

createRows(16); // Initial grid

function filling (e) {
    e.target.style.backgroundColor = 'black';
}

function coloring (){
    const divs = Array.from(document.querySelectorAll('#grid'));
    divs.forEach(div => div.addEventListener('mouseenter', filling));
        // Fills in the grid square when mouse hovers over it
}

function clear () {
    while (container.hasChildNodes()) {     // Deletes old grid
        container.removeChild(container.firstChild);
    }
    let size = prompt("Enter new grid size: ");
    createRows(size);
}

const btn = document.querySelector('#clear');
btn.addEventListener('click', clear);

