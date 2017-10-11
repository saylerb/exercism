public class Hamming {
    private String leftStrand;
    private String rightStrand;

    Hamming(String leftStrand, String rightStrand) {
        if (leftStrand.length() != rightStrand.length()) {
            throw new IllegalArgumentException("leftStrand and rightStrand must be of equal length.");
        } else {
            this.leftStrand = leftStrand;
            this.rightStrand = rightStrand;
        }
    }

    int getHammingDistance() {
        int count = 0;
        for (int index = 0; index < leftStrand.length(); index++) {
            if (leftStrand.charAt(index) != rightStrand.charAt(index)) {
                count += 1;
            }
        }
        return count;
    }
}
