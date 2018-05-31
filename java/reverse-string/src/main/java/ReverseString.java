class ReverseString {
    String reverse(String inputString) {
        char[] charArray = inputString.toCharArray();

        StringBuilder newString = new StringBuilder();

        for (int i = charArray.length - 1; i >= 0; i--) {
            newString.append(charArray[i]);
        }

        return newString.toString();
    }

}