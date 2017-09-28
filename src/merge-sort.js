/**
* Algorithm (Merge Sort):
*   divide and conquer. divide the input in 2 halves. call the merge algo on both
*     ------> (going into recurrsion)
*     this is a recursive call, so it will keep on dividing the input array
*     once the array len is <= 2
*       merge & return
*     merge each pair of returned arrays
*     <----- (comming out of recurrsion)
*
*/

/*
* To save memory, we will use a global array.
* You can use local arrays, but each recurrsive call would have an overhead of in this case
*/
let items = [0, 3, 5, -2, 4, -1, 8, 2, 3, 1, -9];

/**
* @param low lower bound
* @param high upper bound. is exclusive
*/
function mergeSort(arr, low, high) {

  if ((high-low) <= 2) {
    return doMerge(low, high);
  }

  let mid = (high - low)/2 + low;
  let left = mergeSort(low, mid);
  let right = mergeSort(mid, high);

  // put back
  for (let i = low; i < high; i++) {
    items[i] = sorted[i-low];
  }

  console.log(items);
}

function doMerge(low, high) {
  // once code reaches here, it means that the parts low-mid & mid-high are sorted
  // we now have to merge them together

  // pointers on bother parts to remember how much of each part has been merged
  let p1 = low;
  let p2 = mid;
  let sorted = [];

  while (p1 < mid || p2 < high) {
    if (items[p1] < items[p2]) {
      sorted.push( items[p1] );
      p1++; // move to next position
    } else {
      sorted.push( items[p2] );
      p2++;
    }

    console.log(items.slice(low, high));
  }

  return sorted;
}

mergeSort(0, items.length);
