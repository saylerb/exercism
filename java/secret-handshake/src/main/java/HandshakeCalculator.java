import static java.util.Collections.reverse;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Stack;

class HandshakeCalculator {

    private static Map<Integer, Signal> map = new LinkedHashMap<Integer, Signal>() {
        {
            put(1, Signal.WINK);
            put(10, Signal.DOUBLE_BLINK);
            put(100, Signal.CLOSE_YOUR_EYES);
            put(1000, Signal.JUMP);
        }
    };

    List<Signal> calculateHandshake(int number) {
        ArrayList<Signal> result = new ArrayList<>();

        int binaryNumber = decimalToBinary(number);

        for (int key : map.keySet()) {
            if ((binaryNumber / key) % 10 == 1) {
                result.add(map.get(key));
            }
        }

        if ((binaryNumber / 10000) % 10 == 1) {
            reverse(result);
            return result;
        }

        return result;
    }


    int decimalToBinary(int number) {
        Stack<Integer> stack = new Stack<>();

        while (number > 0) {
            int remainder = number % 2;
            stack.push(remainder);
            number = number / 2;
        }

        int result = 0;

        while (!stack.isEmpty()) {
            int sizeOfStack = stack.size();
            result += Math.pow(10, sizeOfStack - 1) * stack.pop();
        }

        return result;
    }

}
