let myTable = document.querySelector('#table');

let fearless = ['Fearless', 'Fifteen', 'Love Story', 'Hey Stephen', 'White Horse', 'You Belong With Me',
    'Breathe (ft. Colbie Caillat)', 'Tell Me Why', 'You\'re Not Sorry', 'The Way I Loved You',
    'Forever & Always', 'The Best Day', 'Change', 'Jump Then Fall', 'Untouchable',
    'Forever & Always (Piano Version)', 'Come In With The Rain', 'Superstar', 'The Other Side Of The Door',
    'Today Was A FairyTale', 'You All Over Me', 'Mr. Perfectly Fine', 'We Were Happy', 'That\'s When',
    'Don\'t You', 'Bye Bye Baby'];

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

for (let song of fearless) {
    console.log(song);
    let row = document.createElement('tr');
    let col1 = document.createElement('th');
    col1.innerHTML = '<a href="' + song + '.html">' + song + '</a>';
    let col2 = document.createElement('th');
    col2.innerHTML = 'Fearless (Taylor\'s Version)';
    let col3 = document.createElement('th');
    col3.innerHTML = "Incomplete";

    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    table.appendChild(row);
}


myTable.appendChild(table);