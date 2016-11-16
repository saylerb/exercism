module BookKeeping
  VERSION = 4
end

class Complement
  KEY = { G: 'C', C: 'G', T: 'A', A: 'U' }

  def self.of_dna(input)
    result = input.chars.reduce([]) do |acc, item|
      acc << KEY[item.to_sym]
    end.join

    if result.length == input.length
      result
    else
      ""
    end
  end
end
