#include <stdio.h>
#include <stdlib.h>

struct Node {
  int val;
  int numNeighbors;
  struct Node** neighbors;
};

void dfs(struct Node* clone, struct Node* s, struct Node** visit) {
  clone->val = s->val;
  clone->numNeighbors = s->numNeighbors;
  visit[s->val] = clone;

  int n = s->numNeighbors;
  if (n == 0) return;
  clone->neighbors = malloc(sizeof(struct Node*) * n);

  for (int i = 0; i < n; i++) {
    if (!visit[s->neighbors[i]->val]) {
      clone->neighbors[i] = malloc(sizeof(struct Node));
      dfs(clone->neighbors[i], s->neighbors[i], visit);
    } else {
      clone->neighbors[i] = visit[s->neighbors[i]->val];
    }
  }
  return;
}

struct Node* cloneGraph(struct Node* s) {
  if (s == NULL) return NULL;

  struct Node* clone = malloc(sizeof(struct Node));
  struct Node* visit[101] = {NULL};

  dfs(clone, s, visit);
  return clone;
}

int main(int argc, char const* argv[]) {
  // Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
  // Output: [[2,4],[1,3],[2,4],[1,3]]
  // Explanation: There are 4 nodes in the graph.
  // 1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val =
  // 4). 2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val
  // = 3). 3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node
  // (val = 4). 4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd
  // node (val = 3).

  struct Node* n1 = malloc(sizeof(struct Node));
  n1->val = 1;
  n1->numNeighbors = 2;
  n1->neighbors = malloc(sizeof(struct Node*) * n1->numNeighbors);

  struct Node* n2 = malloc(sizeof(struct Node));
  n2->val = 2;
  n2->numNeighbors = 2;
  n2->neighbors = malloc(sizeof(struct Node*) * n2->numNeighbors);

  struct Node* n3 = malloc(sizeof(struct Node));
  n3->val = 1;
  n3->numNeighbors = 2;
  n3->neighbors = malloc(sizeof(struct Node*) * n3->numNeighbors);

  struct Node* n4 = malloc(sizeof(struct Node));
  n4->val = 1;
  n4->numNeighbors = 2;
  n4->neighbors = malloc(sizeof(struct Node*) * n4->numNeighbors);

  n1->neighbors[0] = n2;
  n1->neighbors[1] = n4;

  n2->neighbors[0] = n1;
  n2->neighbors[1] = n3;

  n3->neighbors[0] = n2;
  n3->neighbors[1] = n4;

  n4->neighbors[0] = n1;
  n4->neighbors[1] = n3;

  struct Node* clone = cloneGraph(n1);

  return 0;
}
