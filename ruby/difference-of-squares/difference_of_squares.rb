module BookKeeping
  VERSION = 3
end

class Squares
  def initialize(number)
    @number = number
  end

  def square_of_sum
    (0..@number).reduce(:+) ** 2
  end

  def sum_of_squares
    (0..@number).reduce(0) do |acc, number|
      acc += number ** 2
    end
  end

  def difference
    square_of_sum - sum_of_squares
  end
end
