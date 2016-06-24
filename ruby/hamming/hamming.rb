
class Hamming
  VERSION = 1

  def self.compute(left, right)
    if left.length != right.length
      raise ArgumentError
    end
    count = 0
    left.chars.each_index do |index|
      count += 1 unless left[index] == right[index]
    end
    count
  end
end

