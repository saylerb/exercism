import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

class HandshakeCalculator {
    private static final String REVERSE_NUMBER = "10000";
    private final DecimalToBinary decimalToBinary;

    public HandshakeCalculator() {
        decimalToBinary = new DecimalToBinary();
    }

    List<Signal> calculateHandshake(int number) {
        ArrayList<Signal> result = new ArrayList<>();
        String binaryString = decimalToBinary.convert(number);

        String reversedBinaryString = new StringBuilder(binaryString).reverse().toString();

        for (int i = 0; i < reversedBinaryString.length(); i++) {
            if (reversedBinaryString.charAt(i) == '1' && i < Signal.values().length) {
                result.add(Signal.values()[i]);
            }
        }

        if (reversedBinaryString.length() == REVERSE_NUMBER.length()) {
            Collections.reverse(result);
        }

        return result;
    }

}
