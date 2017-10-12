class SpaceAge {
    private double ageInSeconds;
    private final double EARTH_YEAR_IN_SECONDS = 31557600;
    private final double MERCURY_YEAR = 0.2408467;
    private final double VENUS_YEAR = 0.61519726;
    private final double MARS_YEAR = 1.8808158;
    private final double JUPITER_YEAR = 11.862615;
    private final double SATURN_YEAR = 29.447498;
    private final double URANUS_YEAR = 84.016846;
    private final double NEPTUNE_YEAR = 164.79132;

    SpaceAge(double seconds) {
        ageInSeconds = seconds;
    }

    double getSeconds() {
        return ageInSeconds;
    }

    double onEarth() {
        return ageInSeconds / EARTH_YEAR_IN_SECONDS;
    }

    double onMercury() {
        return ageInSeconds / (EARTH_YEAR_IN_SECONDS * MERCURY_YEAR);
    }

    double onVenus() {
        return ageInSeconds / (EARTH_YEAR_IN_SECONDS * VENUS_YEAR);
    }

    double onMars() {
        return ageInSeconds / (EARTH_YEAR_IN_SECONDS * MARS_YEAR);
    }

    double onJupiter() {
        return ageInSeconds / (EARTH_YEAR_IN_SECONDS * JUPITER_YEAR);
    }

    double onSaturn() {
        return ageInSeconds / (EARTH_YEAR_IN_SECONDS * SATURN_YEAR);
    }

    double onUranus() {
        return ageInSeconds / (EARTH_YEAR_IN_SECONDS * URANUS_YEAR);
    }

    double onNeptune() {
        return ageInSeconds / (EARTH_YEAR_IN_SECONDS * NEPTUNE_YEAR);
    }

}
