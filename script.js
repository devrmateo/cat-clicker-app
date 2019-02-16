function clickModule() {

  let cats = [
    {
      name: 'Kitty',
      pic: 'https://farm4.staticflickr.com/3914/15171599148_6ef1d09dab_b.jpg">'
    },
    {
      name: 'Snuggles',
      pic: 'https://farm4.staticflickr.com/3914/15171599148_6ef1d09dab_b.jpg">'
    },
    {
      name: 'Socks',
      pic: 'https://farm4.staticflickr.com/3914/15171599148_6ef1d09dab_b.jpg">'
    },
    {
      name: 'Mittens',
      pic: 'https://farm4.staticflickr.com/3914/15171599148_6ef1d09dab_b.jpg">'
    },
    {
      name: 'Bobbles',
      pic: 'https://farm4.staticflickr.com/3914/15171599148_6ef1d09dab_b.jpg">'
    }
  ];

  populateList(cats);
  populateDisplay(cats);
}

function populateList(listData) {
  const list = document.querySelector('.list');
  const cats = listData.map(listItem => {
    return `<li class="listItem"><button>${listItem.name}</button></li>`;
  }).join('');
  list.innerHTML = cats;
}

function populateDisplay(displayData) {
  const displayArea = document.querySelector('.cat');
  const list = document.querySelector('.list');
  list.addEventListener('click', (e) => {
    let filteredCat = displayData.filter((cat) =>
      cat.name === e.target.innerHTML)[0];
    let header = document.createElement('h3');
    header.innerHTML = filteredCat.name;
    let image = document.createElement('img');
    image.src = filteredCat.pic;
    image.alt = filteredCat.name;
    displayArea.innerHTML = '';
    displayArea.insertAdjacentElement('afterbegin', header);
    displayArea.insertAdjacentElement('beforeend', image);
  });
}

clickModule();
