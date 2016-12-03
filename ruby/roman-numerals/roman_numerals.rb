module BookKeeping
  VERSION = 2
end
class Integer
  def to_roman
    decimal_to_roman = { 1000 => "M", 900 => "CM", 500 => "D", 400 => "CD",
                         100 => "C", 90 => "XC", 50 => "L", 40 => "XL",
                         10 => "X", 9 => "IX", 5 => "V", 4 => "IV", 1 => "I"
                       }
    result = ""
    number_to_reduce = self
    decimals = decimal_to_roman.keys

    while number_to_reduce > 0
      stack = decimals.clone if stack.nil? || stack.empty?

      current = stack.shift

      if number_to_reduce >= current
        result += decimal_to_roman[current]
        number_to_reduce -= current
        stack = decimals.clone
      end
    end

    return result
  end
end
