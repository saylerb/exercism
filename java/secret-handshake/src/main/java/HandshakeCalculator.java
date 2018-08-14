import static java.util.Collections.reverse;

import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

class HandshakeCalculator {

    private static final String REVERSE_NUMBER = "10000";

    List<Signal> calculateHandshake(int number) {
        ArrayList<Signal> result = new ArrayList<>();
        StringBuilder binaryString = decimalToBinaryStringBuilder(number);

        binaryString.reverse();

        for (int i = 0; i < binaryString.length(); i++) {
            if (binaryString.charAt(i) == '1' && i < Signal.values().length) {
                result.add(Signal.values()[i]);
            }
        }

        if (binaryString.length() == REVERSE_NUMBER.length()) {
            reverse(result);
            return result;
        }

        return result;
    }


    StringBuilder decimalToBinaryStringBuilder(int number) {
        Stack<Integer> stack = new Stack<>();

        while (number > 0) {
            int remainder = number % 2;
            stack.push(remainder);
            number = number / 2;
        }

        StringBuilder result = new StringBuilder();

        while (!stack.isEmpty()) {
            result.append(String.valueOf(stack.pop()));
        }

        return result;
    }

}
