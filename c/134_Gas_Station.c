#include <stdio.h>
int canCompleteCircuit(int* gas, int gasSize, int* cost, int costSize) {
  int sum = 0;
  int gas_tank = 0;
  int start = 0;

  for (int i = 0; i < gasSize; i++) {
    sum += gas[i] - cost[i];
    gas_tank += gas[i] - cost[i];

    if (gas_tank < 0) {
      start = i + 1;
      gas_tank = 0;
    }
  }
  return sum < 0 ? -1 : start;
}