module Grains
  def self.square(square_number)
    unless square_number.between?(1, 64)
      raise ArgumentError, 'square number must be postive between 1 and 64'
    end

    return 2 ** (square_number - 1)
  end

  def self.total
    (1..64).reduce(0) do |sum, square_number|
      sum + square(square_number)
    end
  end
end

module BookKeeping
  VERSION = 1
end
