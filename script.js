let clicks = 1;

function clickModule() {
     const counters = document.querySelectorAll('figcaption');
     counters.forEach(function(counter) {
          counter.innerHTML = 'Number of clicks: ' + clicks;
          clicks += 1;
     });
}

function runPage() {
     const catDivs = document.querySelectorAll('.image');
     catDivs.forEach(function(catDiv) {
          catDiv.addEventListener('click', clickModule);
     });
}

runPage();