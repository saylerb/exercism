import java.util.Stack;

class DecimalToBinary {
    static String convert(int decimalNumber) {
        Stack<Integer> stack = new Stack<>();

        while (decimalNumber > 0) {
            int remainder = decimalNumber % 2;
            stack.push(remainder);
            decimalNumber = decimalNumber / 2;
        }

        StringBuilder result = new StringBuilder();

        while (!stack.isEmpty()) {
            result.append(String.valueOf(stack.pop()));
        }

        return result.toString();
    }
}
