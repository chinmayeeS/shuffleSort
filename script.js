var defaultArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
document.addEventListener("DOMContentLoaded", function (event) {
  addition(defaultArray);
});
function sortfunction() {
  const sortArray = defaultArray.sort((a, b) => a - b);
  addition(sortArray)
  defaultArray = sortArray;
}
function sufflefunction() {
  const shuffled = defaultArray.sort(() => Math.random() - 0.5);
  addition(shuffled)
}
function addition(myarray) {
  for (i = 0; i < defaultArray.length; i++) {
    document.getElementById("number" + i).innerHTML = defaultArray[i];
  }
}
