module RunLengthEncoding
  def self.encode(input)
    current = ""
    count = 0
    result = ""

    input.chars.each.with_index do |char, index|
      if index == 0
        current = char
        count += 1
      elsif index == (input.length - 1)
        if char == input[index - 1]
          count += 1
          result << count.to_s if count > 1
          result << current
        else
          result << count.to_s if count > 1
          result << current
          result << char
        end
      elsif char == input[index - 1]
        count += 1
      else
        result << count.to_s if count > 1
        result << current
        count = 1
        current = char
      end
    end
    result
  end

  def self.decode(input)
    result = ""
    multiplier = 1

    input.chars.each.with_index do |char, index|
      if char.match(/[\d]/)
        if input[index - 1].match(/[\d]/)
          multiplier = multiplier * 10 + char.to_i
        else
          multiplier = char.to_i
        end
      else
        result << char * multiplier
        multiplier = 1
      end
    end
    result
  end
end

module BookKeeping
  VERSION = 2
end
