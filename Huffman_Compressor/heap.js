export { BinaryHeap };

// class BinaryHeap {

//     constructor() {
//         this.heap = [];
//     }

//     insert(value) {
//         this.heap.push(value);
//         this.bubbleUp(); // heapify
//     }

//     size() {
//         return this.heap.length;
//     }

//     empty(){
//         return ( this.size()===0 );
//     }

//     //using iterative approach
//     bubbleUp() {
//         let index = this.size() - 1;

//         while (index > 0) {
//             let element = this.heap[index],
//                 parentIndex = Math.floor((index - 1) / 2),
//                 parent = this.heap[parentIndex];

//             if (parent[0] >= element[0]) break;
//             this.heap[index] = parent;
//             this.heap[parentIndex] = element;
//             index = parentIndex
//         }
//     }

//     extractMax() {
//         const max = this.heap[0];
//         const tmp = this.heap.pop();
//         if(!this.empty()) {
//             this.heap[0] = tmp;
//             this.sinkDown(0);
//         }
//         return max;
//     }

//     sinkDown(index) {

//         let left = 2 * index + 1,
//             right = 2 * index + 2,
//             largest = index;
//         const length = this.size();

//         // console.log(this.heap[left], left, length, this.heap[right], right, length, this.heap[largest]);

//         if (left < length && this.heap[left][0] > this.heap[largest][0]) {
//             largest = left
//         }
//         if (right < length && this.heap[right][0] > this.heap[largest][0]) {
//             largest = right
//         }
//         // swap
//         if (largest !== index) {
//             let tmp = this.heap[largest];
//             this.heap[largest] = this.heap[index];
//             this.heap[index] = tmp;
//             this.sinkDown(largest)
//         }
//     }
// }

class BinaryHeap {
  constructor() {
    this.heap_array = [];
  }

  /// returns size of the min heap
  size() {
    return this.heap_array.length;
  }

  /// returns if the heap is empty
  empty() {
    return this.size() === 0;
  }

  /// insert a new value in the heap
  push(value) {
    this.heap_array.push(value);
    this.up_heapify();
  }

  /// updates heap by up heapifying
  up_heapify() {
    var current_index = this.size() - 1;
    while (current_index > 0) {
      var current_element = this.heap_array[current_index];
      var parent_index = Math.trunc((current_index - 1) / 2);
      var parent_element = this.heap_array[parent_index];

      if (parent_element[0] < current_element[0]) {
        break;
      } else {
        this.heap_array[parent_index] = current_element;
        this.heap_array[current_index] = parent_element;
        current_index = parent_index;
      }
    }
  }

  /// returns the top element (smallest value element)
  top() {
    return this.heap_array[0];
  }

  /// delete the top element
  pop() {
    if (this.empty() == false) {
      var last_index = this.size() - 1;
      this.heap_array[0] = this.heap_array[last_index];
      this.heap_array.pop();
      this.down_heapify();
    }
  }

  /// updates heap by down heapifying
  down_heapify() {
    var current_index = 0;
    var current_element = this.heap_array[0];
    while (current_index < this.size()) {
      var child_index1 = current_index * 2 + 1;
      var child_index2 = current_index * 2 + 2;
      if (child_index1 >= this.size() && child_index2 >= this.size()) {
        break;
      } else if (child_index2 >= this.size()) {
        let child_element1 = this.heap_array[child_index1];
        if (current_element[0] < child_element1[0]) {
          break;
        } else {
          this.heap_array[child_index1] = current_element;
          this.heap_array[current_index] = child_element1;
          current_index = child_index1;
        }
      } else {
        var child_element1 = this.heap_array[child_index1];
        var child_element2 = this.heap_array[child_index2];
        if (
          current_element[0] < child_element1[0] &&
          current_element[0] < child_element2[0]
        ) {
          break;
        } else {
          if (child_element1[0] < child_element2[0]) {
            this.heap_array[child_index1] = current_element;
            this.heap_array[current_index] = child_element1;
            current_index = child_index1;
          } else {
            this.heap_array[child_index2] = current_element;
            this.heap_array[current_index] = child_element2;
            current_index = child_index2;
          }
        }
      }
    }
  }
}