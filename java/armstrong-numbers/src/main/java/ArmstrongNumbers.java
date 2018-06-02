import java.util.ArrayList;
import java.util.List;

class ArmstrongNumbers {

    boolean isArmstrongNumber(int numberToCheck) {
        List<Integer> listOfDigits = generateListOfDigits(numberToCheck);

        return sumArmstrongDigits(listOfDigits) == numberToCheck;
    }

    private List<Integer> generateListOfDigits(int numberToCheck) {
        int workingDigit = numberToCheck;

        ArrayList<Integer> listOfDigits = new ArrayList<>();

        while (workingDigit > 0) {
            listOfDigits.add(workingDigit % 10);
            workingDigit = workingDigit / 10;
        }

        return listOfDigits;
    }

    private int sumArmstrongDigits(List<Integer> listOfDigits) {
        return listOfDigits
                .stream()
                .reduce(0, (a, b) -> a + (int) Math.pow(b, listOfDigits.size()));
    }

}
