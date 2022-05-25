fetch('https://www.breakingbadapi.com/api/characters')
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    console.log(document.documentElement);
    console.log(document.head);
    console.log(document.body);

    // Body Styling
    const body = document.querySelector('body');
    document.querySelector('body').style.backgroundColor = '#212113';
    document.querySelector('body').createElement = 'h1';

    // STYLING
    const style = document.createElement('style');
    style.innerHTML = `
    body{
      font-family: sans-serif;
      color: #2DAD39;
    }

    h1{
      font-size: 55px;
      text-align: center;
    }
    .instructions{
      font-size: 20px;
      color: #7F7F5C;
    }
    .wrapper{
      max-width: 1700px; 
      border: 5px solid white;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
    }
    .character-div {
      border: 3px solid #7F7F5C;
      width: 450px;
      background-color: #F6EDD9;
      margin: 5px;
      padding: 0px 0px 15px 0px;
    }
    .heading {
      color: #7F7F5C;
      font-size: 30px;
      text-align: center;
    }
    .subheading {
      font-size: 20px;
      text-align: center;
      font-style: italic;
    }
    .button{
      font-size: 20px;
      text-align: center;
      border: 2px solid #7F7F5C;
      border-radius: 4px;
      background-color: green;
      padding: 5px 15px;
      color:#F6EDD9;
      cursor: pointer;
      display: block; 
      margin: 10px auto;
    }
    img{
      width: 352px;
      height: 500px;
      display: block;
      margin: auto; 
    }
    .char-info{
      background-color: #7F7F5C;
      color: #212113;
      margin: 10px 45px 5px 47px;
      padding: 3px;
      width: 350px;
    }

    `;

    document.head.appendChild(style);

    // Header
    const header = document.createElement('h1');
    header.classList.add('title');
    header.textContent = 'Breaking Bad Character Cards';
    body.prepend(header);
    body.append(header);

    // Instructions
    const instructions = document.createElement('h2');
    instructions.setAttribute('class', 'instructions');
    instructions.innerText = "Click on a character's image to find out who's the actor.";
    header.appendChild(instructions);

    // Main wrapper
    const mainWrapper = document.createElement('section');
    mainWrapper.setAttribute('class', 'wrapper');
    body.prepend(mainWrapper);
    body.append(mainWrapper);

    // CHARACTER 1-DIV
    const div1 = document.createElement('div');
    div1.setAttribute('class', 'character-div');
    mainWrapper.prepend(div1);
    mainWrapper.appendChild(div1);

    // Div1 events:

    div1.addEventListener('mouseover', function (e) {
      div1.style.backgroundColor = '#000';
    });

    div1.addEventListener('mouseout', function (e) {
      div1.style.backgroundColor = '#F6EDD9';
    });

    // Char1-Heading
    const char1 = document.createElement('h2');
    char1.setAttribute('class', 'heading');
    char1.innerText = data[0]['name'];

    // Char1-Nickname
    const char1nickname = document.createElement('h3');
    char1nickname.setAttribute('class', 'subheading');
    char1nickname.innerText = `Also known as: "${data[0]['nickname']}"`;

    // Char1-Button Event
    const btn = document.createElement('button');
    btn.setAttribute('class', 'button');
    btn.innerText = 'Seasons';
    btn.addEventListener('click', function (e) {
      alert(`📺 ${data[0]['name']} appears in seasons: "${data[0]['appearance']}"`);
    });

    // Char1-Img
    const char1img = document.createElement('img');
    char1img.src = data[0]['img'];
    char1img.setAttribute('class', 'char-img');

    char1img.addEventListener('mouseover', function (e) {
      char1img.style.cursor = 'pointer';
    });
    char1img.addEventListener('click', function (e) {
      alert(`🎬 ${data[0]['name']} is portrayed by: ${data[0]['portrayed']}`);
    });

    // Char1-Bday
    const char1bday = document.createElement('p');
    const bday1 = data[0]['birthday'];
    char1bday.textContent = `🎂 Birthday: ${bday1}`;
    char1bday.setAttribute('class', 'char-info');

    // Char1-Occupation
    const char1occupation = document.createElement('p');
    char1occupation.textContent = `💰 Occupation: ${data[0]['occupation'][0]}, and ${data[0]['occupation'][1]}`;
    char1occupation.setAttribute('class', 'char-info');

    // Char1-Status
    const char1status = document.createElement('p');
    char1status.textContent = `⚠️ Status: ${data[0]['status']}`;
    char1status.setAttribute('class', 'char-info');

    div1.append(char1, char1nickname, btn, char1img, char1bday, char1occupation, char1status);

    // CHARACTER 2-DIV
    const div2 = document.createElement('div');
    div2.setAttribute('class', 'character-div');
    mainWrapper.appendChild(div2);

    // Div2 events:
    div2.addEventListener('mouseover', function (e) {
      div2.style.backgroundColor = '#000';
    });

    div2.addEventListener('mouseout', function (e) {
      div2.style.backgroundColor = '#F6EDD9';
    });

    // Char2-Heading
    const char2 = document.createElement('h2');
    char2.setAttribute('class', 'heading');
    char2.innerText = data[1]['name'];

    // Char2-Nickname
    const char2nickname = document.createElement('h3');
    char2nickname.setAttribute('class', 'subheading');
    char2nickname.innerText = `Also known as: "${data[1]['nickname']}"`;

    // Char2-Button Event
    const btn2 = document.createElement('button');
    btn2.setAttribute('class', 'button');
    btn2.innerText = 'Seasons';
    btn2.addEventListener('click', function (e) {
      alert(`📺 ${data[1]['name']} appears in seasons: "${data[1]['appearance']}"`);
    });

    // Char2-Img
    const char2img = document.createElement('img');
    char2img.src = data[1]['img'];
    char2img.setAttribute('class', 'char-img');

    char2img.addEventListener('mouseover', function (e) {
      char2img.style.cursor = 'pointer';
    });
    char2img.addEventListener('click', function (e) {
      alert(`🎬 ${data[1]['name']} is portrayed by: ${data[1]['portrayed']}`);
    });

    // Char2-Bday
    const char2bday = document.createElement('p');
    const bday2 = data[1]['birthday'];
    char2bday.textContent = `🎂 Birthday: ${bday2}`;
    char2bday.setAttribute('class', 'char-info');

    // Char2-Occupation
    const char2occupation = document.createElement('p');
    char2occupation.textContent = `💰 Occupation: ${data[1]['occupation']}`;
    char2occupation.setAttribute('class', 'char-info');

    // Char2-Status
    const char2status = document.createElement('p');
    char2status.textContent = `⚠️ Status: ${data[1]['status']}`;
    char2status.setAttribute('class', 'char-info');

    div2.append(char2, char2nickname, btn2, char2img, char2bday, char2occupation, char2status);

    // CHARACTER 3-DIV
    const div3 = document.createElement('div');
    div3.setAttribute('class', 'character-div');
    mainWrapper.appendChild(div3);

    // Div3 events:
    div3.addEventListener('mouseover', function (e) {
      div3.style.backgroundColor = '#000';
    });

    div3.addEventListener('mouseout', function (e) {
      div3.style.backgroundColor = '#F6EDD9';
    });

    // Char3-Heading
    const char3 = document.createElement('h2');
    char3.setAttribute('class', 'heading');
    char3.innerText = data[2]['name'];

    // Char3-Nickname
    const char3nickname = document.createElement('h3');
    char3nickname.setAttribute('class', 'subheading');
    char3nickname.innerText = `Also known as: "${data[2]['nickname']}"`;

    // Char3-Button Event
    const btn3 = document.createElement('button');
    btn3.setAttribute('class', 'button');
    btn3.innerText = 'Seasons';
    btn3.addEventListener('click', function (e) {
      alert(`📺 ${data[2]['name']} appears in seasons: "${data[2]['appearance']}"`);
    });

    // Char3-Img
    const char3img = document.createElement('img');
    char3img.src = data[2]['img'];
    char3img.setAttribute('class', 'char-img');

    char3img.addEventListener('mouseover', function (e) {
      char3img.style.cursor = 'pointer';
    });
    char3img.addEventListener('click', function (e) {
      alert(`🎬 ${data[2]['name']} is portrayed by: ${data[2]['portrayed']}`);
    });

    // Char3-Bday
    const char3bday = document.createElement('p');
    const bday3 = data[2]['birthday'];
    char3bday.textContent = `🎂 Birthday: ${bday3}`;
    char3bday.setAttribute('class', 'char-info');

    // Char3-Occupation
    const char3occupation = document.createElement('p');
    char3occupation.textContent = `💰 Occupation: ${data[2]['occupation']}`;
    char3occupation.setAttribute('class', 'char-info');

    // Char3-Status
    const char3status = document.createElement('p');
    char3status.textContent = `⚠️ Status: ${data[2]['status']}`;
    char3status.setAttribute('class', 'char-info');

    div3.append(char3, char3nickname, btn3, char3img, char3bday, char3occupation, char3status);

    // CHARACTER 4-DIV
    const div4 = document.createElement('div');
    div4.setAttribute('class', 'character-div');
    mainWrapper.appendChild(div4);

    // Div4 events:
    div4.addEventListener('mouseover', function (e) {
      div4.style.backgroundColor = '#000';
    });

    div4.addEventListener('mouseout', function (e) {
      div4.style.backgroundColor = '#F6EDD9';
    });

    // Char4-Heading
    const char4 = document.createElement('h2');
    char4.setAttribute('class', 'heading');
    char4.innerText = data[3]['name'];

    // Char4-Nickname
    const char4nickname = document.createElement('h3');
    char4nickname.setAttribute('class', 'subheading');
    char4nickname.innerText = `Also known as: "${data[3]['nickname']}"`;

    // Char4-Button Event
    const btn4 = document.createElement('button');
    btn4.setAttribute('class', 'button');
    btn4.innerText = 'Seasons';
    btn4.addEventListener('click', function (e) {
      alert(`📺 ${data[3]['name']} appears in seasons: "${data[3]['appearance']}"`);
    });

    // Char4-Img
    const char4img = document.createElement('img');
    char4img.src = data[3]['img'];
    char4img.setAttribute('class', 'char-img');

    char4img.addEventListener('mouseover', function (e) {
      char4img.style.cursor = 'pointer';
    });
    char4img.addEventListener('click', function (e) {
      alert(`🎬 ${data[3]['name']} is portrayed by: ${data[3]['portrayed']}`);
    });

    // Char4-Bday
    const char4bday = document.createElement('p');
    const bday4 = data[3]['birthday'];
    char4bday.textContent = `🎂 Birthday: ${bday4}`;
    char4bday.setAttribute('class', 'char-info');

    // Char4-Occupation
    const char4occupation = document.createElement('p');
    char4occupation.textContent = `💰 Occupation: ${data[3]['occupation']}`;
    char4occupation.setAttribute('class', 'char-info');

    // Char4-Status
    const char4status = document.createElement('p');
    char4status.textContent = `⚠️ Status: ${data[3]['status']}`;
    char4status.setAttribute('class', 'char-info');

    div4.append(char4, char4nickname, btn4, char4img, char4bday, char4occupation, char4status);

    // CHARACTER 5-DIV
    const div5 = document.createElement('div');
    div5.setAttribute('class', 'character-div');
    mainWrapper.appendChild(div5);

    // Div5 events:
    div5.addEventListener('mouseover', function (e) {
      div5.style.backgroundColor = '#000';
    });

    div5.addEventListener('mouseout', function (e) {
      div5.style.backgroundColor = '#F6EDD9';
    });

    // Char5-Heading
    const char5 = document.createElement('h2');
    char5.setAttribute('class', 'heading');
    char5.innerText = data[4]['name'];

    // Char5-Nickname
    const char5nickname = document.createElement('h3');
    char5nickname.setAttribute('class', 'subheading');
    char5nickname.innerText = `Also known as: "${data[4]['nickname']}"`;

    // Char4-Button Event
    const btn5 = document.createElement('button');
    btn5.setAttribute('class', 'button');
    btn5.innerText = 'Seasons';
    btn5.addEventListener('click', function (e) {
      alert(`📺 ${data[4]['name']} appears in seasons: "${data[4]['appearance']}"`);
    });

    // Char5-Img
    const char5img = document.createElement('img');
    char5img.src = data[4]['img'];
    char5img.setAttribute('class', 'char-img');

    char5img.addEventListener('mouseover', function (e) {
      char5img.style.cursor = 'pointer';
    });
    char5img.addEventListener('click', function (e) {
      alert(`🎬 ${data[4]['name']} is portrayed by: ${data[4]['portrayed']}`);
    });

    // Char5-Bday
    const char5bday = document.createElement('p');
    const bday5 = data[4]['birthday'];
    char5bday.textContent = `🎂 Birthday: ${bday5}`;
    char5bday.setAttribute('class', 'char-info');

    // Char5-Occupation
    const char5occupation = document.createElement('p');
    char5occupation.textContent = `💰 Occupation: ${data[4]['occupation']}`;
    char5occupation.setAttribute('class', 'char-info');

    // Char5-Status
    const char5status = document.createElement('p');
    char5status.textContent = `⚠️ Status: ${data[4]['status']}`;
    char5status.setAttribute('class', 'char-info');

    div5.append(char5, char5nickname, btn5, char5img, char5bday, char5occupation, char5status);

    // CHARACTER 6-DIV
    const div6 = document.createElement('div');
    div6.setAttribute('class', 'character-div');
    mainWrapper.appendChild(div6);

    // Div6 events:
    div6.addEventListener('mouseover', function (e) {
      div6.style.backgroundColor = '#000';
    });
    div6.addEventListener('mouseout', function (e) {
      div6.style.backgroundColor = '#F6EDD9';
    });

    // Char6-Heading
    const char6 = document.createElement('h2');
    char6.setAttribute('class', 'heading');
    char6.innerText = data[5]['name'];

    // Char6-Nickname
    const char6nickname = document.createElement('h3');
    char6nickname.setAttribute('class', 'subheading');
    char6nickname.innerText = `Also known as: "${data[5]['nickname']}"`;

    // Char6-Button Event
    const btn6 = document.createElement('button');
    btn6.setAttribute('class', 'button');
    btn6.innerText = 'Seasons';
    btn6.addEventListener('click', function (e) {
      alert(`📺 ${data[5]['name']} appears in seasons: "${data[5]['appearance']}"`);
    });

    // Char6-Img
    const char6img = document.createElement('img');
    char6img.src = data[5]['img'];
    char6img.setAttribute('class', 'char-img');

    char6img.addEventListener('mouseover', function (e) {
      char6img.style.cursor = 'pointer';
    });
    char6img.addEventListener('click', function (e) {
      alert(`🎬 ${data[5]['name']} is portrayed by: ${data[5]['portrayed']}`);
    });

    // Char6-Bday
    const char6bday = document.createElement('p');
    const bday6 = data[5]['birthday'];
    char6bday.textContent = `🎂 Birthday: ${bday6}`;
    char6bday.setAttribute('class', 'char-info');

    // Char6-Occupation
    const char6occupation = document.createElement('p');
    char6occupation.textContent = `💰 Occupation: ${data[5]['occupation']}`;
    char6occupation.setAttribute('class', 'char-info');

    // Char6-Status
    const char6status = document.createElement('p');
    char6status.textContent = `⚠️ Status: ${data[5]['status']}`;
    char6status.setAttribute('class', 'char-info');

    div6.append(char6, char6nickname, btn6, char6img, char6bday, char6occupation, char6status);
  });
