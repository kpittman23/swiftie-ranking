const fs = require('fs')

let debut = ['Tim Mcgraw', 'Picture to Burn', 'Teardrops On My Guitar', 'A Place in this World',
    'Cold As You', 'The Outside', 'Tied Together with a Smile', 'Stay Beautiful', 'Should\'ve Said No',
    'Mary\'s Song (Oh My My My)', 'Our Song', 'I\'m Only Me When I\'m With You', 'Invisible',
    'A Perfectly Good Heart'];
let fearless = ['Fearless', 'Fifteen', 'Love Story', 'Hey Stephen', 'White Horse', 'You Belong With Me',
    'Breathe (ft. Colbie Caillat)', 'Tell Me Why', 'You\'re Not Sorry', 'The Way I Loved You',
    'Forever & Always', 'The Best Day', 'Change', 'Jump Then Fall', 'Untouchable', 
    'Forever & Always (Piano Version)', 'Come In With The Rain', 'Superstar', 'The Other Side Of The Door',
    'Today Was A FairyTale', 'You All Over Me', 'Mr. Perfectly Fine', 'We Were Happy', 'That\'s When',
    'Don\'t You', 'Bye Bye Baby'];
let speakNow = ['Mine', 'Sparks Fly', 'Back To December', 'Speak Now', 'Dear John', 'Mean',
    'The Story Of Us', 'Never Grown Up', 'Enchanted', 'Better Than Revenge', 'Innocent', 'Haunted',
    'Last Kiss', 'Long Live', 'Ours', 'If This Was A Movie', 'Superman'];
let red = ['State Of Grace', 'Red', 'Tracherous', 'I Knew You Were Trouble', 'All Too Well', '22',
    'I Almost Do', 'We Are Never Ever Getting Back Together', 'Stay Stay Stay', 'The Last Time',
    'Holy Ground', 'Sad Beautiful Tragic', 'The Lucky One', 'Everything Has Changed (ft. Ed Sheeran)',
    'Staright', 'Begin Again', 'The Moment I Knew', 'Come Back...Be Here', 'Girl At Home', 'Ronan',
    'Better Man', 'Nothing New', 'Babe', 'Message In A Bottle', 'I Bet You Think About Me',
    'Forever Winter', 'Run (ft. Ed Sheeran)', 'The Very First Night', 'All Too Well (10 Minute Version)'];
let ninteenEightyNine = ['Welcome To New York', 'Blank Space', 'Style', 'Out Of The Woods',
    'All You Had To Do Was Stay', 'Shake It Off', 'I Wish You Would', 'Bad Blood', 'Wildest Dreams',
    'How You Get The Girl', 'This Love', 'I Know Places', 'Clean', 'Wonderland', 'You Are In Love',
    'New Romantics'];
let reputation = ['Ready For It', 'End Game', 'I Did Something Bad', 'Don\'t Blame Me', 'Delicate',
    'Look What You Made Me Do', 'So It Goes...', 'Gorgeous', 'Getaway Car', 'King Of My Heart',
    'Dancing With Our Hands Tied', 'Dress', 'This Is Why We Can\'t Have Nice Things',
    'Call It What You Want', 'New Year\'s Day'];
let lover = ['I Forgot That You Existed', 'Cruel Summer', 'Lover', 'The Man', 'The Archer',
    'I Think He Knows', 'Miss Americana & The Heartbreak Price', 'Paper Rings', 'Cornelia Street',
    'Death By A Thousand Cuts', 'London Boy', 'Soon You\'ll Get Better (ft. The Chicks)', 'False God',
    'You Need To Calm Down', 'Afterglow', 'ME! (ft. Brendon Urie)', 'It\'s Nice To Have A Friend',
    'Daylight'];
let folklore = ['the 1', 'cardigan', 'the last great american dynasty', 'exile (ft. Bon Iver)',
    'my tears ricochet', 'mirrorball', 'seven', 'august', 'this is me trying', 'illicit affairs',
    'invisible string', 'mad woman', 'epiphany', 'betty', 'peace', 'hoax', 'the lakes'];
let evermore = ['willow', 'champagne problems', 'gold rush', '\'tis the damn season', 'tolerate it',
    'no body, no crime (ft. HAIM)', 'happiness', 'dorothea', 'coney island (ft. The National)',
    'ivy', 'cowboy like me', 'long story short', 'marjorie', 'closure', 'evermore (ft. Bon Iver)',
    'right where you left me', 'it\'s time to go'];

let allAlbums = {
    'Taylor Swift': debut,
    'Fearless (Taylor\'s Version)': fearless,
    'Speak Now': speakNow,
    'Red (Taylor\'s Version)': red,
    'TS - 1989': ninteenEightyNine,
    'Reputation': reputation,
    'Lover': lover,
    'folklore': folklore,
    'evermore': evermore
}

const content = `<!DOCTYPE html>
<html>
<head>
    <title>Save form Data in a Text File using JavaScript</title>
    <style>
        * {
            box-sizing: border-box;
        }
    	div {
            padding: 10px;
            background-color: #f6f6f6;
            overflow: hidden;
        }
    	input[type=text], textarea, select {
            width: 100%;
            padding: 12px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        input[type=button]{ 
            width: auto;
            float: right;
            cursor: pointer;
            padding: 7px;
        }
    </style>
</head>
<body>
    <div>
        
        <!--Add few elements to the form-->

        <div>
            <input type="text" id="txtName" placeholder="Enter your name" />
        </div>
        <div>
            <input type="text" id="txtAge" placeholder="Enter your age" />
        </div>
        <div>
            <input type="text" id="txtEmail" placeholder="Enter your email address" />
        </div>
        <div>
            <select id="selCountry">
                <option selected value="">-- Choose the country --</option>
                <option value="India">India</option>
                <option value="Japan">Japan</option>
                <option value="USA">USA</option>
            </select>
        </div>
        <div>
            <textarea id="msg" name="msg" placeholder="Write some message ..." style="height:100px"></textarea>
        </div>

        <!--Add to button to save the data.-->
        <div>
            <input type="button" id="bt" value="Save data to file" onclick="saveFile()" />
        </div>
    </div>
</body>
<script>
    let saveFile = () => {
    	
        // Get the data from each element on the form.
    	const name = document.getElementById('txtName');
        const age = document.getElementById('txtAge');
        const email = document.getElementById('txtEmail');
        const country = document.getElementById('selCountry');
        const msg = document.getElementById('msg');
        
        // This variable stores all the data.
        let data = 
            '\r Name: ' + name.value + ' \r\n ' + 
            'Age: ' +age.value + ' \r\n ' + 
            'Email: ' + email.value + ' \r\n ' + 
            'Country: ' + country.value + ' \r\n ' + 
            'Message: ' + msg.value;
        
        // Convert the text to BLOB.
        const textToBLOB = new Blob([data], { type: 'text/plain' });
        const sFileName = 'formData.txt';	   // The file to save the data.

        let newLink = document.createElement("a");
        newLink.download = sFileName;

        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }

        newLink.click(); 
    }
</script>
</html>`

let albumNames = Object.keys(allAlbums);
for (let albumName of albumNames) {
    let album = allAlbums[albumName];
    for (let song of album) {
        fs.writeFile('C:/Users/katey/swiftie-ranking/'+albumName + '/' + song + '.html', content, err => {
            if (err) {
                console.error(err)
                return
            }
            //file written successfully
        })
    }
}