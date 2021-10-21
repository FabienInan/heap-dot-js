class Heap {
    constructor(isMin = true) {
        this.values = [];
        this.isMin = isMin;
    }

    buildHeap = (array) => {
        this.values = array;
        for (let i = Math.floor(array.length / 2);  i >= 0 ; i--) {
            this.siftDown(i);
        }
    }

    siftDown = (idx) => {
        if (!this.isLeaf(idx)) {
            let leftChildIdx = this.getLeftChild(idx);
            let rightChildIdx = this.getRightChild(idx);
            let largestIdx = idx;
            if (this.isMin ? 
                this.values[largestIdx] > this.values[leftChildIdx] : this.values[largestIdx] < this.values[leftChildIdx]) {
                largestIdx = leftChildIdx;
            }
            if (this.isMin ? 
                this.values[largestIdx] >= this.values[rightChildIdx] : this.values[largestIdx] <= this.values[rightChildIdx]) {
                largestIdx = rightChildIdx;
            }
            if (idx !== largestIdx) {
                this.swap(idx, largestIdx);
                this.siftDown(largestIdx);
            }
        }
    }

    siftUp = (idx) => {
        let currentIdx = idx;
        let parentIdx = this.getParent(currentIdx);
        while (currentIdx > 0 && this.isMin ? 
            this.values[currentIdx] < this.values[parentIdx] : this.values[currentIdx] > this.values[parentIdx]) {
            this.swap(currentIdx, parentIdx);
            currentIdx = parentIdx;
            parentIdx = this.getParent(parentIdx);
        }
    }

    swap = (firstIdx, secondIdx) => {
        const temp = this.values[firstIdx];
        this.values[firstIdx] = this.values[secondIdx];
        this.values[secondIdx] = temp;
    }

    removeTop = () => {
        if (this.values.length < 1) {
            return null;
        }
        const top = this.values[0];
        const end = this.values.pop();
        this.values[0] = end;
        this.siftDown(0);
        return top;
    }

    add = (value) => {
        this.values.push(value);
        this.siftUp(this.values.length - 1);
    }

    peek = () => this.values[0];

    getParent = (idx) => Math.floor((idx - 1) / 2);

    getLeftChild = (idx) => idx * 2 + 1;

    getRightChild = (idx) => idx * 2 + 2;

    isLeaf = (idx) => idx > Math.floor(this.values.length / 2) && idx < this.values.length - 1;
}

export class MinHeap extends Heap {
    constructor() {
        super(true);
    }
}

export class MaxHeap extends Heap {
    constructor() {
        super(false);
    }
}
