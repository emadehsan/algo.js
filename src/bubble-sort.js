
let items = [10, 24, -3, 14, 2, 0, -11, 82, 39, 7];

/*
* Go through the loop, comparing each pair at a time.
* if the first item of the pair is larger than the 2nd, swap them.
*   this way, at the end of the first iteration, the largest item would have reached at the end of the array (n-1)th place
* So, next time, we would have to iterate till (n-2)th place and then till (n-3)th place.
* Hence there would be n(n-1)/2 total iterations. Thus, Bubble sort is a O(N^2) algorthim
*/

/**
* @param Boolean optimized
* if ran with optimization, the algo looks that:
*     if there was no swaps in a whole iteration:
*         then the array has been sorted
*/
function bubbleSort(optimized) {

  let n = items.length;

  // go over all items
  for (let i = 0; i < n; i++) {

    let swapped = false;

    // compare the pair, bubble the largest to the end
    for (let j = 0; j < (n - i - 1); j++) {

      if (items[j] > items[j+1]) {
        // swap
        let temp = items[j];
        items[j] = items[j+1];
        items[j+1] = temp;

        swapped = true;
      }
    }
    console.log('OuterIter#: ', i, items);


    if (optimized && !swapped) {
      // asked to run optimized version
      console.log('There were no swaps in last iteration, so array is sorted. Returning.');
      return;
    }
  }

}

bubbleSort(true);
