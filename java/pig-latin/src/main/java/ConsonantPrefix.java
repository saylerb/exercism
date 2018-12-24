public class ConsonantPrefix {
    private StringBuilder prefix = new StringBuilder();

    public String getPrefix() {
        return prefix.toString();
    }

    public void clear() {
        prefix = new StringBuilder();
    }

    public void append(String character) {
        prefix.append(character);
    }

    public boolean isEmpty() {
        return prefix.length() == 0;
    }

    public String getLastLetter() {
        return String.valueOf(prefix.charAt(prefix.length() - 1));
    }

}