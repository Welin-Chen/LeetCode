import java.util.HashMap;
import java.util.Map;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int key = nums[i];
            if (map.containsKey(key)) {
                int value = map.get(nums[i]);
                return new int[] { value, i };
            } else {
                map.put(target - key, i);
            }
        }
        return new int[2];
    }
}