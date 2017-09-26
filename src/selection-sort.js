/**
* find the maximum, put it in last position
*  find the next maximum, put it in 2nd last
*   find the next max, put it in 3rd last
*    and so on, decreaing the spawn of searching list by 1 each iteration
*/

function selectionSort(optimized) {
  let items = [6, 0, 21, -4, 7, 6, 1, 19, 8, 9];

  let n = items.length;
  console.log(items);

  for (let i = 0; i < n - 1; i++) {
    let max = items[0];
    let idx = 0;

    let needToSwap = false;

    for (let j = 0;  j < (n - i); j++) {
      if (items[j] > max) {
        max = items[j];
        idx = j;

        needToSwap = true;
      }
    }


    if (optimized && !needToSwap) {
      // asked to run optimized version
      // no need to swap in the last iteration, so array is sorted
      console.log('Array sorted, returning');
      return;
    }
    // swap with last
    let idxOfLast = n-i-1; // changes in each iteration
    let temp = items[idx];
    items[idx] = items[idxOfLast];
    items[idxOfLast] = temp;

    console.log(items);
  }
}

selectionSort();
console.log('Running optimized version');
selectionSort(true);
