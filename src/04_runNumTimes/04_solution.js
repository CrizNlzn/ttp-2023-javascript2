function runTimes(functionA, num) {
  let count = 0;
  while (count < num) {
    functionA();
    count++;
  }
}
