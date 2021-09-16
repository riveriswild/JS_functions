/* задание 1 */



function analyzeArray() {
    let array = [1,2,4,3,0];
    let arrayEven=[];
    let arrayOdd = [];
    let arrayZero = [];
    
    for (var i = 0; i<array.length; i++) {
      if (typeof array[i] == 'number') {
        if (array[i] % 2 !== 0) {
          arrayOdd.push(array[i]);
        }
        else if (array[i] % 2 === 0) {
          if (array[i] === 0) {
            arrayZero.push(array[i]);
          }
          else {
            arrayEven.push(array[i]);
          }
        }
      }
    }
    if (arrayZero.length) {
      console.log ('В массиве есть ноль.');
    }
    console.log (`В массиве ${arrayEven.length} четных чисел и ${arrayOdd.length} нечетных`);
  }
    
  
  analyzeArray()
  
        
        
        
  
  /*задание 2*/

  function isPrime(n) {
    if (n < 2) {
      return 'Число должно быть больше 1';
    } else if (n === 2) {
      return 'Простое число';
    }
  
    let i = 2;
    const limit = Math.sqrt(n);
    while (i <= limit) {
      if (n % i === 0) {
        return 'Составное число';
      }
      i +=1;
    }
    
    return 'Простое число';
  }
  
  
  console.log(100, isPrime(10));
  console.log(7, isPrime(5));
  console.log(0, isPrime(0));
  console.log(23, isPrime(1));
  console.log(2, isPrime(8));
  console.log(4, isPrime(13));

  /*задание 3*/

  function addFunc(a) {
    return function addA(b) {
      return a + b;
    }
  }
  const add10 = addFunc(10);
  console.log(add10(18));

  /* task 4 */
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
