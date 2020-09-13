function populateCatsList() {

  const list = document.querySelector('.catList')
  const catInfo = [
    cat1 = {
      name: "Snuggles",
      urlInsert: "cat1",
      count: 0,
    },
    cat2 = {
      name: "Snowy",
      urlInsert: "cat2",
      count: 0,
    },
    cat3 = {
      name: "Cute",
      urlInsert: "cat3",
      count: 0,
    },
    cat4 = {
      name: "Uggy",
      urlInsert: "cat4",
      count: 0,
    },
    cat5 = {
      name: "Sleepy",
      urlInsert: "cat5",
      count: 0,
    }
  ]

  catInfo.forEach(cat => {
    const li = document.createElement("li")
    list.appendChild(li)
    const a = document.createElement("a")
    li.className = 'listItem'
    li.appendChild(a)
    a.appendChild(document.createTextNode(`${cat.name}\n`))
    const img = document.createElement("img")
    img.className = `image`
    img.src = `images/${cat.urlInsert}.jpg`
    img.alt = cat.name


    //populate image below header
    a.addEventListener('click', (function (image) {
      return function () {
        const h3 = document.querySelector('.header')
        if (h3.nextElementSibling) {
          h3.nextElementSibling.remove()
        }
        h3.innerHTML = cat.name
        h3.insertAdjacentElement('afterend', image)
        registerClick(cat)
        const counter = document.querySelector('.counter')
        if (counter.firstElementChild) {
          counter.firstElementChild.textContent = cat.count === 0 ? '' : cat.count
        }
      }
    })(img))
  })

  const firstImage = document.createElement('img')
  firstImage.src = `images/${catInfo[0].urlInsert
    }.jpg`
  const firstHeader = document.querySelector('.header')
  firstHeader.innerHTML = catInfo[0].name


  document.querySelector('.header').insertAdjacentElement('afterend', firstImage)

}

function registerClick(cat) {
  const img = document.querySelector('.image')
  const counter = document.querySelector('.counter')
  const text = document.createTextNode('Number of clicks: ')
  if (!counter.firstChild) {
    counter.appendChild(text)
  }




  counter.firstElementChild && counter.firstElementChild.textContent === ''




  let count = cat.count
  img.addEventListener('click', function (num) {
    return function () {
      num += 1
      populateCounter(num, cat)
      return num
    }
  }(count))
}

function populateCounter(num, cat) {

  cat.count = num

  const counter = document.querySelector('.counter')

  if (counter.firstElementChild) {
    counter.firstElementChild.remove()
  }


  const span = document.createElement("span")
  const content = document.createTextNode(` ${cat.count} `)
  span.appendChild(content)
  counter.appendChild(span)



}

(function runApp() {
  populateCatsList()
})()