import java.util.Arrays;
import java.util.Set;
import java.util.stream.Collectors;

class IsogramChecker {

    boolean isIsogram(String phrase) {
        if (phrase.isEmpty()) {
            return true;
        }

        String lowerCaseNoDelimiters = phrase.toLowerCase().replaceAll("-|\\s", "");
        String[] characters = lowerCaseNoDelimiters.split("");
        Set<String> set = Arrays.stream(characters).collect(Collectors.toSet());

        return set.size() == lowerCaseNoDelimiters.length();
    }

}
