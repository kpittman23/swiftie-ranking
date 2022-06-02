let myTable = document.querySelector('#table');

let ninteenEightyNine = ['Welcome To New York', 'Blank Space', 'Style', 'Out Of The Woods',
    'All You Had To Do Was Stay', 'Shake It Off', 'I Wish You Would', 'Bad Blood', 'Wildest Dreams',
    'How You Get The Girl', 'This Love', 'I Know Places', 'Clean', 'Wonderland', 'You Are In Love',
    'New Romantics'];


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

for (let song of ninteenEightyNine) {
    console.log(song);
    let row = document.createElement('tr');
    let col1 = document.createElement('th');
    col1.innerHTML = '<a href="' + song + '.html">' + song + '</a>';
    let col2 = document.createElement('th');
    col2.innerHTML = '1989';
    let col3 = document.createElement('th');
    col3.innerHTML = "Incomplete";

    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    table.appendChild(row);
}


myTable.appendChild(table);