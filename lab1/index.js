class Stack {
    constructor(value = []) {
        this.data = value;
    }

    print = () => {
        console.log(this.data);
    }

    isEmpty = () => {
        return this.data.length === 0;
    }

    clear = () => {
        this.data = [];
    }

    peek = () => {
        const i = this.data.length - 1;
        return this.data[i];
    }

    pop = () => {
        return this.data.pop();
    }

    push = (value) => {
        this.data.push(value);
    }
}

const stack = new Stack([1, 2, 3, 4, 5]);
stack.print();
// console.log(stack.isEmpty());
// console.log(stack.peek());
// console.log(stack.pop());
// console.log(stack.pop());
// // stack.clear();
// stack.print();
// stack.push(8);
// stack.print();
