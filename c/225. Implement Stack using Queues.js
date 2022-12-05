
var MyStack = function() {
    this.q1=[];
    this.q2=[];
};

MyStack.prototype.push = function(x) {
    this.q1.push(x);
};

MyStack.prototype.pop = function() {
    if(!this.q1.length){
        return this.q2.pop();
    }

    while(this.q1.length>1){
        this.q2.push(this.q1.shift());
    }
    return this.q1.shift();
};

MyStack.prototype.top = function() {
    if(this.q1.length)return this.q1[this.q1.length-1];
    return this.q2[this.q2.length-1];
};


MyStack.prototype.empty = function() {
    return this.q1.length===0 && this.q2.length===0;
};

// ["MyStack", "push", "push", "top", "pop", "empty"]
// [[], [1], [2], [], [], []]
// Output
// [null, null, null, 2, 2, false]

let st=new MyStack();
st.push(1);
st.push(2);

console.log(st.top());
console.log(st.pop());
console.log(st.empty());