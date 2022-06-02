let myTable = document.querySelector('#table');

let debut = ['Tim Mcgraw', 'Picture to Burn', 'Teardrops On My Guitar', 'A Place in this World',
    'Cold As You', 'The Outside', 'Tied Together with a Smile', 'Stay Beautiful', 'Should\'ve Said No',
    'Mary\'s Song (Oh My My My)', 'Our Song', 'I\'m Only Me When I\'m With You', 'Invisible',
    'A Perfectly Good Heart'];

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

for (let song of debut) {
    console.log(song);
    let row = document.createElement('tr');
    let col1 = document.createElement('th');
    col1.innerHTML = '<a href="' + song + '.html">' + song + '</a>';
    let col2 = document.createElement('th');
    col2.innerHTML = 'Debut';
    let col3 = document.createElement('th');
    col3.innerHTML = "Incomplete";

    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    table.appendChild(row);
}

myTable.appendChild(table);