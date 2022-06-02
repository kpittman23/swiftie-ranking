let myTable = document.querySelector('#table');

let lover = ['I Forgot That You Existed', 'Cruel Summer', 'Lover', 'The Man', 'The Archer',
    'I Think He Knows', 'Miss Americana & The Heartbreak Price', 'Paper Rings', 'Cornelia Street',
    'Death By A Thousand Cuts', 'London Boy', 'Soon You\'ll Get Better (ft. The Chicks)', 'False God',
    'You Need To Calm Down', 'Afterglow', 'ME! (ft. Brendon Urie)', 'It\'s Nice To Have A Friend',
    'Daylight'];

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

for (let song of lover) {
    console.log(song);
    let row = document.createElement('tr');
    let col1 = document.createElement('th');
    col1.innerHTML = '<a href="' + song + '.html">' + song + '</a>';
    let col2 = document.createElement('th');
    col2.innerHTML = 'Lover';
    let col3 = document.createElement('th');
    col3.innerHTML = "Incomplete";

    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    table.appendChild(row);
}


myTable.appendChild(table);