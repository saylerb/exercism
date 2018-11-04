import static org.junit.Assert.assertEquals;

import org.junit.Before;
import org.junit.Test;

public class DecimalToBinaryTest {

    private DecimalToBinary decimalToBinary;

    @Before
    public void setup() {
        decimalToBinary = new DecimalToBinary();
    }

    @Test
    public void testItCanConvertAStringToBinaryString() {
        assertEquals("10", decimalToBinary.convert(2));
    }

    @Test
    public void shouldConvertThreeToDecimal() {
        assertEquals("11", decimalToBinary.convert(3));
    }

    @Test
    public void shouldConvertThirtyOneToBinary() {
        assertEquals("11111", decimalToBinary.convert(31));
    }
}
