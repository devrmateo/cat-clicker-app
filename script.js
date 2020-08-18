function populateImage() {
  const img = document.querySelector('img')
  img.src = "images/cat.jpg"
}

function registerClick() {
  populateImage()
  const img = document.querySelector('img')
  console.log(img)
  let count = 0
  img.addEventListener('click', (function (num) {
    return function () {
      num += 1
      populateCounter(num)
      return num
    }
  })(count))


}

function populateCounter(num) {
  const counter = document.querySelector('.counter')
  counter.innerHTML = num
}

(function runApp() {
  registerClick()
})()