function addFunc(a) {
    return function addA(b) {
      return a + b;
    }
  }
  const add10 = addFunc(10);
  console.log(add10(18));