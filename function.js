var githubApi = {};
githubApi.header = {};
githubApi.header.Accept = "application/vnd.github.v3+json"; //make sure we use v3
githubApi.header.Authorization = "token <token>";
githubApi.baseUrl = "https://api.github.com";
githubApi.username = "";
githubApi.nameRepo = "";
githubApi.sha = "";
githubApi.path = "";
githubApi.newFile = true;

function apiRequest(method, url, jsonData, callback) {

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

function getUserInfo() {

    githubApi.username = "kpittman23";
    githubApi.nameRepo = "swiftie-ranking";
    githubApi.header.Authorization = "token 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";
}

function commitAndPush() {
    getUserInfo();
    var currentUser = localStorage.getItem("user");

    githubApi.path = "data/" + currentUser + "/" + document.title + ".txt";

    var ranking = document.getElementsByClassName("btn btn-outline-primary active")[0].innerHTML;
    var strengths = document.getElementById("strengths");
    var weaknesses = document.getElementById("weaknesses");
    var notes = document.getElementById("notes")

    var data = "Ranking: " + ranking + "\nStrengths: " + strengths +
        "\nWeaknesses: " + weaknesses + "\nNotes: " + notes;

    var jsonData = new Object();
    jsonData.message = "data upload";
    jsonData.content = btoa(data); //encode64tim
    jsonData.path = githubApi.path;
    jsonData.branch = "master";

    var url = githubApi.baseUrl + "/repos/" + githubApi.username + "/" + githubApi.nameRepo + "/contents/" + githubApi.path;
    jsonData = JSON.stringify(jsonData); //api expects json as string
    console.log(jsonData);
    apiRequest("PUT", url, jsonData, function (r) {
        console.log(r);
    });
}

function selectButton(evt) {
    var i, buttonByClass;
    buttonByClass = document.getElementsByClassName("btn btn-outline-primary");
    for (i = 0; i < buttonByClass.length; i++) {
        buttonByClass[i].className = buttonByClass[i].className.replace(" active", "");
    }
    evt.currentTarget.className += " active";
}

function selectUser() {
    var select = document.getElementById('selectUser');
    var option = select.options[select.selectedIndex];

    var selectedUser = option.value;
    localStorage.setItem("user", selectedUser);
    console.log(selectedUser);

    var url = "users/tiles.html";
    console.log(url);

    window.open(url);
}

function checkCompletionStatus(song) {

    getUserInfo();
    //get tree url from master branch's last commit
    var url = githubApi.baseUrl+"/repos/"+githubApi.username+"/"+githubApi.nameRepo+"/branches/master";
    apiRequest("GET", url, null, function(r) {
        var jsonRsp = JSON.parse(r);
        var treeUrl = jsonRsp.commit.commit.tree.url+"?recursive=1";
        //get tree
        apiRequest("GET", treeUrl, null, function(r){
            var jsonRsp = JSON.parse(r);
            console.log(r);
            for(var i in jsonRsp.tree) {
                
            }
        });
    });
    return "test";
}