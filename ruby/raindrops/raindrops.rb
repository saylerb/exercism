module BookKeeping
  VERSION = 3
end

class Raindrops
  def self.convert(number)
    raindrop_translator = { 3 => "Pling", 5 => "Plang", 7 => "Plong" }

    result = raindrop_translator.keys.each_with_object([]) do |factor, acc|
      acc << raindrop_translator[factor] if number % factor == 0
    end

    if result.empty?
      return number.to_s
    else
      return result.join
    end
  end
end
