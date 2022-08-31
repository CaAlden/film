const searchInput = document.getElementById('movie-search');
const datalist = document.getElementById('movies');
const dataitems = new Map();
Array.from(datalist.children).forEach(function (ch) {
  dataitems.set(ch.value, ch.getAttribute('data-value'));
});

searchInput.addEventListener('change', function(e) {
  const targetLocation = dataitems.get(e.target.value);
  if (targetLocation) {
    window.location.href = targetLocation;
  }
});
