//First Solution Counter

function addUpTo(n) {
  let total = 0;
  for (let i = 0; i < n; i++) {
    total += i;
  }
  return total;
  // n additions
  // n assignments
  // in (i++) n additions n assignments
  // (let total = 0) 1 assignment
  // (let i = 0) 1 assignment
  // (i<n) n comparisons
  // time calculate 5n + 2
}

// Second Solution Counter

function addUpTo2(n) {
  return (n * (n + 1)) / 2;
  // 3 simple operations 
  // 1 multiplication
  // 1 addition
  // 1 division
  // time calculate 3
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
