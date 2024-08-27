class Stack{
    constructor (){
        this.items =[]
        this.count =0
    }

    push(value){
        this.items[this.count] = value
        this.count+=1 

        console.log(`Added item ${this.items[this.count-1]}`)

    } 
    pop(){
        if(this.count!=0){
            const deleteItem=this.items[this.count-1] 
            console.log("Deleted Itme",deleteItem)
            this.count-=1

        }else{
            console.log("Array is empty")
        }
    }

    peek(){
        const item = this.items[this.count-1];
        console.log("Top item is ",item)
    }

    isEmpty(){
        console.log(this.count==0 ? "Stack is empty" : `Stack has ${this.count} items`)
    }

    print(){
        let str=''
        for(let i=0;i<this.count;i++){
            str+=this.items[i] + ' '
        }
        console.log(str)
    }
}

const stack = new Stack()
stack.isEmpty();
stack.print();
stack.push(100);
stack.push(200);
stack.push(300);
stack.push(400);
stack.print();
stack.pop();
stack.pop();
stack.print();
stack.peek();
stack.isEmpty();
stack.print();
