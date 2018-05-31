import java.util.ArrayList;

class ArmstrongNumbers {

    boolean isArmstrongNumber(int numberToCheck) {
        int workingDigit = numberToCheck;

        ArrayList<Integer> listOfDigits = new ArrayList<>();

        while (workingDigit > 0) {
            listOfDigits.add(workingDigit % 10);
            workingDigit = workingDigit / 10;
        }

        int totalDigits = listOfDigits.size();

        int sum = listOfDigits
            .stream()
            .reduce(0, (a, b) -> a + (int) Math.pow(b, totalDigits));

        return sum == numberToCheck;
    }

}
