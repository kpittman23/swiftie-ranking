let myTable = document.querySelector('#table');

let evermore = ['willow', 'champagne problems', 'gold rush', '\'tis the damn season', 'tolerate it',
    'no body, no crime (ft. HAIM)', 'happiness', 'dorothea', 'coney island (ft. The National)',
    'ivy', 'cowboy like me', 'long story short', 'marjorie', 'closure', 'evermore (ft. Bon Iver)',
    'right where you left me', 'it\'s time to go'];


let headers = ['Song', 'Album', 'Ranking Status'];

let table = document.createElement('table');
table.style = "margin-left: auto;margin-right: auto;";
let headerRow = document.createElement('tr');

headers.forEach(headerText => {
    let header = document.createElement('th');
    let textNode = document.createTextNode(headerText);
    header.appendChild(textNode);
    headerRow.appendChild(header);
});

table.appendChild(headerRow);


for (let song of evermore) {
    console.log(song);
    let row = document.createElement('tr');
    let col1 = document.createElement('th');
    col1.innerHTML = '<a href="' + song + '.html">' + song + '</a>';
    let col2 = document.createElement('th');
    col2.innerHTML = 'evermore';
    let col3 = document.createElement('th');
    col3.innerHTML = "Incomplete";

    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    table.appendChild(row);
}


myTable.appendChild(table);