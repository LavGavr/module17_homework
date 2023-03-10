export function cyclesTypeCheck(arrData) {
  let zeroCount = 0;
  let evenCount = 0;
  let oddCount = 0;

  for (let i = 0; i < arrData.length; i++) {
    if (arrData[i] === 0) {
      zeroCount += 1;
    }
    if (typeof arrData[i] !== "number" || typeof arrData[i] === "NaN") {
      arrData[i];
      console.log(`${arrData[i]} - не число`);
    }
    if (arrData[i] % 2 === 0) {
      evenCount += 1;
    } else {
      oddCount += 1;
    }
  }
  console.log(`${zeroCount} - кол-во нулей`);
  console.log(`${evenCount} - чётных чисел`);
  console.log(`${oddCount} - нечётных чисел`);
  return zeroCount;
}
