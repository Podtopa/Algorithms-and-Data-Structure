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

const stack = new Stack([6, 3, 5, 2, 5, 1, 1, 5, 3, 4, 5]);
stack.print();
let array = [];

// ----- 1

while (!stack.isEmpty()) {
    const value = stack.pop();
    array.push(value);
    if (!stack.isEmpty()) {
        stack.pop();
    }
}

while (array.length != 0) {
    stack.push(array.pop());
}

stack.print();

// ----- 2

let min = Infinity;
while (!stack.isEmpty()) {
    const value = stack.pop();
    array.push(value);
    if (value < min) {
        min = value;
    }
}

while (array.length != 0) {
    const item = array.pop();
    stack.push(item);
    if (item === min) {
        stack.push(0);
    }
}

stack.print();

// ----- 3

const top = stack.peek();

while (!stack.isEmpty()) {
    const value = stack.pop();
    if (value !== top) {
        array.push(value);
    }
}

while (array.length != 0) {
    const item = array.pop();
    stack.push(item);
}

stack.print();
