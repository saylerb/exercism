module BookKeeping
  VERSION = 2
end

class Pangram
  def self.is_pangram?(str)
    alpha = ("a".."z").to_a

    total = alpha.reduce(0) do |acc, letter|
      acc += 1 if str.downcase.include?(letter)
      acc
    end

    total >= 26
  end
end
