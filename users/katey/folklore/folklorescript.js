let myTable = document.querySelector('#table');

let folklore = ['the 1', 'cardigan', 'the last great american dynasty', 'exile (ft. Bon Iver)',
    'my tears ricochet', 'mirrorball', 'seven', 'august', 'this is me trying', 'illicit affairs',
    'invisible string', 'mad woman', 'epiphany', 'betty', 'peace', 'hoax', 'the lakes'];


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

for (let song of folklore) {
    console.log(song);
    let row = document.createElement('tr');
    let col1 = document.createElement('th');
    col1.innerHTML = '<a href="' + song + '.html">' + song + '</a>';
    let col2 = document.createElement('th');
    col2.innerHTML = 'folklore';
    let col3 = document.createElement('th');
    col3.innerHTML = "Incomplete";

    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    table.appendChild(row);
}


myTable.appendChild(table);