class Stack{
    constructor(){
        this.array = [];
    }

    push(value){
        this.array.push(value)
    }

    pop(){
        return this.array.pop()
    }

    peek(){
        return this.array[this.array.length - 1]
    }

    size(){
        return this.array.length
    }

    isEmpty(){
        return this.array.length === 0
    }
}

const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
console.log(stack)
console.log(stack.peek())
console.log(stack.size())
console.log(stack.isEmpty())

const stack2 = new Stack()
stack2.push(5)
stack2.push(10)
stack2.push(15)
stack2.push(20)
stack2.push(25)
stack2.pop()
stack2.pop()
console.log(stack2)

const stack3 = new Stack()

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(let i of arr){
    if(i % 2 === 0){
        stack3.push(i)
    }
}

console.log(stack3)

const stack4 = new Stack()
stack4.push(100)
console.log(stack4.peek())
stack4.push(200)
console.log(stack4.peek())
stack4.push(300)
console.log(stack4.peek())
stack4.push(400)
console.log(stack4.peek())