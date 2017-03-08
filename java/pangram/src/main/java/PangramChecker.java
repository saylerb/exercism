import java.util.Arrays;

public class PangramChecker {

    public boolean isPangram(String input) {
        String[] alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
        String[] inputList = input.toLowerCase().split("");
        int result = 0;

        for (String letter : alphabet) {
            for (String character : inputList) {
                if (letter.equals(character)) {
                    result = result + 1;
                    break;
                }
            }
        }

        if (result >= 26){
            return true;
        } else {
            return false;
        }

    }

}
