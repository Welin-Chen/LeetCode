var MyQueue = function() {
    this.st1=[];
    this.st2=[];
};

MyQueue.prototype.push = function(x) {
    this.st1.push(x);
};

MyQueue.prototype.pop = function() {
    if(this.st2.length===0 && this.st1.length===0)return -1;
    if(this.st2.length===0){
        while(this.st1.length>0){
            this.st2.push(this.st1.pop());
        }
    }
    return this.st2.pop();
};

MyQueue.prototype.peek = function() {
    if(this.st2.length===0){
        while(this.st1.length>0){
            this.st2.push(this.st1.pop());
        }
    }
    return this.st2.at(-1);
};

MyQueue.prototype.empty = function() {
    return this.st1.length===0 && this.st2.length===0;
};

let q=new MyQueue ();
q.push(1);
q.push(3);
q.push(7);

console.log(q.peek());
console.log(q.empty());
console.log(q.pop());
console.log(q.peek());
console.log(q);