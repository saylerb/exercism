import java.util.HashMap;
import java.util.Arrays;

public class RnaTranscription {
    private HashMap<String, String> key;

    public RnaTranscription() {
        this.key = new HashMap<String, String>() {
            {
                put("G", "C");
                put("C", "G");
                put("T", "A");
                put("A", "U");
            }
        };
    }

    public String ofDna(String dnaString) {
        if (dnaString == "") {
            return "";
        } else {
            String result = "";
            String[] nucleotides = dnaString.split("");

            for (String nucleotide : nucleotides) {
                result = result.concat(this.key.get(nucleotide));
            }
            return result;
        }
    }

}
