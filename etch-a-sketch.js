const container = document.querySelector('#container');

function createColumns (row) {
    for (c = 1; c <= 16; c++) {
            let col = document.createElement('div');
            col.style.display = 'inline-block';
            col.style.width = '10px';
            col.style.height = '10px';
            col.style.backgroundColor = 'blue';
            col.setAttribute("id", r + "x" + c);
            row.appendChild(col);
        }

}

for (r = 1; r <= 16; r++) {
    let row = document.createElement('div');
    row.style.display = 'block';
    row.style.fontSize = '0pt'; // Removes whitespace (vertical) from inline-block

    createColumns(row);         // Create 16 columns
    container.appendChild(row); // Create 16 rows
}
