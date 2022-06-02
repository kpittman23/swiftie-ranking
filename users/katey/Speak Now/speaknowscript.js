let myTable = document.querySelector('#table');

let speakNow = ['Mine', 'Sparks Fly', 'Back To December', 'Speak Now', 'Dear John', 'Mean',
    'The Story Of Us', 'Never Grow Up', 'Enchanted', 'Better Than Revenge', 'Innocent', 'Haunted',
    'Last Kiss', 'Long Live', 'Ours', 'If This Was A Movie', 'Superman'];

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

for (let song of speakNow) {
    console.log(song);
    let row = document.createElement('tr');
    let col1 = document.createElement('th');
    col1.innerHTML = '<a href="' + song + '.html">' + song + '</a>';
    let col2 = document.createElement('th');
    col2.innerHTML = 'Speak Now';
    let col3 = document.createElement('th');
    col3.innerHTML = "Incomplete";

    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    table.appendChild(row);
}


myTable.appendChild(table);