import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class DecimalToBinaryTest {
    @Test
    public void testItCanConvertAStringToBinaryString() {
        assertEquals("10", DecimalToBinary.convert(2));
    }

    @Test
    public void shouldConvertThreeToDecimal() {
        assertEquals("11", DecimalToBinary.convert(3));
    }

    @Test
    public void shouldConvertThirtyOneToBinary() {
        assertEquals("11111", DecimalToBinary.convert(31));
    }
}
