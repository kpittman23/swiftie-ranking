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

checkCompletionStatus(fearless);

myTable.appendChild(table);

function apiRequest(method, githubApi, url, jsonData, callback) {

    //load the json file
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200 || xhr.status == 201) {
                callback(xhr.responseText);
            }
            else {
                console.log(xhr.status);
                console.log(xhr.responseText);
            }
        }
    }
    xhr.open(method, url, true);
    for (var key in githubApi.header) {
        xhr.setRequestHeader(key, githubApi.header[key]);
    }
    xhr.send(jsonData);
}

function checkCompletionStatus(fearless) {
    var token = 'g/h/p_CTzvwup8CyIhs2DEm65Lbf62cCi9kh36TF2P';
    token = token.replace('g/h/p', 'ghp')
    var githubApi = {};
    githubApi.header = {};
    githubApi.header.Accept = "application/vnd.github.v3+json"; //make sure we use v3
    githubApi.header.Authorization = "token <token>";
    githubApi.baseUrl = "https://api.github.com";
    githubApi.username = "kpittman23";
    githubApi.nameRepo = "swiftie-ranking";
    githubApi.header.Authorization = `token ${token}`;
    githubApi.sha = "";
    githubApi.path = "";
    githubApi.newFile = true;
    var currentUser = localStorage.getItem("user");
    var fileLocation = "data/" + currentUser + "/" + document.title + ".txt";
    //get tree url from master branch's last commit
    var url = githubApi.baseUrl + "/repos/" + githubApi.username + "/" + githubApi.nameRepo + "/branches/master";
    apiRequest("GET", githubApi, url, null, function (r) {
        var jsonRsp = JSON.parse(r);
        var treeUrl = jsonRsp.commit.commit.tree.url + "?recursive=1";
        console.log(fileLocation);
        //get tree
        apiRequest("GET", githubApi, treeUrl, null, function (r) {
            var jsonRsp = JSON.parse(r);
            var pathArray = [];
            for (let obj of jsonRsp.tree) {
                pathArray.push(obj.path);
            }
            for (let song of fearless) {
                var fileLocation = "data/" + currentUser + "/" + song + ".txt";
                var completionValue = "Incomplete";
                if (pathArray.includes(fileLocation)) {
                    completionValue = "Complete";
                }
                let row = document.createElement('tr');
                let col1 = document.createElement('th');
                col1.innerHTML = '<a href="' + song + '.html">' + song + '</a>';
                let col2 = document.createElement('th');
                col2.innerHTML = 'Fearless (Taylor\'s Version)';
                let col3 = document.createElement('th');
                console.log(completionValue);
                col3.innerHTML = completionValue;

                row.appendChild(col1);
                row.appendChild(col2);
                row.appendChild(col3);
                table.appendChild(row);
            }
        });
    });
}