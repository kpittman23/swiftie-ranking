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
    'The Story Of Us', 'Never Grow Up', 'Enchanted', 'Better Than Revenge', 'Innocent', 'Haunted',
    'Last Kiss', 'Long Live', 'Ours', 'If This Was A Movie', 'Superman'];
let red = ['State Of Grace', 'Red', 'Treacherous', 'I Knew You Were Trouble', 'All Too Well', '22',
    'I Almost Do', 'We Are Never Ever Getting Back Together', 'Stay Stay Stay', 'The Last Time',
    'Holy Ground', 'Sad Beautiful Tragic', 'The Lucky One', 'Everything Has Changed (ft. Ed Sheeran)',
    'Starlight', 'Begin Again', 'The Moment I Knew', 'Come Back...Be Here', 'Girl At Home', 'Ronan',
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
    '1989': ninteenEightyNine,
    'Reputation': reputation,
    'Lover': lover,
    'folklore': folklore,
    'evermore': evermore
}



let albumNames = Object.keys(allAlbums);
for (let albumName of albumNames) {
    let album = allAlbums[albumName];
    for (let song of album) {
        const content = `<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>${song}</title>
    <link rel="stylesheet" href="../../../style.css" type="text/css">
    <script type="text/javascript" src="../../../function.js"></script>
</head>

<body>
    <div class="outerDiv">
        <h1 style="text-align:center;font-family:'Roboto',sans-serif;">${song}</h1>
        <div class="leftDiv">
            <div>
                <h3>Rate this song:</h3>
            </div>
            <div class="btn-group" role="group">
                <button type="button" class="btn btn-outline-primary" onClick="selectButton(event)">1</button>
                <button type="button" class="btn btn-outline-primary" onClick="selectButton(event)">2</button>
                <button type="button" class="btn btn-outline-primary" onClick="selectButton(event)">3</button>
                <button type="button" class="btn btn-outline-primary" onClick="selectButton(event)">4</button>
                <button type="button" class="btn btn-outline-primary" onClick="selectButton(event)">5</button>
                <button type="button" class="btn btn-outline-primary" onClick="selectButton(event)">6</button>
                <button type="button" class="btn btn-outline-primary" onClick="selectButton(event)">7</button>
                <button type="button" class="btn btn-outline-primary" onClick="selectButton(event)">8</button>
                <button type="button" class="btn btn-outline-primary" onClick="selectButton(event)">9</button>
                <button type="button" class="btn btn-outline-primary" onClick="selectButton(event)">10</button>
            </div>
            <div class="textboxDiv">
                <textarea id="strengths" name="strengths" placeholder="strengths" class="textboxes"></textarea>
            </div>
            <div class="textboxDiv">
                <textarea id="weaknesses" name="weaknesses" placeholder="Weaknesses" class="textboxes"></textarea>
            </div>
            <div class="textboxDiv">
                <textarea id="notes" name="notes" placeholder="Notes" class="textboxes"></textarea>
            </div>
            <div>
                <input type="button" class="submitButton" id="bt" value="Submit" onclick="commitAndPush()" />
            </div>
        </div>

        <div class="rightDiv">
            <h3>Fun facts and stuff</h3>
            <li>This is the first fact</li>
            <li>This is the second fact</li>
            <br/>
            <a href="https://genius.com/Taylor-swift-tied-together-with-a-smile-lyrics">Lyrics</a>
            <br/>
            <a href="https://genius.com/Taylor-swift-tied-together-with-a-smile-lyrics">Music Video</a>
        </div>
    </div>
</body>

</html>`
        fs.writeFile('C:/Users/katey/swiftie-ranking/' + albumName + '/' + song + '.html', content, err => {
            if (err) {
                console.error(err)
                return
            }
            //file written successfully
        })
    }
}