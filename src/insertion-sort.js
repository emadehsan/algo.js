
/**
* Algorithm:
*   Starting from one side:
*     insertion sort picks one item, consider it sorted space,
*       then inserts that item in proper (sorted) place inside sorted space
*     repeat
*
*/

function insertionSort() {
  let items = [5, 5, -1, 2, 7, 0, 8, -4, 3, -3];

  let n = items.length;

  // go over all items, one at a time [0 -> (n-1)], to the right
  for (let i = 0; i < n; i++) {
    let a = items[i];
    let insertAt = -1;

    // from this item (i), come back till the first [0 <- (i)]
    // shifting all items to the right, that are greater than i-th item
    for (let j = i - 1; j >= 0; j--) {
      if (a < items[j]) {
        // shift j-th item to the right
        items[j + 1] = items[j];
        insertAt = j;
      } else {
        // if no shifting takes place in an iteration,
        // means the place to insert has been found, no more iterations needed
        break;
      }
    }

    if (insertAt >= 0) {
      items[insertAt] = a;
    }
    console.log(items);
  }
}

insertionSort();
