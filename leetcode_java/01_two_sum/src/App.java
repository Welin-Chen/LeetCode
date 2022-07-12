import java.util.Arrays;

public class App {
    public static void main(String[] args) throws Exception {
        Solution solution = new Solution();
        int nums[] = { 2, 5, 5, 11 };
        int result[] = solution.twoSum(nums, 10);
        System.out.println(Arrays.toString(result));
    }
}