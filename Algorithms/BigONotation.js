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
  // time calculate 5n + 2 f(n) = n
}

// Second Solution Counter

function addUpTo2(n) {
  return (n * (n + 1)) / 2;
  // 3 simple operations
  // 1 multiplication
  // 1 addition
  // 1 division
  // time calculate 3 f(n) = 3
}

// another example on big(o)
function countUpAndDown(n) {
  console.log("Going up");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("At the Top!\nGoing down ...");
  for (let i = n - 1; i > 0; i--) {
    console.log(i);
  }
  console.log("bye!");
  // operations
  // 2 of(let i = 0) 2 assignments
  // 2 of (i < n , i > 0) 2*n comparisons
  // 2 of(i++ , i--) 1 addition 1 subtraction loaded each n so we have 2*n and 2*n assignments
  // time calculate 6*n + 2
}

function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
  // 👍👍 O(n^2) like exponential carve
}

function TestPerformance2() {
  let T1 = performance.now();
  countUpAndDown(10000);
  let T2 = performance.now();
  console.log(`Time Elapsed: ${(T2 - T1) / 1000} seconds`);
  /** this test will give me 1.0845250000129454 seconds */
}

function TestPerformance() {
  // First Solution run
  //check time with function performance
  let T1 = performance.now();
  addUpTo(100000000);
  let T2 = performance.now();
  console.log(`Time Elapsed: ${(T2 - T1) / 1000} seconds`);
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
  TestPerformance2();
}

runBtn.addEventListener("click", RUN);
