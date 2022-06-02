let myTable = document.querySelector('#table');

let red = ['State Of Grace', 'Red', 'Treacherous', 'I Knew You Were Trouble', 'All Too Well', '22',
    'I Almost Do', 'We Are Never Ever Getting Back Together', 'Stay Stay Stay', 'The Last Time',
    'Holy Ground', 'Sad Beautiful Tragic', 'The Lucky One', 'Everything Has Changed (ft. Ed Sheeran)',
    'Starlight', 'Begin Again', 'The Moment I Knew', 'Come Back...Be Here', 'Girl At Home', 'Ronan',
    'Better Man', 'Nothing New', 'Babe', 'Message In A Bottle', 'I Bet You Think About Me',
    'Forever Winter', 'Run (ft. Ed Sheeran)', 'The Very First Night', 'All Too Well (10 Minute Version)'];

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

for (let song of red) {
    console.log(song);
    let row = document.createElement('tr');
    let col1 = document.createElement('th');
    col1.innerHTML = '<a href="' + song + '.html">' + song + '</a>';
    let col2 = document.createElement('th');
    col2.innerHTML = 'Red (Taylor\'s Version)';
    let col3 = document.createElement('th');
    col3.innerHTML = "Incomplete";

    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    table.appendChild(row);
}


myTable.appendChild(table);