import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

class PigLatinTranslator {

    String translate(String input) {
        List<String> words = Arrays.asList(input.split("\\s+"));

        List<String> translated = words.stream()
            .map(this::translateWord)
            .collect(Collectors.toList());

        return String.join(" ", translated);
    }

    private String translateWord(String word) {
        ConsonantPrefix consonantPrefix = new ConsonantPrefix();

        for (String letter : word.split("")) {
            // short circuit if current consonant clusters is an edge case:
            // and treat as a vowel
            if (consonantPrefix.getPrefix().equals("xr") ||
                consonantPrefix.getPrefix().equals("yt")) {
                consonantPrefix.clear();
                break;
            }

            if (isConsonant(letter)) {
                // y follows a consonant
                if (!consonantPrefix.isEmpty() && letter.equals("y")) {
                    break;
                } else {
                    consonantPrefix.append(letter);
                }
            } else if (!consonantPrefix.isEmpty()) {
                if (consonantPrefix.getLastLetter().equals("q") && letter.equals("u")) {
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

        String prefix = consonantPrefix.getPrefix();

        if (prefix.isEmpty()) {
            return outputWord("", word);
        }
        return outputWord(prefix, word);
    }

    private String outputWord(String prefix, String input) {
        String suffix = getSuffix(input, prefix);

        return String.format("%s%say", suffix, prefix);
    }

    private String getSuffix(String input, String prefix) {
        return input.substring(prefix.length());
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
