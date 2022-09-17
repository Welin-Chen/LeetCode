class Trie {
  constructor() {
    this.root = {};
  }

  insert(word) {
    let node = this.root;
    for (let c of word) {
      if (!node[c]) node[c] = {};
      node = node[c];
    }
    node.isWord = true;
  }

  search(word) {
    let node = this.root;
    for (let c of word) {
      if (!node[c]) return false;
      node = node[c];
    }
    return node.isWord === true;
  }

  startsWith(prefix) {
    let node = this.root;
    for (let c of prefix) {
      if (!node[c]) return false;
      node = node[c];
    }
    return true;
  }
}

let trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple")); // return True
console.log(trie.search("app")); // return False
console.log(trie.startsWith("app")); // return True
trie.insert("app");
console.log(trie.search("app")); // return True
// console.log(trie);
