class Stack {
    constructor() {
        this.array = [];
    }

    push(value) {
        this.array.push(value);
    }

    pop() {
        return this.array.pop();
    }

    peek() {
        return this.array[this.array.length - 1];
    }

    size() {
        return this.array.length;
    }

    isEmpty() {
        return this.array.length === 0;
    }

    print() {
        console.log(this.array);
    }
}


//1

const stack1 = new Stack();

stack1.push(10);
stack1.push(20);
stack1.push(30);

console.log(stack1.pop());
console.log(stack1.peek());


//2

const stack2 = new Stack();

stack2.push(1);
stack2.push(2);
stack2.push(3);

console.log(stack2.size()); 


//3

const stack3 = new Stack();

stack3.push("HTML");
stack3.push("CSS");
stack3.push("JS");

stack3.print(); 


//4

const arr4 = [1, 2, 3, 4, 5];
const stack4 = new Stack();

for (let value of arr4) {
    stack4.push(value);
}

stack4.pop();

const result4 = [];

while (!stack4.isEmpty()) {
    result4.push(stack4.pop());
}

result4.reverse();

console.log(result4);


//5

const stack5 = new Stack();
const str5 = "hello";

for (let char of str5) {
    stack5.push(char);
}

let result5 = "";

while (!stack5.isEmpty()) {
    result5 += stack5.pop();
}

console.log(result5);


//6

function checkBrackets(str) {
    const stack6 = new Stack();

    for (let char of str) {
        if (char === "(") {
            stack6.push(char);
        } else if (char === ")") {
            if (stack6.isEmpty()) {
                return false;
            }

            stack6.pop();
        }
    }

    return stack6.isEmpty();
}

console.log(checkBrackets("()()()")); 
console.log(checkBrackets("((()))")); 
console.log(checkBrackets("(()"));    
console.log(checkBrackets(")("));     


//7

const stack7 = new Stack();

stack7.push(10);
stack7.push(20);
stack7.push(30);

const copiedStack7 = new Stack();

for (let value of stack7.array) {
    copiedStack7.push(value);
}

stack7.print();        
copiedStack7.print();  