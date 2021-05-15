var defaultarray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
document.addEventListener("DOMContentLoaded", function (event) {
  addition(defaultarray);
});
function sortfunction() {
  const sortarray = defaultarray.sort((a, b) => a - b);
  addition(sortarray)
  defaultarray = sortarray;
}
function sufflefunction() {
  const shuffled = defaultarray.sort(() => Math.random() - 0.5);
  addition(shuffled)
}
function addition(myarray) {
  for (i = 0; i < defaultarray.length; i++) {
    document.getElementById("number" + i).innerHTML = defaultarray[i];
  }
}
