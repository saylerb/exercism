class Lasagna
{
    public int ExpectedMinutesInOven()
    {
        return 40;
    }

    public int RemainingMinutesInOven(int remainingMinutes)
    {
        return ExpectedMinutesInOven() - remainingMinutes;
    }

    public int ElapsedTimeInMinutes(int numberOfLayers, int minutesInOven)
    {
        return PreparationTimeInMinutes(numberOfLayers) + minutesInOven;
    }

    public int PreparationTimeInMinutes(int numberOfLayers)
    {
        return numberOfLayers * 2;
    }
}