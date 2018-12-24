import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class PigLatinTranslator {
    public String translate(String input) {
        List<String> words = Arrays.asList(input.split("\\s+"));

        List<String> translated = words.stream()
            .map(this::translateWord)
            .collect(Collectors.toList());

        return String.join(" ", translated);
    }

    private String translateWord(String input) {
        StringBuilder consonantPrefix = new StringBuilder();

        for (String letter : input.split("")) {
            // short circuit if current consonant clusters is an edge case:
            // and treat as a vowel
            if (consonantPrefix.toString().equals("xr") ||
                 consonantPrefix.toString().equals("yt")) {
                consonantPrefix = new StringBuilder();
                break;
            }

            if (isConsonant(letter)) {
                // y follows a consonant
                if (consonantPrefix.length() > 0 && letter.equals("y")) {
                    break;
                } else {
                    consonantPrefix.append(letter);
                }
            } else if (consonantPrefix.length() > 0) {
                String previousLetter = String.valueOf(consonantPrefix.charAt(consonantPrefix.length() - 1));

                if (previousLetter.equals("q") && letter.equals("u")) {
                    consonantPrefix.append(letter);
                } else {
                    // letter following q is not u, ignore
                    break;
                }
            } else {
                // letter is a vowel, stop building prefix
                break;
            }
        }

        String prefix = consonantPrefix.toString();

        if (prefix.isEmpty()) {
            return outputWord("", input);
        }
        return outputWord(prefix, input);
    }

    private String outputWord(String prefix, String input) {
        String suffix = getSuffix(input, prefix);

        return String.format("%s%say", suffix, prefix);
    }

    private String getSuffix(String input, String prefix) {
        return input.substring(prefix.length(), input.length());
    }

    private boolean isConsonant(String letter) {
        String[] vowels = {"a", "e", "i", "o", "u"};
        for (String vowel : vowels) {
            if (vowel.equals(letter)) {
                return false;
            }
        }
        return true;
    }
}
