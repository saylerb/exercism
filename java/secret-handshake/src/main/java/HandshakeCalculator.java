import static java.util.Collections.reverse;

import java.util.ArrayList;
import java.util.List;

class HandshakeCalculator {
    private static final String REVERSE_NUMBER = "10000";

    List<Signal> calculateHandshake(int number) {
        ArrayList<Signal> result = new ArrayList<>();
        String binaryString = DecimalToBinary.convert(number);

        String reversedBinaryString = new StringBuilder(binaryString).reverse().toString();

        for (int i = 0; i < reversedBinaryString.length(); i++) {
            if (reversedBinaryString.charAt(i) == '1' && i < Signal.values().length) {
                result.add(Signal.values()[i]);
            }
        }

        if (reversedBinaryString.length() == REVERSE_NUMBER.length()) {
            reverse(result);
            return result;
        }

        return result;
    }

}
