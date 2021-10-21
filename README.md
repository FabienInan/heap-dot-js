<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
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

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/FabienInan/heapDotJs/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/FabienInan/heapDotJs/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/FabienInan/heapDotJs/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/FabienInan/heapDotJs/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/fabieninan/