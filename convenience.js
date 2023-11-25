// Rondom num from "min" to "max".
function natureRandom(min = 0 , max = 1) {
  return Math.floor(Math.random() *(max+1 -min) +min);
}

function randomChoice(arrayLength) {
  return Math.floor(Math.random() *arrayLength);
}

function rangeBetweenArray(init , increase , piece) {
  //initial array
  const initArr = [init];

  for(let i=0; i< piece -1; i++) {
    initArr.push(init += increase);
  }
  return initArr;
}

const getInputById_withNum = (id) => {
  const element = document.getElementById(String(id));
  const valueNum = Number(element.value);
  return valueNum;
}

// export {natureRandom , randomChoice , rangeBetweenArray , getInputById_withNum};