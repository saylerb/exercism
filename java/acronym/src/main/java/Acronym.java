class Acronym {
    private String phrase;

    Acronym(String phrase) {
        this.phrase = phrase;
    }

    String get() {
        String result = "";
        for (String word : phrase.split("[-\\s]")) {
            result += word.toUpperCase().charAt(0);
        }
        return result;
    }

}
