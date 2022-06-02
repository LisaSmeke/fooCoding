'use strict';

const bookTitles = [
  'sapiens',
  'homo_deus',
  'thinking_fast_and_slow',
  'thinking_in_systems',
  'outliers',
  'algorithms_to_live_by',
  'doughnut_economics',
  'nudge',
  'factfulness',
  'prosperity_without_growth',
];
// console.log(bookTitles);

// function createList() {
//   const myBookList = document.createElement('ul');

//   for (let i = 0; i < bookTitles.length; i++) {
//     const book = bookTitles[i];
//     myBookList.innerHTML += `<li>${book}</li>`;
//   }
//   return myBookList;
// }

// document.body.append(createList());

const myBooks = {
  sapiens: {
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    language: 'English',
    pages: 512,
    published: 2015,
    stars: '4.39',
    ratings: '770,909',
  },
  homo_deus: {
    title: 'Homo Deus',
    author: 'Yuval Noah Harari',
    language: 'English',
    pages: 450,
    published: 2017,
    stars: '4.22',
    ratings: '205,002',
  },
  thinking_fast_and_slow: {
    title: 'Thinking Fast and Slow',
    author: 'Daniel Kahneman',
    language: 'English',
    pages: 499,
    published: 2011,
    stars: '4.17',
    ratings: '404,000',
  },
  thinking_in_systems: {
    title: 'Thinking in Systems',
    author: 'Donella H. Meadows & Diana Wright',
    language: 'English',
    pages: 240,
    published: 2008,
    stars: '4.21',
    ratings: '12,307',
  },
  outliers: {
    title: 'Outliers',
    author: 'Malcolm Gladwell',
    language: 'English',
    pages: 309,
    published: 2008,
    stars: '4.18',
    ratings: '677,977',
  },
  algorithms_to_live_by: {
    title: 'Algorithms to Live By',
    author: 'Brian Christian & Tom Griffiths',
    language: 'English',
    pages: 368,
    published: 2016,
    stars: '4.13',
    ratings: '25,767',
  },
  doughnut_economics: {
    title: 'Doughnut Economics',
    author: 'Kate Raworth',
    language: 'English',
    pages: 384,
    published: 2017,
    stars: '4.21',
    ratings: '9,063',
  },
  nudge: {
    title: 'Nudge',
    author: 'Richard H. Thaler & Cass R. Sunstein',
    language: 'English',
    pages: 260,
    published: 2009,
    stars: '3.83',
    ratings: '76,409',
  },
  factfulness: {
    title: 'Factfulness',
    author: 'Hans Rosling',
    language: 'English',
    pages: 342,
    published: 2018,
    stars: '4.36',
    ratings: '154,142',
  },
  prosperity_without_growth: {
    title: 'Prosperity Without Growth',
    author: 'Tim Jackson',
    language: 'English',
    pages: 264,
    published: 2009,
    stars: '3.92',
    ratings: '1,640',
  },
};

Object.keys(myBooks);

const body = document.querySelector('body');

// Site heading
const header = document.createElement('h1');
header.setAttribute('class', 'header');
header.textContent = '10 Books About Human Behavior And The World We Live In ';
body.append(header);

// Add main container
const mainContainer = document.createElement('section');
mainContainer.setAttribute('class', 'container');
body.append(mainContainer);

function displayList() {
  const myBookList = document.createElement('div');
  myBookList.setAttribute('class', 'bookContainer');

  for (let key in myBooks) {
    document.createElement('div');
    myBookList.innerHTML += `<div class ="bookDiv"><ul> <h2 class= "title">${myBooks[key].title}</h2> <h3 class="author" id=${key}>by ${myBooks[key].author}</h3> <li class ="language">Language: ${myBooks[key].language}</li> <li class="pages">Pages: ${myBooks[key].pages}</li> <li class="published"> Year of publication: ${myBooks[key].published}</li> <li class="stars"> Rating: ${myBooks[key].ratings} readers gave this book ${myBooks[key].stars} out of 5 stars</li> </ul></div>`;
  }
  return myBookList;
}

mainContainer.append(displayList());

const bookCovers = {
  sapiens: './images/sapiens.jpg',
  homo_deus: './images/homo_deus.jpg',
  thinking_fast_and_slow: './images/thinking_fast_and_slow.jpg',
  thinking_in_systems: './images/thinking_in_systems.jpg',
  outliers: './images/outliers.jpg',
  algorithms_to_live_by: './images/algorithms_to_live_by.jpg',
  doughnut_economics: './images/doughnut_economics.jpg',
  nudge: './images/nudge.jpg',
  factfulness: './images/factfulness.jpg',
  prosperity_without_growth: './images/prosperity_without_growth.jpg',
};

Object.keys(bookCovers);

// This is not the ideal code, need to find a way to iterate
const cover1 = document.getElementById('sapiens');
sapiens.innerHTML += `<li><a href="https://www.goodreads.com/book/show/23692271-sapiens" target="blank"><img src=${bookCovers['sapiens']} alt="Book cover of: Sapiens"></a></li>`;

const cover2 = document.getElementById('homo_deus');
homo_deus.innerHTML += `<li><a href="https://www.goodreads.com/book/show/31138556-homo-deus?from_search=true&from_srp=true&qid=CDvj5Uz3GE&rank=1" target="blank"><img src=${bookCovers['homo_deus']} alt="Book cover of: Homo Deus"></a></li>`;

const cover3 = document.getElementById('thinking_fast_and_slow');
thinking_fast_and_slow.innerHTML += `<li><a href="https://www.goodreads.com/book/show/11468377-thinking-fast-and-slow?from_search=true&from_srp=true&qid=HfsdfXS1tc&rank=1" target="blank"><img src=${bookCovers['thinking_fast_and_slow']} alt="Book cover of: Thinking Fast and Slow"></a></li>`;

const cover4 = document.getElementById('thinking_in_systems');
thinking_in_systems.innerHTML += `<li><a href="https://www.goodreads.com/book/show/3828902-thinking-in-systems?from_search=true&from_srp=true&qid=LXSiqqMSgS&rank=1" target="blank"><img src=${bookCovers['thinking_in_systems']} alt="Book cover of: Thinking in Systems"></a></li>`;

const cover5 = document.getElementById('outliers');
outliers.innerHTML += `<li><a href="https://www.goodreads.com/book/show/3228917-outliers?from_search=true&from_srp=true&qid=j55lx1iTH8&rank=1" target="blank"><img src=${bookCovers['outliers']} alt="Book cover of: Outliers"></a></li>`;

const cover6 = document.getElementById('algorithms_to_live_by');
algorithms_to_live_by.innerHTML += `<li><a href="https://www.goodreads.com/book/show/25666050-algorithms-to-live-by?from_search=true&from_srp=true&qid=wnBbvV4WeP&rank=1" target="blank"><img src=${bookCovers['algorithms_to_live_by']} alt="Book cover of: Algorithms to Live By"></a></li>`;

const cover7 = document.getElementById('doughnut_economics');
doughnut_economics.innerHTML += `<li><a href="https://www.goodreads.com/book/show/29214420-doughnut-economics?from_search=true&from_srp=true&qid=pFO1ECQMMh&rank=1" target="blank"><img src=${bookCovers['doughnut_economics']} alt="Book cover of: Doughnut Economics"></a></li>`;

const cover8 = document.getElementById('nudge');
nudge.innerHTML += `<li><a href="https://www.goodreads.com/book/show/3450744-nudge?from_search=true&from_srp=true&qid=pviPlvuCwC&rank=1" target="blank"><img src=${bookCovers['nudge']} alt="Book cover of: Nudge"></a></li>`;

const cover9 = document.getElementById('factfulness');
factfulness.innerHTML += `<li><a href="https://www.goodreads.com/book/show/34890015-factfulness?ac=1&from_search=true&qid=LMGhlHqAju&rank=1" target="blank"><img src=${bookCovers['factfulness']} alt="Book cover of: Factfulness"></a></li>`;

const cover10 = document.getElementById('prosperity_without_growth');
prosperity_without_growth.innerHTML += `<li><a href="https://www.goodreads.com/book/show/6489716-prosperity-without-growth?from_search=true&from_srp=true&qid=PhXghrPu18&rank=1" target="blank"><img src=${bookCovers['prosperity_without_growth']} alt="Book cover of: Prosperity Without Growth"></a></li>`;
