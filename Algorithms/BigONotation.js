//First Solution Counter

function addUpTo(n) {
  let total = 0;
  for (let i = 0; i < n; i++) {
    total += i;
  }
  return total;
}

// Second Solution Counter

function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}

function TestPerformance() {
  // First Solution run
  //check time with function performance
  let t1 = performance.now();
  addUpTo(100000000);
  let t2 = performance.now();
  console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);
  /** Thats what i got in First one 0.08559500001138076 seconds */
  // Second Solution run
  //check time with function performance
  let t1 = performance.now();
  addUpTo2(100000000);
  let t2 = performance.now();
  console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);
  /** Thats what i got in second 0.00001999997766688466 seconds away smaller */
}

function RUN() {
  TestPerformance();
}

runBtn.addEventListener("click", RUN);
