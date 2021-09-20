let current = prompt('First num');
let to = prompt('Second num');

function printNumbers(from, to) {

let timerId = setInterval(function() {
  alert(current);
  if (current == to) {
    clearInterval(timerId);
  }
  current++;
}, 1000);
}

printNumbers(current, to);
