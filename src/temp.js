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
let items = [4, 0, 3, -2, 6]; //, -1, 8, 2, 6, 1, -9];

/**
* @param low lower bound
* @param high upper bound. is exclusive
*/
function mergeSort(arr) {
  console.log('arr: ', arr);

  if (arr.length === 1) {
    return arr;
  } else if (arr.length === 2) {
    if (arr[0] <= arr[1]) return arr;
    else return [arr[1], arr[0]]; // make in ascending order
  }

  let low = 0;
  let high = arr.length;
  let mid = Math.floor((high - low)/2 + low);

  let left = mergeSort(arr.slice(low, mid));
  let right = mergeSort(arr.slice(mid, high));

  // once code reaches here, it means that the parts low-mid & mid-high are sorted
  // we now have to merge them together

  // pointers on bother parts to remember how much of each part has been merged
  let p1 = low;
  let p2 = mid;
  let sorted = [];

  console.log('left: ', left);
  console.log('p1: ', p1);
  console.log('right: ', right);
  console.log('p2: ', p2);
  console.log('high: ', high);

  // for (let i = low; i < high; i++) {
  // while ( (p1 < mid || p2 < high) && (p1+p2) <= high) {
  while (!(p1 > mid) && !(p2 > high)) {
    if (p1 >= mid) {
      sorted.push(arr[p2++]);
    }
    else if (p2 >= high) {
      sorted.push(arr[p1++]);
    }
    else if (arr[p1] < arr[p2]) {
      sorted.push(arr[p1++]);
    } else if (p2 < high){
      sorted.push(arr[p2++]);
    }
  }

  console.log('sorted: ', sorted);

  return sorted;
}

console.log('items: ', items);
let sorted = mergeSort(items);
console.log(sorted);
