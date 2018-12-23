public class PigLatinTranslator {
    public String translate(String input) {
        StringBuilder consonantPrefix = new StringBuilder();

        for (String letter : input.split("")) {
            if (!isVowel(letter)) {
                consonantPrefix.append(letter);
            } else {
                break;
            }
        }

        String prefix = consonantPrefix.toString();

        if (prefix.isEmpty()) {
            return String.format("%say", input);
        }

        String suffix = input.substring(prefix.length(), input.length());

        return String.format("%s%say", suffix, prefix);
    }

    private boolean isVowel(String letter) {
        String[] vowels = {"a", "e", "i", "o", "u"};
        for (String vowel : vowels) {
            if (vowel.equals(letter)) {
                return true;
            }
        }
        return false;
    }
}
