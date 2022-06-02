let myTable = document.querySelector('#table');

let reputation = ['...Ready For It?', 'End Game', 'I Did Something Bad', 'Don\'t Blame Me', 'Delicate',
    'Look What You Made Me Do', 'So It Goes...', 'Gorgeous', 'Getaway Car', 'King Of My Heart',
    'Dancing With Our Hands Tied', 'Dress', 'This Is Why We Can\'t Have Nice Things',
    'Call It What You Want', 'New Year\'s Day'];

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

for (let song of reputation) {
    console.log(song);
    let row = document.createElement('tr');
    let col1 = document.createElement('th');
    col1.innerHTML = '<a href="' + song + '.html">' + song + '</a>';
    let col2 = document.createElement('th');
    col2.innerHTML = 'Reputation';
    let col3 = document.createElement('th');
    col3.innerHTML = "Incomplete";

    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    table.appendChild(row);
}


myTable.appendChild(table);