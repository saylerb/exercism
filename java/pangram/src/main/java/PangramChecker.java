import java.util.Arrays;
import java.util.List;
import java.util.LinkedList;
import java.util.Iterator;

public class PangramChecker {

    public boolean isPangram(String input) {


        List<String> alphabet =
            new LinkedList(Arrays.asList("abcdefghijklmnopqrstuvwxyz".split("")));

        String[] inputList = input.toLowerCase().split("");
        int result = 0;

        for (String character : inputList) {
            Iterator<String> it = alphabet.iterator();
            while (it.hasNext()) {
                String letter =  it.next();
                if (character.equals(letter)) {
                    it.remove();
                }
            }

        }

        if (alphabet.size() == 0) {
            return true;
        } else {
            return false;
        }

    }

}
