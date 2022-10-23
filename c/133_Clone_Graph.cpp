/*
// Definition for a Node.
class Node {
public:
    int val;
    vector<Node*> neighbors;
    Node() {
        val = 0;
        neighbors = vector<Node*>();
    }
    Node(int _val) {
        val = _val;
        neighbors = vector<Node*>();
    }
    Node(int _val, vector<Node*> _neighbors) {
        val = _val;
        neighbors = _neighbors;
    }
};
*/
#include <iostream>
#include <unordered_map>
#include <vector>
using namespace std;

class Node {
 public:
  int val;
  vector<Node*> neighbors;

  Node() {
    val = 0;
    neighbors = vector<Node*>();
  }
  Node(int v) {
    val = v;
    neighbors = vector<Node*>();
  }
  Node(int v, vector<Node*> _neightbors) {
    val = v;
    neighbors = _neightbors;
  }
};

class Solution {
  unordered_map<Node*, Node*> map;

 public:
  Node* cloneGraph(Node* node) {
    if (node && !map[node]) {
      map[node] = new Node(node->val);

      for (auto n : node->neighbors) {
        map[node]->neighbors.push_back(cloneGraph(n));
      }
    }
    return map[node];
  }
};

int main(int argc, char const* argv[]) {
  Node* n1 = new Node(1);
  Node* n2 = new Node(2);
  Node* n3 = new Node(3);
  Node* n4 = new Node(4);

  n1->neighbors.push_back(n2);
  n1->neighbors.push_back(n4);

  n2->neighbors.push_back(n1);
  n2->neighbors.push_back(n3);

  n3->neighbors.push_back(n2);
  n3->neighbors.push_back(n4);

  n4->neighbors.push_back(n1);
  n4->neighbors.push_back(n3);

  Solution s;
  cout << s.cloneGraph(n1)->neighbors[1]->val;

  return 0;
}
