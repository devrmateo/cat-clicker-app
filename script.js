function populateCats() {
  const img1 = document.querySelector('.one')
  const img2 = document.querySelector('.two')
  img1.src = "images/cat.jpg"
  img2.src = "images/cat2.jpg"
  const cat1Name = "Bubbles"
  const cat2Name = "Daisy"
  const cat1Header = document.querySelector('.header1')
  const cat2Header = document.querySelector('.header2')
  cat1Header.innerHTML = cat1Name
  cat2Header.innerHTML = cat2Name
}

function registerClick() {
  const img1 = document.querySelector('.one')
  const img2 = document.querySelector('.two')
  const arr = [img1, img2]
  let count = 0
  addListener(arr, count)
}

function addListener(images, count) {
  images.forEach(image => {
    image.addEventListener('click', (function (num) {
      return function () {
        num += 1
        populateCounter(num, image)
        return num
      }
    })(count))
  })
}

function populateCounter(num, image) {
  const img = image
  const counter1 = document.querySelector('.counter1')
  const counter2 = document.querySelector('.counter2')

  if (img.className === 'one' && counter1.firstElementChild) {
    counter1.firstElementChild.remove()
  } else if (img.className === 'two' && counter2.firstElementChild) {
    counter2.firstElementChild.remove()
  }

  const span = document.createElement("span")
  const content = document.createTextNode(` ${num}`)

  span.appendChild(content)

  if (img.className === 'one') {
    counter1.appendChild(span)
  } else {
    counter2.appendChild(span)
  }
}

(function runApp() {
  populateCats()
  registerClick()
})()