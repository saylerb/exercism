class ReverseString {
    String reverse(String inputString) {
        StringBuilder newString = new StringBuilder(inputString);

        return newString.reverse().toString();
    }
}