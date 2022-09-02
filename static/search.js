const searchInput = document.getElementById('movie-search');
const datalist = document.getElementById('movies');
const dataitems = new Map();
const dataSummaries = new Map();
Array.from(datalist.children).forEach(function (ch) {
  dataitems.set(ch.value, ch.getAttribute('data-value'));
  if (navigator.userAgent.match(/firefox/i)) {
    ch.innerHTML = ch.value;
  }
});

searchInput.addEventListener('change', function(e) {
  const targetLocation = dataitems.get(e.target.value);
  if (targetLocation) {
    window.location.href = targetLocation;
  }
});
