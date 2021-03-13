object Pangram {

    fun isPangram(input: String): Boolean {
        val lettersRemaining = alphabet()

        for (char in input) {
            lettersRemaining.remove(char.toLowerCase())
        }

        return lettersRemaining.isEmpty()
    }

    private fun alphabet(): MutableSet<Char> {
        return ('a'..'z').toMutableSet()
    }
}
