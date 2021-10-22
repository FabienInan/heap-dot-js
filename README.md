<h1 align="center">Heap Dot Js</h3>

<!-- ABOUT THE PROJECT -->
## About The Project

Efficient and useful implementation of the heap structure

## Getting Started

```bash
yarn add heap-dot-js # if you use yarn

npm install --save heap-dot-js # if you use npm
```

## Usage
```js
// Basic usage example
import Heap from 'heap-dot-js';

const minHeap = new MinHeap();
minHeap.buildHeap([2, 3, 4, 5, -2, 56, 6, 1]);
console.log(minHeap.values); //[-2, 1, 4, 2, 3, 56, 6, 5]
minHeap.add(-12);
console.log(minHeap.values); //[-12, -2, 1, 4, 2, 3, 56, 6, 5]
console.log(minHeap.removeTop()); //-12
console.log(minHeap.values); //[-2, 1, 4, 2, 3, 56, 6, 5]

const maxHeap = new MaxHeap();
maxHeap.buildHeap([2, 3, 4, 5, -2, 56, 6, 1]);
console.log(maxHeap.values); //[56, 5, 6, 3, -2, 4, 2, 1]
maxHeap.add(86); 
console.log(maxHeap.values); //[86, 56, 5, 6, 3, -2, 4, 2, 1, -12]
console.log(maxHeap.removeTop()); //86
console.log(maxHeap.values); //[56, 5, 6, 3, -2, 4, 2, 1]
```
