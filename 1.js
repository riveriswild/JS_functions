function analyzeArray() {
    let array = [1,2,4,3,0];
    let arrayEven=[];
    let arrayOdd = [];
    let arrayZero = [];
    
    for (var i = 0; i < array.length; i++) {
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
  